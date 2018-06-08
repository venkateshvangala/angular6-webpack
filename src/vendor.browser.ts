// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module
// TODO(gdi2290): switch to DLLs
// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';
// AngularClass
import '@angularclass/hmr';
// RxJS
if ('production' === ENV) {
  // Production
} else {
  // Development
}
//TODO - Move css files from index.html to here
import 'jquery';
/*require('jquery-ui/themes/base/all.css');*/
/*require('./assets/vendor/jquery-ui/jquery-ui.min.css');*/
// require('./assets/vendor/selectize/selectize-standalone.js');
// import 'jquery-ui/ui/widgets/datepicker';
// import 'jquery-ui/ui/widgets/autocomplete';
// import 'jquery-ui/ui/widgets/draggable';
// import 'jquery-ui/ui/widgets/droppable';
// import 'jquery-ui/ui/widgets/sortable';
// import 'jquery-ui/ui/widgets/tooltip';
// import 'datatables.net';
// require('datatables.net-dt/css/jquery.dataTables.css');
// require('./assets/vendor/jquery-timepicker/jquery.timepicker.js');
// require('./assets/vendor/jquery-timepicker/jquery.timepicker.css');
// require('./assets/vendor/jquery-date-range-picker/jquery.daterangepicker.js');
// require('./assets/vendor/jquery-date-range-picker/daterangepicker.css');
// require('./assets/vendor/jquery-form/jquery.form.js');
// import 'jquery-file-download';
// require('./assets/vendor/mapbox/mapbox.js');
// require('./assets/vendor/mapbox/leaflet.markercluster.js');
// require('./assets/vendor/selectize/selectize-standalone.js');
// import 'jquery-ui';
// require('./assets/vendor/RowSorter/RowSorter.js');
// require('./assets/vendor/tableau-charts/tableau.js');
// require('./assets/vendor/jquery-ui/jquery-ui.js');
// require('./assets/js/custom.js');
import 'crypto-js';