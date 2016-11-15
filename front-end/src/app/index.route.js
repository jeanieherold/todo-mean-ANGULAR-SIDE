export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      //anycontroller we want to bind we bind through main
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
