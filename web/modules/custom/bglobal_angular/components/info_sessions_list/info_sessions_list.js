// console.log("hello voices-list");

/* *
 * Function can be plugged into angular controllers to call and manage voices feeds
 * @return {Object} [results from Voices factory calls]
 */
app.controller('VoicesInfoListController', ['$scope', '$element', 'VoicesFactory', ($scope, $element, VoicesFactory) => {
  const vcc = {};
  function parseMonthDay(obj) {
    const sessions = obj;
    for (let i in sessions) {
      let sessionDate = sessions[i].date;
      sessions[i].jsDate = new Date(sessionDate.substr(0, sessionDate.indexOf(" - ")));
    }
    return sessions;
  }
  vcc.attrs = document.querySelector("[data-info-sessions-list]").dataset;
  vcc.attrs.feed = "info";
  VoicesFactory.getBlogs(vcc.attrs)
    .then((data) => {
      vcc.sessions = parseMonthDay(data.sessions);
      vcc.view = data.view;
      console.log(data);
      console.log(vcc.sessions);

      if (vcc.attrs.limit) vcc.sessions.splice(vcc.attrs.limit);
    })
    .catch((err) => {
      console.error('The error in VoicesInfoListController is:');
      console.error(err);
    });

  return vcc;
}]);

