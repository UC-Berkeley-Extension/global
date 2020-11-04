// console.log("hello voices-list");

/* *
 * Function can be plugged into angular controllers to call and manage voices feeds
 * @return {Object} [results from Voices factory calls]
 */
app.controller('VoicesListController', ['$scope', '$element', 'VoicesFactory', ($scope, $element, VoicesFactory) => {
  const vcc = {};
  vcc.attrs = document.querySelector("[data-voices-list]").dataset;
  
  VoicesFactory.getBlogs(vcc.attrs)
    .then((blogs) => {
      vcc.blogs = blogs;
      if (vcc.attrs.limit) vcc.blogs.nodes.splice(vcc.attrs.limit);
    })
    .catch((err) => {
      console.error('The error in VoicesListController is:');
      console.error(err);
    });

  return vcc;
}]);

