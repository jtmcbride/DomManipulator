class Inbox {

  constructor() {
  }

  render() {
    let ulEle = document.createElement("ul");
    ulEle.className = "messages";
    ulEle.innerHTML = "An Inbox Message";
    return ulEle.outerHTML;
  }
}

module.exports = Inbox;
