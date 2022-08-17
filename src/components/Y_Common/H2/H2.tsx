import * as React from "react";
import style from "./H2.module.scss";
import {FC} from "react";
import clsx from "clsx";

interface IH2 {
    title: string
    className?: string
}

export const H2: FC<IH2> = ({title, className}) => {
    return (
        <h2 className={clsx(style.h2, Boolean(className) && className)}>
            {title}
        </h2>
    )
}