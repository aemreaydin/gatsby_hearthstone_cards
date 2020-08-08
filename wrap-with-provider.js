import React from "react";
import { Provider } from "react-redux";

import store from "./src/redux/store";

// eslint-disable-next-line
export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
