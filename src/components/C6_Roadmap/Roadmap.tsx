import * as React from "react";
import style from "./Roadmap.module.scss"
import {H2} from "../Y_Common/H2/H2";
import {items} from "./items";

export const Roadmap = () => {
    return (
        <div className={style.roadmap}>
            <div className={style.inner}>
                <H2 title="roadmap"/>
                <div className={style.items}>
                    {
                        items.map(({date, title, texts}, index) => (
                            <div key={index} className={style.item}>
                                <div className={style.titleBlock}>
                                    <p className={style.date}>{date}</p>
                                    <p className={style.title}>{title}</p>
                                </div>
                                <div className={style.textsBlock}>
                                    {
                                        texts.map((text, index) => (
                                                <React.Fragment key={index}>
                                                    {
                                                        index === 0
                                                            ? <p>{text}</p>
                                                            : (
                                                                <>
                                                                    <br/>
                                                                    <p>{text}</p>
                                                                </>
                                                            )
                                                    }
                                                </React.Fragment>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}