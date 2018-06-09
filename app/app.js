import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-sanitize';

import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import 'services/services';
import 'directives/directives';
import 'services/version-service';
import '../node_modules/angular-material/angular-material.css';

import mainRoutes from 'components/main/main.routes';

angular.module('app', ['ngResource', 'ui.router', 'services', 'directives', 'ngSanitize', 'version', 'ngMaterial', 'ngMessages'])

.config(mainRoutes);
