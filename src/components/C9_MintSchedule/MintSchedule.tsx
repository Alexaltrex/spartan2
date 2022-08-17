import style from "./MintSchedule.module.scss"
import {mintScheduleItems} from "./mintScheduleItems";
import {H2} from "../Y_Common/H2/H2";

export const MintSchedule = () => {
    return (
        <div className={style.mintSchedule} id="schedule">
            <div className={style.inner}>
                <H2 title="Mint Schedule" className={style.title}/>
                <p className={style.textLink}>
                    <a href="#"
                       rel="nofollow noopener noreferrer"
                    >
                        Click here
                    </a> <span>to check which list you’re on.</span>
                </p>

                <div className={style.headerItems}>
                    <p>TIME (US PACIFIC TIME)</p>
                    <p>MINT OPENS FOR</p>
                </div>


                <div className={style.items}>
                    {
                        mintScheduleItems.map(({time, date, title, text}, index) => (
                            <div className={style.item} key={index}>
                                <div className={style.left}>
                                    <p className={style.time}>{time}</p>
                                    <p className={style.date}>{date}</p>
                                </div>
                                <div className={style.right}>
                                    <p className={style.title}>{title}</p>
                                    <p className={style.text}>{text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}