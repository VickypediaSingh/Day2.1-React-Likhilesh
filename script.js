// const parent = document.getElementById("root");
// const heading = document.createElement("h3");
// heading.textContent = "Dynamic text";
// parent.append(heading);

// const ol = document.createElement("ol");

// const li1 = document.createElement("li");
// li1.textContent = "item 1";

// li1.classList.add("xyzClass")
// li1.setAttribute('class', 'abcClass')

// ol.appendChild(li1);
// const li2 = document.createElement("li");
// li2.textContent = "item 2";
// ol.appendChild(li2);

// parent.prepend(ol); //joins at start

// =============================================================

const parent = document.getElementById("root");
const virtDOM = ReactDOM.createRoot(parent);
const h4 = React.createElement("h4", {}, "new title");
virtDOM.render(h4);
const border = { border: "10px solid pink" };
const li1 = React.createElement(
  "li",
  {
    className: "xyzClass",
    style: border,
  },
  "item 1"
);
// typeOfElm, attributes, children or innerContent
const li2 = React.createElement(
  "li",
  {
    className: "abcClass",
    style: { backgroundColor: "green" },
  },
  "item 2"
);
const ol = React.createElement("ol", {}, [li1, li2]);
virtDOM.render(ol);

// btw multiple root can co-exist in DOM tree
