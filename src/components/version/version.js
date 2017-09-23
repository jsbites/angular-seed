/*
 *
 */

import angular from 'angular';

import './interpolate-filter';
import './version-directive';

const module = angular.module( 'myApp.version', [
    'myApp.version.interpolate-filter',
    'myApp.version.version-directive'
] );

module.value( 'version', '0.1' );
