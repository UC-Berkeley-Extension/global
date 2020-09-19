/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/dist/modernizr.js":
/*!*************************************!*\
  !*** ./source/js/dist/modernizr.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof16(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof16 = function _typeof16(obj) { return typeof obj; }; } else { _typeof16 = function _typeof16(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof16(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof16(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 3);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./source/js/dist/modernizr.js":
  /*!*************************************!*\
    !*** ./source/js/dist/modernizr.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function sourceJsDistModernizrJs(module, exports) {
    function _typeof15(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof15 = function _typeof15(obj) {
          return typeof obj;
        };
      } else {
        _typeof15 = function _typeof15(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof15(obj);
    }
    /******/


    (function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof15(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 3);
      /******/
    })(
    /************************************************************************/

    /******/
    {
      /***/
      "./source/js/dist/modernizr.js":
      /*!*************************************!*\
        !*** ./source/js/dist/modernizr.js ***!
        \*************************************/

      /*! no static exports found */

      /***/
      function sourceJsDistModernizrJs(module, exports) {
        function _typeof14(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof14 = function _typeof14(obj) {
              return typeof obj;
            };
          } else {
            _typeof14 = function _typeof14(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof14(obj);
        }
        /******/


        (function (modules) {
          // webpackBootstrap

          /******/
          // The module cache

          /******/
          var installedModules = {};
          /******/

          /******/
          // The require function

          /******/

          function __webpack_require__(moduleId) {
            /******/

            /******/
            // Check if module is in cache

            /******/
            if (installedModules[moduleId]) {
              /******/
              return installedModules[moduleId].exports;
              /******/
            }
            /******/
            // Create a new module (and put it into the cache)

            /******/


            var module = installedModules[moduleId] = {
              /******/
              i: moduleId,

              /******/
              l: false,

              /******/
              exports: {}
              /******/

            };
            /******/

            /******/
            // Execute the module function

            /******/

            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/

            /******/
            // Flag the module as loaded

            /******/

            module.l = true;
            /******/

            /******/
            // Return the exports of the module

            /******/

            return module.exports;
            /******/
          }
          /******/

          /******/

          /******/
          // expose the modules object (__webpack_modules__)

          /******/


          __webpack_require__.m = modules;
          /******/

          /******/
          // expose the module cache

          /******/

          __webpack_require__.c = installedModules;
          /******/

          /******/
          // define getter function for harmony exports

          /******/

          __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
              /******/
              Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
              });
              /******/
            }
            /******/

          };
          /******/

          /******/
          // define __esModule on exports

          /******/


          __webpack_require__.r = function (exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
              /******/
              Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
              });
              /******/
            }
            /******/


            Object.defineProperty(exports, '__esModule', {
              value: true
            });
            /******/
          };
          /******/

          /******/
          // create a fake namespace object

          /******/
          // mode & 1: value is a module id, require it

          /******/
          // mode & 2: merge all properties of value into the ns

          /******/
          // mode & 4: return value when already ns object

          /******/
          // mode & 8|1: behave like require

          /******/


          __webpack_require__.t = function (value, mode) {
            /******/
            if (mode & 1) value = __webpack_require__(value);
            /******/

            if (mode & 8) return value;
            /******/

            if (mode & 4 && _typeof14(value) === 'object' && value && value.__esModule) return value;
            /******/

            var ns = Object.create(null);
            /******/

            __webpack_require__.r(ns);
            /******/


            Object.defineProperty(ns, 'default', {
              enumerable: true,
              value: value
            });
            /******/

            if (mode & 2 && typeof value != 'string') for (var key in value) {
              __webpack_require__.d(ns, key, function (key) {
                return value[key];
              }.bind(null, key));
            }
            /******/

            return ns;
            /******/
          };
          /******/

          /******/
          // getDefaultExport function for compatibility with non-harmony modules

          /******/


          __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
            /******/
            function getDefault() {
              return module['default'];
            } :
            /******/
            function getModuleExports() {
              return module;
            };
            /******/

            __webpack_require__.d(getter, 'a', getter);
            /******/


            return getter;
            /******/
          };
          /******/

          /******/
          // Object.prototype.hasOwnProperty.call

          /******/


          __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          /******/

          /******/
          // __webpack_public_path__

          /******/


          __webpack_require__.p = "/";
          /******/

          /******/

          /******/
          // Load entry module and return exports

          /******/

          return __webpack_require__(__webpack_require__.s = 3);
          /******/
        })(
        /************************************************************************/

        /******/
        {
          /***/
          "./source/js/dist/modernizr.js":
          /*!*************************************!*\
            !*** ./source/js/dist/modernizr.js ***!
            \*************************************/

          /*! no static exports found */

          /***/
          function sourceJsDistModernizrJs(module, exports) {
            function _typeof13(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof13 = function _typeof13(obj) {
                  return typeof obj;
                };
              } else {
                _typeof13 = function _typeof13(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }

              return _typeof13(obj);
            }
            /******/


            (function (modules) {
              // webpackBootstrap

              /******/
              // The module cache

              /******/
              var installedModules = {};
              /******/

              /******/
              // The require function

              /******/

              function __webpack_require__(moduleId) {
                /******/

                /******/
                // Check if module is in cache

                /******/
                if (installedModules[moduleId]) {
                  /******/
                  return installedModules[moduleId].exports;
                  /******/
                }
                /******/
                // Create a new module (and put it into the cache)

                /******/


                var module = installedModules[moduleId] = {
                  /******/
                  i: moduleId,

                  /******/
                  l: false,

                  /******/
                  exports: {}
                  /******/

                };
                /******/

                /******/
                // Execute the module function

                /******/

                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/

                /******/
                // Flag the module as loaded

                /******/

                module.l = true;
                /******/

                /******/
                // Return the exports of the module

                /******/

                return module.exports;
                /******/
              }
              /******/

              /******/

              /******/
              // expose the modules object (__webpack_modules__)

              /******/


              __webpack_require__.m = modules;
              /******/

              /******/
              // expose the module cache

              /******/

              __webpack_require__.c = installedModules;
              /******/

              /******/
              // define getter function for harmony exports

              /******/

              __webpack_require__.d = function (exports, name, getter) {
                /******/
                if (!__webpack_require__.o(exports, name)) {
                  /******/
                  Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                  });
                  /******/
                }
                /******/

              };
              /******/

              /******/
              // define __esModule on exports

              /******/


              __webpack_require__.r = function (exports) {
                /******/
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                  /******/
                  Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                  });
                  /******/
                }
                /******/


                Object.defineProperty(exports, '__esModule', {
                  value: true
                });
                /******/
              };
              /******/

              /******/
              // create a fake namespace object

              /******/
              // mode & 1: value is a module id, require it

              /******/
              // mode & 2: merge all properties of value into the ns

              /******/
              // mode & 4: return value when already ns object

              /******/
              // mode & 8|1: behave like require

              /******/


              __webpack_require__.t = function (value, mode) {
                /******/
                if (mode & 1) value = __webpack_require__(value);
                /******/

                if (mode & 8) return value;
                /******/

                if (mode & 4 && _typeof13(value) === 'object' && value && value.__esModule) return value;
                /******/

                var ns = Object.create(null);
                /******/

                __webpack_require__.r(ns);
                /******/


                Object.defineProperty(ns, 'default', {
                  enumerable: true,
                  value: value
                });
                /******/

                if (mode & 2 && typeof value != 'string') for (var key in value) {
                  __webpack_require__.d(ns, key, function (key) {
                    return value[key];
                  }.bind(null, key));
                }
                /******/

                return ns;
                /******/
              };
              /******/

              /******/
              // getDefaultExport function for compatibility with non-harmony modules

              /******/


              __webpack_require__.n = function (module) {
                /******/
                var getter = module && module.__esModule ?
                /******/
                function getDefault() {
                  return module['default'];
                } :
                /******/
                function getModuleExports() {
                  return module;
                };
                /******/

                __webpack_require__.d(getter, 'a', getter);
                /******/


                return getter;
                /******/
              };
              /******/

              /******/
              // Object.prototype.hasOwnProperty.call

              /******/


              __webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
              };
              /******/

              /******/
              // __webpack_public_path__

              /******/


              __webpack_require__.p = "/";
              /******/

              /******/

              /******/
              // Load entry module and return exports

              /******/

              return __webpack_require__(__webpack_require__.s = 3);
              /******/
            })(
            /************************************************************************/

            /******/
            {
              /***/
              "./source/js/dist/modernizr.js":
              /*!*************************************!*\
                !*** ./source/js/dist/modernizr.js ***!
                \*************************************/

              /*! no static exports found */

              /***/
              function sourceJsDistModernizrJs(module, exports) {
                function _typeof12(obj) {
                  "@babel/helpers - typeof";

                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof12 = function _typeof12(obj) {
                      return typeof obj;
                    };
                  } else {
                    _typeof12 = function _typeof12(obj) {
                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                  }

                  return _typeof12(obj);
                }
                /******/


                (function (modules) {
                  // webpackBootstrap

                  /******/
                  // The module cache

                  /******/
                  var installedModules = {};
                  /******/

                  /******/
                  // The require function

                  /******/

                  function __webpack_require__(moduleId) {
                    /******/

                    /******/
                    // Check if module is in cache

                    /******/
                    if (installedModules[moduleId]) {
                      /******/
                      return installedModules[moduleId].exports;
                      /******/
                    }
                    /******/
                    // Create a new module (and put it into the cache)

                    /******/


                    var module = installedModules[moduleId] = {
                      /******/
                      i: moduleId,

                      /******/
                      l: false,

                      /******/
                      exports: {}
                      /******/

                    };
                    /******/

                    /******/
                    // Execute the module function

                    /******/

                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                    /******/

                    /******/
                    // Flag the module as loaded

                    /******/

                    module.l = true;
                    /******/

                    /******/
                    // Return the exports of the module

                    /******/

                    return module.exports;
                    /******/
                  }
                  /******/

                  /******/

                  /******/
                  // expose the modules object (__webpack_modules__)

                  /******/


                  __webpack_require__.m = modules;
                  /******/

                  /******/
                  // expose the module cache

                  /******/

                  __webpack_require__.c = installedModules;
                  /******/

                  /******/
                  // define getter function for harmony exports

                  /******/

                  __webpack_require__.d = function (exports, name, getter) {
                    /******/
                    if (!__webpack_require__.o(exports, name)) {
                      /******/
                      Object.defineProperty(exports, name, {
                        enumerable: true,
                        get: getter
                      });
                      /******/
                    }
                    /******/

                  };
                  /******/

                  /******/
                  // define __esModule on exports

                  /******/


                  __webpack_require__.r = function (exports) {
                    /******/
                    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                      /******/
                      Object.defineProperty(exports, Symbol.toStringTag, {
                        value: 'Module'
                      });
                      /******/
                    }
                    /******/


                    Object.defineProperty(exports, '__esModule', {
                      value: true
                    });
                    /******/
                  };
                  /******/

                  /******/
                  // create a fake namespace object

                  /******/
                  // mode & 1: value is a module id, require it

                  /******/
                  // mode & 2: merge all properties of value into the ns

                  /******/
                  // mode & 4: return value when already ns object

                  /******/
                  // mode & 8|1: behave like require

                  /******/


                  __webpack_require__.t = function (value, mode) {
                    /******/
                    if (mode & 1) value = __webpack_require__(value);
                    /******/

                    if (mode & 8) return value;
                    /******/

                    if (mode & 4 && _typeof12(value) === 'object' && value && value.__esModule) return value;
                    /******/

                    var ns = Object.create(null);
                    /******/

                    __webpack_require__.r(ns);
                    /******/


                    Object.defineProperty(ns, 'default', {
                      enumerable: true,
                      value: value
                    });
                    /******/

                    if (mode & 2 && typeof value != 'string') for (var key in value) {
                      __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                      }.bind(null, key));
                    }
                    /******/

                    return ns;
                    /******/
                  };
                  /******/

                  /******/
                  // getDefaultExport function for compatibility with non-harmony modules

                  /******/


                  __webpack_require__.n = function (module) {
                    /******/
                    var getter = module && module.__esModule ?
                    /******/
                    function getDefault() {
                      return module['default'];
                    } :
                    /******/
                    function getModuleExports() {
                      return module;
                    };
                    /******/

                    __webpack_require__.d(getter, 'a', getter);
                    /******/


                    return getter;
                    /******/
                  };
                  /******/

                  /******/
                  // Object.prototype.hasOwnProperty.call

                  /******/


                  __webpack_require__.o = function (object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                  };
                  /******/

                  /******/
                  // __webpack_public_path__

                  /******/


                  __webpack_require__.p = "/";
                  /******/

                  /******/

                  /******/
                  // Load entry module and return exports

                  /******/

                  return __webpack_require__(__webpack_require__.s = 3);
                  /******/
                })(
                /************************************************************************/

                /******/
                {
                  /***/
                  "./source/js/dist/modernizr.js":
                  /*!*************************************!*\
                    !*** ./source/js/dist/modernizr.js ***!
                    \*************************************/

                  /*! no static exports found */

                  /***/
                  function sourceJsDistModernizrJs(module, exports) {
                    function _typeof11(obj) {
                      "@babel/helpers - typeof";

                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof11 = function _typeof11(obj) {
                          return typeof obj;
                        };
                      } else {
                        _typeof11 = function _typeof11(obj) {
                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                      }

                      return _typeof11(obj);
                    }
                    /******/


                    (function (modules) {
                      // webpackBootstrap

                      /******/
                      // The module cache

                      /******/
                      var installedModules = {};
                      /******/

                      /******/
                      // The require function

                      /******/

                      function __webpack_require__(moduleId) {
                        /******/

                        /******/
                        // Check if module is in cache

                        /******/
                        if (installedModules[moduleId]) {
                          /******/
                          return installedModules[moduleId].exports;
                          /******/
                        }
                        /******/
                        // Create a new module (and put it into the cache)

                        /******/


                        var module = installedModules[moduleId] = {
                          /******/
                          i: moduleId,

                          /******/
                          l: false,

                          /******/
                          exports: {}
                          /******/

                        };
                        /******/

                        /******/
                        // Execute the module function

                        /******/

                        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                        /******/

                        /******/
                        // Flag the module as loaded

                        /******/

                        module.l = true;
                        /******/

                        /******/
                        // Return the exports of the module

                        /******/

                        return module.exports;
                        /******/
                      }
                      /******/

                      /******/

                      /******/
                      // expose the modules object (__webpack_modules__)

                      /******/


                      __webpack_require__.m = modules;
                      /******/

                      /******/
                      // expose the module cache

                      /******/

                      __webpack_require__.c = installedModules;
                      /******/

                      /******/
                      // define getter function for harmony exports

                      /******/

                      __webpack_require__.d = function (exports, name, getter) {
                        /******/
                        if (!__webpack_require__.o(exports, name)) {
                          /******/
                          Object.defineProperty(exports, name, {
                            enumerable: true,
                            get: getter
                          });
                          /******/
                        }
                        /******/

                      };
                      /******/

                      /******/
                      // define __esModule on exports

                      /******/


                      __webpack_require__.r = function (exports) {
                        /******/
                        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                          /******/
                          Object.defineProperty(exports, Symbol.toStringTag, {
                            value: 'Module'
                          });
                          /******/
                        }
                        /******/


                        Object.defineProperty(exports, '__esModule', {
                          value: true
                        });
                        /******/
                      };
                      /******/

                      /******/
                      // create a fake namespace object

                      /******/
                      // mode & 1: value is a module id, require it

                      /******/
                      // mode & 2: merge all properties of value into the ns

                      /******/
                      // mode & 4: return value when already ns object

                      /******/
                      // mode & 8|1: behave like require

                      /******/


                      __webpack_require__.t = function (value, mode) {
                        /******/
                        if (mode & 1) value = __webpack_require__(value);
                        /******/

                        if (mode & 8) return value;
                        /******/

                        if (mode & 4 && _typeof11(value) === 'object' && value && value.__esModule) return value;
                        /******/

                        var ns = Object.create(null);
                        /******/

                        __webpack_require__.r(ns);
                        /******/


                        Object.defineProperty(ns, 'default', {
                          enumerable: true,
                          value: value
                        });
                        /******/

                        if (mode & 2 && typeof value != 'string') for (var key in value) {
                          __webpack_require__.d(ns, key, function (key) {
                            return value[key];
                          }.bind(null, key));
                        }
                        /******/

                        return ns;
                        /******/
                      };
                      /******/

                      /******/
                      // getDefaultExport function for compatibility with non-harmony modules

                      /******/


                      __webpack_require__.n = function (module) {
                        /******/
                        var getter = module && module.__esModule ?
                        /******/
                        function getDefault() {
                          return module['default'];
                        } :
                        /******/
                        function getModuleExports() {
                          return module;
                        };
                        /******/

                        __webpack_require__.d(getter, 'a', getter);
                        /******/


                        return getter;
                        /******/
                      };
                      /******/

                      /******/
                      // Object.prototype.hasOwnProperty.call

                      /******/


                      __webpack_require__.o = function (object, property) {
                        return Object.prototype.hasOwnProperty.call(object, property);
                      };
                      /******/

                      /******/
                      // __webpack_public_path__

                      /******/


                      __webpack_require__.p = "/";
                      /******/

                      /******/

                      /******/
                      // Load entry module and return exports

                      /******/

                      return __webpack_require__(__webpack_require__.s = 3);
                      /******/
                    })(
                    /************************************************************************/

                    /******/
                    {
                      /***/
                      "./source/js/dist/modernizr.js":
                      /*!*************************************!*\
                        !*** ./source/js/dist/modernizr.js ***!
                        \*************************************/

                      /*! no static exports found */

                      /***/
                      function sourceJsDistModernizrJs(module, exports) {
                        function _typeof10(obj) {
                          "@babel/helpers - typeof";

                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                            _typeof10 = function _typeof10(obj) {
                              return typeof obj;
                            };
                          } else {
                            _typeof10 = function _typeof10(obj) {
                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                            };
                          }

                          return _typeof10(obj);
                        }
                        /******/


                        (function (modules) {
                          // webpackBootstrap

                          /******/
                          // The module cache

                          /******/
                          var installedModules = {};
                          /******/

                          /******/
                          // The require function

                          /******/

                          function __webpack_require__(moduleId) {
                            /******/

                            /******/
                            // Check if module is in cache

                            /******/
                            if (installedModules[moduleId]) {
                              /******/
                              return installedModules[moduleId].exports;
                              /******/
                            }
                            /******/
                            // Create a new module (and put it into the cache)

                            /******/


                            var module = installedModules[moduleId] = {
                              /******/
                              i: moduleId,

                              /******/
                              l: false,

                              /******/
                              exports: {}
                              /******/

                            };
                            /******/

                            /******/
                            // Execute the module function

                            /******/

                            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                            /******/

                            /******/
                            // Flag the module as loaded

                            /******/

                            module.l = true;
                            /******/

                            /******/
                            // Return the exports of the module

                            /******/

                            return module.exports;
                            /******/
                          }
                          /******/

                          /******/

                          /******/
                          // expose the modules object (__webpack_modules__)

                          /******/


                          __webpack_require__.m = modules;
                          /******/

                          /******/
                          // expose the module cache

                          /******/

                          __webpack_require__.c = installedModules;
                          /******/

                          /******/
                          // define getter function for harmony exports

                          /******/

                          __webpack_require__.d = function (exports, name, getter) {
                            /******/
                            if (!__webpack_require__.o(exports, name)) {
                              /******/
                              Object.defineProperty(exports, name, {
                                enumerable: true,
                                get: getter
                              });
                              /******/
                            }
                            /******/

                          };
                          /******/

                          /******/
                          // define __esModule on exports

                          /******/


                          __webpack_require__.r = function (exports) {
                            /******/
                            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                              /******/
                              Object.defineProperty(exports, Symbol.toStringTag, {
                                value: 'Module'
                              });
                              /******/
                            }
                            /******/


                            Object.defineProperty(exports, '__esModule', {
                              value: true
                            });
                            /******/
                          };
                          /******/

                          /******/
                          // create a fake namespace object

                          /******/
                          // mode & 1: value is a module id, require it

                          /******/
                          // mode & 2: merge all properties of value into the ns

                          /******/
                          // mode & 4: return value when already ns object

                          /******/
                          // mode & 8|1: behave like require

                          /******/


                          __webpack_require__.t = function (value, mode) {
                            /******/
                            if (mode & 1) value = __webpack_require__(value);
                            /******/

                            if (mode & 8) return value;
                            /******/

                            if (mode & 4 && _typeof10(value) === 'object' && value && value.__esModule) return value;
                            /******/

                            var ns = Object.create(null);
                            /******/

                            __webpack_require__.r(ns);
                            /******/


                            Object.defineProperty(ns, 'default', {
                              enumerable: true,
                              value: value
                            });
                            /******/

                            if (mode & 2 && typeof value != 'string') for (var key in value) {
                              __webpack_require__.d(ns, key, function (key) {
                                return value[key];
                              }.bind(null, key));
                            }
                            /******/

                            return ns;
                            /******/
                          };
                          /******/

                          /******/
                          // getDefaultExport function for compatibility with non-harmony modules

                          /******/


                          __webpack_require__.n = function (module) {
                            /******/
                            var getter = module && module.__esModule ?
                            /******/
                            function getDefault() {
                              return module['default'];
                            } :
                            /******/
                            function getModuleExports() {
                              return module;
                            };
                            /******/

                            __webpack_require__.d(getter, 'a', getter);
                            /******/


                            return getter;
                            /******/
                          };
                          /******/

                          /******/
                          // Object.prototype.hasOwnProperty.call

                          /******/


                          __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          };
                          /******/

                          /******/
                          // __webpack_public_path__

                          /******/


                          __webpack_require__.p = "/";
                          /******/

                          /******/

                          /******/
                          // Load entry module and return exports

                          /******/

                          return __webpack_require__(__webpack_require__.s = 3);
                          /******/
                        })(
                        /************************************************************************/

                        /******/
                        {
                          /***/
                          "./source/js/dist/modernizr.js":
                          /*!*************************************!*\
                            !*** ./source/js/dist/modernizr.js ***!
                            \*************************************/

                          /*! no static exports found */

                          /***/
                          function sourceJsDistModernizrJs(module, exports) {
                            function _typeof9(obj) {
                              "@babel/helpers - typeof";

                              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                _typeof9 = function _typeof9(obj) {
                                  return typeof obj;
                                };
                              } else {
                                _typeof9 = function _typeof9(obj) {
                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                };
                              }

                              return _typeof9(obj);
                            }
                            /******/


                            (function (modules) {
                              // webpackBootstrap

                              /******/
                              // The module cache

                              /******/
                              var installedModules = {};
                              /******/

                              /******/
                              // The require function

                              /******/

                              function __webpack_require__(moduleId) {
                                /******/

                                /******/
                                // Check if module is in cache

                                /******/
                                if (installedModules[moduleId]) {
                                  /******/
                                  return installedModules[moduleId].exports;
                                  /******/
                                }
                                /******/
                                // Create a new module (and put it into the cache)

                                /******/


                                var module = installedModules[moduleId] = {
                                  /******/
                                  i: moduleId,

                                  /******/
                                  l: false,

                                  /******/
                                  exports: {}
                                  /******/

                                };
                                /******/

                                /******/
                                // Execute the module function

                                /******/

                                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                /******/

                                /******/
                                // Flag the module as loaded

                                /******/

                                module.l = true;
                                /******/

                                /******/
                                // Return the exports of the module

                                /******/

                                return module.exports;
                                /******/
                              }
                              /******/

                              /******/

                              /******/
                              // expose the modules object (__webpack_modules__)

                              /******/


                              __webpack_require__.m = modules;
                              /******/

                              /******/
                              // expose the module cache

                              /******/

                              __webpack_require__.c = installedModules;
                              /******/

                              /******/
                              // define getter function for harmony exports

                              /******/

                              __webpack_require__.d = function (exports, name, getter) {
                                /******/
                                if (!__webpack_require__.o(exports, name)) {
                                  /******/
                                  Object.defineProperty(exports, name, {
                                    enumerable: true,
                                    get: getter
                                  });
                                  /******/
                                }
                                /******/

                              };
                              /******/

                              /******/
                              // define __esModule on exports

                              /******/


                              __webpack_require__.r = function (exports) {
                                /******/
                                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                  /******/
                                  Object.defineProperty(exports, Symbol.toStringTag, {
                                    value: 'Module'
                                  });
                                  /******/
                                }
                                /******/


                                Object.defineProperty(exports, '__esModule', {
                                  value: true
                                });
                                /******/
                              };
                              /******/

                              /******/
                              // create a fake namespace object

                              /******/
                              // mode & 1: value is a module id, require it

                              /******/
                              // mode & 2: merge all properties of value into the ns

                              /******/
                              // mode & 4: return value when already ns object

                              /******/
                              // mode & 8|1: behave like require

                              /******/


                              __webpack_require__.t = function (value, mode) {
                                /******/
                                if (mode & 1) value = __webpack_require__(value);
                                /******/

                                if (mode & 8) return value;
                                /******/

                                if (mode & 4 && _typeof9(value) === 'object' && value && value.__esModule) return value;
                                /******/

                                var ns = Object.create(null);
                                /******/

                                __webpack_require__.r(ns);
                                /******/


                                Object.defineProperty(ns, 'default', {
                                  enumerable: true,
                                  value: value
                                });
                                /******/

                                if (mode & 2 && typeof value != 'string') for (var key in value) {
                                  __webpack_require__.d(ns, key, function (key) {
                                    return value[key];
                                  }.bind(null, key));
                                }
                                /******/

                                return ns;
                                /******/
                              };
                              /******/

                              /******/
                              // getDefaultExport function for compatibility with non-harmony modules

                              /******/


                              __webpack_require__.n = function (module) {
                                /******/
                                var getter = module && module.__esModule ?
                                /******/
                                function getDefault() {
                                  return module['default'];
                                } :
                                /******/
                                function getModuleExports() {
                                  return module;
                                };
                                /******/

                                __webpack_require__.d(getter, 'a', getter);
                                /******/


                                return getter;
                                /******/
                              };
                              /******/

                              /******/
                              // Object.prototype.hasOwnProperty.call

                              /******/


                              __webpack_require__.o = function (object, property) {
                                return Object.prototype.hasOwnProperty.call(object, property);
                              };
                              /******/

                              /******/
                              // __webpack_public_path__

                              /******/


                              __webpack_require__.p = "/";
                              /******/

                              /******/

                              /******/
                              // Load entry module and return exports

                              /******/

                              return __webpack_require__(__webpack_require__.s = 3);
                              /******/
                            })(
                            /************************************************************************/

                            /******/
                            {
                              /***/
                              "./source/js/dist/modernizr.js":
                              /*!*************************************!*\
                                !*** ./source/js/dist/modernizr.js ***!
                                \*************************************/

                              /*! no static exports found */

                              /***/
                              function sourceJsDistModernizrJs(module, exports) {
                                function _typeof8(obj) {
                                  "@babel/helpers - typeof";

                                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                    _typeof8 = function _typeof8(obj) {
                                      return typeof obj;
                                    };
                                  } else {
                                    _typeof8 = function _typeof8(obj) {
                                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                    };
                                  }

                                  return _typeof8(obj);
                                }
                                /******/


                                (function (modules) {
                                  // webpackBootstrap

                                  /******/
                                  // The module cache

                                  /******/
                                  var installedModules = {};
                                  /******/

                                  /******/
                                  // The require function

                                  /******/

                                  function __webpack_require__(moduleId) {
                                    /******/

                                    /******/
                                    // Check if module is in cache

                                    /******/
                                    if (installedModules[moduleId]) {
                                      /******/
                                      return installedModules[moduleId].exports;
                                      /******/
                                    }
                                    /******/
                                    // Create a new module (and put it into the cache)

                                    /******/


                                    var module = installedModules[moduleId] = {
                                      /******/
                                      i: moduleId,

                                      /******/
                                      l: false,

                                      /******/
                                      exports: {}
                                      /******/

                                    };
                                    /******/

                                    /******/
                                    // Execute the module function

                                    /******/

                                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                    /******/

                                    /******/
                                    // Flag the module as loaded

                                    /******/

                                    module.l = true;
                                    /******/

                                    /******/
                                    // Return the exports of the module

                                    /******/

                                    return module.exports;
                                    /******/
                                  }
                                  /******/

                                  /******/

                                  /******/
                                  // expose the modules object (__webpack_modules__)

                                  /******/


                                  __webpack_require__.m = modules;
                                  /******/

                                  /******/
                                  // expose the module cache

                                  /******/

                                  __webpack_require__.c = installedModules;
                                  /******/

                                  /******/
                                  // define getter function for harmony exports

                                  /******/

                                  __webpack_require__.d = function (exports, name, getter) {
                                    /******/
                                    if (!__webpack_require__.o(exports, name)) {
                                      /******/
                                      Object.defineProperty(exports, name, {
                                        enumerable: true,
                                        get: getter
                                      });
                                      /******/
                                    }
                                    /******/

                                  };
                                  /******/

                                  /******/
                                  // define __esModule on exports

                                  /******/


                                  __webpack_require__.r = function (exports) {
                                    /******/
                                    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                      /******/
                                      Object.defineProperty(exports, Symbol.toStringTag, {
                                        value: 'Module'
                                      });
                                      /******/
                                    }
                                    /******/


                                    Object.defineProperty(exports, '__esModule', {
                                      value: true
                                    });
                                    /******/
                                  };
                                  /******/

                                  /******/
                                  // create a fake namespace object

                                  /******/
                                  // mode & 1: value is a module id, require it

                                  /******/
                                  // mode & 2: merge all properties of value into the ns

                                  /******/
                                  // mode & 4: return value when already ns object

                                  /******/
                                  // mode & 8|1: behave like require

                                  /******/


                                  __webpack_require__.t = function (value, mode) {
                                    /******/
                                    if (mode & 1) value = __webpack_require__(value);
                                    /******/

                                    if (mode & 8) return value;
                                    /******/

                                    if (mode & 4 && _typeof8(value) === 'object' && value && value.__esModule) return value;
                                    /******/

                                    var ns = Object.create(null);
                                    /******/

                                    __webpack_require__.r(ns);
                                    /******/


                                    Object.defineProperty(ns, 'default', {
                                      enumerable: true,
                                      value: value
                                    });
                                    /******/

                                    if (mode & 2 && typeof value != 'string') for (var key in value) {
                                      __webpack_require__.d(ns, key, function (key) {
                                        return value[key];
                                      }.bind(null, key));
                                    }
                                    /******/

                                    return ns;
                                    /******/
                                  };
                                  /******/

                                  /******/
                                  // getDefaultExport function for compatibility with non-harmony modules

                                  /******/


                                  __webpack_require__.n = function (module) {
                                    /******/
                                    var getter = module && module.__esModule ?
                                    /******/
                                    function getDefault() {
                                      return module['default'];
                                    } :
                                    /******/
                                    function getModuleExports() {
                                      return module;
                                    };
                                    /******/

                                    __webpack_require__.d(getter, 'a', getter);
                                    /******/


                                    return getter;
                                    /******/
                                  };
                                  /******/

                                  /******/
                                  // Object.prototype.hasOwnProperty.call

                                  /******/


                                  __webpack_require__.o = function (object, property) {
                                    return Object.prototype.hasOwnProperty.call(object, property);
                                  };
                                  /******/

                                  /******/
                                  // __webpack_public_path__

                                  /******/


                                  __webpack_require__.p = "/";
                                  /******/

                                  /******/

                                  /******/
                                  // Load entry module and return exports

                                  /******/

                                  return __webpack_require__(__webpack_require__.s = 3);
                                  /******/
                                })(
                                /************************************************************************/

                                /******/
                                {
                                  /***/
                                  "./source/js/dist/modernizr.js":
                                  /*!*************************************!*\
                                    !*** ./source/js/dist/modernizr.js ***!
                                    \*************************************/

                                  /*! no static exports found */

                                  /***/
                                  function sourceJsDistModernizrJs(module, exports) {
                                    function _typeof7(obj) {
                                      "@babel/helpers - typeof";

                                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                        _typeof7 = function _typeof7(obj) {
                                          return typeof obj;
                                        };
                                      } else {
                                        _typeof7 = function _typeof7(obj) {
                                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                        };
                                      }

                                      return _typeof7(obj);
                                    }
                                    /******/


                                    (function (modules) {
                                      // webpackBootstrap

                                      /******/
                                      // The module cache

                                      /******/
                                      var installedModules = {};
                                      /******/

                                      /******/
                                      // The require function

                                      /******/

                                      function __webpack_require__(moduleId) {
                                        /******/

                                        /******/
                                        // Check if module is in cache

                                        /******/
                                        if (installedModules[moduleId]) {
                                          /******/
                                          return installedModules[moduleId].exports;
                                          /******/
                                        }
                                        /******/
                                        // Create a new module (and put it into the cache)

                                        /******/


                                        var module = installedModules[moduleId] = {
                                          /******/
                                          i: moduleId,

                                          /******/
                                          l: false,

                                          /******/
                                          exports: {}
                                          /******/

                                        };
                                        /******/

                                        /******/
                                        // Execute the module function

                                        /******/

                                        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                        /******/

                                        /******/
                                        // Flag the module as loaded

                                        /******/

                                        module.l = true;
                                        /******/

                                        /******/
                                        // Return the exports of the module

                                        /******/

                                        return module.exports;
                                        /******/
                                      }
                                      /******/

                                      /******/

                                      /******/
                                      // expose the modules object (__webpack_modules__)

                                      /******/


                                      __webpack_require__.m = modules;
                                      /******/

                                      /******/
                                      // expose the module cache

                                      /******/

                                      __webpack_require__.c = installedModules;
                                      /******/

                                      /******/
                                      // define getter function for harmony exports

                                      /******/

                                      __webpack_require__.d = function (exports, name, getter) {
                                        /******/
                                        if (!__webpack_require__.o(exports, name)) {
                                          /******/
                                          Object.defineProperty(exports, name, {
                                            enumerable: true,
                                            get: getter
                                          });
                                          /******/
                                        }
                                        /******/

                                      };
                                      /******/

                                      /******/
                                      // define __esModule on exports

                                      /******/


                                      __webpack_require__.r = function (exports) {
                                        /******/
                                        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                          /******/
                                          Object.defineProperty(exports, Symbol.toStringTag, {
                                            value: 'Module'
                                          });
                                          /******/
                                        }
                                        /******/


                                        Object.defineProperty(exports, '__esModule', {
                                          value: true
                                        });
                                        /******/
                                      };
                                      /******/

                                      /******/
                                      // create a fake namespace object

                                      /******/
                                      // mode & 1: value is a module id, require it

                                      /******/
                                      // mode & 2: merge all properties of value into the ns

                                      /******/
                                      // mode & 4: return value when already ns object

                                      /******/
                                      // mode & 8|1: behave like require

                                      /******/


                                      __webpack_require__.t = function (value, mode) {
                                        /******/
                                        if (mode & 1) value = __webpack_require__(value);
                                        /******/

                                        if (mode & 8) return value;
                                        /******/

                                        if (mode & 4 && _typeof7(value) === 'object' && value && value.__esModule) return value;
                                        /******/

                                        var ns = Object.create(null);
                                        /******/

                                        __webpack_require__.r(ns);
                                        /******/


                                        Object.defineProperty(ns, 'default', {
                                          enumerable: true,
                                          value: value
                                        });
                                        /******/

                                        if (mode & 2 && typeof value != 'string') for (var key in value) {
                                          __webpack_require__.d(ns, key, function (key) {
                                            return value[key];
                                          }.bind(null, key));
                                        }
                                        /******/

                                        return ns;
                                        /******/
                                      };
                                      /******/

                                      /******/
                                      // getDefaultExport function for compatibility with non-harmony modules

                                      /******/


                                      __webpack_require__.n = function (module) {
                                        /******/
                                        var getter = module && module.__esModule ?
                                        /******/
                                        function getDefault() {
                                          return module['default'];
                                        } :
                                        /******/
                                        function getModuleExports() {
                                          return module;
                                        };
                                        /******/

                                        __webpack_require__.d(getter, 'a', getter);
                                        /******/


                                        return getter;
                                        /******/
                                      };
                                      /******/

                                      /******/
                                      // Object.prototype.hasOwnProperty.call

                                      /******/


                                      __webpack_require__.o = function (object, property) {
                                        return Object.prototype.hasOwnProperty.call(object, property);
                                      };
                                      /******/

                                      /******/
                                      // __webpack_public_path__

                                      /******/


                                      __webpack_require__.p = "/";
                                      /******/

                                      /******/

                                      /******/
                                      // Load entry module and return exports

                                      /******/

                                      return __webpack_require__(__webpack_require__.s = 3);
                                      /******/
                                    })(
                                    /************************************************************************/

                                    /******/
                                    {
                                      /***/
                                      "./source/js/dist/modernizr.js":
                                      /*!*************************************!*\
                                        !*** ./source/js/dist/modernizr.js ***!
                                        \*************************************/

                                      /*! no static exports found */

                                      /***/
                                      function sourceJsDistModernizrJs(module, exports) {
                                        function _typeof6(obj) {
                                          "@babel/helpers - typeof";

                                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                            _typeof6 = function _typeof6(obj) {
                                              return typeof obj;
                                            };
                                          } else {
                                            _typeof6 = function _typeof6(obj) {
                                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                            };
                                          }

                                          return _typeof6(obj);
                                        }
                                        /******/


                                        (function (modules) {
                                          // webpackBootstrap

                                          /******/
                                          // The module cache

                                          /******/
                                          var installedModules = {};
                                          /******/

                                          /******/
                                          // The require function

                                          /******/

                                          function __webpack_require__(moduleId) {
                                            /******/

                                            /******/
                                            // Check if module is in cache

                                            /******/
                                            if (installedModules[moduleId]) {
                                              /******/
                                              return installedModules[moduleId].exports;
                                              /******/
                                            }
                                            /******/
                                            // Create a new module (and put it into the cache)

                                            /******/


                                            var module = installedModules[moduleId] = {
                                              /******/
                                              i: moduleId,

                                              /******/
                                              l: false,

                                              /******/
                                              exports: {}
                                              /******/

                                            };
                                            /******/

                                            /******/
                                            // Execute the module function

                                            /******/

                                            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                            /******/

                                            /******/
                                            // Flag the module as loaded

                                            /******/

                                            module.l = true;
                                            /******/

                                            /******/
                                            // Return the exports of the module

                                            /******/

                                            return module.exports;
                                            /******/
                                          }
                                          /******/

                                          /******/

                                          /******/
                                          // expose the modules object (__webpack_modules__)

                                          /******/


                                          __webpack_require__.m = modules;
                                          /******/

                                          /******/
                                          // expose the module cache

                                          /******/

                                          __webpack_require__.c = installedModules;
                                          /******/

                                          /******/
                                          // define getter function for harmony exports

                                          /******/

                                          __webpack_require__.d = function (exports, name, getter) {
                                            /******/
                                            if (!__webpack_require__.o(exports, name)) {
                                              /******/
                                              Object.defineProperty(exports, name, {
                                                enumerable: true,
                                                get: getter
                                              });
                                              /******/
                                            }
                                            /******/

                                          };
                                          /******/

                                          /******/
                                          // define __esModule on exports

                                          /******/


                                          __webpack_require__.r = function (exports) {
                                            /******/
                                            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                              /******/
                                              Object.defineProperty(exports, Symbol.toStringTag, {
                                                value: 'Module'
                                              });
                                              /******/
                                            }
                                            /******/


                                            Object.defineProperty(exports, '__esModule', {
                                              value: true
                                            });
                                            /******/
                                          };
                                          /******/

                                          /******/
                                          // create a fake namespace object

                                          /******/
                                          // mode & 1: value is a module id, require it

                                          /******/
                                          // mode & 2: merge all properties of value into the ns

                                          /******/
                                          // mode & 4: return value when already ns object

                                          /******/
                                          // mode & 8|1: behave like require

                                          /******/


                                          __webpack_require__.t = function (value, mode) {
                                            /******/
                                            if (mode & 1) value = __webpack_require__(value);
                                            /******/

                                            if (mode & 8) return value;
                                            /******/

                                            if (mode & 4 && _typeof6(value) === 'object' && value && value.__esModule) return value;
                                            /******/

                                            var ns = Object.create(null);
                                            /******/

                                            __webpack_require__.r(ns);
                                            /******/


                                            Object.defineProperty(ns, 'default', {
                                              enumerable: true,
                                              value: value
                                            });
                                            /******/

                                            if (mode & 2 && typeof value != 'string') for (var key in value) {
                                              __webpack_require__.d(ns, key, function (key) {
                                                return value[key];
                                              }.bind(null, key));
                                            }
                                            /******/

                                            return ns;
                                            /******/
                                          };
                                          /******/

                                          /******/
                                          // getDefaultExport function for compatibility with non-harmony modules

                                          /******/


                                          __webpack_require__.n = function (module) {
                                            /******/
                                            var getter = module && module.__esModule ?
                                            /******/
                                            function getDefault() {
                                              return module['default'];
                                            } :
                                            /******/
                                            function getModuleExports() {
                                              return module;
                                            };
                                            /******/

                                            __webpack_require__.d(getter, 'a', getter);
                                            /******/


                                            return getter;
                                            /******/
                                          };
                                          /******/

                                          /******/
                                          // Object.prototype.hasOwnProperty.call

                                          /******/


                                          __webpack_require__.o = function (object, property) {
                                            return Object.prototype.hasOwnProperty.call(object, property);
                                          };
                                          /******/

                                          /******/
                                          // __webpack_public_path__

                                          /******/


                                          __webpack_require__.p = "/";
                                          /******/

                                          /******/

                                          /******/
                                          // Load entry module and return exports

                                          /******/

                                          return __webpack_require__(__webpack_require__.s = 3);
                                          /******/
                                        })(
                                        /************************************************************************/

                                        /******/
                                        {
                                          /***/
                                          "./source/js/dist/modernizr.js":
                                          /*!*************************************!*\
                                            !*** ./source/js/dist/modernizr.js ***!
                                            \*************************************/

                                          /*! no static exports found */

                                          /***/
                                          function sourceJsDistModernizrJs(module, exports) {
                                            function _typeof5(obj) {
                                              "@babel/helpers - typeof";

                                              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                _typeof5 = function _typeof5(obj) {
                                                  return typeof obj;
                                                };
                                              } else {
                                                _typeof5 = function _typeof5(obj) {
                                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                };
                                              }

                                              return _typeof5(obj);
                                            }
                                            /******/


                                            (function (modules) {
                                              // webpackBootstrap

                                              /******/
                                              // The module cache

                                              /******/
                                              var installedModules = {};
                                              /******/

                                              /******/
                                              // The require function

                                              /******/

                                              function __webpack_require__(moduleId) {
                                                /******/

                                                /******/
                                                // Check if module is in cache

                                                /******/
                                                if (installedModules[moduleId]) {
                                                  /******/
                                                  return installedModules[moduleId].exports;
                                                  /******/
                                                }
                                                /******/
                                                // Create a new module (and put it into the cache)

                                                /******/


                                                var module = installedModules[moduleId] = {
                                                  /******/
                                                  i: moduleId,

                                                  /******/
                                                  l: false,

                                                  /******/
                                                  exports: {}
                                                  /******/

                                                };
                                                /******/

                                                /******/
                                                // Execute the module function

                                                /******/

                                                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                /******/

                                                /******/
                                                // Flag the module as loaded

                                                /******/

                                                module.l = true;
                                                /******/

                                                /******/
                                                // Return the exports of the module

                                                /******/

                                                return module.exports;
                                                /******/
                                              }
                                              /******/

                                              /******/

                                              /******/
                                              // expose the modules object (__webpack_modules__)

                                              /******/


                                              __webpack_require__.m = modules;
                                              /******/

                                              /******/
                                              // expose the module cache

                                              /******/

                                              __webpack_require__.c = installedModules;
                                              /******/

                                              /******/
                                              // define getter function for harmony exports

                                              /******/

                                              __webpack_require__.d = function (exports, name, getter) {
                                                /******/
                                                if (!__webpack_require__.o(exports, name)) {
                                                  /******/
                                                  Object.defineProperty(exports, name, {
                                                    enumerable: true,
                                                    get: getter
                                                  });
                                                  /******/
                                                }
                                                /******/

                                              };
                                              /******/

                                              /******/
                                              // define __esModule on exports

                                              /******/


                                              __webpack_require__.r = function (exports) {
                                                /******/
                                                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                  /******/
                                                  Object.defineProperty(exports, Symbol.toStringTag, {
                                                    value: 'Module'
                                                  });
                                                  /******/
                                                }
                                                /******/


                                                Object.defineProperty(exports, '__esModule', {
                                                  value: true
                                                });
                                                /******/
                                              };
                                              /******/

                                              /******/
                                              // create a fake namespace object

                                              /******/
                                              // mode & 1: value is a module id, require it

                                              /******/
                                              // mode & 2: merge all properties of value into the ns

                                              /******/
                                              // mode & 4: return value when already ns object

                                              /******/
                                              // mode & 8|1: behave like require

                                              /******/


                                              __webpack_require__.t = function (value, mode) {
                                                /******/
                                                if (mode & 1) value = __webpack_require__(value);
                                                /******/

                                                if (mode & 8) return value;
                                                /******/

                                                if (mode & 4 && _typeof5(value) === 'object' && value && value.__esModule) return value;
                                                /******/

                                                var ns = Object.create(null);
                                                /******/

                                                __webpack_require__.r(ns);
                                                /******/


                                                Object.defineProperty(ns, 'default', {
                                                  enumerable: true,
                                                  value: value
                                                });
                                                /******/

                                                if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                  __webpack_require__.d(ns, key, function (key) {
                                                    return value[key];
                                                  }.bind(null, key));
                                                }
                                                /******/

                                                return ns;
                                                /******/
                                              };
                                              /******/

                                              /******/
                                              // getDefaultExport function for compatibility with non-harmony modules

                                              /******/


                                              __webpack_require__.n = function (module) {
                                                /******/
                                                var getter = module && module.__esModule ?
                                                /******/
                                                function getDefault() {
                                                  return module['default'];
                                                } :
                                                /******/
                                                function getModuleExports() {
                                                  return module;
                                                };
                                                /******/

                                                __webpack_require__.d(getter, 'a', getter);
                                                /******/


                                                return getter;
                                                /******/
                                              };
                                              /******/

                                              /******/
                                              // Object.prototype.hasOwnProperty.call

                                              /******/


                                              __webpack_require__.o = function (object, property) {
                                                return Object.prototype.hasOwnProperty.call(object, property);
                                              };
                                              /******/

                                              /******/
                                              // __webpack_public_path__

                                              /******/


                                              __webpack_require__.p = "/";
                                              /******/

                                              /******/

                                              /******/
                                              // Load entry module and return exports

                                              /******/

                                              return __webpack_require__(__webpack_require__.s = 3);
                                              /******/
                                            })(
                                            /************************************************************************/

                                            /******/
                                            {
                                              /***/
                                              "./source/js/dist/modernizr.js":
                                              /*!*************************************!*\
                                                !*** ./source/js/dist/modernizr.js ***!
                                                \*************************************/

                                              /*! no static exports found */

                                              /***/
                                              function sourceJsDistModernizrJs(module, exports) {
                                                function _typeof4(obj) {
                                                  "@babel/helpers - typeof";

                                                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                    _typeof4 = function _typeof4(obj) {
                                                      return typeof obj;
                                                    };
                                                  } else {
                                                    _typeof4 = function _typeof4(obj) {
                                                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                    };
                                                  }

                                                  return _typeof4(obj);
                                                }
                                                /******/


                                                (function (modules) {
                                                  // webpackBootstrap

                                                  /******/
                                                  // The module cache

                                                  /******/
                                                  var installedModules = {};
                                                  /******/

                                                  /******/
                                                  // The require function

                                                  /******/

                                                  function __webpack_require__(moduleId) {
                                                    /******/

                                                    /******/
                                                    // Check if module is in cache

                                                    /******/
                                                    if (installedModules[moduleId]) {
                                                      /******/
                                                      return installedModules[moduleId].exports;
                                                      /******/
                                                    }
                                                    /******/
                                                    // Create a new module (and put it into the cache)

                                                    /******/


                                                    var module = installedModules[moduleId] = {
                                                      /******/
                                                      i: moduleId,

                                                      /******/
                                                      l: false,

                                                      /******/
                                                      exports: {}
                                                      /******/

                                                    };
                                                    /******/

                                                    /******/
                                                    // Execute the module function

                                                    /******/

                                                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                    /******/

                                                    /******/
                                                    // Flag the module as loaded

                                                    /******/

                                                    module.l = true;
                                                    /******/

                                                    /******/
                                                    // Return the exports of the module

                                                    /******/

                                                    return module.exports;
                                                    /******/
                                                  }
                                                  /******/

                                                  /******/

                                                  /******/
                                                  // expose the modules object (__webpack_modules__)

                                                  /******/


                                                  __webpack_require__.m = modules;
                                                  /******/

                                                  /******/
                                                  // expose the module cache

                                                  /******/

                                                  __webpack_require__.c = installedModules;
                                                  /******/

                                                  /******/
                                                  // define getter function for harmony exports

                                                  /******/

                                                  __webpack_require__.d = function (exports, name, getter) {
                                                    /******/
                                                    if (!__webpack_require__.o(exports, name)) {
                                                      /******/
                                                      Object.defineProperty(exports, name, {
                                                        enumerable: true,
                                                        get: getter
                                                      });
                                                      /******/
                                                    }
                                                    /******/

                                                  };
                                                  /******/

                                                  /******/
                                                  // define __esModule on exports

                                                  /******/


                                                  __webpack_require__.r = function (exports) {
                                                    /******/
                                                    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                      /******/
                                                      Object.defineProperty(exports, Symbol.toStringTag, {
                                                        value: 'Module'
                                                      });
                                                      /******/
                                                    }
                                                    /******/


                                                    Object.defineProperty(exports, '__esModule', {
                                                      value: true
                                                    });
                                                    /******/
                                                  };
                                                  /******/

                                                  /******/
                                                  // create a fake namespace object

                                                  /******/
                                                  // mode & 1: value is a module id, require it

                                                  /******/
                                                  // mode & 2: merge all properties of value into the ns

                                                  /******/
                                                  // mode & 4: return value when already ns object

                                                  /******/
                                                  // mode & 8|1: behave like require

                                                  /******/


                                                  __webpack_require__.t = function (value, mode) {
                                                    /******/
                                                    if (mode & 1) value = __webpack_require__(value);
                                                    /******/

                                                    if (mode & 8) return value;
                                                    /******/

                                                    if (mode & 4 && _typeof4(value) === 'object' && value && value.__esModule) return value;
                                                    /******/

                                                    var ns = Object.create(null);
                                                    /******/

                                                    __webpack_require__.r(ns);
                                                    /******/


                                                    Object.defineProperty(ns, 'default', {
                                                      enumerable: true,
                                                      value: value
                                                    });
                                                    /******/

                                                    if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                      __webpack_require__.d(ns, key, function (key) {
                                                        return value[key];
                                                      }.bind(null, key));
                                                    }
                                                    /******/

                                                    return ns;
                                                    /******/
                                                  };
                                                  /******/

                                                  /******/
                                                  // getDefaultExport function for compatibility with non-harmony modules

                                                  /******/


                                                  __webpack_require__.n = function (module) {
                                                    /******/
                                                    var getter = module && module.__esModule ?
                                                    /******/
                                                    function getDefault() {
                                                      return module['default'];
                                                    } :
                                                    /******/
                                                    function getModuleExports() {
                                                      return module;
                                                    };
                                                    /******/

                                                    __webpack_require__.d(getter, 'a', getter);
                                                    /******/


                                                    return getter;
                                                    /******/
                                                  };
                                                  /******/

                                                  /******/
                                                  // Object.prototype.hasOwnProperty.call

                                                  /******/


                                                  __webpack_require__.o = function (object, property) {
                                                    return Object.prototype.hasOwnProperty.call(object, property);
                                                  };
                                                  /******/

                                                  /******/
                                                  // __webpack_public_path__

                                                  /******/


                                                  __webpack_require__.p = "/";
                                                  /******/

                                                  /******/

                                                  /******/
                                                  // Load entry module and return exports

                                                  /******/

                                                  return __webpack_require__(__webpack_require__.s = 3);
                                                  /******/
                                                })(
                                                /************************************************************************/

                                                /******/
                                                {
                                                  /***/
                                                  "./source/js/dist/modernizr.js":
                                                  /*!*************************************!*\
                                                    !*** ./source/js/dist/modernizr.js ***!
                                                    \*************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function sourceJsDistModernizrJs(module, exports) {
                                                    function _typeof3(obj) {
                                                      "@babel/helpers - typeof";

                                                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                        _typeof3 = function _typeof3(obj) {
                                                          return typeof obj;
                                                        };
                                                      } else {
                                                        _typeof3 = function _typeof3(obj) {
                                                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                        };
                                                      }

                                                      return _typeof3(obj);
                                                    }
                                                    /******/


                                                    (function (modules) {
                                                      // webpackBootstrap

                                                      /******/
                                                      // The module cache

                                                      /******/
                                                      var installedModules = {};
                                                      /******/

                                                      /******/
                                                      // The require function

                                                      /******/

                                                      function __webpack_require__(moduleId) {
                                                        /******/

                                                        /******/
                                                        // Check if module is in cache

                                                        /******/
                                                        if (installedModules[moduleId]) {
                                                          /******/
                                                          return installedModules[moduleId].exports;
                                                          /******/
                                                        }
                                                        /******/
                                                        // Create a new module (and put it into the cache)

                                                        /******/


                                                        var module = installedModules[moduleId] = {
                                                          /******/
                                                          i: moduleId,

                                                          /******/
                                                          l: false,

                                                          /******/
                                                          exports: {}
                                                          /******/

                                                        };
                                                        /******/

                                                        /******/
                                                        // Execute the module function

                                                        /******/

                                                        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                        /******/

                                                        /******/
                                                        // Flag the module as loaded

                                                        /******/

                                                        module.l = true;
                                                        /******/

                                                        /******/
                                                        // Return the exports of the module

                                                        /******/

                                                        return module.exports;
                                                        /******/
                                                      }
                                                      /******/

                                                      /******/

                                                      /******/
                                                      // expose the modules object (__webpack_modules__)

                                                      /******/


                                                      __webpack_require__.m = modules;
                                                      /******/

                                                      /******/
                                                      // expose the module cache

                                                      /******/

                                                      __webpack_require__.c = installedModules;
                                                      /******/

                                                      /******/
                                                      // define getter function for harmony exports

                                                      /******/

                                                      __webpack_require__.d = function (exports, name, getter) {
                                                        /******/
                                                        if (!__webpack_require__.o(exports, name)) {
                                                          /******/
                                                          Object.defineProperty(exports, name, {
                                                            enumerable: true,
                                                            get: getter
                                                          });
                                                          /******/
                                                        }
                                                        /******/

                                                      };
                                                      /******/

                                                      /******/
                                                      // define __esModule on exports

                                                      /******/


                                                      __webpack_require__.r = function (exports) {
                                                        /******/
                                                        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                          /******/
                                                          Object.defineProperty(exports, Symbol.toStringTag, {
                                                            value: 'Module'
                                                          });
                                                          /******/
                                                        }
                                                        /******/


                                                        Object.defineProperty(exports, '__esModule', {
                                                          value: true
                                                        });
                                                        /******/
                                                      };
                                                      /******/

                                                      /******/
                                                      // create a fake namespace object

                                                      /******/
                                                      // mode & 1: value is a module id, require it

                                                      /******/
                                                      // mode & 2: merge all properties of value into the ns

                                                      /******/
                                                      // mode & 4: return value when already ns object

                                                      /******/
                                                      // mode & 8|1: behave like require

                                                      /******/


                                                      __webpack_require__.t = function (value, mode) {
                                                        /******/
                                                        if (mode & 1) value = __webpack_require__(value);
                                                        /******/

                                                        if (mode & 8) return value;
                                                        /******/

                                                        if (mode & 4 && _typeof3(value) === 'object' && value && value.__esModule) return value;
                                                        /******/

                                                        var ns = Object.create(null);
                                                        /******/

                                                        __webpack_require__.r(ns);
                                                        /******/


                                                        Object.defineProperty(ns, 'default', {
                                                          enumerable: true,
                                                          value: value
                                                        });
                                                        /******/

                                                        if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                          __webpack_require__.d(ns, key, function (key) {
                                                            return value[key];
                                                          }.bind(null, key));
                                                        }
                                                        /******/

                                                        return ns;
                                                        /******/
                                                      };
                                                      /******/

                                                      /******/
                                                      // getDefaultExport function for compatibility with non-harmony modules

                                                      /******/


                                                      __webpack_require__.n = function (module) {
                                                        /******/
                                                        var getter = module && module.__esModule ?
                                                        /******/
                                                        function getDefault() {
                                                          return module['default'];
                                                        } :
                                                        /******/
                                                        function getModuleExports() {
                                                          return module;
                                                        };
                                                        /******/

                                                        __webpack_require__.d(getter, 'a', getter);
                                                        /******/


                                                        return getter;
                                                        /******/
                                                      };
                                                      /******/

                                                      /******/
                                                      // Object.prototype.hasOwnProperty.call

                                                      /******/


                                                      __webpack_require__.o = function (object, property) {
                                                        return Object.prototype.hasOwnProperty.call(object, property);
                                                      };
                                                      /******/

                                                      /******/
                                                      // __webpack_public_path__

                                                      /******/


                                                      __webpack_require__.p = "/";
                                                      /******/

                                                      /******/

                                                      /******/
                                                      // Load entry module and return exports

                                                      /******/

                                                      return __webpack_require__(__webpack_require__.s = 3);
                                                      /******/
                                                    })(
                                                    /************************************************************************/

                                                    /******/
                                                    {
                                                      /***/
                                                      "./source/js/dist/modernizr.js":
                                                      /*!*************************************!*\
                                                        !*** ./source/js/dist/modernizr.js ***!
                                                        \*************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function sourceJsDistModernizrJs(module, exports) {
                                                        function _typeof2(obj) {
                                                          "@babel/helpers - typeof";

                                                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                            _typeof2 = function _typeof2(obj) {
                                                              return typeof obj;
                                                            };
                                                          } else {
                                                            _typeof2 = function _typeof2(obj) {
                                                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                            };
                                                          }

                                                          return _typeof2(obj);
                                                        }
                                                        /******/


                                                        (function (modules) {
                                                          // webpackBootstrap

                                                          /******/
                                                          // The module cache

                                                          /******/
                                                          var installedModules = {};
                                                          /******/

                                                          /******/
                                                          // The require function

                                                          /******/

                                                          function __webpack_require__(moduleId) {
                                                            /******/

                                                            /******/
                                                            // Check if module is in cache

                                                            /******/
                                                            if (installedModules[moduleId]) {
                                                              /******/
                                                              return installedModules[moduleId].exports;
                                                              /******/
                                                            }
                                                            /******/
                                                            // Create a new module (and put it into the cache)

                                                            /******/


                                                            var module = installedModules[moduleId] = {
                                                              /******/
                                                              i: moduleId,

                                                              /******/
                                                              l: false,

                                                              /******/
                                                              exports: {}
                                                              /******/

                                                            };
                                                            /******/

                                                            /******/
                                                            // Execute the module function

                                                            /******/

                                                            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                            /******/

                                                            /******/
                                                            // Flag the module as loaded

                                                            /******/

                                                            module.l = true;
                                                            /******/

                                                            /******/
                                                            // Return the exports of the module

                                                            /******/

                                                            return module.exports;
                                                            /******/
                                                          }
                                                          /******/

                                                          /******/

                                                          /******/
                                                          // expose the modules object (__webpack_modules__)

                                                          /******/


                                                          __webpack_require__.m = modules;
                                                          /******/

                                                          /******/
                                                          // expose the module cache

                                                          /******/

                                                          __webpack_require__.c = installedModules;
                                                          /******/

                                                          /******/
                                                          // define getter function for harmony exports

                                                          /******/

                                                          __webpack_require__.d = function (exports, name, getter) {
                                                            /******/
                                                            if (!__webpack_require__.o(exports, name)) {
                                                              /******/
                                                              Object.defineProperty(exports, name, {
                                                                enumerable: true,
                                                                get: getter
                                                              });
                                                              /******/
                                                            }
                                                            /******/

                                                          };
                                                          /******/

                                                          /******/
                                                          // define __esModule on exports

                                                          /******/


                                                          __webpack_require__.r = function (exports) {
                                                            /******/
                                                            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                              /******/
                                                              Object.defineProperty(exports, Symbol.toStringTag, {
                                                                value: 'Module'
                                                              });
                                                              /******/
                                                            }
                                                            /******/


                                                            Object.defineProperty(exports, '__esModule', {
                                                              value: true
                                                            });
                                                            /******/
                                                          };
                                                          /******/

                                                          /******/
                                                          // create a fake namespace object

                                                          /******/
                                                          // mode & 1: value is a module id, require it

                                                          /******/
                                                          // mode & 2: merge all properties of value into the ns

                                                          /******/
                                                          // mode & 4: return value when already ns object

                                                          /******/
                                                          // mode & 8|1: behave like require

                                                          /******/


                                                          __webpack_require__.t = function (value, mode) {
                                                            /******/
                                                            if (mode & 1) value = __webpack_require__(value);
                                                            /******/

                                                            if (mode & 8) return value;
                                                            /******/

                                                            if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
                                                            /******/

                                                            var ns = Object.create(null);
                                                            /******/

                                                            __webpack_require__.r(ns);
                                                            /******/


                                                            Object.defineProperty(ns, 'default', {
                                                              enumerable: true,
                                                              value: value
                                                            });
                                                            /******/

                                                            if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                              __webpack_require__.d(ns, key, function (key) {
                                                                return value[key];
                                                              }.bind(null, key));
                                                            }
                                                            /******/

                                                            return ns;
                                                            /******/
                                                          };
                                                          /******/

                                                          /******/
                                                          // getDefaultExport function for compatibility with non-harmony modules

                                                          /******/


                                                          __webpack_require__.n = function (module) {
                                                            /******/
                                                            var getter = module && module.__esModule ?
                                                            /******/
                                                            function getDefault() {
                                                              return module['default'];
                                                            } :
                                                            /******/
                                                            function getModuleExports() {
                                                              return module;
                                                            };
                                                            /******/

                                                            __webpack_require__.d(getter, 'a', getter);
                                                            /******/


                                                            return getter;
                                                            /******/
                                                          };
                                                          /******/

                                                          /******/
                                                          // Object.prototype.hasOwnProperty.call

                                                          /******/


                                                          __webpack_require__.o = function (object, property) {
                                                            return Object.prototype.hasOwnProperty.call(object, property);
                                                          };
                                                          /******/

                                                          /******/
                                                          // __webpack_public_path__

                                                          /******/


                                                          __webpack_require__.p = "/";
                                                          /******/

                                                          /******/

                                                          /******/
                                                          // Load entry module and return exports

                                                          /******/

                                                          return __webpack_require__(__webpack_require__.s = 3);
                                                          /******/
                                                        })(
                                                        /************************************************************************/

                                                        /******/
                                                        {
                                                          /***/
                                                          "./source/js/modernizr.js":
                                                          /*!********************************!*\
                                                            !*** ./source/js/modernizr.js ***!
                                                            \********************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function sourceJsModernizrJs(module, exports) {
                                                            function _typeof(obj) {
                                                              "@babel/helpers - typeof";

                                                              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                _typeof = function _typeof(obj) {
                                                                  return typeof obj;
                                                                };
                                                              } else {
                                                                _typeof = function _typeof(obj) {
                                                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                };
                                                              }

                                                              return _typeof(obj);
                                                            }
                                                            /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                                                             * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                                                             */


                                                            window.Modernizr = function (a, b, c) {
                                                              function u(a) {
                                                                j.cssText = a;
                                                              }

                                                              function v(a, b) {
                                                                return u(prefixes.join(a + ';') + (b || ''));
                                                              }

                                                              function w(a, b) {
                                                                return _typeof(a) === b;
                                                              }

                                                              function x(a, b) {
                                                                return !!~('' + a).indexOf(b);
                                                              }

                                                              function y(a, b, d) {
                                                                for (var e in a) {
                                                                  var f = b[a[e]];
                                                                  if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                                                                }

                                                                return !1;
                                                              }

                                                              var d = '2.6.2',
                                                                  e = {},
                                                                  f = !0,
                                                                  g = b.documentElement,
                                                                  h = 'modernizr',
                                                                  i = b.createElement(h),
                                                                  j = i.style,
                                                                  k,
                                                                  l = {}.toString,
                                                                  m = {},
                                                                  n = {},
                                                                  o = {},
                                                                  p = [],
                                                                  q = p.slice,
                                                                  r,
                                                                  s = {}.hasOwnProperty,
                                                                  t;
                                                              !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                                                                return s.call(a, b);
                                                              } : t = function t(a, b) {
                                                                return b in a && w(a.constructor.prototype[b], 'undefined');
                                                              }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                                                                var c = this;
                                                                if (typeof c != 'function') throw new TypeError();

                                                                var d = q.call(arguments, 1),
                                                                    e = function e() {
                                                                  if (this instanceof e) {
                                                                    var a = function a() {};

                                                                    a.prototype = c.prototype;
                                                                    var f = new a(),
                                                                        g = c.apply(f, d.concat(q.call(arguments)));
                                                                    return Object(g) === g ? g : f;
                                                                  }

                                                                  return c.apply(b, d.concat(q.call(arguments)));
                                                                };

                                                                return e;
                                                              });

                                                              for (var z in m) {
                                                                t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                                                              }

                                                              return e.addTest = function (a, b) {
                                                                if (_typeof(a) == 'object') for (var d in a) {
                                                                  t(a, d) && e.addTest(d, a[d]);
                                                                } else {
                                                                  a = a.toLowerCase();
                                                                  if (e[a] !== c) return e;
                                                                  b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                                                                }
                                                                return e;
                                                              }, u(''), i = k = null, function (a, b) {
                                                                function k(a, b) {
                                                                  var c = a.createElement('p'),
                                                                      d = a.getElementsByTagName('head')[0] || a.documentElement;
                                                                  return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                                                                }

                                                                function l() {
                                                                  var a = r.elements;
                                                                  return typeof a == 'string' ? a.split(' ') : a;
                                                                }

                                                                function m(a) {
                                                                  var b = i[a[g]];
                                                                  return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                                                                }

                                                                function n(a, c, f) {
                                                                  c || (c = b);
                                                                  if (j) return c.createElement(a);
                                                                  f || (f = m(c));
                                                                  var g;
                                                                  return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                                                                }

                                                                function o(a, c) {
                                                                  a || (a = b);
                                                                  if (j) return a.createDocumentFragment();
                                                                  c = c || m(a);
                                                                  var d = c.frag.cloneNode(),
                                                                      e = 0,
                                                                      f = l(),
                                                                      g = f.length;

                                                                  for (; e < g; e++) {
                                                                    d.createElement(f[e]);
                                                                  }

                                                                  return d;
                                                                }

                                                                function p(a, b) {
                                                                  b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                                                                    return r.shivMethods ? n(c, a, b) : b.createElem(c);
                                                                  }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                                                                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                                                  }) + ');return n}')(r, b.frag);
                                                                }

                                                                function q(a) {
                                                                  a || (a = b);
                                                                  var c = m(a);
                                                                  return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                                                                }

                                                                var c = a.html5 || {},
                                                                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                                                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                                                    f,
                                                                    g = '_html5shiv',
                                                                    h = 0,
                                                                    i = {},
                                                                    j;

                                                                (function () {
                                                                  try {
                                                                    var a = b.createElement('a');
                                                                    a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                                                                      b.createElement('a');
                                                                      var a = b.createDocumentFragment();
                                                                      return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                                                                    }();
                                                                  } catch (c) {
                                                                    f = !0, j = !0;
                                                                  }
                                                                })();

                                                                var r = {
                                                                  elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                                                                  shivCSS: c.shivCSS !== !1,
                                                                  supportsUnknownElements: j,
                                                                  shivMethods: c.shivMethods !== !1,
                                                                  type: 'default',
                                                                  shivDocument: q,
                                                                  createElement: n,
                                                                  createDocumentFragment: o
                                                                };
                                                                a.html5 = r, q(b);
                                                              }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                                                            }(this, this.document), function (a, b, c) {
                                                              function d(a) {
                                                                return '[object Function]' == o.call(a);
                                                              }

                                                              function e(a) {
                                                                return 'string' == typeof a;
                                                              }

                                                              function f() {}

                                                              function g(a) {
                                                                return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                                                              }

                                                              function h() {
                                                                var a = p.shift();
                                                                q = 1, a ? a.t ? m(function () {
                                                                  ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                                                                }, 0) : (a(), h()) : q = 0;
                                                              }

                                                              function i(a, c, d, e, f, i, j) {
                                                                function k(b) {
                                                                  if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                                                                    'img' != a && m(function () {
                                                                      t.removeChild(l);
                                                                    }, 50);

                                                                    for (var d in y[c]) {
                                                                      y[c].hasOwnProperty(d) && y[c][d].onload();
                                                                    }
                                                                  }
                                                                }

                                                                var j = j || _B.errorTimeout,
                                                                    l = b.createElement(a),
                                                                    o = 0,
                                                                    r = 0,
                                                                    u = {
                                                                  t: d,
                                                                  s: c,
                                                                  e: f,
                                                                  a: i,
                                                                  x: j
                                                                };
                                                                1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                                                                  k.call(this, r);
                                                                }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                                                              }

                                                              function j(a, b, c, d, f) {
                                                                return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                                                              }

                                                              function k() {
                                                                var a = _B;
                                                                return a.loader = {
                                                                  load: j,
                                                                  i: 0
                                                                }, a;
                                                              }

                                                              var l = b.documentElement,
                                                                  m = a.setTimeout,
                                                                  n = b.getElementsByTagName('script')[0],
                                                                  o = {}.toString,
                                                                  p = [],
                                                                  q = 0,
                                                                  r = ('MozAppearance' in l.style),
                                                                  s = r && !!b.createRange().compareNode,
                                                                  t = s ? l : n.parentNode,
                                                                  l = a.opera && '[object Opera]' == o.call(a.opera),
                                                                  l = !!b.attachEvent && !l,
                                                                  u = r ? 'object' : l ? 'script' : 'img',
                                                                  v = l ? 'script' : u,
                                                                  w = Array.isArray || function (a) {
                                                                return '[object Array]' == o.call(a);
                                                              },
                                                                  x = [],
                                                                  y = {},
                                                                  z = {
                                                                timeout: function timeout(a, b) {
                                                                  return b.length && (a.timeout = b[0]), a;
                                                                }
                                                              },
                                                                  _A,
                                                                  _B;

                                                              _B = function B(a) {
                                                                function b(a) {
                                                                  var a = a.split('!'),
                                                                      b = x.length,
                                                                      c = a.pop(),
                                                                      d = a.length,
                                                                      c = {
                                                                    url: c,
                                                                    origUrl: c,
                                                                    prefixes: a
                                                                  },
                                                                      e,
                                                                      f,
                                                                      g;

                                                                  for (f = 0; f < d; f++) {
                                                                    g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                                                                  }

                                                                  for (f = 0; f < b; f++) {
                                                                    c = x[f](c);
                                                                  }

                                                                  return c;
                                                                }

                                                                function g(a, e, f, g, h) {
                                                                  var i = b(a),
                                                                      j = i.autoCallback;
                                                                  i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                                                                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                                                                  })));
                                                                }

                                                                function h(a, b) {
                                                                  function c(a, c) {
                                                                    if (a) {
                                                                      if (e(a)) c || (j = function j() {
                                                                        var a = [].slice.call(arguments);
                                                                        k.apply(this, a), l();
                                                                      }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                                                        var b = 0,
                                                                            c;

                                                                        for (c in a) {
                                                                          a.hasOwnProperty(c) && b++;
                                                                        }

                                                                        return b;
                                                                      }(), a) {
                                                                        a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                                                          var a = [].slice.call(arguments);
                                                                          k.apply(this, a), l();
                                                                        } : j[n] = function (a) {
                                                                          return function () {
                                                                            var b = [].slice.call(arguments);
                                                                            a && a.apply(this, b), l();
                                                                          };
                                                                        }(k[n])), g(a[n], j, b, n, h));
                                                                      }
                                                                    } else !c && l();
                                                                  }

                                                                  var h = !!a.test,
                                                                      i = a.load || a.both,
                                                                      j = a.callback || f,
                                                                      k = j,
                                                                      l = a.complete || f,
                                                                      m,
                                                                      n;
                                                                  c(h ? a.yep : a.nope, !!i), i && c(i);
                                                                }

                                                                var i,
                                                                    j,
                                                                    l = this.yepnope.loader;
                                                                if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                                                                  j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                                                                } else Object(a) === a && h(a, l);
                                                              }, _B.addPrefix = function (a, b) {
                                                                z[a] = b;
                                                              }, _B.addFilter = function (a) {
                                                                x.push(a);
                                                              }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                                                                b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                                                              }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                                                                var k = b.createElement('script'),
                                                                    l,
                                                                    o,
                                                                    e = e || _B.errorTimeout;
                                                                k.src = a;

                                                                for (o in d) {
                                                                  k.setAttribute(o, d[o]);
                                                                }

                                                                c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                                                                  !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                                                                }, m(function () {
                                                                  l || (l = 1, c(1));
                                                                }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                                                              }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                                                                var e = b.createElement('link'),
                                                                    j,
                                                                    c = i ? h : c || f;
                                                                e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                                                                for (j in d) {
                                                                  e.setAttribute(j, d[j]);
                                                                }

                                                                g || (n.parentNode.insertBefore(e, n), m(c, 0));
                                                              };
                                                            }(this, document), Modernizr.load = function () {
                                                              yepnope.apply(window, [].slice.call(arguments, 0));
                                                            };
                                                            /***/
                                                          },

                                                          /***/
                                                          3:
                                                          /*!**************************************!*\
                                                            !*** multi ./source/js/modernizr.js ***!
                                                            \**************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function _(module, exports, __webpack_require__) {
                                                            module.exports = __webpack_require__(
                                                            /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                                                            "./source/js/modernizr.js");
                                                            /***/
                                                          }
                                                          /******/

                                                        });
                                                        /***/

                                                      },

                                                      /***/
                                                      "./source/js/modernizr.js":
                                                      /*!********************************!*\
                                                        !*** ./source/js/modernizr.js ***!
                                                        \********************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function sourceJsModernizrJs(module, exports) {
                                                        function _typeof(obj) {
                                                          "@babel/helpers - typeof";

                                                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                            _typeof = function _typeof(obj) {
                                                              return typeof obj;
                                                            };
                                                          } else {
                                                            _typeof = function _typeof(obj) {
                                                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                            };
                                                          }

                                                          return _typeof(obj);
                                                        }
                                                        /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                                                         * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                                                         */


                                                        window.Modernizr = function (a, b, c) {
                                                          function u(a) {
                                                            j.cssText = a;
                                                          }

                                                          function v(a, b) {
                                                            return u(prefixes.join(a + ';') + (b || ''));
                                                          }

                                                          function w(a, b) {
                                                            return _typeof(a) === b;
                                                          }

                                                          function x(a, b) {
                                                            return !!~('' + a).indexOf(b);
                                                          }

                                                          function y(a, b, d) {
                                                            for (var e in a) {
                                                              var f = b[a[e]];
                                                              if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                                                            }

                                                            return !1;
                                                          }

                                                          var d = '2.6.2',
                                                              e = {},
                                                              f = !0,
                                                              g = b.documentElement,
                                                              h = 'modernizr',
                                                              i = b.createElement(h),
                                                              j = i.style,
                                                              k,
                                                              l = {}.toString,
                                                              m = {},
                                                              n = {},
                                                              o = {},
                                                              p = [],
                                                              q = p.slice,
                                                              r,
                                                              s = {}.hasOwnProperty,
                                                              t;
                                                          !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                                                            return s.call(a, b);
                                                          } : t = function t(a, b) {
                                                            return b in a && w(a.constructor.prototype[b], 'undefined');
                                                          }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                                                            var c = this;
                                                            if (typeof c != 'function') throw new TypeError();

                                                            var d = q.call(arguments, 1),
                                                                e = function e() {
                                                              if (this instanceof e) {
                                                                var a = function a() {};

                                                                a.prototype = c.prototype;
                                                                var f = new a(),
                                                                    g = c.apply(f, d.concat(q.call(arguments)));
                                                                return Object(g) === g ? g : f;
                                                              }

                                                              return c.apply(b, d.concat(q.call(arguments)));
                                                            };

                                                            return e;
                                                          });

                                                          for (var z in m) {
                                                            t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                                                          }

                                                          return e.addTest = function (a, b) {
                                                            if (_typeof(a) == 'object') for (var d in a) {
                                                              t(a, d) && e.addTest(d, a[d]);
                                                            } else {
                                                              a = a.toLowerCase();
                                                              if (e[a] !== c) return e;
                                                              b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                                                            }
                                                            return e;
                                                          }, u(''), i = k = null, function (a, b) {
                                                            function k(a, b) {
                                                              var c = a.createElement('p'),
                                                                  d = a.getElementsByTagName('head')[0] || a.documentElement;
                                                              return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                                                            }

                                                            function l() {
                                                              var a = r.elements;
                                                              return typeof a == 'string' ? a.split(' ') : a;
                                                            }

                                                            function m(a) {
                                                              var b = i[a[g]];
                                                              return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                                                            }

                                                            function n(a, c, f) {
                                                              c || (c = b);
                                                              if (j) return c.createElement(a);
                                                              f || (f = m(c));
                                                              var g;
                                                              return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                                                            }

                                                            function o(a, c) {
                                                              a || (a = b);
                                                              if (j) return a.createDocumentFragment();
                                                              c = c || m(a);
                                                              var d = c.frag.cloneNode(),
                                                                  e = 0,
                                                                  f = l(),
                                                                  g = f.length;

                                                              for (; e < g; e++) {
                                                                d.createElement(f[e]);
                                                              }

                                                              return d;
                                                            }

                                                            function p(a, b) {
                                                              b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                                                                return r.shivMethods ? n(c, a, b) : b.createElem(c);
                                                              }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                                                                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                                              }) + ');return n}')(r, b.frag);
                                                            }

                                                            function q(a) {
                                                              a || (a = b);
                                                              var c = m(a);
                                                              return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                                                            }

                                                            var c = a.html5 || {},
                                                                d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                                                e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                                                f,
                                                                g = '_html5shiv',
                                                                h = 0,
                                                                i = {},
                                                                j;

                                                            (function () {
                                                              try {
                                                                var a = b.createElement('a');
                                                                a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                                                                  b.createElement('a');
                                                                  var a = b.createDocumentFragment();
                                                                  return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                                                                }();
                                                              } catch (c) {
                                                                f = !0, j = !0;
                                                              }
                                                            })();

                                                            var r = {
                                                              elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                                                              shivCSS: c.shivCSS !== !1,
                                                              supportsUnknownElements: j,
                                                              shivMethods: c.shivMethods !== !1,
                                                              type: 'default',
                                                              shivDocument: q,
                                                              createElement: n,
                                                              createDocumentFragment: o
                                                            };
                                                            a.html5 = r, q(b);
                                                          }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                                                        }(this, this.document), function (a, b, c) {
                                                          function d(a) {
                                                            return '[object Function]' == o.call(a);
                                                          }

                                                          function e(a) {
                                                            return 'string' == typeof a;
                                                          }

                                                          function f() {}

                                                          function g(a) {
                                                            return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                                                          }

                                                          function h() {
                                                            var a = p.shift();
                                                            q = 1, a ? a.t ? m(function () {
                                                              ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                                                            }, 0) : (a(), h()) : q = 0;
                                                          }

                                                          function i(a, c, d, e, f, i, j) {
                                                            function k(b) {
                                                              if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                                                                'img' != a && m(function () {
                                                                  t.removeChild(l);
                                                                }, 50);

                                                                for (var d in y[c]) {
                                                                  y[c].hasOwnProperty(d) && y[c][d].onload();
                                                                }
                                                              }
                                                            }

                                                            var j = j || _B.errorTimeout,
                                                                l = b.createElement(a),
                                                                o = 0,
                                                                r = 0,
                                                                u = {
                                                              t: d,
                                                              s: c,
                                                              e: f,
                                                              a: i,
                                                              x: j
                                                            };
                                                            1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                                                              k.call(this, r);
                                                            }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                                                          }

                                                          function j(a, b, c, d, f) {
                                                            return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                                                          }

                                                          function k() {
                                                            var a = _B;
                                                            return a.loader = {
                                                              load: j,
                                                              i: 0
                                                            }, a;
                                                          }

                                                          var l = b.documentElement,
                                                              m = a.setTimeout,
                                                              n = b.getElementsByTagName('script')[0],
                                                              o = {}.toString,
                                                              p = [],
                                                              q = 0,
                                                              r = ('MozAppearance' in l.style),
                                                              s = r && !!b.createRange().compareNode,
                                                              t = s ? l : n.parentNode,
                                                              l = a.opera && '[object Opera]' == o.call(a.opera),
                                                              l = !!b.attachEvent && !l,
                                                              u = r ? 'object' : l ? 'script' : 'img',
                                                              v = l ? 'script' : u,
                                                              w = Array.isArray || function (a) {
                                                            return '[object Array]' == o.call(a);
                                                          },
                                                              x = [],
                                                              y = {},
                                                              z = {
                                                            timeout: function timeout(a, b) {
                                                              return b.length && (a.timeout = b[0]), a;
                                                            }
                                                          },
                                                              _A,
                                                              _B;

                                                          _B = function B(a) {
                                                            function b(a) {
                                                              var a = a.split('!'),
                                                                  b = x.length,
                                                                  c = a.pop(),
                                                                  d = a.length,
                                                                  c = {
                                                                url: c,
                                                                origUrl: c,
                                                                prefixes: a
                                                              },
                                                                  e,
                                                                  f,
                                                                  g;

                                                              for (f = 0; f < d; f++) {
                                                                g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                                                              }

                                                              for (f = 0; f < b; f++) {
                                                                c = x[f](c);
                                                              }

                                                              return c;
                                                            }

                                                            function g(a, e, f, g, h) {
                                                              var i = b(a),
                                                                  j = i.autoCallback;
                                                              i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                                                                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                                                              })));
                                                            }

                                                            function h(a, b) {
                                                              function c(a, c) {
                                                                if (a) {
                                                                  if (e(a)) c || (j = function j() {
                                                                    var a = [].slice.call(arguments);
                                                                    k.apply(this, a), l();
                                                                  }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                                                    var b = 0,
                                                                        c;

                                                                    for (c in a) {
                                                                      a.hasOwnProperty(c) && b++;
                                                                    }

                                                                    return b;
                                                                  }(), a) {
                                                                    a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                                                      var a = [].slice.call(arguments);
                                                                      k.apply(this, a), l();
                                                                    } : j[n] = function (a) {
                                                                      return function () {
                                                                        var b = [].slice.call(arguments);
                                                                        a && a.apply(this, b), l();
                                                                      };
                                                                    }(k[n])), g(a[n], j, b, n, h));
                                                                  }
                                                                } else !c && l();
                                                              }

                                                              var h = !!a.test,
                                                                  i = a.load || a.both,
                                                                  j = a.callback || f,
                                                                  k = j,
                                                                  l = a.complete || f,
                                                                  m,
                                                                  n;
                                                              c(h ? a.yep : a.nope, !!i), i && c(i);
                                                            }

                                                            var i,
                                                                j,
                                                                l = this.yepnope.loader;
                                                            if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                                                              j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                                                            } else Object(a) === a && h(a, l);
                                                          }, _B.addPrefix = function (a, b) {
                                                            z[a] = b;
                                                          }, _B.addFilter = function (a) {
                                                            x.push(a);
                                                          }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                                                            b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                                                          }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                                                            var k = b.createElement('script'),
                                                                l,
                                                                o,
                                                                e = e || _B.errorTimeout;
                                                            k.src = a;

                                                            for (o in d) {
                                                              k.setAttribute(o, d[o]);
                                                            }

                                                            c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                                                              !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                                                            }, m(function () {
                                                              l || (l = 1, c(1));
                                                            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                                                          }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                                                            var e = b.createElement('link'),
                                                                j,
                                                                c = i ? h : c || f;
                                                            e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                                                            for (j in d) {
                                                              e.setAttribute(j, d[j]);
                                                            }

                                                            g || (n.parentNode.insertBefore(e, n), m(c, 0));
                                                          };
                                                        }(this, document), Modernizr.load = function () {
                                                          yepnope.apply(window, [].slice.call(arguments, 0));
                                                        };
                                                        /***/
                                                      },

                                                      /***/
                                                      3:
                                                      /*!********************************************************************!*\
                                                        !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                                                        \********************************************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function _(module, exports, __webpack_require__) {
                                                        __webpack_require__(
                                                        /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                                                        "./source/js/modernizr.js");

                                                        module.exports = __webpack_require__(
                                                        /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                                                        "./source/js/dist/modernizr.js");
                                                        /***/
                                                      }
                                                      /******/

                                                    });
                                                    /***/

                                                  },

                                                  /***/
                                                  "./source/js/modernizr.js":
                                                  /*!********************************!*\
                                                    !*** ./source/js/modernizr.js ***!
                                                    \********************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function sourceJsModernizrJs(module, exports) {
                                                    function _typeof(obj) {
                                                      "@babel/helpers - typeof";

                                                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                        _typeof = function _typeof(obj) {
                                                          return typeof obj;
                                                        };
                                                      } else {
                                                        _typeof = function _typeof(obj) {
                                                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                        };
                                                      }

                                                      return _typeof(obj);
                                                    }
                                                    /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                                                     * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                                                     */


                                                    window.Modernizr = function (a, b, c) {
                                                      function u(a) {
                                                        j.cssText = a;
                                                      }

                                                      function v(a, b) {
                                                        return u(prefixes.join(a + ';') + (b || ''));
                                                      }

                                                      function w(a, b) {
                                                        return _typeof(a) === b;
                                                      }

                                                      function x(a, b) {
                                                        return !!~('' + a).indexOf(b);
                                                      }

                                                      function y(a, b, d) {
                                                        for (var e in a) {
                                                          var f = b[a[e]];
                                                          if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                                                        }

                                                        return !1;
                                                      }

                                                      var d = '2.6.2',
                                                          e = {},
                                                          f = !0,
                                                          g = b.documentElement,
                                                          h = 'modernizr',
                                                          i = b.createElement(h),
                                                          j = i.style,
                                                          k,
                                                          l = {}.toString,
                                                          m = {},
                                                          n = {},
                                                          o = {},
                                                          p = [],
                                                          q = p.slice,
                                                          r,
                                                          s = {}.hasOwnProperty,
                                                          t;
                                                      !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                                                        return s.call(a, b);
                                                      } : t = function t(a, b) {
                                                        return b in a && w(a.constructor.prototype[b], 'undefined');
                                                      }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                                                        var c = this;
                                                        if (typeof c != 'function') throw new TypeError();

                                                        var d = q.call(arguments, 1),
                                                            e = function e() {
                                                          if (this instanceof e) {
                                                            var a = function a() {};

                                                            a.prototype = c.prototype;
                                                            var f = new a(),
                                                                g = c.apply(f, d.concat(q.call(arguments)));
                                                            return Object(g) === g ? g : f;
                                                          }

                                                          return c.apply(b, d.concat(q.call(arguments)));
                                                        };

                                                        return e;
                                                      });

                                                      for (var z in m) {
                                                        t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                                                      }

                                                      return e.addTest = function (a, b) {
                                                        if (_typeof(a) == 'object') for (var d in a) {
                                                          t(a, d) && e.addTest(d, a[d]);
                                                        } else {
                                                          a = a.toLowerCase();
                                                          if (e[a] !== c) return e;
                                                          b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                                                        }
                                                        return e;
                                                      }, u(''), i = k = null, function (a, b) {
                                                        function k(a, b) {
                                                          var c = a.createElement('p'),
                                                              d = a.getElementsByTagName('head')[0] || a.documentElement;
                                                          return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                                                        }

                                                        function l() {
                                                          var a = r.elements;
                                                          return typeof a == 'string' ? a.split(' ') : a;
                                                        }

                                                        function m(a) {
                                                          var b = i[a[g]];
                                                          return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                                                        }

                                                        function n(a, c, f) {
                                                          c || (c = b);
                                                          if (j) return c.createElement(a);
                                                          f || (f = m(c));
                                                          var g;
                                                          return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                                                        }

                                                        function o(a, c) {
                                                          a || (a = b);
                                                          if (j) return a.createDocumentFragment();
                                                          c = c || m(a);
                                                          var d = c.frag.cloneNode(),
                                                              e = 0,
                                                              f = l(),
                                                              g = f.length;

                                                          for (; e < g; e++) {
                                                            d.createElement(f[e]);
                                                          }

                                                          return d;
                                                        }

                                                        function p(a, b) {
                                                          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                                                            return r.shivMethods ? n(c, a, b) : b.createElem(c);
                                                          }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                                                            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                                          }) + ');return n}')(r, b.frag);
                                                        }

                                                        function q(a) {
                                                          a || (a = b);
                                                          var c = m(a);
                                                          return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                                                        }

                                                        var c = a.html5 || {},
                                                            d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                                            e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                                            f,
                                                            g = '_html5shiv',
                                                            h = 0,
                                                            i = {},
                                                            j;

                                                        (function () {
                                                          try {
                                                            var a = b.createElement('a');
                                                            a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                                                              b.createElement('a');
                                                              var a = b.createDocumentFragment();
                                                              return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                                                            }();
                                                          } catch (c) {
                                                            f = !0, j = !0;
                                                          }
                                                        })();

                                                        var r = {
                                                          elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                                                          shivCSS: c.shivCSS !== !1,
                                                          supportsUnknownElements: j,
                                                          shivMethods: c.shivMethods !== !1,
                                                          type: 'default',
                                                          shivDocument: q,
                                                          createElement: n,
                                                          createDocumentFragment: o
                                                        };
                                                        a.html5 = r, q(b);
                                                      }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                                                    }(this, this.document), function (a, b, c) {
                                                      function d(a) {
                                                        return '[object Function]' == o.call(a);
                                                      }

                                                      function e(a) {
                                                        return 'string' == typeof a;
                                                      }

                                                      function f() {}

                                                      function g(a) {
                                                        return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                                                      }

                                                      function h() {
                                                        var a = p.shift();
                                                        q = 1, a ? a.t ? m(function () {
                                                          ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                                                        }, 0) : (a(), h()) : q = 0;
                                                      }

                                                      function i(a, c, d, e, f, i, j) {
                                                        function k(b) {
                                                          if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                                                            'img' != a && m(function () {
                                                              t.removeChild(l);
                                                            }, 50);

                                                            for (var d in y[c]) {
                                                              y[c].hasOwnProperty(d) && y[c][d].onload();
                                                            }
                                                          }
                                                        }

                                                        var j = j || _B.errorTimeout,
                                                            l = b.createElement(a),
                                                            o = 0,
                                                            r = 0,
                                                            u = {
                                                          t: d,
                                                          s: c,
                                                          e: f,
                                                          a: i,
                                                          x: j
                                                        };
                                                        1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                                                          k.call(this, r);
                                                        }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                                                      }

                                                      function j(a, b, c, d, f) {
                                                        return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                                                      }

                                                      function k() {
                                                        var a = _B;
                                                        return a.loader = {
                                                          load: j,
                                                          i: 0
                                                        }, a;
                                                      }

                                                      var l = b.documentElement,
                                                          m = a.setTimeout,
                                                          n = b.getElementsByTagName('script')[0],
                                                          o = {}.toString,
                                                          p = [],
                                                          q = 0,
                                                          r = ('MozAppearance' in l.style),
                                                          s = r && !!b.createRange().compareNode,
                                                          t = s ? l : n.parentNode,
                                                          l = a.opera && '[object Opera]' == o.call(a.opera),
                                                          l = !!b.attachEvent && !l,
                                                          u = r ? 'object' : l ? 'script' : 'img',
                                                          v = l ? 'script' : u,
                                                          w = Array.isArray || function (a) {
                                                        return '[object Array]' == o.call(a);
                                                      },
                                                          x = [],
                                                          y = {},
                                                          z = {
                                                        timeout: function timeout(a, b) {
                                                          return b.length && (a.timeout = b[0]), a;
                                                        }
                                                      },
                                                          _A,
                                                          _B;

                                                      _B = function B(a) {
                                                        function b(a) {
                                                          var a = a.split('!'),
                                                              b = x.length,
                                                              c = a.pop(),
                                                              d = a.length,
                                                              c = {
                                                            url: c,
                                                            origUrl: c,
                                                            prefixes: a
                                                          },
                                                              e,
                                                              f,
                                                              g;

                                                          for (f = 0; f < d; f++) {
                                                            g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                                                          }

                                                          for (f = 0; f < b; f++) {
                                                            c = x[f](c);
                                                          }

                                                          return c;
                                                        }

                                                        function g(a, e, f, g, h) {
                                                          var i = b(a),
                                                              j = i.autoCallback;
                                                          i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                                                            k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                                                          })));
                                                        }

                                                        function h(a, b) {
                                                          function c(a, c) {
                                                            if (a) {
                                                              if (e(a)) c || (j = function j() {
                                                                var a = [].slice.call(arguments);
                                                                k.apply(this, a), l();
                                                              }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                                                var b = 0,
                                                                    c;

                                                                for (c in a) {
                                                                  a.hasOwnProperty(c) && b++;
                                                                }

                                                                return b;
                                                              }(), a) {
                                                                a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                                                  var a = [].slice.call(arguments);
                                                                  k.apply(this, a), l();
                                                                } : j[n] = function (a) {
                                                                  return function () {
                                                                    var b = [].slice.call(arguments);
                                                                    a && a.apply(this, b), l();
                                                                  };
                                                                }(k[n])), g(a[n], j, b, n, h));
                                                              }
                                                            } else !c && l();
                                                          }

                                                          var h = !!a.test,
                                                              i = a.load || a.both,
                                                              j = a.callback || f,
                                                              k = j,
                                                              l = a.complete || f,
                                                              m,
                                                              n;
                                                          c(h ? a.yep : a.nope, !!i), i && c(i);
                                                        }

                                                        var i,
                                                            j,
                                                            l = this.yepnope.loader;
                                                        if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                                                          j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                                                        } else Object(a) === a && h(a, l);
                                                      }, _B.addPrefix = function (a, b) {
                                                        z[a] = b;
                                                      }, _B.addFilter = function (a) {
                                                        x.push(a);
                                                      }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                                                        b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                                                      }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                                                        var k = b.createElement('script'),
                                                            l,
                                                            o,
                                                            e = e || _B.errorTimeout;
                                                        k.src = a;

                                                        for (o in d) {
                                                          k.setAttribute(o, d[o]);
                                                        }

                                                        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                                                          !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                                                        }, m(function () {
                                                          l || (l = 1, c(1));
                                                        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                                                      }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                                                        var e = b.createElement('link'),
                                                            j,
                                                            c = i ? h : c || f;
                                                        e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                                                        for (j in d) {
                                                          e.setAttribute(j, d[j]);
                                                        }

                                                        g || (n.parentNode.insertBefore(e, n), m(c, 0));
                                                      };
                                                    }(this, document), Modernizr.load = function () {
                                                      yepnope.apply(window, [].slice.call(arguments, 0));
                                                    };
                                                    /***/
                                                  },

                                                  /***/
                                                  3:
                                                  /*!********************************************************************!*\
                                                    !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                                                    \********************************************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function _(module, exports, __webpack_require__) {
                                                    __webpack_require__(
                                                    /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                                                    "./source/js/modernizr.js");

                                                    module.exports = __webpack_require__(
                                                    /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                                                    "./source/js/dist/modernizr.js");
                                                    /***/
                                                  }
                                                  /******/

                                                });
                                                /***/

                                              },

                                              /***/
                                              "./source/js/modernizr.js":
                                              /*!********************************!*\
                                                !*** ./source/js/modernizr.js ***!
                                                \********************************/

                                              /*! no static exports found */

                                              /***/
                                              function sourceJsModernizrJs(module, exports) {
                                                function _typeof(obj) {
                                                  "@babel/helpers - typeof";

                                                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                    _typeof = function _typeof(obj) {
                                                      return typeof obj;
                                                    };
                                                  } else {
                                                    _typeof = function _typeof(obj) {
                                                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                    };
                                                  }

                                                  return _typeof(obj);
                                                }
                                                /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                                                 * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                                                 */


                                                window.Modernizr = function (a, b, c) {
                                                  function u(a) {
                                                    j.cssText = a;
                                                  }

                                                  function v(a, b) {
                                                    return u(prefixes.join(a + ';') + (b || ''));
                                                  }

                                                  function w(a, b) {
                                                    return _typeof(a) === b;
                                                  }

                                                  function x(a, b) {
                                                    return !!~('' + a).indexOf(b);
                                                  }

                                                  function y(a, b, d) {
                                                    for (var e in a) {
                                                      var f = b[a[e]];
                                                      if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                                                    }

                                                    return !1;
                                                  }

                                                  var d = '2.6.2',
                                                      e = {},
                                                      f = !0,
                                                      g = b.documentElement,
                                                      h = 'modernizr',
                                                      i = b.createElement(h),
                                                      j = i.style,
                                                      k,
                                                      l = {}.toString,
                                                      m = {},
                                                      n = {},
                                                      o = {},
                                                      p = [],
                                                      q = p.slice,
                                                      r,
                                                      s = {}.hasOwnProperty,
                                                      t;
                                                  !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                                                    return s.call(a, b);
                                                  } : t = function t(a, b) {
                                                    return b in a && w(a.constructor.prototype[b], 'undefined');
                                                  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                                                    var c = this;
                                                    if (typeof c != 'function') throw new TypeError();

                                                    var d = q.call(arguments, 1),
                                                        e = function e() {
                                                      if (this instanceof e) {
                                                        var a = function a() {};

                                                        a.prototype = c.prototype;
                                                        var f = new a(),
                                                            g = c.apply(f, d.concat(q.call(arguments)));
                                                        return Object(g) === g ? g : f;
                                                      }

                                                      return c.apply(b, d.concat(q.call(arguments)));
                                                    };

                                                    return e;
                                                  });

                                                  for (var z in m) {
                                                    t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                                                  }

                                                  return e.addTest = function (a, b) {
                                                    if (_typeof(a) == 'object') for (var d in a) {
                                                      t(a, d) && e.addTest(d, a[d]);
                                                    } else {
                                                      a = a.toLowerCase();
                                                      if (e[a] !== c) return e;
                                                      b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                                                    }
                                                    return e;
                                                  }, u(''), i = k = null, function (a, b) {
                                                    function k(a, b) {
                                                      var c = a.createElement('p'),
                                                          d = a.getElementsByTagName('head')[0] || a.documentElement;
                                                      return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                                                    }

                                                    function l() {
                                                      var a = r.elements;
                                                      return typeof a == 'string' ? a.split(' ') : a;
                                                    }

                                                    function m(a) {
                                                      var b = i[a[g]];
                                                      return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                                                    }

                                                    function n(a, c, f) {
                                                      c || (c = b);
                                                      if (j) return c.createElement(a);
                                                      f || (f = m(c));
                                                      var g;
                                                      return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                                                    }

                                                    function o(a, c) {
                                                      a || (a = b);
                                                      if (j) return a.createDocumentFragment();
                                                      c = c || m(a);
                                                      var d = c.frag.cloneNode(),
                                                          e = 0,
                                                          f = l(),
                                                          g = f.length;

                                                      for (; e < g; e++) {
                                                        d.createElement(f[e]);
                                                      }

                                                      return d;
                                                    }

                                                    function p(a, b) {
                                                      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                                                        return r.shivMethods ? n(c, a, b) : b.createElem(c);
                                                      }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                                                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                                      }) + ');return n}')(r, b.frag);
                                                    }

                                                    function q(a) {
                                                      a || (a = b);
                                                      var c = m(a);
                                                      return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                                                    }

                                                    var c = a.html5 || {},
                                                        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                                        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                                        f,
                                                        g = '_html5shiv',
                                                        h = 0,
                                                        i = {},
                                                        j;

                                                    (function () {
                                                      try {
                                                        var a = b.createElement('a');
                                                        a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                                                          b.createElement('a');
                                                          var a = b.createDocumentFragment();
                                                          return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                                                        }();
                                                      } catch (c) {
                                                        f = !0, j = !0;
                                                      }
                                                    })();

                                                    var r = {
                                                      elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                                                      shivCSS: c.shivCSS !== !1,
                                                      supportsUnknownElements: j,
                                                      shivMethods: c.shivMethods !== !1,
                                                      type: 'default',
                                                      shivDocument: q,
                                                      createElement: n,
                                                      createDocumentFragment: o
                                                    };
                                                    a.html5 = r, q(b);
                                                  }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                                                }(this, this.document), function (a, b, c) {
                                                  function d(a) {
                                                    return '[object Function]' == o.call(a);
                                                  }

                                                  function e(a) {
                                                    return 'string' == typeof a;
                                                  }

                                                  function f() {}

                                                  function g(a) {
                                                    return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                                                  }

                                                  function h() {
                                                    var a = p.shift();
                                                    q = 1, a ? a.t ? m(function () {
                                                      ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                                                    }, 0) : (a(), h()) : q = 0;
                                                  }

                                                  function i(a, c, d, e, f, i, j) {
                                                    function k(b) {
                                                      if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                                                        'img' != a && m(function () {
                                                          t.removeChild(l);
                                                        }, 50);

                                                        for (var d in y[c]) {
                                                          y[c].hasOwnProperty(d) && y[c][d].onload();
                                                        }
                                                      }
                                                    }

                                                    var j = j || _B.errorTimeout,
                                                        l = b.createElement(a),
                                                        o = 0,
                                                        r = 0,
                                                        u = {
                                                      t: d,
                                                      s: c,
                                                      e: f,
                                                      a: i,
                                                      x: j
                                                    };
                                                    1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                                                      k.call(this, r);
                                                    }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                                                  }

                                                  function j(a, b, c, d, f) {
                                                    return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                                                  }

                                                  function k() {
                                                    var a = _B;
                                                    return a.loader = {
                                                      load: j,
                                                      i: 0
                                                    }, a;
                                                  }

                                                  var l = b.documentElement,
                                                      m = a.setTimeout,
                                                      n = b.getElementsByTagName('script')[0],
                                                      o = {}.toString,
                                                      p = [],
                                                      q = 0,
                                                      r = ('MozAppearance' in l.style),
                                                      s = r && !!b.createRange().compareNode,
                                                      t = s ? l : n.parentNode,
                                                      l = a.opera && '[object Opera]' == o.call(a.opera),
                                                      l = !!b.attachEvent && !l,
                                                      u = r ? 'object' : l ? 'script' : 'img',
                                                      v = l ? 'script' : u,
                                                      w = Array.isArray || function (a) {
                                                    return '[object Array]' == o.call(a);
                                                  },
                                                      x = [],
                                                      y = {},
                                                      z = {
                                                    timeout: function timeout(a, b) {
                                                      return b.length && (a.timeout = b[0]), a;
                                                    }
                                                  },
                                                      _A,
                                                      _B;

                                                  _B = function B(a) {
                                                    function b(a) {
                                                      var a = a.split('!'),
                                                          b = x.length,
                                                          c = a.pop(),
                                                          d = a.length,
                                                          c = {
                                                        url: c,
                                                        origUrl: c,
                                                        prefixes: a
                                                      },
                                                          e,
                                                          f,
                                                          g;

                                                      for (f = 0; f < d; f++) {
                                                        g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                                                      }

                                                      for (f = 0; f < b; f++) {
                                                        c = x[f](c);
                                                      }

                                                      return c;
                                                    }

                                                    function g(a, e, f, g, h) {
                                                      var i = b(a),
                                                          j = i.autoCallback;
                                                      i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                                                        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                                                      })));
                                                    }

                                                    function h(a, b) {
                                                      function c(a, c) {
                                                        if (a) {
                                                          if (e(a)) c || (j = function j() {
                                                            var a = [].slice.call(arguments);
                                                            k.apply(this, a), l();
                                                          }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                                            var b = 0,
                                                                c;

                                                            for (c in a) {
                                                              a.hasOwnProperty(c) && b++;
                                                            }

                                                            return b;
                                                          }(), a) {
                                                            a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                                              var a = [].slice.call(arguments);
                                                              k.apply(this, a), l();
                                                            } : j[n] = function (a) {
                                                              return function () {
                                                                var b = [].slice.call(arguments);
                                                                a && a.apply(this, b), l();
                                                              };
                                                            }(k[n])), g(a[n], j, b, n, h));
                                                          }
                                                        } else !c && l();
                                                      }

                                                      var h = !!a.test,
                                                          i = a.load || a.both,
                                                          j = a.callback || f,
                                                          k = j,
                                                          l = a.complete || f,
                                                          m,
                                                          n;
                                                      c(h ? a.yep : a.nope, !!i), i && c(i);
                                                    }

                                                    var i,
                                                        j,
                                                        l = this.yepnope.loader;
                                                    if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                                                      j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                                                    } else Object(a) === a && h(a, l);
                                                  }, _B.addPrefix = function (a, b) {
                                                    z[a] = b;
                                                  }, _B.addFilter = function (a) {
                                                    x.push(a);
                                                  }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                                                    b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                                                  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                                                    var k = b.createElement('script'),
                                                        l,
                                                        o,
                                                        e = e || _B.errorTimeout;
                                                    k.src = a;

                                                    for (o in d) {
                                                      k.setAttribute(o, d[o]);
                                                    }

                                                    c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                                                      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                                                    }, m(function () {
                                                      l || (l = 1, c(1));
                                                    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                                                  }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                                                    var e = b.createElement('link'),
                                                        j,
                                                        c = i ? h : c || f;
                                                    e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                                                    for (j in d) {
                                                      e.setAttribute(j, d[j]);
                                                    }

                                                    g || (n.parentNode.insertBefore(e, n), m(c, 0));
                                                  };
                                                }(this, document), Modernizr.load = function () {
                                                  yepnope.apply(window, [].slice.call(arguments, 0));
                                                };
                                                /***/
                                              },

                                              /***/
                                              3:
                                              /*!********************************************************************!*\
                                                !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                                                \********************************************************************/

                                              /*! no static exports found */

                                              /***/
                                              function _(module, exports, __webpack_require__) {
                                                __webpack_require__(
                                                /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                                                "./source/js/modernizr.js");

                                                module.exports = __webpack_require__(
                                                /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                                                "./source/js/dist/modernizr.js");
                                                /***/
                                              }
                                              /******/

                                            });
                                            /***/

                                          },

                                          /***/
                                          "./source/js/modernizr.js":
                                          /*!********************************!*\
                                            !*** ./source/js/modernizr.js ***!
                                            \********************************/

                                          /*! no static exports found */

                                          /***/
                                          function sourceJsModernizrJs(module, exports) {
                                            function _typeof(obj) {
                                              "@babel/helpers - typeof";

                                              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                _typeof = function _typeof(obj) {
                                                  return typeof obj;
                                                };
                                              } else {
                                                _typeof = function _typeof(obj) {
                                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                };
                                              }

                                              return _typeof(obj);
                                            }
                                            /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                                             * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                                             */


                                            window.Modernizr = function (a, b, c) {
                                              function u(a) {
                                                j.cssText = a;
                                              }

                                              function v(a, b) {
                                                return u(prefixes.join(a + ';') + (b || ''));
                                              }

                                              function w(a, b) {
                                                return _typeof(a) === b;
                                              }

                                              function x(a, b) {
                                                return !!~('' + a).indexOf(b);
                                              }

                                              function y(a, b, d) {
                                                for (var e in a) {
                                                  var f = b[a[e]];
                                                  if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                                                }

                                                return !1;
                                              }

                                              var d = '2.6.2',
                                                  e = {},
                                                  f = !0,
                                                  g = b.documentElement,
                                                  h = 'modernizr',
                                                  i = b.createElement(h),
                                                  j = i.style,
                                                  k,
                                                  l = {}.toString,
                                                  m = {},
                                                  n = {},
                                                  o = {},
                                                  p = [],
                                                  q = p.slice,
                                                  r,
                                                  s = {}.hasOwnProperty,
                                                  t;
                                              !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                                                return s.call(a, b);
                                              } : t = function t(a, b) {
                                                return b in a && w(a.constructor.prototype[b], 'undefined');
                                              }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                                                var c = this;
                                                if (typeof c != 'function') throw new TypeError();

                                                var d = q.call(arguments, 1),
                                                    e = function e() {
                                                  if (this instanceof e) {
                                                    var a = function a() {};

                                                    a.prototype = c.prototype;
                                                    var f = new a(),
                                                        g = c.apply(f, d.concat(q.call(arguments)));
                                                    return Object(g) === g ? g : f;
                                                  }

                                                  return c.apply(b, d.concat(q.call(arguments)));
                                                };

                                                return e;
                                              });

                                              for (var z in m) {
                                                t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                                              }

                                              return e.addTest = function (a, b) {
                                                if (_typeof(a) == 'object') for (var d in a) {
                                                  t(a, d) && e.addTest(d, a[d]);
                                                } else {
                                                  a = a.toLowerCase();
                                                  if (e[a] !== c) return e;
                                                  b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                                                }
                                                return e;
                                              }, u(''), i = k = null, function (a, b) {
                                                function k(a, b) {
                                                  var c = a.createElement('p'),
                                                      d = a.getElementsByTagName('head')[0] || a.documentElement;
                                                  return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                                                }

                                                function l() {
                                                  var a = r.elements;
                                                  return typeof a == 'string' ? a.split(' ') : a;
                                                }

                                                function m(a) {
                                                  var b = i[a[g]];
                                                  return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                                                }

                                                function n(a, c, f) {
                                                  c || (c = b);
                                                  if (j) return c.createElement(a);
                                                  f || (f = m(c));
                                                  var g;
                                                  return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                                                }

                                                function o(a, c) {
                                                  a || (a = b);
                                                  if (j) return a.createDocumentFragment();
                                                  c = c || m(a);
                                                  var d = c.frag.cloneNode(),
                                                      e = 0,
                                                      f = l(),
                                                      g = f.length;

                                                  for (; e < g; e++) {
                                                    d.createElement(f[e]);
                                                  }

                                                  return d;
                                                }

                                                function p(a, b) {
                                                  b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                                                    return r.shivMethods ? n(c, a, b) : b.createElem(c);
                                                  }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                                                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                                  }) + ');return n}')(r, b.frag);
                                                }

                                                function q(a) {
                                                  a || (a = b);
                                                  var c = m(a);
                                                  return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                                                }

                                                var c = a.html5 || {},
                                                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                                    f,
                                                    g = '_html5shiv',
                                                    h = 0,
                                                    i = {},
                                                    j;

                                                (function () {
                                                  try {
                                                    var a = b.createElement('a');
                                                    a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                                                      b.createElement('a');
                                                      var a = b.createDocumentFragment();
                                                      return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                                                    }();
                                                  } catch (c) {
                                                    f = !0, j = !0;
                                                  }
                                                })();

                                                var r = {
                                                  elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                                                  shivCSS: c.shivCSS !== !1,
                                                  supportsUnknownElements: j,
                                                  shivMethods: c.shivMethods !== !1,
                                                  type: 'default',
                                                  shivDocument: q,
                                                  createElement: n,
                                                  createDocumentFragment: o
                                                };
                                                a.html5 = r, q(b);
                                              }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                                            }(this, this.document), function (a, b, c) {
                                              function d(a) {
                                                return '[object Function]' == o.call(a);
                                              }

                                              function e(a) {
                                                return 'string' == typeof a;
                                              }

                                              function f() {}

                                              function g(a) {
                                                return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                                              }

                                              function h() {
                                                var a = p.shift();
                                                q = 1, a ? a.t ? m(function () {
                                                  ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                                                }, 0) : (a(), h()) : q = 0;
                                              }

                                              function i(a, c, d, e, f, i, j) {
                                                function k(b) {
                                                  if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                                                    'img' != a && m(function () {
                                                      t.removeChild(l);
                                                    }, 50);

                                                    for (var d in y[c]) {
                                                      y[c].hasOwnProperty(d) && y[c][d].onload();
                                                    }
                                                  }
                                                }

                                                var j = j || _B.errorTimeout,
                                                    l = b.createElement(a),
                                                    o = 0,
                                                    r = 0,
                                                    u = {
                                                  t: d,
                                                  s: c,
                                                  e: f,
                                                  a: i,
                                                  x: j
                                                };
                                                1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                                                  k.call(this, r);
                                                }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                                              }

                                              function j(a, b, c, d, f) {
                                                return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                                              }

                                              function k() {
                                                var a = _B;
                                                return a.loader = {
                                                  load: j,
                                                  i: 0
                                                }, a;
                                              }

                                              var l = b.documentElement,
                                                  m = a.setTimeout,
                                                  n = b.getElementsByTagName('script')[0],
                                                  o = {}.toString,
                                                  p = [],
                                                  q = 0,
                                                  r = ('MozAppearance' in l.style),
                                                  s = r && !!b.createRange().compareNode,
                                                  t = s ? l : n.parentNode,
                                                  l = a.opera && '[object Opera]' == o.call(a.opera),
                                                  l = !!b.attachEvent && !l,
                                                  u = r ? 'object' : l ? 'script' : 'img',
                                                  v = l ? 'script' : u,
                                                  w = Array.isArray || function (a) {
                                                return '[object Array]' == o.call(a);
                                              },
                                                  x = [],
                                                  y = {},
                                                  z = {
                                                timeout: function timeout(a, b) {
                                                  return b.length && (a.timeout = b[0]), a;
                                                }
                                              },
                                                  _A,
                                                  _B;

                                              _B = function B(a) {
                                                function b(a) {
                                                  var a = a.split('!'),
                                                      b = x.length,
                                                      c = a.pop(),
                                                      d = a.length,
                                                      c = {
                                                    url: c,
                                                    origUrl: c,
                                                    prefixes: a
                                                  },
                                                      e,
                                                      f,
                                                      g;

                                                  for (f = 0; f < d; f++) {
                                                    g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                                                  }

                                                  for (f = 0; f < b; f++) {
                                                    c = x[f](c);
                                                  }

                                                  return c;
                                                }

                                                function g(a, e, f, g, h) {
                                                  var i = b(a),
                                                      j = i.autoCallback;
                                                  i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                                                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                                                  })));
                                                }

                                                function h(a, b) {
                                                  function c(a, c) {
                                                    if (a) {
                                                      if (e(a)) c || (j = function j() {
                                                        var a = [].slice.call(arguments);
                                                        k.apply(this, a), l();
                                                      }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                                        var b = 0,
                                                            c;

                                                        for (c in a) {
                                                          a.hasOwnProperty(c) && b++;
                                                        }

                                                        return b;
                                                      }(), a) {
                                                        a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                                          var a = [].slice.call(arguments);
                                                          k.apply(this, a), l();
                                                        } : j[n] = function (a) {
                                                          return function () {
                                                            var b = [].slice.call(arguments);
                                                            a && a.apply(this, b), l();
                                                          };
                                                        }(k[n])), g(a[n], j, b, n, h));
                                                      }
                                                    } else !c && l();
                                                  }

                                                  var h = !!a.test,
                                                      i = a.load || a.both,
                                                      j = a.callback || f,
                                                      k = j,
                                                      l = a.complete || f,
                                                      m,
                                                      n;
                                                  c(h ? a.yep : a.nope, !!i), i && c(i);
                                                }

                                                var i,
                                                    j,
                                                    l = this.yepnope.loader;
                                                if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                                                  j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                                                } else Object(a) === a && h(a, l);
                                              }, _B.addPrefix = function (a, b) {
                                                z[a] = b;
                                              }, _B.addFilter = function (a) {
                                                x.push(a);
                                              }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                                                b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                                              }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                                                var k = b.createElement('script'),
                                                    l,
                                                    o,
                                                    e = e || _B.errorTimeout;
                                                k.src = a;

                                                for (o in d) {
                                                  k.setAttribute(o, d[o]);
                                                }

                                                c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                                                  !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                                                }, m(function () {
                                                  l || (l = 1, c(1));
                                                }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                                              }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                                                var e = b.createElement('link'),
                                                    j,
                                                    c = i ? h : c || f;
                                                e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                                                for (j in d) {
                                                  e.setAttribute(j, d[j]);
                                                }

                                                g || (n.parentNode.insertBefore(e, n), m(c, 0));
                                              };
                                            }(this, document), Modernizr.load = function () {
                                              yepnope.apply(window, [].slice.call(arguments, 0));
                                            };
                                            /***/
                                          },

                                          /***/
                                          3:
                                          /*!********************************************************************!*\
                                            !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                                            \********************************************************************/

                                          /*! no static exports found */

                                          /***/
                                          function _(module, exports, __webpack_require__) {
                                            __webpack_require__(
                                            /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                                            "./source/js/modernizr.js");

                                            module.exports = __webpack_require__(
                                            /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                                            "./source/js/dist/modernizr.js");
                                            /***/
                                          }
                                          /******/

                                        });
                                        /***/

                                      },

                                      /***/
                                      "./source/js/modernizr.js":
                                      /*!********************************!*\
                                        !*** ./source/js/modernizr.js ***!
                                        \********************************/

                                      /*! no static exports found */

                                      /***/
                                      function sourceJsModernizrJs(module, exports) {
                                        function _typeof(obj) {
                                          "@babel/helpers - typeof";

                                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                            _typeof = function _typeof(obj) {
                                              return typeof obj;
                                            };
                                          } else {
                                            _typeof = function _typeof(obj) {
                                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                            };
                                          }

                                          return _typeof(obj);
                                        }
                                        /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                                         * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                                         */


                                        window.Modernizr = function (a, b, c) {
                                          function u(a) {
                                            j.cssText = a;
                                          }

                                          function v(a, b) {
                                            return u(prefixes.join(a + ';') + (b || ''));
                                          }

                                          function w(a, b) {
                                            return _typeof(a) === b;
                                          }

                                          function x(a, b) {
                                            return !!~('' + a).indexOf(b);
                                          }

                                          function y(a, b, d) {
                                            for (var e in a) {
                                              var f = b[a[e]];
                                              if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                                            }

                                            return !1;
                                          }

                                          var d = '2.6.2',
                                              e = {},
                                              f = !0,
                                              g = b.documentElement,
                                              h = 'modernizr',
                                              i = b.createElement(h),
                                              j = i.style,
                                              k,
                                              l = {}.toString,
                                              m = {},
                                              n = {},
                                              o = {},
                                              p = [],
                                              q = p.slice,
                                              r,
                                              s = {}.hasOwnProperty,
                                              t;
                                          !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                                            return s.call(a, b);
                                          } : t = function t(a, b) {
                                            return b in a && w(a.constructor.prototype[b], 'undefined');
                                          }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                                            var c = this;
                                            if (typeof c != 'function') throw new TypeError();

                                            var d = q.call(arguments, 1),
                                                e = function e() {
                                              if (this instanceof e) {
                                                var a = function a() {};

                                                a.prototype = c.prototype;
                                                var f = new a(),
                                                    g = c.apply(f, d.concat(q.call(arguments)));
                                                return Object(g) === g ? g : f;
                                              }

                                              return c.apply(b, d.concat(q.call(arguments)));
                                            };

                                            return e;
                                          });

                                          for (var z in m) {
                                            t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                                          }

                                          return e.addTest = function (a, b) {
                                            if (_typeof(a) == 'object') for (var d in a) {
                                              t(a, d) && e.addTest(d, a[d]);
                                            } else {
                                              a = a.toLowerCase();
                                              if (e[a] !== c) return e;
                                              b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                                            }
                                            return e;
                                          }, u(''), i = k = null, function (a, b) {
                                            function k(a, b) {
                                              var c = a.createElement('p'),
                                                  d = a.getElementsByTagName('head')[0] || a.documentElement;
                                              return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                                            }

                                            function l() {
                                              var a = r.elements;
                                              return typeof a == 'string' ? a.split(' ') : a;
                                            }

                                            function m(a) {
                                              var b = i[a[g]];
                                              return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                                            }

                                            function n(a, c, f) {
                                              c || (c = b);
                                              if (j) return c.createElement(a);
                                              f || (f = m(c));
                                              var g;
                                              return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                                            }

                                            function o(a, c) {
                                              a || (a = b);
                                              if (j) return a.createDocumentFragment();
                                              c = c || m(a);
                                              var d = c.frag.cloneNode(),
                                                  e = 0,
                                                  f = l(),
                                                  g = f.length;

                                              for (; e < g; e++) {
                                                d.createElement(f[e]);
                                              }

                                              return d;
                                            }

                                            function p(a, b) {
                                              b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                                                return r.shivMethods ? n(c, a, b) : b.createElem(c);
                                              }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                                                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                              }) + ');return n}')(r, b.frag);
                                            }

                                            function q(a) {
                                              a || (a = b);
                                              var c = m(a);
                                              return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                                            }

                                            var c = a.html5 || {},
                                                d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                                e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                                f,
                                                g = '_html5shiv',
                                                h = 0,
                                                i = {},
                                                j;

                                            (function () {
                                              try {
                                                var a = b.createElement('a');
                                                a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                                                  b.createElement('a');
                                                  var a = b.createDocumentFragment();
                                                  return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                                                }();
                                              } catch (c) {
                                                f = !0, j = !0;
                                              }
                                            })();

                                            var r = {
                                              elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                                              shivCSS: c.shivCSS !== !1,
                                              supportsUnknownElements: j,
                                              shivMethods: c.shivMethods !== !1,
                                              type: 'default',
                                              shivDocument: q,
                                              createElement: n,
                                              createDocumentFragment: o
                                            };
                                            a.html5 = r, q(b);
                                          }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                                        }(this, this.document), function (a, b, c) {
                                          function d(a) {
                                            return '[object Function]' == o.call(a);
                                          }

                                          function e(a) {
                                            return 'string' == typeof a;
                                          }

                                          function f() {}

                                          function g(a) {
                                            return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                                          }

                                          function h() {
                                            var a = p.shift();
                                            q = 1, a ? a.t ? m(function () {
                                              ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                                            }, 0) : (a(), h()) : q = 0;
                                          }

                                          function i(a, c, d, e, f, i, j) {
                                            function k(b) {
                                              if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                                                'img' != a && m(function () {
                                                  t.removeChild(l);
                                                }, 50);

                                                for (var d in y[c]) {
                                                  y[c].hasOwnProperty(d) && y[c][d].onload();
                                                }
                                              }
                                            }

                                            var j = j || _B.errorTimeout,
                                                l = b.createElement(a),
                                                o = 0,
                                                r = 0,
                                                u = {
                                              t: d,
                                              s: c,
                                              e: f,
                                              a: i,
                                              x: j
                                            };
                                            1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                                              k.call(this, r);
                                            }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                                          }

                                          function j(a, b, c, d, f) {
                                            return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                                          }

                                          function k() {
                                            var a = _B;
                                            return a.loader = {
                                              load: j,
                                              i: 0
                                            }, a;
                                          }

                                          var l = b.documentElement,
                                              m = a.setTimeout,
                                              n = b.getElementsByTagName('script')[0],
                                              o = {}.toString,
                                              p = [],
                                              q = 0,
                                              r = ('MozAppearance' in l.style),
                                              s = r && !!b.createRange().compareNode,
                                              t = s ? l : n.parentNode,
                                              l = a.opera && '[object Opera]' == o.call(a.opera),
                                              l = !!b.attachEvent && !l,
                                              u = r ? 'object' : l ? 'script' : 'img',
                                              v = l ? 'script' : u,
                                              w = Array.isArray || function (a) {
                                            return '[object Array]' == o.call(a);
                                          },
                                              x = [],
                                              y = {},
                                              z = {
                                            timeout: function timeout(a, b) {
                                              return b.length && (a.timeout = b[0]), a;
                                            }
                                          },
                                              _A,
                                              _B;

                                          _B = function B(a) {
                                            function b(a) {
                                              var a = a.split('!'),
                                                  b = x.length,
                                                  c = a.pop(),
                                                  d = a.length,
                                                  c = {
                                                url: c,
                                                origUrl: c,
                                                prefixes: a
                                              },
                                                  e,
                                                  f,
                                                  g;

                                              for (f = 0; f < d; f++) {
                                                g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                                              }

                                              for (f = 0; f < b; f++) {
                                                c = x[f](c);
                                              }

                                              return c;
                                            }

                                            function g(a, e, f, g, h) {
                                              var i = b(a),
                                                  j = i.autoCallback;
                                              i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                                                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                                              })));
                                            }

                                            function h(a, b) {
                                              function c(a, c) {
                                                if (a) {
                                                  if (e(a)) c || (j = function j() {
                                                    var a = [].slice.call(arguments);
                                                    k.apply(this, a), l();
                                                  }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                                    var b = 0,
                                                        c;

                                                    for (c in a) {
                                                      a.hasOwnProperty(c) && b++;
                                                    }

                                                    return b;
                                                  }(), a) {
                                                    a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                                      var a = [].slice.call(arguments);
                                                      k.apply(this, a), l();
                                                    } : j[n] = function (a) {
                                                      return function () {
                                                        var b = [].slice.call(arguments);
                                                        a && a.apply(this, b), l();
                                                      };
                                                    }(k[n])), g(a[n], j, b, n, h));
                                                  }
                                                } else !c && l();
                                              }

                                              var h = !!a.test,
                                                  i = a.load || a.both,
                                                  j = a.callback || f,
                                                  k = j,
                                                  l = a.complete || f,
                                                  m,
                                                  n;
                                              c(h ? a.yep : a.nope, !!i), i && c(i);
                                            }

                                            var i,
                                                j,
                                                l = this.yepnope.loader;
                                            if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                                              j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                                            } else Object(a) === a && h(a, l);
                                          }, _B.addPrefix = function (a, b) {
                                            z[a] = b;
                                          }, _B.addFilter = function (a) {
                                            x.push(a);
                                          }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                                            b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                                          }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                                            var k = b.createElement('script'),
                                                l,
                                                o,
                                                e = e || _B.errorTimeout;
                                            k.src = a;

                                            for (o in d) {
                                              k.setAttribute(o, d[o]);
                                            }

                                            c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                                              !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                                            }, m(function () {
                                              l || (l = 1, c(1));
                                            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                                          }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                                            var e = b.createElement('link'),
                                                j,
                                                c = i ? h : c || f;
                                            e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                                            for (j in d) {
                                              e.setAttribute(j, d[j]);
                                            }

                                            g || (n.parentNode.insertBefore(e, n), m(c, 0));
                                          };
                                        }(this, document), Modernizr.load = function () {
                                          yepnope.apply(window, [].slice.call(arguments, 0));
                                        };
                                        /***/
                                      },

                                      /***/
                                      3:
                                      /*!********************************************************************!*\
                                        !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                                        \********************************************************************/

                                      /*! no static exports found */

                                      /***/
                                      function _(module, exports, __webpack_require__) {
                                        __webpack_require__(
                                        /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                                        "./source/js/modernizr.js");

                                        module.exports = __webpack_require__(
                                        /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                                        "./source/js/dist/modernizr.js");
                                        /***/
                                      }
                                      /******/

                                    });
                                    /***/

                                  },

                                  /***/
                                  "./source/js/modernizr.js":
                                  /*!********************************!*\
                                    !*** ./source/js/modernizr.js ***!
                                    \********************************/

                                  /*! no static exports found */

                                  /***/
                                  function sourceJsModernizrJs(module, exports) {
                                    function _typeof(obj) {
                                      "@babel/helpers - typeof";

                                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                        _typeof = function _typeof(obj) {
                                          return typeof obj;
                                        };
                                      } else {
                                        _typeof = function _typeof(obj) {
                                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                        };
                                      }

                                      return _typeof(obj);
                                    }
                                    /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                                     * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                                     */


                                    window.Modernizr = function (a, b, c) {
                                      function u(a) {
                                        j.cssText = a;
                                      }

                                      function v(a, b) {
                                        return u(prefixes.join(a + ';') + (b || ''));
                                      }

                                      function w(a, b) {
                                        return _typeof(a) === b;
                                      }

                                      function x(a, b) {
                                        return !!~('' + a).indexOf(b);
                                      }

                                      function y(a, b, d) {
                                        for (var e in a) {
                                          var f = b[a[e]];
                                          if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                                        }

                                        return !1;
                                      }

                                      var d = '2.6.2',
                                          e = {},
                                          f = !0,
                                          g = b.documentElement,
                                          h = 'modernizr',
                                          i = b.createElement(h),
                                          j = i.style,
                                          k,
                                          l = {}.toString,
                                          m = {},
                                          n = {},
                                          o = {},
                                          p = [],
                                          q = p.slice,
                                          r,
                                          s = {}.hasOwnProperty,
                                          t;
                                      !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                                        return s.call(a, b);
                                      } : t = function t(a, b) {
                                        return b in a && w(a.constructor.prototype[b], 'undefined');
                                      }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                                        var c = this;
                                        if (typeof c != 'function') throw new TypeError();

                                        var d = q.call(arguments, 1),
                                            e = function e() {
                                          if (this instanceof e) {
                                            var a = function a() {};

                                            a.prototype = c.prototype;
                                            var f = new a(),
                                                g = c.apply(f, d.concat(q.call(arguments)));
                                            return Object(g) === g ? g : f;
                                          }

                                          return c.apply(b, d.concat(q.call(arguments)));
                                        };

                                        return e;
                                      });

                                      for (var z in m) {
                                        t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                                      }

                                      return e.addTest = function (a, b) {
                                        if (_typeof(a) == 'object') for (var d in a) {
                                          t(a, d) && e.addTest(d, a[d]);
                                        } else {
                                          a = a.toLowerCase();
                                          if (e[a] !== c) return e;
                                          b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                                        }
                                        return e;
                                      }, u(''), i = k = null, function (a, b) {
                                        function k(a, b) {
                                          var c = a.createElement('p'),
                                              d = a.getElementsByTagName('head')[0] || a.documentElement;
                                          return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                                        }

                                        function l() {
                                          var a = r.elements;
                                          return typeof a == 'string' ? a.split(' ') : a;
                                        }

                                        function m(a) {
                                          var b = i[a[g]];
                                          return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                                        }

                                        function n(a, c, f) {
                                          c || (c = b);
                                          if (j) return c.createElement(a);
                                          f || (f = m(c));
                                          var g;
                                          return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                                        }

                                        function o(a, c) {
                                          a || (a = b);
                                          if (j) return a.createDocumentFragment();
                                          c = c || m(a);
                                          var d = c.frag.cloneNode(),
                                              e = 0,
                                              f = l(),
                                              g = f.length;

                                          for (; e < g; e++) {
                                            d.createElement(f[e]);
                                          }

                                          return d;
                                        }

                                        function p(a, b) {
                                          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                                            return r.shivMethods ? n(c, a, b) : b.createElem(c);
                                          }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                                            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                          }) + ');return n}')(r, b.frag);
                                        }

                                        function q(a) {
                                          a || (a = b);
                                          var c = m(a);
                                          return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                                        }

                                        var c = a.html5 || {},
                                            d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                            e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                            f,
                                            g = '_html5shiv',
                                            h = 0,
                                            i = {},
                                            j;

                                        (function () {
                                          try {
                                            var a = b.createElement('a');
                                            a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                                              b.createElement('a');
                                              var a = b.createDocumentFragment();
                                              return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                                            }();
                                          } catch (c) {
                                            f = !0, j = !0;
                                          }
                                        })();

                                        var r = {
                                          elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                                          shivCSS: c.shivCSS !== !1,
                                          supportsUnknownElements: j,
                                          shivMethods: c.shivMethods !== !1,
                                          type: 'default',
                                          shivDocument: q,
                                          createElement: n,
                                          createDocumentFragment: o
                                        };
                                        a.html5 = r, q(b);
                                      }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                                    }(this, this.document), function (a, b, c) {
                                      function d(a) {
                                        return '[object Function]' == o.call(a);
                                      }

                                      function e(a) {
                                        return 'string' == typeof a;
                                      }

                                      function f() {}

                                      function g(a) {
                                        return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                                      }

                                      function h() {
                                        var a = p.shift();
                                        q = 1, a ? a.t ? m(function () {
                                          ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                                        }, 0) : (a(), h()) : q = 0;
                                      }

                                      function i(a, c, d, e, f, i, j) {
                                        function k(b) {
                                          if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                                            'img' != a && m(function () {
                                              t.removeChild(l);
                                            }, 50);

                                            for (var d in y[c]) {
                                              y[c].hasOwnProperty(d) && y[c][d].onload();
                                            }
                                          }
                                        }

                                        var j = j || _B.errorTimeout,
                                            l = b.createElement(a),
                                            o = 0,
                                            r = 0,
                                            u = {
                                          t: d,
                                          s: c,
                                          e: f,
                                          a: i,
                                          x: j
                                        };
                                        1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                                          k.call(this, r);
                                        }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                                      }

                                      function j(a, b, c, d, f) {
                                        return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                                      }

                                      function k() {
                                        var a = _B;
                                        return a.loader = {
                                          load: j,
                                          i: 0
                                        }, a;
                                      }

                                      var l = b.documentElement,
                                          m = a.setTimeout,
                                          n = b.getElementsByTagName('script')[0],
                                          o = {}.toString,
                                          p = [],
                                          q = 0,
                                          r = ('MozAppearance' in l.style),
                                          s = r && !!b.createRange().compareNode,
                                          t = s ? l : n.parentNode,
                                          l = a.opera && '[object Opera]' == o.call(a.opera),
                                          l = !!b.attachEvent && !l,
                                          u = r ? 'object' : l ? 'script' : 'img',
                                          v = l ? 'script' : u,
                                          w = Array.isArray || function (a) {
                                        return '[object Array]' == o.call(a);
                                      },
                                          x = [],
                                          y = {},
                                          z = {
                                        timeout: function timeout(a, b) {
                                          return b.length && (a.timeout = b[0]), a;
                                        }
                                      },
                                          _A,
                                          _B;

                                      _B = function B(a) {
                                        function b(a) {
                                          var a = a.split('!'),
                                              b = x.length,
                                              c = a.pop(),
                                              d = a.length,
                                              c = {
                                            url: c,
                                            origUrl: c,
                                            prefixes: a
                                          },
                                              e,
                                              f,
                                              g;

                                          for (f = 0; f < d; f++) {
                                            g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                                          }

                                          for (f = 0; f < b; f++) {
                                            c = x[f](c);
                                          }

                                          return c;
                                        }

                                        function g(a, e, f, g, h) {
                                          var i = b(a),
                                              j = i.autoCallback;
                                          i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                                            k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                                          })));
                                        }

                                        function h(a, b) {
                                          function c(a, c) {
                                            if (a) {
                                              if (e(a)) c || (j = function j() {
                                                var a = [].slice.call(arguments);
                                                k.apply(this, a), l();
                                              }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                                var b = 0,
                                                    c;

                                                for (c in a) {
                                                  a.hasOwnProperty(c) && b++;
                                                }

                                                return b;
                                              }(), a) {
                                                a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                                  var a = [].slice.call(arguments);
                                                  k.apply(this, a), l();
                                                } : j[n] = function (a) {
                                                  return function () {
                                                    var b = [].slice.call(arguments);
                                                    a && a.apply(this, b), l();
                                                  };
                                                }(k[n])), g(a[n], j, b, n, h));
                                              }
                                            } else !c && l();
                                          }

                                          var h = !!a.test,
                                              i = a.load || a.both,
                                              j = a.callback || f,
                                              k = j,
                                              l = a.complete || f,
                                              m,
                                              n;
                                          c(h ? a.yep : a.nope, !!i), i && c(i);
                                        }

                                        var i,
                                            j,
                                            l = this.yepnope.loader;
                                        if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                                          j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                                        } else Object(a) === a && h(a, l);
                                      }, _B.addPrefix = function (a, b) {
                                        z[a] = b;
                                      }, _B.addFilter = function (a) {
                                        x.push(a);
                                      }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                                        b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                                      }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                                        var k = b.createElement('script'),
                                            l,
                                            o,
                                            e = e || _B.errorTimeout;
                                        k.src = a;

                                        for (o in d) {
                                          k.setAttribute(o, d[o]);
                                        }

                                        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                                          !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                                        }, m(function () {
                                          l || (l = 1, c(1));
                                        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                                      }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                                        var e = b.createElement('link'),
                                            j,
                                            c = i ? h : c || f;
                                        e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                                        for (j in d) {
                                          e.setAttribute(j, d[j]);
                                        }

                                        g || (n.parentNode.insertBefore(e, n), m(c, 0));
                                      };
                                    }(this, document), Modernizr.load = function () {
                                      yepnope.apply(window, [].slice.call(arguments, 0));
                                    };
                                    /***/
                                  },

                                  /***/
                                  3:
                                  /*!********************************************************************!*\
                                    !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                                    \********************************************************************/

                                  /*! no static exports found */

                                  /***/
                                  function _(module, exports, __webpack_require__) {
                                    __webpack_require__(
                                    /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                                    "./source/js/modernizr.js");

                                    module.exports = __webpack_require__(
                                    /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                                    "./source/js/dist/modernizr.js");
                                    /***/
                                  }
                                  /******/

                                });
                                /***/

                              },

                              /***/
                              "./source/js/modernizr.js":
                              /*!********************************!*\
                                !*** ./source/js/modernizr.js ***!
                                \********************************/

                              /*! no static exports found */

                              /***/
                              function sourceJsModernizrJs(module, exports) {
                                function _typeof(obj) {
                                  "@babel/helpers - typeof";

                                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                    _typeof = function _typeof(obj) {
                                      return typeof obj;
                                    };
                                  } else {
                                    _typeof = function _typeof(obj) {
                                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                    };
                                  }

                                  return _typeof(obj);
                                }
                                /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                                 * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                                 */


                                window.Modernizr = function (a, b, c) {
                                  function u(a) {
                                    j.cssText = a;
                                  }

                                  function v(a, b) {
                                    return u(prefixes.join(a + ';') + (b || ''));
                                  }

                                  function w(a, b) {
                                    return _typeof(a) === b;
                                  }

                                  function x(a, b) {
                                    return !!~('' + a).indexOf(b);
                                  }

                                  function y(a, b, d) {
                                    for (var e in a) {
                                      var f = b[a[e]];
                                      if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                                    }

                                    return !1;
                                  }

                                  var d = '2.6.2',
                                      e = {},
                                      f = !0,
                                      g = b.documentElement,
                                      h = 'modernizr',
                                      i = b.createElement(h),
                                      j = i.style,
                                      k,
                                      l = {}.toString,
                                      m = {},
                                      n = {},
                                      o = {},
                                      p = [],
                                      q = p.slice,
                                      r,
                                      s = {}.hasOwnProperty,
                                      t;
                                  !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                                    return s.call(a, b);
                                  } : t = function t(a, b) {
                                    return b in a && w(a.constructor.prototype[b], 'undefined');
                                  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                                    var c = this;
                                    if (typeof c != 'function') throw new TypeError();

                                    var d = q.call(arguments, 1),
                                        e = function e() {
                                      if (this instanceof e) {
                                        var a = function a() {};

                                        a.prototype = c.prototype;
                                        var f = new a(),
                                            g = c.apply(f, d.concat(q.call(arguments)));
                                        return Object(g) === g ? g : f;
                                      }

                                      return c.apply(b, d.concat(q.call(arguments)));
                                    };

                                    return e;
                                  });

                                  for (var z in m) {
                                    t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                                  }

                                  return e.addTest = function (a, b) {
                                    if (_typeof(a) == 'object') for (var d in a) {
                                      t(a, d) && e.addTest(d, a[d]);
                                    } else {
                                      a = a.toLowerCase();
                                      if (e[a] !== c) return e;
                                      b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                                    }
                                    return e;
                                  }, u(''), i = k = null, function (a, b) {
                                    function k(a, b) {
                                      var c = a.createElement('p'),
                                          d = a.getElementsByTagName('head')[0] || a.documentElement;
                                      return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                                    }

                                    function l() {
                                      var a = r.elements;
                                      return typeof a == 'string' ? a.split(' ') : a;
                                    }

                                    function m(a) {
                                      var b = i[a[g]];
                                      return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                                    }

                                    function n(a, c, f) {
                                      c || (c = b);
                                      if (j) return c.createElement(a);
                                      f || (f = m(c));
                                      var g;
                                      return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                                    }

                                    function o(a, c) {
                                      a || (a = b);
                                      if (j) return a.createDocumentFragment();
                                      c = c || m(a);
                                      var d = c.frag.cloneNode(),
                                          e = 0,
                                          f = l(),
                                          g = f.length;

                                      for (; e < g; e++) {
                                        d.createElement(f[e]);
                                      }

                                      return d;
                                    }

                                    function p(a, b) {
                                      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                                        return r.shivMethods ? n(c, a, b) : b.createElem(c);
                                      }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                      }) + ');return n}')(r, b.frag);
                                    }

                                    function q(a) {
                                      a || (a = b);
                                      var c = m(a);
                                      return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                                    }

                                    var c = a.html5 || {},
                                        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                        f,
                                        g = '_html5shiv',
                                        h = 0,
                                        i = {},
                                        j;

                                    (function () {
                                      try {
                                        var a = b.createElement('a');
                                        a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                                          b.createElement('a');
                                          var a = b.createDocumentFragment();
                                          return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                                        }();
                                      } catch (c) {
                                        f = !0, j = !0;
                                      }
                                    })();

                                    var r = {
                                      elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                                      shivCSS: c.shivCSS !== !1,
                                      supportsUnknownElements: j,
                                      shivMethods: c.shivMethods !== !1,
                                      type: 'default',
                                      shivDocument: q,
                                      createElement: n,
                                      createDocumentFragment: o
                                    };
                                    a.html5 = r, q(b);
                                  }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                                }(this, this.document), function (a, b, c) {
                                  function d(a) {
                                    return '[object Function]' == o.call(a);
                                  }

                                  function e(a) {
                                    return 'string' == typeof a;
                                  }

                                  function f() {}

                                  function g(a) {
                                    return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                                  }

                                  function h() {
                                    var a = p.shift();
                                    q = 1, a ? a.t ? m(function () {
                                      ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                                    }, 0) : (a(), h()) : q = 0;
                                  }

                                  function i(a, c, d, e, f, i, j) {
                                    function k(b) {
                                      if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                                        'img' != a && m(function () {
                                          t.removeChild(l);
                                        }, 50);

                                        for (var d in y[c]) {
                                          y[c].hasOwnProperty(d) && y[c][d].onload();
                                        }
                                      }
                                    }

                                    var j = j || _B.errorTimeout,
                                        l = b.createElement(a),
                                        o = 0,
                                        r = 0,
                                        u = {
                                      t: d,
                                      s: c,
                                      e: f,
                                      a: i,
                                      x: j
                                    };
                                    1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                                      k.call(this, r);
                                    }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                                  }

                                  function j(a, b, c, d, f) {
                                    return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                                  }

                                  function k() {
                                    var a = _B;
                                    return a.loader = {
                                      load: j,
                                      i: 0
                                    }, a;
                                  }

                                  var l = b.documentElement,
                                      m = a.setTimeout,
                                      n = b.getElementsByTagName('script')[0],
                                      o = {}.toString,
                                      p = [],
                                      q = 0,
                                      r = ('MozAppearance' in l.style),
                                      s = r && !!b.createRange().compareNode,
                                      t = s ? l : n.parentNode,
                                      l = a.opera && '[object Opera]' == o.call(a.opera),
                                      l = !!b.attachEvent && !l,
                                      u = r ? 'object' : l ? 'script' : 'img',
                                      v = l ? 'script' : u,
                                      w = Array.isArray || function (a) {
                                    return '[object Array]' == o.call(a);
                                  },
                                      x = [],
                                      y = {},
                                      z = {
                                    timeout: function timeout(a, b) {
                                      return b.length && (a.timeout = b[0]), a;
                                    }
                                  },
                                      _A,
                                      _B;

                                  _B = function B(a) {
                                    function b(a) {
                                      var a = a.split('!'),
                                          b = x.length,
                                          c = a.pop(),
                                          d = a.length,
                                          c = {
                                        url: c,
                                        origUrl: c,
                                        prefixes: a
                                      },
                                          e,
                                          f,
                                          g;

                                      for (f = 0; f < d; f++) {
                                        g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                                      }

                                      for (f = 0; f < b; f++) {
                                        c = x[f](c);
                                      }

                                      return c;
                                    }

                                    function g(a, e, f, g, h) {
                                      var i = b(a),
                                          j = i.autoCallback;
                                      i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                                        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                                      })));
                                    }

                                    function h(a, b) {
                                      function c(a, c) {
                                        if (a) {
                                          if (e(a)) c || (j = function j() {
                                            var a = [].slice.call(arguments);
                                            k.apply(this, a), l();
                                          }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                            var b = 0,
                                                c;

                                            for (c in a) {
                                              a.hasOwnProperty(c) && b++;
                                            }

                                            return b;
                                          }(), a) {
                                            a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                              var a = [].slice.call(arguments);
                                              k.apply(this, a), l();
                                            } : j[n] = function (a) {
                                              return function () {
                                                var b = [].slice.call(arguments);
                                                a && a.apply(this, b), l();
                                              };
                                            }(k[n])), g(a[n], j, b, n, h));
                                          }
                                        } else !c && l();
                                      }

                                      var h = !!a.test,
                                          i = a.load || a.both,
                                          j = a.callback || f,
                                          k = j,
                                          l = a.complete || f,
                                          m,
                                          n;
                                      c(h ? a.yep : a.nope, !!i), i && c(i);
                                    }

                                    var i,
                                        j,
                                        l = this.yepnope.loader;
                                    if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                                      j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                                    } else Object(a) === a && h(a, l);
                                  }, _B.addPrefix = function (a, b) {
                                    z[a] = b;
                                  }, _B.addFilter = function (a) {
                                    x.push(a);
                                  }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                                    b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                                  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                                    var k = b.createElement('script'),
                                        l,
                                        o,
                                        e = e || _B.errorTimeout;
                                    k.src = a;

                                    for (o in d) {
                                      k.setAttribute(o, d[o]);
                                    }

                                    c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                                      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                                    }, m(function () {
                                      l || (l = 1, c(1));
                                    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                                  }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                                    var e = b.createElement('link'),
                                        j,
                                        c = i ? h : c || f;
                                    e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                                    for (j in d) {
                                      e.setAttribute(j, d[j]);
                                    }

                                    g || (n.parentNode.insertBefore(e, n), m(c, 0));
                                  };
                                }(this, document), Modernizr.load = function () {
                                  yepnope.apply(window, [].slice.call(arguments, 0));
                                };
                                /***/
                              },

                              /***/
                              3:
                              /*!********************************************************************!*\
                                !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                                \********************************************************************/

                              /*! no static exports found */

                              /***/
                              function _(module, exports, __webpack_require__) {
                                __webpack_require__(
                                /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                                "./source/js/modernizr.js");

                                module.exports = __webpack_require__(
                                /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                                "./source/js/dist/modernizr.js");
                                /***/
                              }
                              /******/

                            });
                            /***/

                          },

                          /***/
                          "./source/js/modernizr.js":
                          /*!********************************!*\
                            !*** ./source/js/modernizr.js ***!
                            \********************************/

                          /*! no static exports found */

                          /***/
                          function sourceJsModernizrJs(module, exports) {
                            function _typeof(obj) {
                              "@babel/helpers - typeof";

                              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                _typeof = function _typeof(obj) {
                                  return typeof obj;
                                };
                              } else {
                                _typeof = function _typeof(obj) {
                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                };
                              }

                              return _typeof(obj);
                            }
                            /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                             * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                             */


                            window.Modernizr = function (a, b, c) {
                              function u(a) {
                                j.cssText = a;
                              }

                              function v(a, b) {
                                return u(prefixes.join(a + ';') + (b || ''));
                              }

                              function w(a, b) {
                                return _typeof(a) === b;
                              }

                              function x(a, b) {
                                return !!~('' + a).indexOf(b);
                              }

                              function y(a, b, d) {
                                for (var e in a) {
                                  var f = b[a[e]];
                                  if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                                }

                                return !1;
                              }

                              var d = '2.6.2',
                                  e = {},
                                  f = !0,
                                  g = b.documentElement,
                                  h = 'modernizr',
                                  i = b.createElement(h),
                                  j = i.style,
                                  k,
                                  l = {}.toString,
                                  m = {},
                                  n = {},
                                  o = {},
                                  p = [],
                                  q = p.slice,
                                  r,
                                  s = {}.hasOwnProperty,
                                  t;
                              !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                                return s.call(a, b);
                              } : t = function t(a, b) {
                                return b in a && w(a.constructor.prototype[b], 'undefined');
                              }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                                var c = this;
                                if (typeof c != 'function') throw new TypeError();

                                var d = q.call(arguments, 1),
                                    e = function e() {
                                  if (this instanceof e) {
                                    var a = function a() {};

                                    a.prototype = c.prototype;
                                    var f = new a(),
                                        g = c.apply(f, d.concat(q.call(arguments)));
                                    return Object(g) === g ? g : f;
                                  }

                                  return c.apply(b, d.concat(q.call(arguments)));
                                };

                                return e;
                              });

                              for (var z in m) {
                                t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                              }

                              return e.addTest = function (a, b) {
                                if (_typeof(a) == 'object') for (var d in a) {
                                  t(a, d) && e.addTest(d, a[d]);
                                } else {
                                  a = a.toLowerCase();
                                  if (e[a] !== c) return e;
                                  b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                                }
                                return e;
                              }, u(''), i = k = null, function (a, b) {
                                function k(a, b) {
                                  var c = a.createElement('p'),
                                      d = a.getElementsByTagName('head')[0] || a.documentElement;
                                  return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                                }

                                function l() {
                                  var a = r.elements;
                                  return typeof a == 'string' ? a.split(' ') : a;
                                }

                                function m(a) {
                                  var b = i[a[g]];
                                  return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                                }

                                function n(a, c, f) {
                                  c || (c = b);
                                  if (j) return c.createElement(a);
                                  f || (f = m(c));
                                  var g;
                                  return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                                }

                                function o(a, c) {
                                  a || (a = b);
                                  if (j) return a.createDocumentFragment();
                                  c = c || m(a);
                                  var d = c.frag.cloneNode(),
                                      e = 0,
                                      f = l(),
                                      g = f.length;

                                  for (; e < g; e++) {
                                    d.createElement(f[e]);
                                  }

                                  return d;
                                }

                                function p(a, b) {
                                  b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                                    return r.shivMethods ? n(c, a, b) : b.createElem(c);
                                  }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                  }) + ');return n}')(r, b.frag);
                                }

                                function q(a) {
                                  a || (a = b);
                                  var c = m(a);
                                  return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                                }

                                var c = a.html5 || {},
                                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                    f,
                                    g = '_html5shiv',
                                    h = 0,
                                    i = {},
                                    j;

                                (function () {
                                  try {
                                    var a = b.createElement('a');
                                    a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                                      b.createElement('a');
                                      var a = b.createDocumentFragment();
                                      return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                                    }();
                                  } catch (c) {
                                    f = !0, j = !0;
                                  }
                                })();

                                var r = {
                                  elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                                  shivCSS: c.shivCSS !== !1,
                                  supportsUnknownElements: j,
                                  shivMethods: c.shivMethods !== !1,
                                  type: 'default',
                                  shivDocument: q,
                                  createElement: n,
                                  createDocumentFragment: o
                                };
                                a.html5 = r, q(b);
                              }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                            }(this, this.document), function (a, b, c) {
                              function d(a) {
                                return '[object Function]' == o.call(a);
                              }

                              function e(a) {
                                return 'string' == typeof a;
                              }

                              function f() {}

                              function g(a) {
                                return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                              }

                              function h() {
                                var a = p.shift();
                                q = 1, a ? a.t ? m(function () {
                                  ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                                }, 0) : (a(), h()) : q = 0;
                              }

                              function i(a, c, d, e, f, i, j) {
                                function k(b) {
                                  if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                                    'img' != a && m(function () {
                                      t.removeChild(l);
                                    }, 50);

                                    for (var d in y[c]) {
                                      y[c].hasOwnProperty(d) && y[c][d].onload();
                                    }
                                  }
                                }

                                var j = j || _B.errorTimeout,
                                    l = b.createElement(a),
                                    o = 0,
                                    r = 0,
                                    u = {
                                  t: d,
                                  s: c,
                                  e: f,
                                  a: i,
                                  x: j
                                };
                                1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                                  k.call(this, r);
                                }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                              }

                              function j(a, b, c, d, f) {
                                return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                              }

                              function k() {
                                var a = _B;
                                return a.loader = {
                                  load: j,
                                  i: 0
                                }, a;
                              }

                              var l = b.documentElement,
                                  m = a.setTimeout,
                                  n = b.getElementsByTagName('script')[0],
                                  o = {}.toString,
                                  p = [],
                                  q = 0,
                                  r = ('MozAppearance' in l.style),
                                  s = r && !!b.createRange().compareNode,
                                  t = s ? l : n.parentNode,
                                  l = a.opera && '[object Opera]' == o.call(a.opera),
                                  l = !!b.attachEvent && !l,
                                  u = r ? 'object' : l ? 'script' : 'img',
                                  v = l ? 'script' : u,
                                  w = Array.isArray || function (a) {
                                return '[object Array]' == o.call(a);
                              },
                                  x = [],
                                  y = {},
                                  z = {
                                timeout: function timeout(a, b) {
                                  return b.length && (a.timeout = b[0]), a;
                                }
                              },
                                  _A,
                                  _B;

                              _B = function B(a) {
                                function b(a) {
                                  var a = a.split('!'),
                                      b = x.length,
                                      c = a.pop(),
                                      d = a.length,
                                      c = {
                                    url: c,
                                    origUrl: c,
                                    prefixes: a
                                  },
                                      e,
                                      f,
                                      g;

                                  for (f = 0; f < d; f++) {
                                    g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                                  }

                                  for (f = 0; f < b; f++) {
                                    c = x[f](c);
                                  }

                                  return c;
                                }

                                function g(a, e, f, g, h) {
                                  var i = b(a),
                                      j = i.autoCallback;
                                  i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                                  })));
                                }

                                function h(a, b) {
                                  function c(a, c) {
                                    if (a) {
                                      if (e(a)) c || (j = function j() {
                                        var a = [].slice.call(arguments);
                                        k.apply(this, a), l();
                                      }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                        var b = 0,
                                            c;

                                        for (c in a) {
                                          a.hasOwnProperty(c) && b++;
                                        }

                                        return b;
                                      }(), a) {
                                        a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                          var a = [].slice.call(arguments);
                                          k.apply(this, a), l();
                                        } : j[n] = function (a) {
                                          return function () {
                                            var b = [].slice.call(arguments);
                                            a && a.apply(this, b), l();
                                          };
                                        }(k[n])), g(a[n], j, b, n, h));
                                      }
                                    } else !c && l();
                                  }

                                  var h = !!a.test,
                                      i = a.load || a.both,
                                      j = a.callback || f,
                                      k = j,
                                      l = a.complete || f,
                                      m,
                                      n;
                                  c(h ? a.yep : a.nope, !!i), i && c(i);
                                }

                                var i,
                                    j,
                                    l = this.yepnope.loader;
                                if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                                  j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                                } else Object(a) === a && h(a, l);
                              }, _B.addPrefix = function (a, b) {
                                z[a] = b;
                              }, _B.addFilter = function (a) {
                                x.push(a);
                              }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                                b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                              }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                                var k = b.createElement('script'),
                                    l,
                                    o,
                                    e = e || _B.errorTimeout;
                                k.src = a;

                                for (o in d) {
                                  k.setAttribute(o, d[o]);
                                }

                                c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                                  !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                                }, m(function () {
                                  l || (l = 1, c(1));
                                }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                              }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                                var e = b.createElement('link'),
                                    j,
                                    c = i ? h : c || f;
                                e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                                for (j in d) {
                                  e.setAttribute(j, d[j]);
                                }

                                g || (n.parentNode.insertBefore(e, n), m(c, 0));
                              };
                            }(this, document), Modernizr.load = function () {
                              yepnope.apply(window, [].slice.call(arguments, 0));
                            };
                            /***/
                          },

                          /***/
                          3:
                          /*!********************************************************************!*\
                            !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                            \********************************************************************/

                          /*! no static exports found */

                          /***/
                          function _(module, exports, __webpack_require__) {
                            __webpack_require__(
                            /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                            "./source/js/modernizr.js");

                            module.exports = __webpack_require__(
                            /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                            "./source/js/dist/modernizr.js");
                            /***/
                          }
                          /******/

                        });
                        /***/

                      },

                      /***/
                      "./source/js/modernizr.js":
                      /*!********************************!*\
                        !*** ./source/js/modernizr.js ***!
                        \********************************/

                      /*! no static exports found */

                      /***/
                      function sourceJsModernizrJs(module, exports) {
                        function _typeof(obj) {
                          "@babel/helpers - typeof";

                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                            _typeof = function _typeof(obj) {
                              return typeof obj;
                            };
                          } else {
                            _typeof = function _typeof(obj) {
                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                            };
                          }

                          return _typeof(obj);
                        }
                        /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                         * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                         */


                        window.Modernizr = function (a, b, c) {
                          function u(a) {
                            j.cssText = a;
                          }

                          function v(a, b) {
                            return u(prefixes.join(a + ';') + (b || ''));
                          }

                          function w(a, b) {
                            return _typeof(a) === b;
                          }

                          function x(a, b) {
                            return !!~('' + a).indexOf(b);
                          }

                          function y(a, b, d) {
                            for (var e in a) {
                              var f = b[a[e]];
                              if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                            }

                            return !1;
                          }

                          var d = '2.6.2',
                              e = {},
                              f = !0,
                              g = b.documentElement,
                              h = 'modernizr',
                              i = b.createElement(h),
                              j = i.style,
                              k,
                              l = {}.toString,
                              m = {},
                              n = {},
                              o = {},
                              p = [],
                              q = p.slice,
                              r,
                              s = {}.hasOwnProperty,
                              t;
                          !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                            return s.call(a, b);
                          } : t = function t(a, b) {
                            return b in a && w(a.constructor.prototype[b], 'undefined');
                          }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                            var c = this;
                            if (typeof c != 'function') throw new TypeError();

                            var d = q.call(arguments, 1),
                                e = function e() {
                              if (this instanceof e) {
                                var a = function a() {};

                                a.prototype = c.prototype;
                                var f = new a(),
                                    g = c.apply(f, d.concat(q.call(arguments)));
                                return Object(g) === g ? g : f;
                              }

                              return c.apply(b, d.concat(q.call(arguments)));
                            };

                            return e;
                          });

                          for (var z in m) {
                            t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                          }

                          return e.addTest = function (a, b) {
                            if (_typeof(a) == 'object') for (var d in a) {
                              t(a, d) && e.addTest(d, a[d]);
                            } else {
                              a = a.toLowerCase();
                              if (e[a] !== c) return e;
                              b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                            }
                            return e;
                          }, u(''), i = k = null, function (a, b) {
                            function k(a, b) {
                              var c = a.createElement('p'),
                                  d = a.getElementsByTagName('head')[0] || a.documentElement;
                              return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                            }

                            function l() {
                              var a = r.elements;
                              return typeof a == 'string' ? a.split(' ') : a;
                            }

                            function m(a) {
                              var b = i[a[g]];
                              return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                            }

                            function n(a, c, f) {
                              c || (c = b);
                              if (j) return c.createElement(a);
                              f || (f = m(c));
                              var g;
                              return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                            }

                            function o(a, c) {
                              a || (a = b);
                              if (j) return a.createDocumentFragment();
                              c = c || m(a);
                              var d = c.frag.cloneNode(),
                                  e = 0,
                                  f = l(),
                                  g = f.length;

                              for (; e < g; e++) {
                                d.createElement(f[e]);
                              }

                              return d;
                            }

                            function p(a, b) {
                              b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                                return r.shivMethods ? n(c, a, b) : b.createElem(c);
                              }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                              }) + ');return n}')(r, b.frag);
                            }

                            function q(a) {
                              a || (a = b);
                              var c = m(a);
                              return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                            }

                            var c = a.html5 || {},
                                d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                f,
                                g = '_html5shiv',
                                h = 0,
                                i = {},
                                j;

                            (function () {
                              try {
                                var a = b.createElement('a');
                                a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                                  b.createElement('a');
                                  var a = b.createDocumentFragment();
                                  return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                                }();
                              } catch (c) {
                                f = !0, j = !0;
                              }
                            })();

                            var r = {
                              elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                              shivCSS: c.shivCSS !== !1,
                              supportsUnknownElements: j,
                              shivMethods: c.shivMethods !== !1,
                              type: 'default',
                              shivDocument: q,
                              createElement: n,
                              createDocumentFragment: o
                            };
                            a.html5 = r, q(b);
                          }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                        }(this, this.document), function (a, b, c) {
                          function d(a) {
                            return '[object Function]' == o.call(a);
                          }

                          function e(a) {
                            return 'string' == typeof a;
                          }

                          function f() {}

                          function g(a) {
                            return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                          }

                          function h() {
                            var a = p.shift();
                            q = 1, a ? a.t ? m(function () {
                              ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                            }, 0) : (a(), h()) : q = 0;
                          }

                          function i(a, c, d, e, f, i, j) {
                            function k(b) {
                              if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                                'img' != a && m(function () {
                                  t.removeChild(l);
                                }, 50);

                                for (var d in y[c]) {
                                  y[c].hasOwnProperty(d) && y[c][d].onload();
                                }
                              }
                            }

                            var j = j || _B.errorTimeout,
                                l = b.createElement(a),
                                o = 0,
                                r = 0,
                                u = {
                              t: d,
                              s: c,
                              e: f,
                              a: i,
                              x: j
                            };
                            1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                              k.call(this, r);
                            }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                          }

                          function j(a, b, c, d, f) {
                            return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                          }

                          function k() {
                            var a = _B;
                            return a.loader = {
                              load: j,
                              i: 0
                            }, a;
                          }

                          var l = b.documentElement,
                              m = a.setTimeout,
                              n = b.getElementsByTagName('script')[0],
                              o = {}.toString,
                              p = [],
                              q = 0,
                              r = ('MozAppearance' in l.style),
                              s = r && !!b.createRange().compareNode,
                              t = s ? l : n.parentNode,
                              l = a.opera && '[object Opera]' == o.call(a.opera),
                              l = !!b.attachEvent && !l,
                              u = r ? 'object' : l ? 'script' : 'img',
                              v = l ? 'script' : u,
                              w = Array.isArray || function (a) {
                            return '[object Array]' == o.call(a);
                          },
                              x = [],
                              y = {},
                              z = {
                            timeout: function timeout(a, b) {
                              return b.length && (a.timeout = b[0]), a;
                            }
                          },
                              _A,
                              _B;

                          _B = function B(a) {
                            function b(a) {
                              var a = a.split('!'),
                                  b = x.length,
                                  c = a.pop(),
                                  d = a.length,
                                  c = {
                                url: c,
                                origUrl: c,
                                prefixes: a
                              },
                                  e,
                                  f,
                                  g;

                              for (f = 0; f < d; f++) {
                                g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                              }

                              for (f = 0; f < b; f++) {
                                c = x[f](c);
                              }

                              return c;
                            }

                            function g(a, e, f, g, h) {
                              var i = b(a),
                                  j = i.autoCallback;
                              i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                              })));
                            }

                            function h(a, b) {
                              function c(a, c) {
                                if (a) {
                                  if (e(a)) c || (j = function j() {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l();
                                  }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                    var b = 0,
                                        c;

                                    for (c in a) {
                                      a.hasOwnProperty(c) && b++;
                                    }

                                    return b;
                                  }(), a) {
                                    a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                      var a = [].slice.call(arguments);
                                      k.apply(this, a), l();
                                    } : j[n] = function (a) {
                                      return function () {
                                        var b = [].slice.call(arguments);
                                        a && a.apply(this, b), l();
                                      };
                                    }(k[n])), g(a[n], j, b, n, h));
                                  }
                                } else !c && l();
                              }

                              var h = !!a.test,
                                  i = a.load || a.both,
                                  j = a.callback || f,
                                  k = j,
                                  l = a.complete || f,
                                  m,
                                  n;
                              c(h ? a.yep : a.nope, !!i), i && c(i);
                            }

                            var i,
                                j,
                                l = this.yepnope.loader;
                            if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                              j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                            } else Object(a) === a && h(a, l);
                          }, _B.addPrefix = function (a, b) {
                            z[a] = b;
                          }, _B.addFilter = function (a) {
                            x.push(a);
                          }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                            b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                          }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                            var k = b.createElement('script'),
                                l,
                                o,
                                e = e || _B.errorTimeout;
                            k.src = a;

                            for (o in d) {
                              k.setAttribute(o, d[o]);
                            }

                            c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                              !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                            }, m(function () {
                              l || (l = 1, c(1));
                            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                          }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                            var e = b.createElement('link'),
                                j,
                                c = i ? h : c || f;
                            e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                            for (j in d) {
                              e.setAttribute(j, d[j]);
                            }

                            g || (n.parentNode.insertBefore(e, n), m(c, 0));
                          };
                        }(this, document), Modernizr.load = function () {
                          yepnope.apply(window, [].slice.call(arguments, 0));
                        };
                        /***/
                      },

                      /***/
                      3:
                      /*!********************************************************************!*\
                        !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                        \********************************************************************/

                      /*! no static exports found */

                      /***/
                      function _(module, exports, __webpack_require__) {
                        __webpack_require__(
                        /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                        "./source/js/modernizr.js");

                        module.exports = __webpack_require__(
                        /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                        "./source/js/dist/modernizr.js");
                        /***/
                      }
                      /******/

                    });
                    /***/

                  },

                  /***/
                  "./source/js/modernizr.js":
                  /*!********************************!*\
                    !*** ./source/js/modernizr.js ***!
                    \********************************/

                  /*! no static exports found */

                  /***/
                  function sourceJsModernizrJs(module, exports) {
                    function _typeof(obj) {
                      "@babel/helpers - typeof";

                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                          return typeof obj;
                        };
                      } else {
                        _typeof = function _typeof(obj) {
                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                      }

                      return _typeof(obj);
                    }
                    /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                     * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                     */


                    window.Modernizr = function (a, b, c) {
                      function u(a) {
                        j.cssText = a;
                      }

                      function v(a, b) {
                        return u(prefixes.join(a + ';') + (b || ''));
                      }

                      function w(a, b) {
                        return _typeof(a) === b;
                      }

                      function x(a, b) {
                        return !!~('' + a).indexOf(b);
                      }

                      function y(a, b, d) {
                        for (var e in a) {
                          var f = b[a[e]];
                          if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                        }

                        return !1;
                      }

                      var d = '2.6.2',
                          e = {},
                          f = !0,
                          g = b.documentElement,
                          h = 'modernizr',
                          i = b.createElement(h),
                          j = i.style,
                          k,
                          l = {}.toString,
                          m = {},
                          n = {},
                          o = {},
                          p = [],
                          q = p.slice,
                          r,
                          s = {}.hasOwnProperty,
                          t;
                      !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                        return s.call(a, b);
                      } : t = function t(a, b) {
                        return b in a && w(a.constructor.prototype[b], 'undefined');
                      }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                        var c = this;
                        if (typeof c != 'function') throw new TypeError();

                        var d = q.call(arguments, 1),
                            e = function e() {
                          if (this instanceof e) {
                            var a = function a() {};

                            a.prototype = c.prototype;
                            var f = new a(),
                                g = c.apply(f, d.concat(q.call(arguments)));
                            return Object(g) === g ? g : f;
                          }

                          return c.apply(b, d.concat(q.call(arguments)));
                        };

                        return e;
                      });

                      for (var z in m) {
                        t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                      }

                      return e.addTest = function (a, b) {
                        if (_typeof(a) == 'object') for (var d in a) {
                          t(a, d) && e.addTest(d, a[d]);
                        } else {
                          a = a.toLowerCase();
                          if (e[a] !== c) return e;
                          b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                        }
                        return e;
                      }, u(''), i = k = null, function (a, b) {
                        function k(a, b) {
                          var c = a.createElement('p'),
                              d = a.getElementsByTagName('head')[0] || a.documentElement;
                          return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                        }

                        function l() {
                          var a = r.elements;
                          return typeof a == 'string' ? a.split(' ') : a;
                        }

                        function m(a) {
                          var b = i[a[g]];
                          return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                        }

                        function n(a, c, f) {
                          c || (c = b);
                          if (j) return c.createElement(a);
                          f || (f = m(c));
                          var g;
                          return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                        }

                        function o(a, c) {
                          a || (a = b);
                          if (j) return a.createDocumentFragment();
                          c = c || m(a);
                          var d = c.frag.cloneNode(),
                              e = 0,
                              f = l(),
                              g = f.length;

                          for (; e < g; e++) {
                            d.createElement(f[e]);
                          }

                          return d;
                        }

                        function p(a, b) {
                          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                            return r.shivMethods ? n(c, a, b) : b.createElem(c);
                          }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                          }) + ');return n}')(r, b.frag);
                        }

                        function q(a) {
                          a || (a = b);
                          var c = m(a);
                          return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                        }

                        var c = a.html5 || {},
                            d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                            e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                            f,
                            g = '_html5shiv',
                            h = 0,
                            i = {},
                            j;

                        (function () {
                          try {
                            var a = b.createElement('a');
                            a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                              b.createElement('a');
                              var a = b.createDocumentFragment();
                              return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                            }();
                          } catch (c) {
                            f = !0, j = !0;
                          }
                        })();

                        var r = {
                          elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                          shivCSS: c.shivCSS !== !1,
                          supportsUnknownElements: j,
                          shivMethods: c.shivMethods !== !1,
                          type: 'default',
                          shivDocument: q,
                          createElement: n,
                          createDocumentFragment: o
                        };
                        a.html5 = r, q(b);
                      }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                    }(this, this.document), function (a, b, c) {
                      function d(a) {
                        return '[object Function]' == o.call(a);
                      }

                      function e(a) {
                        return 'string' == typeof a;
                      }

                      function f() {}

                      function g(a) {
                        return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                      }

                      function h() {
                        var a = p.shift();
                        q = 1, a ? a.t ? m(function () {
                          ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                        }, 0) : (a(), h()) : q = 0;
                      }

                      function i(a, c, d, e, f, i, j) {
                        function k(b) {
                          if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                            'img' != a && m(function () {
                              t.removeChild(l);
                            }, 50);

                            for (var d in y[c]) {
                              y[c].hasOwnProperty(d) && y[c][d].onload();
                            }
                          }
                        }

                        var j = j || _B.errorTimeout,
                            l = b.createElement(a),
                            o = 0,
                            r = 0,
                            u = {
                          t: d,
                          s: c,
                          e: f,
                          a: i,
                          x: j
                        };
                        1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                          k.call(this, r);
                        }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                      }

                      function j(a, b, c, d, f) {
                        return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                      }

                      function k() {
                        var a = _B;
                        return a.loader = {
                          load: j,
                          i: 0
                        }, a;
                      }

                      var l = b.documentElement,
                          m = a.setTimeout,
                          n = b.getElementsByTagName('script')[0],
                          o = {}.toString,
                          p = [],
                          q = 0,
                          r = ('MozAppearance' in l.style),
                          s = r && !!b.createRange().compareNode,
                          t = s ? l : n.parentNode,
                          l = a.opera && '[object Opera]' == o.call(a.opera),
                          l = !!b.attachEvent && !l,
                          u = r ? 'object' : l ? 'script' : 'img',
                          v = l ? 'script' : u,
                          w = Array.isArray || function (a) {
                        return '[object Array]' == o.call(a);
                      },
                          x = [],
                          y = {},
                          z = {
                        timeout: function timeout(a, b) {
                          return b.length && (a.timeout = b[0]), a;
                        }
                      },
                          _A,
                          _B;

                      _B = function B(a) {
                        function b(a) {
                          var a = a.split('!'),
                              b = x.length,
                              c = a.pop(),
                              d = a.length,
                              c = {
                            url: c,
                            origUrl: c,
                            prefixes: a
                          },
                              e,
                              f,
                              g;

                          for (f = 0; f < d; f++) {
                            g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                          }

                          for (f = 0; f < b; f++) {
                            c = x[f](c);
                          }

                          return c;
                        }

                        function g(a, e, f, g, h) {
                          var i = b(a),
                              j = i.autoCallback;
                          i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                            k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                          })));
                        }

                        function h(a, b) {
                          function c(a, c) {
                            if (a) {
                              if (e(a)) c || (j = function j() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l();
                              }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                                var b = 0,
                                    c;

                                for (c in a) {
                                  a.hasOwnProperty(c) && b++;
                                }

                                return b;
                              }(), a) {
                                a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                                  var a = [].slice.call(arguments);
                                  k.apply(this, a), l();
                                } : j[n] = function (a) {
                                  return function () {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l();
                                  };
                                }(k[n])), g(a[n], j, b, n, h));
                              }
                            } else !c && l();
                          }

                          var h = !!a.test,
                              i = a.load || a.both,
                              j = a.callback || f,
                              k = j,
                              l = a.complete || f,
                              m,
                              n;
                          c(h ? a.yep : a.nope, !!i), i && c(i);
                        }

                        var i,
                            j,
                            l = this.yepnope.loader;
                        if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                          j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                        } else Object(a) === a && h(a, l);
                      }, _B.addPrefix = function (a, b) {
                        z[a] = b;
                      }, _B.addFilter = function (a) {
                        x.push(a);
                      }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                        b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                      }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                        var k = b.createElement('script'),
                            l,
                            o,
                            e = e || _B.errorTimeout;
                        k.src = a;

                        for (o in d) {
                          k.setAttribute(o, d[o]);
                        }

                        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                          !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                        }, m(function () {
                          l || (l = 1, c(1));
                        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                      }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                        var e = b.createElement('link'),
                            j,
                            c = i ? h : c || f;
                        e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                        for (j in d) {
                          e.setAttribute(j, d[j]);
                        }

                        g || (n.parentNode.insertBefore(e, n), m(c, 0));
                      };
                    }(this, document), Modernizr.load = function () {
                      yepnope.apply(window, [].slice.call(arguments, 0));
                    };
                    /***/
                  },

                  /***/
                  3:
                  /*!********************************************************************!*\
                    !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                    \********************************************************************/

                  /*! no static exports found */

                  /***/
                  function _(module, exports, __webpack_require__) {
                    __webpack_require__(
                    /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                    "./source/js/modernizr.js");

                    module.exports = __webpack_require__(
                    /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                    "./source/js/dist/modernizr.js");
                    /***/
                  }
                  /******/

                });
                /***/

              },

              /***/
              "./source/js/modernizr.js":
              /*!********************************!*\
                !*** ./source/js/modernizr.js ***!
                \********************************/

              /*! no static exports found */

              /***/
              function sourceJsModernizrJs(module, exports) {
                function _typeof(obj) {
                  "@babel/helpers - typeof";

                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) {
                      return typeof obj;
                    };
                  } else {
                    _typeof = function _typeof(obj) {
                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                  }

                  return _typeof(obj);
                }
                /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
                 * Build: http://modernizr.com/download/#-shiv-cssclasses-load
                 */


                window.Modernizr = function (a, b, c) {
                  function u(a) {
                    j.cssText = a;
                  }

                  function v(a, b) {
                    return u(prefixes.join(a + ';') + (b || ''));
                  }

                  function w(a, b) {
                    return _typeof(a) === b;
                  }

                  function x(a, b) {
                    return !!~('' + a).indexOf(b);
                  }

                  function y(a, b, d) {
                    for (var e in a) {
                      var f = b[a[e]];
                      if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                    }

                    return !1;
                  }

                  var d = '2.6.2',
                      e = {},
                      f = !0,
                      g = b.documentElement,
                      h = 'modernizr',
                      i = b.createElement(h),
                      j = i.style,
                      k,
                      l = {}.toString,
                      m = {},
                      n = {},
                      o = {},
                      p = [],
                      q = p.slice,
                      r,
                      s = {}.hasOwnProperty,
                      t;
                  !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                    return s.call(a, b);
                  } : t = function t(a, b) {
                    return b in a && w(a.constructor.prototype[b], 'undefined');
                  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                    var c = this;
                    if (typeof c != 'function') throw new TypeError();

                    var d = q.call(arguments, 1),
                        e = function e() {
                      if (this instanceof e) {
                        var a = function a() {};

                        a.prototype = c.prototype;
                        var f = new a(),
                            g = c.apply(f, d.concat(q.call(arguments)));
                        return Object(g) === g ? g : f;
                      }

                      return c.apply(b, d.concat(q.call(arguments)));
                    };

                    return e;
                  });

                  for (var z in m) {
                    t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
                  }

                  return e.addTest = function (a, b) {
                    if (_typeof(a) == 'object') for (var d in a) {
                      t(a, d) && e.addTest(d, a[d]);
                    } else {
                      a = a.toLowerCase();
                      if (e[a] !== c) return e;
                      b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                    }
                    return e;
                  }, u(''), i = k = null, function (a, b) {
                    function k(a, b) {
                      var c = a.createElement('p'),
                          d = a.getElementsByTagName('head')[0] || a.documentElement;
                      return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                    }

                    function l() {
                      var a = r.elements;
                      return typeof a == 'string' ? a.split(' ') : a;
                    }

                    function m(a) {
                      var b = i[a[g]];
                      return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                    }

                    function n(a, c, f) {
                      c || (c = b);
                      if (j) return c.createElement(a);
                      f || (f = m(c));
                      var g;
                      return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                    }

                    function o(a, c) {
                      a || (a = b);
                      if (j) return a.createDocumentFragment();
                      c = c || m(a);
                      var d = c.frag.cloneNode(),
                          e = 0,
                          f = l(),
                          g = f.length;

                      for (; e < g; e++) {
                        d.createElement(f[e]);
                      }

                      return d;
                    }

                    function p(a, b) {
                      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c);
                      }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                      }) + ');return n}')(r, b.frag);
                    }

                    function q(a) {
                      a || (a = b);
                      var c = m(a);
                      return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                    }

                    var c = a.html5 || {},
                        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                        f,
                        g = '_html5shiv',
                        h = 0,
                        i = {},
                        j;

                    (function () {
                      try {
                        var a = b.createElement('a');
                        a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                          b.createElement('a');
                          var a = b.createDocumentFragment();
                          return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                        }();
                      } catch (c) {
                        f = !0, j = !0;
                      }
                    })();

                    var r = {
                      elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                      shivCSS: c.shivCSS !== !1,
                      supportsUnknownElements: j,
                      shivMethods: c.shivMethods !== !1,
                      type: 'default',
                      shivDocument: q,
                      createElement: n,
                      createDocumentFragment: o
                    };
                    a.html5 = r, q(b);
                  }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
                }(this, this.document), function (a, b, c) {
                  function d(a) {
                    return '[object Function]' == o.call(a);
                  }

                  function e(a) {
                    return 'string' == typeof a;
                  }

                  function f() {}

                  function g(a) {
                    return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
                  }

                  function h() {
                    var a = p.shift();
                    q = 1, a ? a.t ? m(function () {
                      ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                    }, 0) : (a(), h()) : q = 0;
                  }

                  function i(a, c, d, e, f, i, j) {
                    function k(b) {
                      if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                        'img' != a && m(function () {
                          t.removeChild(l);
                        }, 50);

                        for (var d in y[c]) {
                          y[c].hasOwnProperty(d) && y[c][d].onload();
                        }
                      }
                    }

                    var j = j || _B.errorTimeout,
                        l = b.createElement(a),
                        o = 0,
                        r = 0,
                        u = {
                      t: d,
                      s: c,
                      e: f,
                      a: i,
                      x: j
                    };
                    1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                      k.call(this, r);
                    }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
                  }

                  function j(a, b, c, d, f) {
                    return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
                  }

                  function k() {
                    var a = _B;
                    return a.loader = {
                      load: j,
                      i: 0
                    }, a;
                  }

                  var l = b.documentElement,
                      m = a.setTimeout,
                      n = b.getElementsByTagName('script')[0],
                      o = {}.toString,
                      p = [],
                      q = 0,
                      r = ('MozAppearance' in l.style),
                      s = r && !!b.createRange().compareNode,
                      t = s ? l : n.parentNode,
                      l = a.opera && '[object Opera]' == o.call(a.opera),
                      l = !!b.attachEvent && !l,
                      u = r ? 'object' : l ? 'script' : 'img',
                      v = l ? 'script' : u,
                      w = Array.isArray || function (a) {
                    return '[object Array]' == o.call(a);
                  },
                      x = [],
                      y = {},
                      z = {
                    timeout: function timeout(a, b) {
                      return b.length && (a.timeout = b[0]), a;
                    }
                  },
                      _A,
                      _B;

                  _B = function B(a) {
                    function b(a) {
                      var a = a.split('!'),
                          b = x.length,
                          c = a.pop(),
                          d = a.length,
                          c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                      },
                          e,
                          f,
                          g;

                      for (f = 0; f < d; f++) {
                        g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                      }

                      for (f = 0; f < b; f++) {
                        c = x[f](c);
                      }

                      return c;
                    }

                    function g(a, e, f, g, h) {
                      var i = b(a),
                          j = i.autoCallback;
                      i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                      })));
                    }

                    function h(a, b) {
                      function c(a, c) {
                        if (a) {
                          if (e(a)) c || (j = function j() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l();
                          }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                            var b = 0,
                                c;

                            for (c in a) {
                              a.hasOwnProperty(c) && b++;
                            }

                            return b;
                          }(), a) {
                            a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                              var a = [].slice.call(arguments);
                              k.apply(this, a), l();
                            } : j[n] = function (a) {
                              return function () {
                                var b = [].slice.call(arguments);
                                a && a.apply(this, b), l();
                              };
                            }(k[n])), g(a[n], j, b, n, h));
                          }
                        } else !c && l();
                      }

                      var h = !!a.test,
                          i = a.load || a.both,
                          j = a.callback || f,
                          k = j,
                          l = a.complete || f,
                          m,
                          n;
                      c(h ? a.yep : a.nope, !!i), i && c(i);
                    }

                    var i,
                        j,
                        l = this.yepnope.loader;
                    if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                      j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                    } else Object(a) === a && h(a, l);
                  }, _B.addPrefix = function (a, b) {
                    z[a] = b;
                  }, _B.addFilter = function (a) {
                    x.push(a);
                  }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                    b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
                  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                    var k = b.createElement('script'),
                        l,
                        o,
                        e = e || _B.errorTimeout;
                    k.src = a;

                    for (o in d) {
                      k.setAttribute(o, d[o]);
                    }

                    c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                    }, m(function () {
                      l || (l = 1, c(1));
                    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
                  }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                    var e = b.createElement('link'),
                        j,
                        c = i ? h : c || f;
                    e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                    for (j in d) {
                      e.setAttribute(j, d[j]);
                    }

                    g || (n.parentNode.insertBefore(e, n), m(c, 0));
                  };
                }(this, document), Modernizr.load = function () {
                  yepnope.apply(window, [].slice.call(arguments, 0));
                };
                /***/
              },

              /***/
              3:
              /*!********************************************************************!*\
                !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
                \********************************************************************/

              /*! no static exports found */

              /***/
              function _(module, exports, __webpack_require__) {
                __webpack_require__(
                /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
                "./source/js/modernizr.js");

                module.exports = __webpack_require__(
                /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
                "./source/js/dist/modernizr.js");
                /***/
              }
              /******/

            });
            /***/

          },

          /***/
          "./source/js/modernizr.js":
          /*!********************************!*\
            !*** ./source/js/modernizr.js ***!
            \********************************/

          /*! no static exports found */

          /***/
          function sourceJsModernizrJs(module, exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }

              return _typeof(obj);
            }
            /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
             * Build: http://modernizr.com/download/#-shiv-cssclasses-load
             */


            window.Modernizr = function (a, b, c) {
              function u(a) {
                j.cssText = a;
              }

              function v(a, b) {
                return u(prefixes.join(a + ';') + (b || ''));
              }

              function w(a, b) {
                return _typeof(a) === b;
              }

              function x(a, b) {
                return !!~('' + a).indexOf(b);
              }

              function y(a, b, d) {
                for (var e in a) {
                  var f = b[a[e]];
                  if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
                }

                return !1;
              }

              var d = '2.6.2',
                  e = {},
                  f = !0,
                  g = b.documentElement,
                  h = 'modernizr',
                  i = b.createElement(h),
                  j = i.style,
                  k,
                  l = {}.toString,
                  m = {},
                  n = {},
                  o = {},
                  p = [],
                  q = p.slice,
                  r,
                  s = {}.hasOwnProperty,
                  t;
              !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
                return s.call(a, b);
              } : t = function t(a, b) {
                return b in a && w(a.constructor.prototype[b], 'undefined');
              }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                var c = this;
                if (typeof c != 'function') throw new TypeError();

                var d = q.call(arguments, 1),
                    e = function e() {
                  if (this instanceof e) {
                    var a = function a() {};

                    a.prototype = c.prototype;
                    var f = new a(),
                        g = c.apply(f, d.concat(q.call(arguments)));
                    return Object(g) === g ? g : f;
                  }

                  return c.apply(b, d.concat(q.call(arguments)));
                };

                return e;
              });

              for (var z in m) {
                t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
              }

              return e.addTest = function (a, b) {
                if (_typeof(a) == 'object') for (var d in a) {
                  t(a, d) && e.addTest(d, a[d]);
                } else {
                  a = a.toLowerCase();
                  if (e[a] !== c) return e;
                  b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
                }
                return e;
              }, u(''), i = k = null, function (a, b) {
                function k(a, b) {
                  var c = a.createElement('p'),
                      d = a.getElementsByTagName('head')[0] || a.documentElement;
                  return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
                }

                function l() {
                  var a = r.elements;
                  return typeof a == 'string' ? a.split(' ') : a;
                }

                function m(a) {
                  var b = i[a[g]];
                  return b || (b = {}, h++, a[g] = h, i[h] = b), b;
                }

                function n(a, c, f) {
                  c || (c = b);
                  if (j) return c.createElement(a);
                  f || (f = m(c));
                  var g;
                  return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
                }

                function o(a, c) {
                  a || (a = b);
                  if (j) return a.createDocumentFragment();
                  c = c || m(a);
                  var d = c.frag.cloneNode(),
                      e = 0,
                      f = l(),
                      g = f.length;

                  for (; e < g; e++) {
                    d.createElement(f[e]);
                  }

                  return d;
                }

                function p(a, b) {
                  b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                    return r.shivMethods ? n(c, a, b) : b.createElem(c);
                  }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                  }) + ');return n}')(r, b.frag);
                }

                function q(a) {
                  a || (a = b);
                  var c = m(a);
                  return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
                }

                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f,
                    g = '_html5shiv',
                    h = 0,
                    i = {},
                    j;

                (function () {
                  try {
                    var a = b.createElement('a');
                    a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                      b.createElement('a');
                      var a = b.createDocumentFragment();
                      return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                    }();
                  } catch (c) {
                    f = !0, j = !0;
                  }
                })();

                var r = {
                  elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
                  shivCSS: c.shivCSS !== !1,
                  supportsUnknownElements: j,
                  shivMethods: c.shivMethods !== !1,
                  type: 'default',
                  shivDocument: q,
                  createElement: n,
                  createDocumentFragment: o
                };
                a.html5 = r, q(b);
              }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
            }(this, this.document), function (a, b, c) {
              function d(a) {
                return '[object Function]' == o.call(a);
              }

              function e(a) {
                return 'string' == typeof a;
              }

              function f() {}

              function g(a) {
                return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
              }

              function h() {
                var a = p.shift();
                q = 1, a ? a.t ? m(function () {
                  ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                }, 0) : (a(), h()) : q = 0;
              }

              function i(a, c, d, e, f, i, j) {
                function k(b) {
                  if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    'img' != a && m(function () {
                      t.removeChild(l);
                    }, 50);

                    for (var d in y[c]) {
                      y[c].hasOwnProperty(d) && y[c][d].onload();
                    }
                  }
                }

                var j = j || _B.errorTimeout,
                    l = b.createElement(a),
                    o = 0,
                    r = 0,
                    u = {
                  t: d,
                  s: c,
                  e: f,
                  a: i,
                  x: j
                };
                1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
                  k.call(this, r);
                }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
              }

              function j(a, b, c, d, f) {
                return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
              }

              function k() {
                var a = _B;
                return a.loader = {
                  load: j,
                  i: 0
                }, a;
              }

              var l = b.documentElement,
                  m = a.setTimeout,
                  n = b.getElementsByTagName('script')[0],
                  o = {}.toString,
                  p = [],
                  q = 0,
                  r = ('MozAppearance' in l.style),
                  s = r && !!b.createRange().compareNode,
                  t = s ? l : n.parentNode,
                  l = a.opera && '[object Opera]' == o.call(a.opera),
                  l = !!b.attachEvent && !l,
                  u = r ? 'object' : l ? 'script' : 'img',
                  v = l ? 'script' : u,
                  w = Array.isArray || function (a) {
                return '[object Array]' == o.call(a);
              },
                  x = [],
                  y = {},
                  z = {
                timeout: function timeout(a, b) {
                  return b.length && (a.timeout = b[0]), a;
                }
              },
                  _A,
                  _B;

              _B = function B(a) {
                function b(a) {
                  var a = a.split('!'),
                      b = x.length,
                      c = a.pop(),
                      d = a.length,
                      c = {
                    url: c,
                    origUrl: c,
                    prefixes: a
                  },
                      e,
                      f,
                      g;

                  for (f = 0; f < d; f++) {
                    g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
                  }

                  for (f = 0; f < b; f++) {
                    c = x[f](c);
                  }

                  return c;
                }

                function g(a, e, f, g, h) {
                  var i = b(a),
                      j = i.autoCallback;
                  i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
                  })));
                }

                function h(a, b) {
                  function c(a, c) {
                    if (a) {
                      if (e(a)) c || (j = function j() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l();
                      }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                        var b = 0,
                            c;

                        for (c in a) {
                          a.hasOwnProperty(c) && b++;
                        }

                        return b;
                      }(), a) {
                        a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        } : j[n] = function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        }(k[n])), g(a[n], j, b, n, h));
                      }
                    } else !c && l();
                  }

                  var h = !!a.test,
                      i = a.load || a.both,
                      j = a.callback || f,
                      k = j,
                      l = a.complete || f,
                      m,
                      n;
                  c(h ? a.yep : a.nope, !!i), i && c(i);
                }

                var i,
                    j,
                    l = this.yepnope.loader;
                if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
                  j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
                } else Object(a) === a && h(a, l);
              }, _B.addPrefix = function (a, b) {
                z[a] = b;
              }, _B.addFilter = function (a) {
                x.push(a);
              }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
                b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
              }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                var k = b.createElement('script'),
                    l,
                    o,
                    e = e || _B.errorTimeout;
                k.src = a;

                for (o in d) {
                  k.setAttribute(o, d[o]);
                }

                c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                  !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
                }, m(function () {
                  l || (l = 1, c(1));
                }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
              }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                var e = b.createElement('link'),
                    j,
                    c = i ? h : c || f;
                e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

                for (j in d) {
                  e.setAttribute(j, d[j]);
                }

                g || (n.parentNode.insertBefore(e, n), m(c, 0));
              };
            }(this, document), Modernizr.load = function () {
              yepnope.apply(window, [].slice.call(arguments, 0));
            };
            /***/
          },

          /***/
          3:
          /*!********************************************************************!*\
            !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
            \********************************************************************/

          /*! no static exports found */

          /***/
          function _(module, exports, __webpack_require__) {
            __webpack_require__(
            /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
            "./source/js/modernizr.js");

            module.exports = __webpack_require__(
            /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
            "./source/js/dist/modernizr.js");
            /***/
          }
          /******/

        });
        /***/

      },

      /***/
      "./source/js/modernizr.js":
      /*!********************************!*\
        !*** ./source/js/modernizr.js ***!
        \********************************/

      /*! no static exports found */

      /***/
      function sourceJsModernizrJs(module, exports) {
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }
        /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
         * Build: http://modernizr.com/download/#-shiv-cssclasses-load
         */


        window.Modernizr = function (a, b, c) {
          function u(a) {
            j.cssText = a;
          }

          function v(a, b) {
            return u(prefixes.join(a + ';') + (b || ''));
          }

          function w(a, b) {
            return _typeof(a) === b;
          }

          function x(a, b) {
            return !!~('' + a).indexOf(b);
          }

          function y(a, b, d) {
            for (var e in a) {
              var f = b[a[e]];
              if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
            }

            return !1;
          }

          var d = '2.6.2',
              e = {},
              f = !0,
              g = b.documentElement,
              h = 'modernizr',
              i = b.createElement(h),
              j = i.style,
              k,
              l = {}.toString,
              m = {},
              n = {},
              o = {},
              p = [],
              q = p.slice,
              r,
              s = {}.hasOwnProperty,
              t;
          !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
            return s.call(a, b);
          } : t = function t(a, b) {
            return b in a && w(a.constructor.prototype[b], 'undefined');
          }, Function.prototype.bind || (Function.prototype.bind = function (b) {
            var c = this;
            if (typeof c != 'function') throw new TypeError();

            var d = q.call(arguments, 1),
                e = function e() {
              if (this instanceof e) {
                var a = function a() {};

                a.prototype = c.prototype;
                var f = new a(),
                    g = c.apply(f, d.concat(q.call(arguments)));
                return Object(g) === g ? g : f;
              }

              return c.apply(b, d.concat(q.call(arguments)));
            };

            return e;
          });

          for (var z in m) {
            t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
          }

          return e.addTest = function (a, b) {
            if (_typeof(a) == 'object') for (var d in a) {
              t(a, d) && e.addTest(d, a[d]);
            } else {
              a = a.toLowerCase();
              if (e[a] !== c) return e;
              b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
            }
            return e;
          }, u(''), i = k = null, function (a, b) {
            function k(a, b) {
              var c = a.createElement('p'),
                  d = a.getElementsByTagName('head')[0] || a.documentElement;
              return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
            }

            function l() {
              var a = r.elements;
              return typeof a == 'string' ? a.split(' ') : a;
            }

            function m(a) {
              var b = i[a[g]];
              return b || (b = {}, h++, a[g] = h, i[h] = b), b;
            }

            function n(a, c, f) {
              c || (c = b);
              if (j) return c.createElement(a);
              f || (f = m(c));
              var g;
              return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
            }

            function o(a, c) {
              a || (a = b);
              if (j) return a.createDocumentFragment();
              c = c || m(a);
              var d = c.frag.cloneNode(),
                  e = 0,
                  f = l(),
                  g = f.length;

              for (; e < g; e++) {
                d.createElement(f[e]);
              }

              return d;
            }

            function p(a, b) {
              b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c);
              }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
              }) + ');return n}')(r, b.frag);
            }

            function q(a) {
              a || (a = b);
              var c = m(a);
              return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
            }

            var c = a.html5 || {},
                d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                f,
                g = '_html5shiv',
                h = 0,
                i = {},
                j;

            (function () {
              try {
                var a = b.createElement('a');
                a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
                  b.createElement('a');
                  var a = b.createDocumentFragment();
                  return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
                }();
              } catch (c) {
                f = !0, j = !0;
              }
            })();

            var r = {
              elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
              shivCSS: c.shivCSS !== !1,
              supportsUnknownElements: j,
              shivMethods: c.shivMethods !== !1,
              type: 'default',
              shivDocument: q,
              createElement: n,
              createDocumentFragment: o
            };
            a.html5 = r, q(b);
          }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
        }(this, this.document), function (a, b, c) {
          function d(a) {
            return '[object Function]' == o.call(a);
          }

          function e(a) {
            return 'string' == typeof a;
          }

          function f() {}

          function g(a) {
            return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
          }

          function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function () {
              ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
            }, 0) : (a(), h()) : q = 0;
          }

          function i(a, c, d, e, f, i, j) {
            function k(b) {
              if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                'img' != a && m(function () {
                  t.removeChild(l);
                }, 50);

                for (var d in y[c]) {
                  y[c].hasOwnProperty(d) && y[c][d].onload();
                }
              }
            }

            var j = j || _B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
              t: d,
              s: c,
              e: f,
              a: i,
              x: j
            };
            1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
              k.call(this, r);
            }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
          }

          function j(a, b, c, d, f) {
            return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
          }

          function k() {
            var a = _B;
            return a.loader = {
              load: j,
              i: 0
            }, a;
          }

          var l = b.documentElement,
              m = a.setTimeout,
              n = b.getElementsByTagName('script')[0],
              o = {}.toString,
              p = [],
              q = 0,
              r = ('MozAppearance' in l.style),
              s = r && !!b.createRange().compareNode,
              t = s ? l : n.parentNode,
              l = a.opera && '[object Opera]' == o.call(a.opera),
              l = !!b.attachEvent && !l,
              u = r ? 'object' : l ? 'script' : 'img',
              v = l ? 'script' : u,
              w = Array.isArray || function (a) {
            return '[object Array]' == o.call(a);
          },
              x = [],
              y = {},
              z = {
            timeout: function timeout(a, b) {
              return b.length && (a.timeout = b[0]), a;
            }
          },
              _A,
              _B;

          _B = function B(a) {
            function b(a) {
              var a = a.split('!'),
                  b = x.length,
                  c = a.pop(),
                  d = a.length,
                  c = {
                url: c,
                origUrl: c,
                prefixes: a
              },
                  e,
                  f,
                  g;

              for (f = 0; f < d; f++) {
                g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
              }

              for (f = 0; f < b; f++) {
                c = x[f](c);
              }

              return c;
            }

            function g(a, e, f, g, h) {
              var i = b(a),
                  j = i.autoCallback;
              i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
              })));
            }

            function h(a, b) {
              function c(a, c) {
                if (a) {
                  if (e(a)) c || (j = function j() {
                    var a = [].slice.call(arguments);
                    k.apply(this, a), l();
                  }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                    var b = 0,
                        c;

                    for (c in a) {
                      a.hasOwnProperty(c) && b++;
                    }

                    return b;
                  }(), a) {
                    a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                      var a = [].slice.call(arguments);
                      k.apply(this, a), l();
                    } : j[n] = function (a) {
                      return function () {
                        var b = [].slice.call(arguments);
                        a && a.apply(this, b), l();
                      };
                    }(k[n])), g(a[n], j, b, n, h));
                  }
                } else !c && l();
              }

              var h = !!a.test,
                  i = a.load || a.both,
                  j = a.callback || f,
                  k = j,
                  l = a.complete || f,
                  m,
                  n;
              c(h ? a.yep : a.nope, !!i), i && c(i);
            }

            var i,
                j,
                l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
              j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
            } else Object(a) === a && h(a, l);
          }, _B.addPrefix = function (a, b) {
            z[a] = b;
          }, _B.addFilter = function (a) {
            x.push(a);
          }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
            b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
          }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
            var k = b.createElement('script'),
                l,
                o,
                e = e || _B.errorTimeout;
            k.src = a;

            for (o in d) {
              k.setAttribute(o, d[o]);
            }

            c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
              !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
            }, m(function () {
              l || (l = 1, c(1));
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
          }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
            var e = b.createElement('link'),
                j,
                c = i ? h : c || f;
            e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

            for (j in d) {
              e.setAttribute(j, d[j]);
            }

            g || (n.parentNode.insertBefore(e, n), m(c, 0));
          };
        }(this, document), Modernizr.load = function () {
          yepnope.apply(window, [].slice.call(arguments, 0));
        };
        /***/
      },

      /***/
      3:
      /*!********************************************************************!*\
        !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
        \********************************************************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        __webpack_require__(
        /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
        "./source/js/modernizr.js");

        module.exports = __webpack_require__(
        /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
        "./source/js/dist/modernizr.js");
        /***/
      }
      /******/

    });
    /***/

  },

  /***/
  "./source/js/modernizr.js":
  /*!********************************!*\
    !*** ./source/js/modernizr.js ***!
    \********************************/

  /*! no static exports found */

  /***/
  function sourceJsModernizrJs(module, exports) {
    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }
    /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
     * Build: http://modernizr.com/download/#-shiv-cssclasses-load
     */


    window.Modernizr = function (a, b, c) {
      function u(a) {
        j.cssText = a;
      }

      function v(a, b) {
        return u(prefixes.join(a + ';') + (b || ''));
      }

      function w(a, b) {
        return _typeof(a) === b;
      }

      function x(a, b) {
        return !!~('' + a).indexOf(b);
      }

      function y(a, b, d) {
        for (var e in a) {
          var f = b[a[e]];
          if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
        }

        return !1;
      }

      var d = '2.6.2',
          e = {},
          f = !0,
          g = b.documentElement,
          h = 'modernizr',
          i = b.createElement(h),
          j = i.style,
          k,
          l = {}.toString,
          m = {},
          n = {},
          o = {},
          p = [],
          q = p.slice,
          r,
          s = {}.hasOwnProperty,
          t;
      !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
        return s.call(a, b);
      } : t = function t(a, b) {
        return b in a && w(a.constructor.prototype[b], 'undefined');
      }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != 'function') throw new TypeError();

        var d = q.call(arguments, 1),
            e = function e() {
          if (this instanceof e) {
            var a = function a() {};

            a.prototype = c.prototype;
            var f = new a(),
                g = c.apply(f, d.concat(q.call(arguments)));
            return Object(g) === g ? g : f;
          }

          return c.apply(b, d.concat(q.call(arguments)));
        };

        return e;
      });

      for (var z in m) {
        t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
      }

      return e.addTest = function (a, b) {
        if (_typeof(a) == 'object') for (var d in a) {
          t(a, d) && e.addTest(d, a[d]);
        } else {
          a = a.toLowerCase();
          if (e[a] !== c) return e;
          b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
        }
        return e;
      }, u(''), i = k = null, function (a, b) {
        function k(a, b) {
          var c = a.createElement('p'),
              d = a.getElementsByTagName('head')[0] || a.documentElement;
          return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
        }

        function l() {
          var a = r.elements;
          return typeof a == 'string' ? a.split(' ') : a;
        }

        function m(a) {
          var b = i[a[g]];
          return b || (b = {}, h++, a[g] = h, i[h] = b), b;
        }

        function n(a, c, f) {
          c || (c = b);
          if (j) return c.createElement(a);
          f || (f = m(c));
          var g;
          return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
        }

        function o(a, c) {
          a || (a = b);
          if (j) return a.createDocumentFragment();
          c = c || m(a);
          var d = c.frag.cloneNode(),
              e = 0,
              f = l(),
              g = f.length;

          for (; e < g; e++) {
            d.createElement(f[e]);
          }

          return d;
        }

        function p(a, b) {
          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c);
          }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
          }) + ');return n}')(r, b.frag);
        }

        function q(a) {
          a || (a = b);
          var c = m(a);
          return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
        }

        var c = a.html5 || {},
            d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            f,
            g = '_html5shiv',
            h = 0,
            i = {},
            j;

        (function () {
          try {
            var a = b.createElement('a');
            a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
              b.createElement('a');
              var a = b.createDocumentFragment();
              return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
            }();
          } catch (c) {
            f = !0, j = !0;
          }
        })();

        var r = {
          elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
          shivCSS: c.shivCSS !== !1,
          supportsUnknownElements: j,
          shivMethods: c.shivMethods !== !1,
          type: 'default',
          shivDocument: q,
          createElement: n,
          createDocumentFragment: o
        };
        a.html5 = r, q(b);
      }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
    }(this, this.document), function (a, b, c) {
      function d(a) {
        return '[object Function]' == o.call(a);
      }

      function e(a) {
        return 'string' == typeof a;
      }

      function f() {}

      function g(a) {
        return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
      }

      function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function () {
          ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
        }, 0) : (a(), h()) : q = 0;
      }

      function i(a, c, d, e, f, i, j) {
        function k(b) {
          if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
            'img' != a && m(function () {
              t.removeChild(l);
            }, 50);

            for (var d in y[c]) {
              y[c].hasOwnProperty(d) && y[c][d].onload();
            }
          }
        }

        var j = j || _B.errorTimeout,
            l = b.createElement(a),
            o = 0,
            r = 0,
            u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
        1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
          k.call(this, r);
        }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
      }

      function j(a, b, c, d, f) {
        return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
      }

      function k() {
        var a = _B;
        return a.loader = {
          load: j,
          i: 0
        }, a;
      }

      var l = b.documentElement,
          m = a.setTimeout,
          n = b.getElementsByTagName('script')[0],
          o = {}.toString,
          p = [],
          q = 0,
          r = ('MozAppearance' in l.style),
          s = r && !!b.createRange().compareNode,
          t = s ? l : n.parentNode,
          l = a.opera && '[object Opera]' == o.call(a.opera),
          l = !!b.attachEvent && !l,
          u = r ? 'object' : l ? 'script' : 'img',
          v = l ? 'script' : u,
          w = Array.isArray || function (a) {
        return '[object Array]' == o.call(a);
      },
          x = [],
          y = {},
          z = {
        timeout: function timeout(a, b) {
          return b.length && (a.timeout = b[0]), a;
        }
      },
          _A,
          _B;

      _B = function B(a) {
        function b(a) {
          var a = a.split('!'),
              b = x.length,
              c = a.pop(),
              d = a.length,
              c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
              e,
              f,
              g;

          for (f = 0; f < d; f++) {
            g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
          }

          for (f = 0; f < b; f++) {
            c = x[f](c);
          }

          return c;
        }

        function g(a, e, f, g, h) {
          var i = b(a),
              j = i.autoCallback;
          i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
            k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
          })));
        }

        function h(a, b) {
          function c(a, c) {
            if (a) {
              if (e(a)) c || (j = function j() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l();
              }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                var b = 0,
                    c;

                for (c in a) {
                  a.hasOwnProperty(c) && b++;
                }

                return b;
              }(), a) {
                a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                } : j[n] = function (a) {
                  return function () {
                    var b = [].slice.call(arguments);
                    a && a.apply(this, b), l();
                  };
                }(k[n])), g(a[n], j, b, n, h));
              }
            } else !c && l();
          }

          var h = !!a.test,
              i = a.load || a.both,
              j = a.callback || f,
              k = j,
              l = a.complete || f,
              m,
              n;
          c(h ? a.yep : a.nope, !!i), i && c(i);
        }

        var i,
            j,
            l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
          j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
        } else Object(a) === a && h(a, l);
      }, _B.addPrefix = function (a, b) {
        z[a] = b;
      }, _B.addFilter = function (a) {
        x.push(a);
      }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
        b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
      }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement('script'),
            l,
            o,
            e = e || _B.errorTimeout;
        k.src = a;

        for (o in d) {
          k.setAttribute(o, d[o]);
        }

        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
          !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
        }, m(function () {
          l || (l = 1, c(1));
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
      }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement('link'),
            j,
            c = i ? h : c || f;
        e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

        for (j in d) {
          e.setAttribute(j, d[j]);
        }

        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      };
    }(this, document), Modernizr.load = function () {
      yepnope.apply(window, [].slice.call(arguments, 0));
    };
    /***/
  },

  /***/
  3:
  /*!********************************************************************!*\
    !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */
    "./source/js/modernizr.js");

    module.exports = __webpack_require__(
    /*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */
    "./source/js/dist/modernizr.js");
    /***/
  }
  /******/

});

