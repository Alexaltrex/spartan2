import * as React from "react";
import style from "./CardsBlock.module.scss";
import {H2} from "../Y_Common/H2/H2";
import {cards} from "./cards";
import {Card} from "./Card/Card";

export const CardsBlock = () => {
    return (
        <div className={style.cardsBlock}>
            <div className={style.inner}>
                <H2 title="GET EXCLUSIVE ACCESS TO OUR HOLDER BENEFITS"
                    className={style.title}
                />
                <div className={style.cards}>
                    {
                        cards.map((card, index) => (
                            <Card key={index} {...card}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}