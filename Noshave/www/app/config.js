(function(){
angular.module('Noshave')
     .config(function ($stateProvider, $urlRouterProvider) {


    //Extending state provider
    $stateProvider



    /************************************************/
    //********* Authentication Module ***************/
    /************************************************/

    //  App State
      .state('app', {
        url: '/app',
        templateUrl: 'templates/sidemenu/sidemenu.html',
        controller: 'mainCtrl',
        abstract: true
      })

      // Home State
       .state('app.home', {
        url: '/home',
        views:{
        'menuContent': {
        templateUrl: 'templates/home/home.html',
        controller:'homeCtrl',
        }}
      })

      //Gallery State
      .state('app.gallery', {
        url: '/gallery',
        templateUrl: 'templates/gallery/gallery.html',
        controller: 'galleryCtrl'
      })

      // Settings state
        .state('app.settings', {
        url: '/settings',
        templateUrl: 'templates/settings/settings.html',
        controller: 'settingsCtrl'
      })

      //  camera state
        .state('camera', {
        url: '/camera',
        templateUrl: 'templates/camera/camera.html',
        controller: 'cameraCtrl'
      })


      // about state
        .state('about', {
        url: '/about',
        templateUrl: 'templates/about/about.html',
        controller: 'aboutCtrl'
      })

 $urlRouterProvider.otherwise('/home');
  })
})()