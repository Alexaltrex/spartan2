import * as React from "react";
import style from "./MintFaq.module.scss"
import {H2} from "../Y_Common/H2/H2";
import {Item} from "./Item/Item";
import {faqItems} from "./faqItems";

export const MintFaq = () => {
    return (
        <div className={style.mintFaq}>
            <div className={style.inner}>
                <H2 title="Mint Faq"/>
                <div className={style.items}>
                    {
                        faqItems.map((item, index) => (
                            <Item key={index} index={index} {...item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}