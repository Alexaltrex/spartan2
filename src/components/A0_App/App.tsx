import * as React from "react";
import style from "./App.module.scss";
import {Header} from "../A1_Header/Header";
import {HomePage} from "../B0_HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import {BurgerMenu} from "../A2_BurgerMenu/BurgerMenu";
import {Footer} from "../A3_Footer/Footer";

const routes = [
    {path: "/", element: <HomePage/>}
]

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <BurgerMenu/>
            <Routes>
                {
                    routes.map(({path, element}, index) => (
                        <Route key={index}
                               path={path}
                               element={element}
                        />
                    ))
                }
            </Routes>

            <Footer/>

        </div>
    )
}