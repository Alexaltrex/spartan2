import {FC} from "react";
import style from "./Item.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";
import {Collapse} from "@mui/material";

interface IItem {
    index: number
    q: string
    a: string | JSX.Element
}

export const Item: FC<IItem> = observer(({index, q, a}) => {
    const {faqIndex, setFaqIndex} = useStore();

    return (
        <div className={style.item}>
            <div className={style.questionBlock}>
                <p className={style.question}>{q}</p>
                <button className={style.btn}
                        onClick={() => {
                            if (index !== faqIndex) {
                                setFaqIndex(index)
                            } else {
                                setFaqIndex(-1)
                            }

                        }}
                >
                    {faqIndex === index ? svgIcons.minus : svgIcons.plus}
                </button>
            </div>

            <Collapse in={faqIndex === index}>
                <div className={style.answerBlock}>
                    {
                        typeof a === "string"
                            ? <p>{a}</p>
                            : a
                    }
                </div>
            </Collapse>

        </div>
    )
})