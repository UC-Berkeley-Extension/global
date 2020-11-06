// console.log("hello voices-spotlight");
/* *
 * Function can be plugged into angular controllers to call and manage voices feeds
 * @return {Object} [results from Voices factory calls]
 */
app.controller('VoicesSpotlightController', ['$scope', '$element', 'VoicesFactory', ($scope, $element, VoicesFactory) => {
  const vcc = {};
  vcc.attrs = document.querySelector("[data-voices-spotlight]").dataset;
  vcc.attrs.feed = "spotlight";
  
  VoicesFactory.getBlogs(vcc.attrs)
    .then((data) => {
      vcc.blog = data.nodes[0].post;
    })
    .catch((err) => {
      console.error('The error in VoicesSpotlightController is:');
      console.error(err);
    });

  return vcc;
}]);
