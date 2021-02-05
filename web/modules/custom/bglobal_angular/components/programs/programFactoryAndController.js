
app.factory('programFactory', ['$http', ($http) => {
  const pf = {};
  pf.program = drupalSettings.program;
  console.log(pc.program);
  return pf;
}]);

app.controller('ProgramController',  ['$scope', 'productsFactory', ($scope, productsFactory) => {
  const pc = {};
  pc.program = pf.program;
  console.log(pc.program);
  return pc;
}]);

