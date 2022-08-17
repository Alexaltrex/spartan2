import style from "./MintSoldOutBottom.module.scss"
import * as React from "react";
import {H2} from "../Y_Common/H2/H2";

const text = "Thanks to everyone for becoming a UNBREAKABLE GLOBAL PASS holder! Looking for a pass? Check out secondary listings on OpenSea!"

export const MintSoldOut = () => {
    return (
        <div className={style.mintSoldOutBottom}>
            <div className={style.inner}>
                <H2 title="Mint sold out!"/>
                <h2 className={style.title}>Mint sold out!</h2>
                <p className={style.text}>{text}</p>
                <button className={style.btn}>
                    buy on opensea
                </button>
            </div>
        </div>
    )
}