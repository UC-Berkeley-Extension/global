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
app.factory('programFactory', ['$http', ($http) => {
  const pf = {};
  pf.program = removePoundFromKeys(drupalSettings.program);
  return pf;
}]);

app.controller('ProgramController',  ['$scope', 'programFactory', ($scope, programFactory) => {
  const pc = {};
  const pf = programFactory;
  $scope.program = pf.program;
  console.log($scope.program);
  return pc;
}]);
