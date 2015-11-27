/**
 * @license Angular Code Quote v0.0.1
 * (c) 2015. https://github.com/GoodSoil/Angular-Code-Quote
 * License: MIT
 */
 
 (function () {
     'use strict';
     
     var cq = angular.module('codequote', []);
     cq.factory('apiFactory', function($http) {
       var factory = {};
       factory.loadCode = loadCode;
       
       // Hoised functions
       /**
       * Call the CodeQuote service to get the quote, with the supplied query string.
       */
      function loadCode(queryString, successCallback, errorCallback) {
          if(angular.isString(queryString)) {
              var quoteUrl = 'http://codequote.azurewebsites.net/quote' + queryString;
              if(quoteUrl) {
                  // Call code-quote
                  $http.get(quoteUrl)
                          .success(successCallback)
                          .error(errorCallback);
              }
          }
      };
      
      return factory;
     });
     
     clientApp.directive('codeQuote', function($timeout, CodeQuoteFactory) {
        return {
            restrict: 'E',
            template: '<pre><code>{{ mycode.code }}</code></pre>',
            replace: true,
            scope: {
                repo: '@'
            },
            controllerAs: 'mycode',
            controller: function($scope, CodeQuoteFactory) {},
            link: {
                pre: function(scope, element, attrs) {
                    CodeQuoteFactory.loadCode(scope.repo, codeQuoteSuccess, codeQuoteError);
                    function codeQuoteSuccess(data, status, headers, config) {
                        scope.mycode.code = data.code;
                        scope.mycode.lang = data.lang;
                        element.addClass('line-numbers');
                        element.attr('data-start', data.request.start);
                        // element.addClass('language-' + scope.mycode.lang);
                        element.find('code').addClass('language-' + scope.mycode.lang);
                        // Prism.highlightElement(element[0]);
                        var e = element.find('code')[0];
                        $timeout(function() {
                            Prism.highlightElement(e);
                            // Prism.highlightAll();
                        }, 20);
                        
                    };
                    
                    function codeQuoteError(data, status, headers, config) {
                        console.log(status);
                    };
                }
            }
        };
    });
 })();
