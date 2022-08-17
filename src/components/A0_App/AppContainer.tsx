import * as React from "react";
import {HashRouter} from "react-router-dom";
import {App} from "./App";
import {Store, store} from "../../store/store";
import {createContext} from "react";

export const StoreContext = createContext<Store>({} as Store)

export const AppContainer = () => {
    return (
        <StoreContext.Provider value={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </StoreContext.Provider>

    )
}