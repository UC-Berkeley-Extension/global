const removePoundFromKeys = (obj) => {
  const newObj = {};
  Object.entries(obj).forEach((pair) => {
    let key = pair[0];
    let value = pair[1]
      if (key[0] == '#') key = key.substr(1, key.length-1);
      newObj[key] = value;
  });
  return newObj;
}

// PROGRAMS
app.factory('programFactory', ['$http', ($http) => {
  const pf = {};
  pf.program = removePoundFromKeys(drupalSettings.program);
  return pf;
}]);

app.controller('ProgramController',  ['$scope', 'programFactory', ($scope, programFactory) => {
  const pc = {};
  const pf = programFactory;
  $scope.program = pf.program;
  return pc;
}]);

// COURSES
app.factory('coursesFactory', ['$http', ($http) => {
  const cf = {};
  const program = removePoundFromKeys(drupalSettings.program);
  cf.urlBuilder = (instance) => `https://${instance}-berkeley-web-services.pantheon.berkeley.edu/courses/object/`;
  cf.getCourses = (cert, instance = 'live') => {
    let courseJsonUrl = `${cf.urlBuilder(instance)}${program.certificates[cert].courses}?_format=json`;
    return $http
      .get(courseJsonUrl)
      .then((response) => {
        return response.data;
      })
      .catch((response) => {
        if (cf.errorCount <= 1) return cf.getServerData(type, 'test');
        return [];
      });
  };
  return cf;
}]);

app.controller('CoursesController',  ['$scope', 'coursesFactory', ($scope, coursesFactory) => {
  const cc = {};
  const cf = coursesFactory;
  cf.getCourses($scope.cert)
    .then((courses) => {
      $scope.courses = courses;
    })
    .catch((err) => {
      console.error('The error in CoursesController is:');
      console.error(err);
    });
  return cc;
}]);

app.directive('certificateCourses', () => {
  return {
    restrict: 'A',
    scope: {
      'cert': '@',
    },
    template: `<ul><li data-ng-repeat="course in courses"><a href="https://extension.berkeley.edu/search/publicCourseSearchDetails.do?method=load&courseId={{course.objectId}}&showSections=false">{{ course.name }}</a> | {{ course.number }}</p></li>
      <li data-ng-if="cert == 0"><a href="https://voices.berkeley.edu/international/preparing-students-next-step-their-careers" tab="_blank" rel="noreferrer noopener">Career Development Leadership Skills</a> | BUS ADM 205 </li>
      <li data-ng-if="cert == 1"><a href="https://voices.berkeley.edu/international/preparing-students-next-step-their-careers" tab="_blank" rel="noreferrer noopener">Career Development Fundamentals</a> | BUS ADM 2054 </li>
    </ul>`,
    controller: 'CoursesController',
  };
});
