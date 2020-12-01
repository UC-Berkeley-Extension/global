/* global writeDebug,angular,app,pageTitle,programFilters,
encodeFilter,encodeCamelCase,encodeName */

console.log("hello spocc");
    // src: `${drupalSettings.info_sessions_advising.imagePath}mariam-rahimi.png`,

/* * Useful functions * */
/**
 * Function checks if all the keys on an object that aren't functions or equal to 'all' are false
 * @param  {Object} object   [The object to check]
 * @return {boolean}         [Does the object only contain true keys?]
 */
const allTrue = (object) => {
  const count = [0, 0];
  Object.keys(object).forEach((key) => {
    if (key !== 'all' && typeof object[key] !== 'function') {
      count[0] += 1;
      if (object[key] === true || object[key].filter) count[1] += 1;
    }
  });
  return (count[0] === count[1]) || (count[1] === 0);
};


app.controller('ProductsController', ['$scope', 'productsFactory', 'filterVariablesFactory', '$sce', '$location', '$window', ($scope, productsFactory, filterVariablesFactory, $sce, $location, $window) => {
  const pc = {};
  const fvf = filterVariablesFactory;

  $scope.productsFactory = productsFactory;
  // $scope.accordionListeners = accordionListeners;
  pc.specified = fvf.specified;
  pc.pageType = drupalSettings.nodeType;
  pc.pageTitle = drupalSettings.nodeTitle;
  pc.international = window.location.pathname.includes('/international');
  $scope.programArea = false;
  pc.filterVariables = fvf.filterVariables;
  pc.featuredMinimum = 16;

  //* TEMPLATES *//
  const RELATIVEPATH = drupalSettings.spocc.templatesPath;
  pc.certListTemplate = `${RELATIVEPATH}newCertListTemplate.html`;
  pc.certBlocksTemplate = `${RELATIVEPATH}newCertBlocksTemplate.html`;
  pc.academicAreaTemplate = `${RELATIVEPATH}newAcademicAreaTemplate.html`;
  pc.spoccTabsTemplate = `${RELATIVEPATH}spoccTabsTemplate.html`;

  $scope.updateUri = productsFactory.updateUri;
  $scope.updateBinaryUri = productsFactory.updateBinaryUri;

  /**
   * Use when toggles from Value to false with a switch button, but false value must be registered
   * as null (e.g. goes from blank to 'featured=false', back to blank, defaultExcluder is
   * 'featured=true' because the default is to only show featured)
   * @param  {Boolean} defaultExcluder  A falsey check on the value that should register as null
   * @param  {String} key               The key to edit/add
   * @param  {String} nonDefaultValue   The value to assign when the null value is not true
   * @return {none}
   */
  $scope.updateBinaryUriSwitch = (key, defaultExcluder, nonDefaultValue) => {
    if (defaultExcluder) $location.search(key, nonDefaultValue);
    else $location.search(key, null);

    if (key === 'availability') pc.filterVariables[key] = !pc.filterVariables[key];
    if (key === 'featured') {
      pc.filterVariables[key].programs.filter = !pc.filterVariables[key].programs.filter;
    }
    $window.history.pushState(null, 'productsFilter', $location.absUrl());
  };

  /**
   * Use when checkboxes allow for multiple values to exist at once, and all is default
   * (e.g. 'colors=Blue,Violet,Pink', but not 'Red'. If Red is checked, 'all' kicks in and
   * removes the query)
   * @param  {Object} filters  Object containing the filters that determine attribute list
   * @param  {String} queryKey The key to edit/add
   * @return {none}
   */
  $scope.updateListUri = (queryKey) => {
    const filterObject = pc.filterVariables[queryKey];
    filterObject.all = allTrue(filterObject);
    if (filterObject.all) {
      $location.search(queryKey, null);
    } else {
      let concatOptions = '';
      Object.keys(filterObject).forEach((option) => {
        if (typeof filterObject[option] !== 'function') {
          concatOptions += filterObject[option] === true || filterObject[option].filter ? `${option},` : '';
        }
      });
      $location.search(queryKey, concatOptions.slice(0, -1));
    }
    $window.history.pushState(null, 'productsFilter', $location.absUrl());
  };

  $scope.updateCertList = (uriCallback, queryKey, value) => {
    productsFactory.updateCertList(uriCallback, queryKey, value);
    pc.certList = $scope.certs.filter(programFilters, $scope);
  };

  //*  LOADING  *//
  pc.loaded = {
    certs: false,
  };
  pc.loadingIndicator = `${RELATIVEPATH}loading-svg.html`;

  //*  CERTS  *//
  $scope.certs = [];
  pc.certList = [];
  productsFactory.getDataSwitch('all', pc.pageTitle).then((data) => {
    $scope.certs = data;
    if (data.length > pc.featuredMinimum) {
      pc.filterVariables.featured.programs.show = true;
      // pc.filterVariables.featured.programs.filter = $location.search().featured !== 'false';
    }
    pc.certList = $scope.certs.filter(programFilters, $scope);
    pc.loaded.certs = true;
    // Populate filterVariable counts and fields with values from the programs
    // This loop populates: academicAreas, tags (the little colored boxes next
    // to the program filters), category (partTime/fullTime filter), and online.
    $scope.certs.forEach((program) => {
      // const { tags } = pc.filterVariables;
      const onlineProgram = program.deliveryMethod === 'Online' || program.deliveryMethod === 'Classroom or Online';
      if (program.category) {
        const partTime = ['Part-Time Certificate', 'Teaching Credential'];
        // fullTime isn't needed at the moment since it's the only other option if not partTime.
        // Leaving it in for documentation on what the else refers to.
        // const fullTime = ['Full-Time Certificate'];
        // const academic = ['Full-Time Academic Program'];
        const fullTimePBP = ['Accelerated Health Sciences Program'];
        const PBPBool = program.name.includes(fullTimePBP);
        // Adds the category boxes next to the filter
        if (partTime.includes(program.category) || (program.category === 'Post-Baccalaureate Program' && !PBPBool)) {
          pc.filterVariables.category.partTime.count += 1;
          // if (!tags.partTime.includes(categoryClass)) tags.partTime.push(categoryClass);
        } else if (program.category === 'Full-Time Certificate' || (program.category === 'Post-Baccalaureate Program' && PBPBool)) {
          pc.filterVariables.category.fullTime.count += 1;
          // if (!tags.fullTime.includes(categoryClass)) tags.fullTime.push(categoryClass);
        } else if (program.category === 'Full-Time Academic Program') {
          pc.filterVariables.category.academic.count += 1;
          // if (!tags.academic.includes(categoryClass)) tags.academic.push(categoryClass);
        }

        if (program.programArea.includes('International')) {
          if (program.category === 'Full-Time Certificate') {
            pc.filterVariables.international.professional.count += 1;
            // if (!tags.professional.includes(categoryClass))
            // tags.professional.push(categoryClass);
          }
          if (program.category === 'Full-Time Academic Program') {
            pc.filterVariables.international.academic.count += 1;
            // if (!tags.academic.includes(categoryClass)) tags.academic.push(categoryClass);
          }
          if (program.category === 'High School Program' && program.deliveryMethod !== 'Live Online') {
            pc.filterVariables.international.highSchool.count += 1;
            // if (!tags.highSchool.includes(categoryClass)) tags.highSchool.push(categoryClass);
          }
        }
      }

      if (program.deliveryMethod) {
        if (onlineProgram) {
          pc.filterVariables.online.count += 1;
          // if (!tags.online.includes(categoryClass)) tags.online.push(categoryClass);
        }
      }
      // FLAG: COVID if (program.programArea && (!pc.onlineOnly
      // || (pc.onlineOnly && onlineProgram)) && program.programArea !== 'International') {
      if (program.programArea && program.programArea !== 'International') {
        pc.filterVariables.academicAreas[encodeFilter(program.programArea)].count.programs += 1;
      }
    });
  }).catch((error) => { console.error(error); });

  $scope.decodeHTML = (stringToDecode) => $sce.trustAsHtml(stringToDecode);

  return pc;
}]);
