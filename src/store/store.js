import { configureStore } from "@reduxjs/toolkit";
import counterActions from "./slices/counter";

const store = configureStore({
    reducer:{
        counter:counterActions
    }
});

export default store;