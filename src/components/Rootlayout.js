import React from "react";
import { Outlet } from "react-router-dom";
import Navbarpanel from "./Navbarpanel";
import { Provider } from "react-redux";
import store from "../store/Store";

function Rootlayout() {
  return (
    <>
    <Provider store={store}>
    <Navbarpanel/>
      <main>
        <Outlet />
      </main>
    </Provider>  
    </>
  );
}

export default Rootlayout;
