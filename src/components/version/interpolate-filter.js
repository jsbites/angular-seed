/*
 *
 */

import angular from 'angular';

const module = angular.module( 'myApp.version.interpolate-filter', [] );

module.filter( 'interpolate', [
    'version',
    ( version ) => ( text ) => `${text}`.replace( /\%VERSION\%/mg, version )
] );
