import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import { useStrict } from "mobx";
import { action, autorun, configure, observable } from "mobx";

// useStrict(true);
configure({ enforceActions: "observed" });

class ShoppingCart {
  @observable
  items = [];

  @action
  add(item) {
    this.items.push(item);
  }
}

const shoppinCart = new ShoppingCart();

autorun(() => {
  console.log(shoppinCart.items.length);
});

shoppinCart.add({ id: 1, name: "Computer", price: 3000 });
shoppinCart.add({ id: 2, name: "Mouse", price: 30 });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
