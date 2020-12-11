/* global writeDebug,angular,app,encodeFilter,pageType  */
/* eslint no-unused-vars: 0 */
function isFeatured(value, type, filters) {
  return !filters.featured[type].filter
    || (filters.featured[type].filter && (value.featured === 'Featured' || value.featured === 'true'));
}

function academicAreaFilter(value, filters) { // value = course, filters = pc.filterVariables
  if (filters.academicAreas.all || filters.tab === 'study-abroad-programs') return true;
  if (value.programArea || (value.academicAreas && value.academicAreas.length === 1)) {
    return (filters.academicAreas[encodeFilter((value.programArea || value.academicAreas[0].title || ''))] || {}).filter;
  }
  if (value.academicAreas && value.academicAreas.length > 1) {
    return filters.academicAreas.all || value.academicAreas
      .some((areaObj) => filters.academicAreas[encodeFilter(areaObj.title)].filter);
  }
  return true;
}

function categoryFilter(value, filters) {
  const partTime = ['Part-Time Certificate', 'Teaching Credential'];
  const fullTimePBP = ['Accelerated Health Sciences Program'];
  const PBPBool = value.name.includes(fullTimePBP);
  if (filters.category.all) return true;
  return (filters.category.partTime.filter && (partTime.includes(value.category) || (value.category === 'Post-Baccalaureate Program' && !PBPBool)))
    || (filters.category.fullTime.filter && (value.category === 'Full-Time Certificate' || (value.category === 'Post-Baccalaureate Program' && PBPBool)))
    || (filters.category.academic.filter && value.category === 'Full-Time Academic Program');
}

function internationalFilter(value, filters) {
  if (filters.tab === 'study-abroad-programs') {
    if (value.deliveryMethod === 'Live Online') return false;
    if (!value.programArea.includes('International')) return false;
    if (filters.international.all) return true;
    return (filters.international.academic.filter && value.category === 'Full-Time Academic Program')
      || (filters.international.professional.filter && value.category === 'Full-Time Certificate')
      || (filters.international.highSchool.filter && value.category === 'High School Program');
  }
  return true;
}

function isOnline(value, filters) {
  /* FLAG: COVID
  return (!filters.online.filter && filters.tab !== 'online-programs')
    || filters.tab === 'study-abroad-programs'
    || ((filters.online.filter || filters.tab === 'online-programs')
    && (value.deliveryMethod === 'Online' || value.deliveryMethod === 'Classroom or Online'));
  */
  // FLAG: COVID
  return filters.tab !== 'online-programs'
    || (filters.tab === 'online-programs'
      && value.category !== 'Full-Time Academic Program'
      && (value.category !== 'Full-Time Certificate' || value.deliveryMethod === 'Classroom and/or Online'));
}

function programFilters(value, index) {
  const fv = this.filterVariables || this.productList.filterVariables;
  return isFeatured(value, 'programs', fv)
    && academicAreaFilter(value, fv)
    && categoryFilter(value, fv)
    && internationalFilter(value, fv)
    && isOnline(value, fv);
}

function locationFilter(value, filters) {
  // writeDebug(value.locations);
  return filters.all
    || (filters.online && (value.locations.includes('Online') || value.locations.includes('Live Online')))
    || (filters.sf && value.locations.includes('San Francisco'))
    || (filters.berkeley && (value.locations.includes('Berkeley') || value.locations.includes('Berkeley Campus')))
    || (filters.belmont && value.locations.includes('Belmont'))
    || (filters.other && !(value.locations.includes('Belmont')
      || value.locations.includes('Online')
      || value.locations.includes('San Francisco')
      || value.locations.includes('Berkeley Campus')
      || value.locations.includes('Berkeley')
      || value.locations.includes('Belmont')));
}

function formatsFilter(value, filters) {
  return filters.all
    || (filters.liveOnline.filter && value.formats.includes('Live Online'))
    || (filters.onlineFixedDate.filter && value.formats.includes('Online, Fixed Date'))
    || (filters.onlineStartAnytime.filter && value.formats.includes('Online, Start Anytime'))
    || (filters.classroom.filter && value.formats.includes('Classroom'));
}

function availabilityFilter(value, filters) {
  return !filters
    || ((value.rollUpAvailabilityStatus
      || value.rollUpAvailability
      || value.availability) ? (value.rollUpAvailabilityStatus
        || value.rollUpAvailability
        || value.availability) : '')
      .toLowerCase() === 'available';
}

function programStreamFilter(value, filters) {
  const areaObj = Object.values(filters.academicAreas).find((obj) => obj.filter === true);
  if (filters.programStreams.all) {
    // writeDebug('all');
    return true;
  }
  if (value.programStreams && value.programStreams.length === 1) {
    return (filters.programStreams[(value.programStreams[0].title || '')] || {}).filter;
  }
  if (value.programStreams.length > 1) {
    // writeDebug('filters.programStreams', filters.programStreams);
    return value.programStreams.map((streamObj) => {
      // writeDebug('streamObj.code', streamObj);
      if (streamObj.code) {
        // writeDebug('streamObj', streamObj);
        return filters.programStreams.all || (filters.programStreams[streamObj.title] || {}).filter;
      }
      return false;
    }).some((filterBoolean) => filterBoolean);
  }
  // writeDebug(value, filters);
  // console.error('academicAreaFilter is not working');
  return false;
}

function courseFilters(value) {
  const fv = this.filterVariables || this.productList.filterVariables;
  return isFeatured(value, 'courses', fv)
    && locationFilter(value, fv.locations)
    && formatsFilter(value, fv.formats)
    && availabilityFilter(value, fv.availability)
    && academicAreaFilter(value, fv)
    && programStreamFilter(value, fv);
}

app.filter('courseFilters', () => (input, scope) => input.filter(courseFilters, scope));

function isInternational(value, filters) {
  return !filters.international || (filters.international && (value.programArea === 'International'));
}

app.filter('toArray', () => (obj) => {
  // writeDebug(obj);
  if (Array.isArray(obj)) return obj;
  // writeDebug("object is not an array")
  const result = [];
  angular.forEach(obj, (val, key) => {
    result.push(obj);
  });
  return result;
});
