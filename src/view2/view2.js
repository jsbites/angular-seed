/*
 *
 */

import angular from 'angular';
import 'angular-route';

const module = angular.module( 'myApp.view2', [ 'ngRoute' ] );

module.config( ( $routeProvider ) => {
    $routeProvider.when( '/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    } );
} );

module.controller( 'View2Ctrl', () => {} );

