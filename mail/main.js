const Router = require("./router.js");
const Inbox = require("./inbox.js");

const routes = {
  inbox: new Inbox()
};

document.addEventListener("DOMContentLoaded", () => {
  let newRouter = document.querySelector(".content");
  let rout = new Router(newRouter, routes);
  rout.start();
  let elements = Array.from(document.querySelectorAll(".sidebar-nav li"));
  elements.forEach((el) => {
    el.addEventListener("click", (e) => {
      let tar = e.target;
      window.location.hash = tar.innerText.toLowerCase();
    });
  });
});
