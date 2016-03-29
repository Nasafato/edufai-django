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

window.Edufai = {
	init: function(opts) {
		console.log(opts);
		ReactDOM.render(
			<Main data={opts.data} />,
			document.getElementById('imagepicker')
		);
	}
};