/**
 * Created by Macbaine on 3/10/2015.
 */
angular
  .module('psJwtApp')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/views/main.html'
      })

      .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
        controller: 'registerController'
    });
  })
