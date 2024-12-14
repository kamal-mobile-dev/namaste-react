/**
 * <div id="parent">
 * <div id="child">
 * <h3>Child</h3>
 * </div>
 * </div>
 * 
 * 
 */

const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, React.createElement("h3", {id:"h3"}, "Hello World from React"))
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)