<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ taglib uri="/WEB-INF/struts-bean.tld" prefix="bean" %>
<%@ include file="/restricted/constants.jsp" %>

<c:if test="${international == ''}">
	<c:set var="international" value="true" scope="session"/>
</c:if>
<%-- <%! int intHeaderFlag = 0; %><script>console.log("int-headerBanner <%=intHeaderFlag%>");</script><% intHeaderFlag++; %> #searchbar-collapse,#secondary-menu--%>

<!-- START GLOBAL NAVIGATION -->
<div class="grid-container grid-col-1 header-cal" id="header-intl"> 
  <div class="navbar">
    <!-- put toggle here for better mobile display -->
    <button type="button" class="navbar-mobile-toggle" data-toggle="collapse" data-target=".mobile-collapse" aria-expanded="false" aria-haspopup="true">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <!-- this contains the logo and site name-->
    <div id="secondary-nav" class="secondary-navbar mobile-collapse collapse">
      <ul id="secondary-menu" class="secondary-menu nav" aria-label="secondary navigation">
        <li class="secondary-menu-link leaf menu-link-agents"><a href="/international/agents" title="Agents" >Agents</a></li>
        <li class="secondary-menu-link leaf menu-link-partners"><a href="/international/academic-partners" title="Academic Partners">Partners</a></li>
        <jsp:include page="/custom/common/secondary-nav-login.jsp" />
      </ul>
    <!-- cart -->
      <div class="leaf menu-link-cart">
        <div class="header1Items" id="cartDivContainer">
          <jsp:include page="/custom/utilityTiles/cartInfo.jsp"/>
        </div>
      </div>
      <!-- search form -->
      <div id="searchbar-collapse" class="navbar_search-form mobile-collapse">
        <jsp:include page="/custom/utilityTiles/publicSiteQuickSearchWrapper.jsp"/>
      </div>
    </div>
    <!-- primary navbar -->
    <div class="primary-navbar" id="primary-navbar">
      <!-- brand -->
	    <div class="navbar-brand">
	      <div class="site-name-and-slogan">
	      	<a href="/international">
		        <div class="wordmark"></div>
		        <div>
		          <h1 class="site-name site-name-main">Global</h1>
		        </div>
	      	</a>
	      </div>
	    </div>
	    <!-- this contains all the mega menu links -->
	    <!-- including the primary, secondary navs and the search form -->
	    <div class="navbar-elements mobile-collapse collapse" aria-label="Site navigation" id="navbar-elements">
        <ul class="main-menu nav">
          <li class="menu-link dropdown nav-item">
            <!-- menu link title -->
            <button class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Programs
            </button>
            <ul class="primary-navbar_submenu dropdown-menu">
              <li class="megamenu-wrapper grid-col-3">
                <div class="megamenu-column">
                	<ul class="megamenu-submenu">
                    <li class="megamenu-submenu_title">Programs for Professionals</li>
                    <ul class="megamenu-submenu_links">
                      <li class="leaf menu-link-business-administration"><a class="dropdown-item" href="/international/professional/business-administration">Business Administration</a></li>
                      <li class="leaf menu-link-business-development"><a class="dropdown-item" href="/international/professional/business-development">Business Development</a></li>
                      <li class="leaf menu-link-data-science"><a class="dropdown-item" href="/international/professional/data-science">Data Science</a></li>
                      <li class="leaf menu-link-entrepreneurship"><a class="dropdown-item" href="/international/professional/entrepreneurship">Entrepreneurship</a></li>
                      <li class="leaf menu-link-finance"><a class="dropdown-item" href="/international/professional/finance">Finance</a></li>
                      <li class="leaf menu-link-marketing"><a class="dropdown-item" href="/international/professional/marketing">Marketing</a></li>
                      <li class="leaf menu-link-product-management"><a class="dropdown-item" href="/international/professional/product-management">Product Management</a></li>
                      <li class="leaf menu-link-product-management"><a class="dropdown-item" href="/international/professional/project-management">Project Management</a></li>
                      <li class="leaf menu-link-business-development"><a class="dropdown-item" href="/international/professional/ux-ui">UX/UI Design</a></li>
                    </ul>
                  </ul>
                  <div class="vl"></div>
                </div>

                <div class="megamenu-column">
                  <ul class="megamenu-submenu">
                    <li class="megamenu-submenu_title">Online Learning</li>
                    <ul class="megamenu-submenu_links">
                      <li class="leaf menu-link-online-learning"><a class="dropdown-item" href="/online">Online Courses and Certificates</a></li>
                    </ul>
                  </ul>
                	<ul class="megamenu-submenu">
                    <li class="megamenu-submenu_title">Programs for University Students</li>
                    <ul class="megamenu-submenu_links">
                      <li class="leaf menu-link-bga-discover"><a class="dropdown-item" href="/international/academic/berkeley-global-access">Berkeley Global Access</a></li>
                      <li class="leaf menu-link-bhgap"><a class="dropdown-item" href="/international/academic/bhgap" target="_blank" rel="noopener">Entrepreneurship <span class="fa fa-external-link-alt"></span></a></li>
                      <li class="leaf menu-link-legal-studies"><a class="dropdown-item" href="/international/academic/legal-studies" target="_blank" rel="noopener">Legal Studies <span class="fa fa-external-link-alt"></span></a></li>
                      <li class="leaf menu-link-physics"><a class="dropdown-item" href="https://physics.berkeley.edu/academics/the-berkeley-physics-international-education-bpie-program" target="_blank" rel="noopener">Physics <span class="fa fa-external-link-alt"></span></a></li>
                    </ul>
                  </ul>

                  <ul class="megamenu-submenu">
                    <li class="megamenu-submenu_title">Programs for High School Graduates</li>
                    <ul class="megamenu-submenu_links">
                      <li class="first leaf menu-link-cfp"><a class="dropdown-item" href="/international/freshmen/">Global Program for Freshmen</a></li>
                      <li class="leaf menu-link-cfp"><a class="dropdown-item" href="/international/high-school/">College Foundations</a></li>
                    </ul>
                  </ul>
                  <div class="vl"></div>
                </div>

                <div class="megamenu-column">
                	<ul class="megamenu-submenu">
                    <li class="megamenu-submenu_title">Events</li>
                    <ul class="megamenu-submenu_links">
                      <li class="first leaf menu-link-info-news"><a class="dropdown-item" href="/custom/common/infoSessions.jsp">Information Sessions</a></li>
                      <li class="first leaf menu-link-events"><a class="dropdown-item" href="/custom/common/events.jsp">Free and Low Cost Events</a></li>
                    </ul>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li class="menu-link dropdown nav-item">
            <!-- menu link title -->
            <button class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Student Resources
            </button>
            <ul class="primary-navbar_submenu dropdown-menu">
              <li class="megamenu-wrapper grid-col-3">
                <div class="megamenu-column">
                	<ul class="megamenu-submenu">
                    <li class="megamenu-submenu_title">Student Services</li>
                    <ul class="megamenu-submenu_links">
                      <li class="leaf menu-link-online-covid-19"><a href="https://voices.berkeley.edu/coronavirus" target="_blank" rel="noopener noreferrer" class="dropdown-item">Latest COVID-19 Information <span class="fa fa-external-link-alt"></span></a></li>
										  <li class="first leaf menu-link-business-administration"><a class="dropdown-item" href="/international/student-services/about-us/">About Us</a></li>
										  <li class="leaf menu-link-business-development"><a class="dropdown-item" href="/international/student-services/acceptance/">Once You've Applied</a></li>
										  <li class="leaf menu-link-data-analytics"><a class="dropdown-item" href="/international/student-services/travel/">Preparing for Your Trip to the U.S.</a></li>
                      <li class="leaf menu-link-data-science"><a class="dropdown-item" href="/international/student-services/visa">Visa Information</a></li>
                      <li class="leaf menu-link-internship"><a class="dropdown-item" href="/career-center/internships">Professional Internship Program</a></li>
										  <%-- <li class="leaf menu-link-data-science"><a class="dropdown-item" href="/international/student-services/">Request for Help or Information</a></li> --%>
                      <li class="leaf menu-link-locations-berkeley"><a class="dropdown-item" href="/static/locations/berkeley">Berkeley Campus</a></li>
                      <li class="leaf menu-link-locations-sf"><a class="dropdown-item" href="/static/locations/sf">San Francisco Campus</a></li>
                      <li class="leaf menu-link-locations-belmont"><a class="dropdown-item" href="/static/locations/belmont">Belmont Campus</a></li>
										</ul>
                  </ul>
                  <div class="vl"></div>
                </div>

                <div class="megamenu-column">
                	<ul class="megamenu-submenu">
                    <li class="megamenu-submenu_title">Berkeley Life</li>
                    <ul class="megamenu-submenu_links">
										  <li class="leaf menu-link-bga-discover"><a class="dropdown-item" href="/international/berkeley-life/culture/">Culture</a></li>
										  <li class="leaf menu-link-bhgap"><a class="dropdown-item" href="/international/berkeley-life/safety/">Health and Safety</a></li>
										  <li class="leaf menu-link-legal-studies"><a class="dropdown-item" href="/international/berkeley-life/housing/">Housing</a></li>
                      <li class="leaf menu-link-community-guidelines"><a href="/static/studentservices/student-guidelines/" class="dropdown-item">Community Guides</a></li>
										</ul>
                  </ul>
                  <div class="vl"></div>
                </div>

                <div class="megamenu-column">
                	<ul class="megamenu-submenu">
                    <li class="megamenu-submenu_title">Events</li>
                    <ul class="megamenu-submenu_links">
                      <li class="first leaf menu-link-info-news"><a class="dropdown-item" href="/custom/common/infoSessions.jsp">Information Sessions</a></li>
                      <li class="first leaf menu-link-events"><a class="dropdown-item" href="/custom/common/events.jsp">Free and Low Cost Events</a></li>
                    </ul>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li class="menu-link dropdown nav-item">
            <!-- menu link title -->
            <button class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Graduates
            </button>
            <ul class="primary-navbar_submenu dropdown-menu">
              <li class="megamenu-wrapper grid-col-2">
                <div class="megamenu-column">
                	<ul class="megamenu-submenu">
                    <li class="megamenu-submenu_title">Voices Blog</li>
                    <ul class="megamenu-submenu_links">
                      <li class="first leaf menu-link-voices-home"><a class="dropdown-item" href="https://voices.berkeley.edu/international" target="_blank" rel="noopener">Voices Home <span class="fa fa-external-link-alt"></span></a></li>
                      <li class="first leaf menu-link-student-stories"><a class="dropdown-item" href="https://voices.berkeley.edu/content/student-stories" target="_blank" rel="noopener">Student Stories <span class="fa fa-external-link-alt"></span></a></li>
                      <li class="leaf menu-link-business-development"><a class="dropdown-item" href="https://voices.berkeley.edu/content/professional-pathways" target="_blank" rel="noopener">Professional Pathways <span class="fa fa-external-link-alt"></span></a></li>
                    </ul>
                  </ul>
                  <div class="vl"></div>
                </div>

                <div class="megamenu-column">
                	<ul class="megamenu-submenu">
                    <li class="megamenu-submenu_title">Events</li>
                    <ul class="megamenu-submenu_links">
                      <li class="first leaf menu-link-info-news"><a class="dropdown-item" href="/custom/common/infoSessions.jsp">Information Sessions</a></li>
                      <li class="first leaf menu-link-events"><a class="dropdown-item" href="/custom/common/events.jsp">Free and Low Cost Events</a></li>
                    </ul>
                  </ul>
                </div>
              </li>
            </ul>
            <hr class="mb-3 mt-3 d-md-none"/>
          </li>
        </ul>
		  </div>
	  </div>
  </div>
</div>
<!-- END GLOBAL NAVIGATION -->