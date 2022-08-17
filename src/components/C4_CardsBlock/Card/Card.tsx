import {FC, useState} from "react";
import {ICard} from "../cards";
import * as React from "react";
import style from "./Card.module.scss"
import {Collapse} from "@mui/material";
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";

export const Card: FC<ICard> = ({src, title, description}) => {
    const [hover, setHover] = useState(false);
    return (
        <div className={style.card}
             style={{ backgroundImage: `url(${src})` }}
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
        >
            <div className={clsx({
                [style.mask]: true,
                [style.mask_hover]: hover,
            })}/>
            <p className={style.title}>{title}</p>
            <Collapse in={hover}>
                <p className={style.description}>{description}</p>
            </Collapse>

            <button className={clsx({
                [style.btn]: true,
                [style.btn_hover]: hover,
            })}>
                {svgIcons.buttonPlus}
            </button>
        </div>
    )
}