// console.log("hello voices-advising");

/* *
 * Function can be plugged into angular controllers to call and manage voices feeds
 * @return {Object} [results from Voices factory calls]
 */
app.controller('VoicesInfoAdvisingController', ['$scope', '$element', 'VoicesFactory', ($scope, $element, VoicesFactory) => {
  const vcc = {};
  vcc.attrs = document.querySelector("[data-info-sessions-advising]").dataset;
  vcc.attrs.feed = "info";
  VoicesFactory.getBlogs(vcc.attrs)
    .then((data) => {
      vcc.session = data.sessions.splice(1)[0];
      vcc.view = data.view;
    })
    .catch((err) => {
      console.error('The error in VoicesInfoAdvisingController is:');
      console.error(err);
    });

  return vcc;
}]);

