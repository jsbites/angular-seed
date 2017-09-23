/*
 *
 */

import angular from 'angular';

const module = angular.module( 'myApp.version.version-directive', [] );

module.directive( 'appVersion', [ 'version',
    ( version ) => ( scope, elm ) => elm.text( version )
] );
