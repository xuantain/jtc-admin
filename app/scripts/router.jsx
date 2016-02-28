var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout');
var Home = require('./components/home');
var Dashboard = require('./components/dashboard');

var routes = (
  <Route name="layout" path="/" handler={Layout}>
    <DefaultRoute handler={Home} />
    <Route name="admin" handler={Dashboard} />
  </Route>
);

exports.start = function() {

  Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('content'));
  });
}
