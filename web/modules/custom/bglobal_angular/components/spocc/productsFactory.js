/* global writeDebug,writeError,angular,app,pageType,
accordionListeners */

app.factory('productsFactory', ['$http', '$q', 'filterVariablesFactory', '$location', '$window', ($http, $q, filterVariablesFactory, $location, $window) => {
  const pf = {};
  const fvf = filterVariablesFactory;
  pf.filterVariables = fvf.filterVariables;
  // Not sure if the cors anywhere proxy is needed here
  pf.urlBuilder = (instance) => `https://cors-anywhere.herokuapp.com/https://${instance}-berkeley-web-services.pantheon.berkeley.edu/programs/`;
  pf.errorCount = 0;
  pf.getDataSwitch = (type, pageTitle) => {
    if (pf[type]) {
      const deferred = $q.defer();
      deferred.resolve(pf[type]);
      return deferred.promise;
    }
    // return pf.getServerData(type, pageTitle, 'dev'); // Testing
    return pf.getServerData(type, pageTitle);
  };

  pf.getServerData = (type, pageTitle, instance = 'live') => {
    let certsJsonUrl = pf.urlBuilder(instance);
    certsJsonUrl = `${certsJsonUrl}?_format=json`;
    // writeDebug(`Instance: ${instance}, ${certsJsonUrl}`);
    return $http
      .get(certsJsonUrl)
      .then((response) => {
        // writeDebug(response);
        if (document.body.id === 'internationalHome') {
          response.data.push({
            name: 'College Foundations Program',
            programArea: 'International',
            deliveryMethod: 'Classroom',
            featured: 'false',
            objectId: '12345678',
            url: 'https://global.berkeley.edu/high-school',
            category: 'High School Program',
          });
        }
        pf[type] = response.data;
        return response.data;
      })
      .catch((response) => {
        // writeError(`Error fetching: ${type} on ${pageTitle}, from ${instance}`);
        writeError(response);
        if (pf.errorCount <= 1) return pf.getServerData(type, pageTitle, 'test');
        return [];
      });
  };

  pf.certBorderClass = (type) => {
    const border = {
      'Part-Time Certificate': 'certs-pt-border',
      'Post-Baccalaureate Program': 'post-bac-border',
      'Teaching Credential': 'credentials-border',
      'Full-Time Academic Program': 'gap-border',
      'Full-Time Certificate': 'pdp-border',
      'High School Program': 'hs-border',
      'Boot Camp': 'bc-border',
    };
    return border[type] || 'gap-border';
  };

  pf.imageStyle = (catStringToEncode, prgStringToEncode) => `url('https://extension.berkeley.edu/images/programs/thumbnails/${pf.encodeImagePath(catStringToEncode)}_${pf.encodeImagePath(prgStringToEncode)}.jpg')`;

  // Used in newCertBlocksTemplate.html to assign a class to load the programs' images
  pf.encodeImagePath = (stringToEncode) => stringToEncode.replace(/ |\/|\u2013|\u2014/g, '-').replace(/[()]|,/g, '').toLowerCase();
  pf.decodeURLs = (urlTodecode) => urlTodecode.replace(/&amp;/g, '&');
  pf.encodeTitles = (stringToEncode) => stringToEncode.replace(/ /g, '_').replace(/[()]/g, '').replace(/\u2013|\u2014/g, '-').toLowerCase();

  pf.tabsTasks = (uriCallback, queryKey, value) => {
    let passThroughValue = value;
    const certsSkeleton = document.getElementById('sklCerts');
    if (certsSkeleton) certsSkeleton.style.display = 'block';
    passThroughValue = null;
    uriCallback(queryKey, passThroughValue);
  };

  // filtering programs by academic area
  pf.updateCertList = (uriCallback, queryKey, value) => {
    if (!value) uriCallback(queryKey);
    if (queryKey === 'featured') uriCallback(queryKey, !fvf.filterVariables.featured.programs.filter, value);
    if (queryKey === 'availability') uriCallback(queryKey, fvf.filterVariables.availability, value);
    if (queryKey === 'programStream') pf.filterProcessing(uriCallback, queryKey, value);
    if (queryKey === 'academicArea') pf.filterProcessing(uriCallback, queryKey, value);
    if (queryKey === 'tab') pf.tabsTasks(uriCallback, queryKey, value);
    // setTimeout(() => { accordionListeners(); }, 0);
    return true;
  };

  // Documentation for Location: https://docs.angularjs.org/api/ng/service/$location#search
  /**
   * Use when the URI parameter is set directly
   * (e.g. goes from 'color=Pink' to 'color=Blue')
   * @param  {String} queryKey   The key to edit/add
   * @param  {String} queryValue The value to assign the key, null for removing the key
   * @return {none}
   */
  pf.updateUri = (queryKey, queryValue) => {
    $location.search(queryKey, queryValue);
    $window.history.pushState(null, 'productsFilter', $location.absUrl());
  };

  /**
   * Use when toggles from Value to false, but false value must be registered as null
   * (e.g. goes from blank to 'featured=false', back to blank, defaultExcluder is 'featured=true'
   * because the default is to only show featured)
   * @param  {Boolean} defaultExcluder A falsey check on the value that should register as null
   * @param  {String} queryKey        The key to edit/add
   * @param  {String} nonDefaultValue The value to assign when the null value is not true
   * @return {none}
   */
  pf.updateBinaryUri = (queryKey, defaultExcluder, nonDefaultValue) => {
    if (defaultExcluder) $location.search(queryKey, nonDefaultValue);
    else $location.search(queryKey, null);
    $window.history.pushState(null, 'productsFilter', $location.absUrl());
  };

  pf.filterProcessing = (uriCallback, queryKey, value) => {
    if ($location.search()[queryKey]) fvf.filterVariables[`${queryKey}s`][$location.search()[queryKey]].filter = false;
    if (queryKey === 'academicArea' && $location.search().programStream) {
      fvf.filterVariables.programStreams[$location.search().programStream].filter = false;
      fvf.filterVariables.programStreams.all = true;
      pf.updateUri('programStream', null);
    }
    if (queryKey === 'academicArea') {
      fvf.filterVariables.featured.programs.filter = false;
      pf.updateBinaryUri('featured', false);
    }
    fvf.specified[`${queryKey}`] = value;
    // if (value === 'all') pf[uriCallback](queryKey, null);
    if (value === 'all') uriCallback(queryKey, null);
    else {
      fvf.filterVariables[`${queryKey}s`].all = false;
      // pf[uriCallback](queryKey, value);
      uriCallback(queryKey, value);
    }
  };
  return pf;
}]);

app.factory('$exceptionHandler', ['$log', ($log) => function myExceptionHandler(exception, cause) {
  // if (window.location.search.indexOf('reloadAttempt') < 0) {
  //   var reloadString = window.location.search.length === 0 ? "?" : "&";
  //   window.location.href = window.location.href + reloadString + "reloadAttempt=1";
  // } else {
  //   if (document.querySelector('.angularError') ) document.querySelector('.angularError')
  //   .innerHTML = 'We’re having trouble loading this page. <a href='#' onclick='location
  //   .reload(true)'>Please reload the page</a>. If the error persists please <a href='
  //   #contact-card' data-toggle='collapse'>contact us</a>.';
  $log.error(exception, cause);
  // }
  // return "purple";
}]);