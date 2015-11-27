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
 })();
