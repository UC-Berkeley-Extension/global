
const app = angular.module('pv2App', ['ngAria', 'ngSanitize', 'ngRoute']);

function getProgramNodeId() {
  switch (document.title.substring(0, document.title.indexOf(" |"))) { // TODO: REMOVE THIS JUNK
    case 'Art and Design':
      return '54';
    case 'Behavioral Health Sciences':
      return '55';
    case 'Business':
      return '56';
    case 'Construction and Sustainability':
      return '57';
    case 'Education':
      return '58';
    case 'Humanities and Languages':
      return '59';
    case 'Sciences, Mathematics and Biotechnology':
      return '60';
    case 'Technology and Information Management':
      return '61';
    case 'Writing, Editing and Technical Communication':
      return '62';
    default:
      return '265';
  }
}
function getProductNodeId(value) {
  if (value && value !== 'all') return value;
  const NODE_IDENTIFIER = document.title.substring(0, document.title.indexOf(" |")); // TODO: REMOVE THIS JUNK
  switch (NODE_IDENTIFIER) {
    case 'Data Science Full-Time Certificates':
      return '1788';
    case 'Business Administration and Management Full-Time Certificates':
      return '1789';
    case 'International Business Development Full-Time Certificates':
      return '1790';
    case 'Entrepreneurship and Startup Management Full-Time Certificates':
      return '1791';
    case 'Project Management Full-Time Certificates':
      return '1817';
    case 'Digital Marketing Management Full-Time Certificates':
      return '1785';
    case 'UX and UI':
      return '1786';
    case 'Corporate Finance and Financial Analytics Full-Time Certificates':
      return '1787';
    case 'Marketing and Product Management Full-Time Certificates':
      return '1816';
    case 'Berkeley Haas Global Access Program Full-Time Certificates':
      return '1373';
    case 'Berkeley Legal Studies Global Access Program Full-Time Certificates':
      return '1532';
    case 'Professional Diploma Program':
      return '1367';
    default:
      return 'all';
  }
}
app.factory('VoicesFactory', ['$http', ($http) => {
  const vff = {};
  const url = 'https://voices.berkeley.edu'; // LIVE
  // const url = 'https://dev-voices-blog.pantheon.berkeley.edu'; // TEST 
  vff.getBlogs = (attrs) => $http
    .get(`${url}/${vff.getVoicesUrl(attrs)}`)
    .then((response) => response.data)
    .catch((err) => {
      console.error('The error in voicesAngular is:');
      console.error(err);
    });
  vff.blogFeedFunction = (area = 'all', cert = 'all', tag = 'all', post = 'all', feed = 'post') => {
    switch (feed) {
      case 'info':
        return `info-sessions/json/cert/${getProductNodeId(cert)}/area/${getProgramNodeId(area)}`;
      default:
        return `international-feed/post/${post}/tag/${tag}/program/${getProductNodeId(cert)}`;
        return {};
    }
  };
  vff.getVoicesUrl = (attrs) => {
    if (!attrs) return '';
    const programArea = attrs.area;
    vff.voicesUrl = vff.blogFeedFunction(programArea, attrs.cert, attrs.tag, attrs.post, attrs.feed);
    console.log(`http://voices.berkeley.edu/${vff.voicesUrl}`);

    return vff.voicesUrl;
  };

  return vff;
}]);
/* *
 * Function can be plugged into angular controllers to call and manage voices feeds
 * @return {Object} [results from Voices factory calls]
 */
app.controller('VoicesController', ['$scope', '$element', '$attrs', 'VoicesFactory', ($scope, $element, $attrs, VoicesFactory) => {
  const vcc = {};
  vcc.attrs = document.querySelector("[data-voices-list]").dataset;
  console.log(attrs);
  
  VoicesFactory.getBlogs(attrs)
    .then((blogs) => {
      vcc.blogs = blogs;
      if (vcc.attrs.limit) (vcc.blogs.nodes || vcc.blogs.sessions).splice(vcc.attrs.limit);
    })
    .catch((err) => {
      console.error('The error in VoicesController is:');
      console.error(err);
    });

  // vcc.lazyLoadImages = lazyLoadImages;
  return vcc;
}]);

/* *
 * Directive to build blog posts list based on parameters set in the directive element.
 * limit (Int): sets amount of blog posts to show
 * area (String): Academic Areas
 * cert (Int): Promoted Program/Cert
 * tag (Int): Tag
 * post (Int): Specific post
 * @return {Object} [options for building the directive. See angularJS documentation for details]
 */
// app.directive('voicesPostsDirective', () => {
//   console.log('directive running');
//   return {
//     controller: VoicesController,
//     controllerAs: 'voices',
//     restrict: 'EA',
//     templateUrl: 'voices_list.template.html',
//     scope: {
//       limit: '@',
//       area: '@',
//       cert: '@',
//       tag: '@',
//       post: '@',
//     },
//     bindToController: true,
//     replace: true,
//   };
// });

angular.bootstrap(document.querySelector('body'), ['pv2App']);