/***/ }),

/***/ "./source/js/modernizr.js":
/*!********************************!*\
  !*** ./source/js/modernizr.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-cssclasses-load
 */
window.Modernizr = function (a, b, c) {
  function u(a) {
    j.cssText = a;
  }

  function v(a, b) {
    return u(prefixes.join(a + ';') + (b || ''));
  }

  function w(a, b) {
    return _typeof(a) === b;
  }

  function x(a, b) {
    return !!~('' + a).indexOf(b);
  }

  function y(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c) return d === !1 ? a[e] : w(f, 'function') ? f.bind(d || b) : f;
    }

    return !1;
  }

  var d = '2.6.2',
      e = {},
      f = !0,
      g = b.documentElement,
      h = 'modernizr',
      i = b.createElement(h),
      j = i.style,
      k,
      l = {}.toString,
      m = {},
      n = {},
      o = {},
      p = [],
      q = p.slice,
      r,
      s = {}.hasOwnProperty,
      t;
  !w(s, 'undefined') && !w(s.call, 'undefined') ? t = function t(a, b) {
    return s.call(a, b);
  } : t = function t(a, b) {
    return b in a && w(a.constructor.prototype[b], 'undefined');
  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
    var c = this;
    if (typeof c != 'function') throw new TypeError();

    var d = q.call(arguments, 1),
        e = function e() {
      if (this instanceof e) {
        var a = function a() {};

        a.prototype = c.prototype;
        var f = new a(),
            g = c.apply(f, d.concat(q.call(arguments)));
        return Object(g) === g ? g : f;
      }

      return c.apply(b, d.concat(q.call(arguments)));
    };

    return e;
  });

  for (var z in m) {
    t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? '' : 'no-') + r));
  }

  return e.addTest = function (a, b) {
    if (_typeof(a) == 'object') for (var d in a) {
      t(a, d) && e.addTest(d, a[d]);
    } else {
      a = a.toLowerCase();
      if (e[a] !== c) return e;
      b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
    }
    return e;
  }, u(''), i = k = null, function (a, b) {
    function k(a, b) {
      var c = a.createElement('p'),
          d = a.getElementsByTagName('head')[0] || a.documentElement;
      return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
    }

    function l() {
      var a = r.elements;
      return typeof a == 'string' ? a.split(' ') : a;
    }

    function m(a) {
      var b = i[a[g]];
      return b || (b = {}, h++, a[g] = h, i[h] = b), b;
    }

    function n(a, c, f) {
      c || (c = b);
      if (j) return c.createElement(a);
      f || (f = m(c));
      var g;
      return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
    }

    function o(a, c) {
      a || (a = b);
      if (j) return a.createDocumentFragment();
      c = c || m(a);
      var d = c.frag.cloneNode(),
          e = 0,
          f = l(),
          g = f.length;

      for (; e < g; e++) {
        d.createElement(f[e]);
      }

      return d;
    }

    function p(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
        return r.shivMethods ? n(c, a, b) : b.createElem(c);
      }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + l().join().replace(/\w+/g, function (a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
      }) + ');return n}')(r, b.frag);
    }

    function q(a) {
      a || (a = b);
      var c = m(a);
      return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a;
    }

    var c = a.html5 || {},
        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f,
        g = '_html5shiv',
        h = 0,
        i = {},
        j;

    (function () {
      try {
        var a = b.createElement('a');
        a.innerHTML = '<xyz></xyz>', f = 'hidden' in a, j = a.childNodes.length == 1 || function () {
          b.createElement('a');
          var a = b.createDocumentFragment();
          return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
        }();
      } catch (c) {
        f = !0, j = !0;
      }
    })();

    var r = {
      elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
      shivCSS: c.shivCSS !== !1,
      supportsUnknownElements: j,
      shivMethods: c.shivMethods !== !1,
      type: 'default',
      shivDocument: q,
      createElement: n,
      createDocumentFragment: o
    };
    a.html5 = r, q(b);
  }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + p.join(' ') : ''), e;
}(this, this.document), function (a, b, c) {
  function d(a) {
    return '[object Function]' == o.call(a);
  }

  function e(a) {
    return 'string' == typeof a;
  }

  function f() {}

  function g(a) {
    return !a || 'loaded' == a || 'complete' == a || 'uninitialized' == a;
  }

  function h() {
    var a = p.shift();
    q = 1, a ? a.t ? m(function () {
      ('c' == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
    }, 0) : (a(), h()) : q = 0;
  }

  function i(a, c, d, e, f, i, j) {
    function k(b) {
      if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
        'img' != a && m(function () {
          t.removeChild(l);
        }, 50);

        for (var d in y[c]) {
          y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
    }

    var j = j || _B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
      t: d,
      s: c,
      e: f,
      a: i,
      x: j
    };
    1 === y[c] && (r = 1, y[c] = []), 'object' == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = '0', l.onerror = l.onload = l.onreadystatechange = function () {
      k.call(this, r);
    }, p.splice(e, 0, u), 'img' != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
  }

  function j(a, b, c, d, f) {
    return q = 0, b = b || 'j', e(a) ? i('c' == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
  }

  function k() {
    var a = _B;
    return a.loader = {
      load: j,
      i: 0
    }, a;
  }

  var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName('script')[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = ('MozAppearance' in l.style),
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && '[object Opera]' == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? 'object' : l ? 'script' : 'img',
      v = l ? 'script' : u,
      w = Array.isArray || function (a) {
    return '[object Array]' == o.call(a);
  },
      x = [],
      y = {},
      z = {
    timeout: function timeout(a, b) {
      return b.length && (a.timeout = b[0]), a;
    }
  },
      _A,
      _B;

  _B = function B(a) {
    function b(a) {
      var a = a.split('!'),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
        url: c,
        origUrl: c,
        prefixes: a
      },
          e,
          f,
          g;

      for (f = 0; f < d; f++) {
        g = a[f].split('='), (e = z[g.shift()]) && (c = e(c, g));
      }

      for (f = 0; f < b; f++) {
        c = x[f](c);
      }

      return c;
    }

    function g(a, e, f, g, h) {
      var i = b(a),
          j = i.autoCallback;
      i.url.split('.').pop().split('?').shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && 'css' == i.url.split('.').pop().split('?').shift() ? 'c' : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
      })));
    }

    function h(a, b) {
      function c(a, c) {
        if (a) {
          if (e(a)) c || (j = function j() {
            var a = [].slice.call(arguments);
            k.apply(this, a), l();
          }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
            var b = 0,
                c;

            for (c in a) {
              a.hasOwnProperty(c) && b++;
            }

            return b;
          }(), a) {
            a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l();
            } : j[n] = function (a) {
              return function () {
                var b = [].slice.call(arguments);
                a && a.apply(this, b), l();
              };
            }(k[n])), g(a[n], j, b, n, h));
          }
        } else !c && l();
      }

      var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
      c(h ? a.yep : a.nope, !!i), i && c(i);
    }

    var i,
        j,
        l = this.yepnope.loader;
    if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
      j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
    } else Object(a) === a && h(a, l);
  }, _B.addPrefix = function (a, b) {
    z[a] = b;
  }, _B.addFilter = function (a) {
    x.push(a);
  }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = 'loading', b.addEventListener('DOMContentLoaded', _A = function A() {
    b.removeEventListener('DOMContentLoaded', _A, 0), b.readyState = 'complete';
  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
    var k = b.createElement('script'),
        l,
        o,
        e = e || _B.errorTimeout;
    k.src = a;

    for (o in d) {
      k.setAttribute(o, d[o]);
    }

    c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
    }, m(function () {
      l || (l = 1, c(1));
    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
  }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
    var e = b.createElement('link'),
        j,
        c = i ? h : c || f;
    e.href = a, e.rel = 'stylesheet', e.type = 'text/css';

    for (j in d) {
      e.setAttribute(j, d[j]);
    }

    g || (n.parentNode.insertBefore(e, n), m(c, 0));
  };
}(this, document), Modernizr.load = function () {
  yepnope.apply(window, [].slice.call(arguments, 0));
};

/***/ }),

/***/ 3:
/*!********************************************************************!*\
  !*** multi ./source/js/modernizr.js ./source/js/dist/modernizr.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/modernizr.js */"./source/js/modernizr.js");
module.exports = __webpack_require__(/*! /Users/ju/palantir/global/web/themes/custom/bglobal/styleguide/source/js/dist/modernizr.js */"./source/js/dist/modernizr.js");


/***/ })

/******/ });