/*
 *
 */

import angular from 'angular';
import 'angular-route';

const module = angular.module( 'myApp.view1', [ 'ngRoute' ] );

module.config( ( $routeProvider ) => {
    $routeProvider.when( '/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    } );
} );

module.controller( 'View1Ctrl', () => {} );
