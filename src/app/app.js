/*
 *
 */

import angular from 'angular';
import 'angular-route';

import '../components/version/version';
import '../view1/view1';
import '../view2/view2';

// Declare app level module which depends on views, and components
const module = angular.module( 'myApp', [
    'ngRoute',

    'myApp.view1',
    'myApp.view2',
    'myApp.version'
] );

module.config( ( $locationProvider, $routeProvider ) => {
    $locationProvider.hashPrefix( '!' );
    $routeProvider.otherwise( { redirectTo: '/view1' } );
} );
