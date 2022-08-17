import * as React from "react";
import style from "./FirstBlock.module.scss"
import cardSrc from "../../assets/png/firstBlock.png";
import bgr from "../../assets/png/firstBlockBackground.png";

const description = "THE first truly global pass offering from SPARTAN. One pass, unlimited access to the world's trails, obstacles, fitness challenges and cultures. One of only 15,000 VIP passes available worldwide."
const text = "1,000 / 15,000 Supply Remaining"


export const FirstBlock = () => {
    return (
        <div className={style.firstBlock}>
            {/*<img src={bgr} alt="" className={style.map}/>*/}


            <div className={style.inner}>
                <img src={cardSrc} alt="" className={style.card}/>
                <h1 className={style.title}>UNBREAKABLE GLOBAL PASS</h1>
                <p className={style.description}>{description}</p>
                <button className={style.btn}>
                    <span>buy the pass $3000</span>
                </button>
                <p className={style.supply}>{text}</p>
            </div>

        </div>
    )
}