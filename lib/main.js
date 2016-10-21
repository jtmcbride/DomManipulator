const DOMNodeCollection = require('./dom_node_collection');

window.$l = function(arg1){
  if (arg1 instanceof HTMLElement) {
    return new DOMNodeCollection([arg1]);
  }
  let query = Array.from(document.querySelectorAll(arg1));
  return new DOMNodeCollection(query);
};
