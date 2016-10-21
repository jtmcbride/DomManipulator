function Router(node, routes) {
  this.node = node;
  this.routes = routes;
}

Router.prototype.start = function() {
  this.render();
  let that = this;
  window.addEventListener("hashchange", function() {
    that.render();
  });
};

Router.prototype.activeRoute = function() {
  return this.routes[window.location.hash.slice(1,9999)];
};

Router.prototype.render = function() {
  this.node.innerHTML = "";
  let routeName = this.activeRoute();
  let newP = document.createElement("p");
  newP.innerHTML = routeName.render();

  this.node.appendChild(newP);
};

module.exports = Router;
