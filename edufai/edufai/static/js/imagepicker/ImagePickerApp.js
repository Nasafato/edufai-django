var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main');
//var Router = require('react-router').Router;
//var routes = require('./config/routes');
/*
ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
)
*/
var routes = require('./config/routes');

window.Edufai = {
	init: function(opts) {
		console.log(opts);
		ReactDOM.render(
			routes,
			document.getElementById('imagepicker')
		);
	}
};