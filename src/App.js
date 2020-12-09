import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles.css";
import CakeContainer from "./components/CakeContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}
