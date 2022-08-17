import * as React from "react";
import {FirstBlock} from "../C1_FirstBlock/FirstBlock";
import {Roadmap} from "../C6_Roadmap/Roadmap";
import {CardsBlock} from "../C4_CardsBlock/CardsBlock";
import {TabsBlock} from "../C2_TabsBlock/TabsBlock";
import {MintFaq} from "../C7_MintFaq/MintFaq";
import {LoadMore} from "../C8_LoadMore/LoadMore";
import {VideoBlock} from "../C3_VideoBlock/VideoBlock";
import {SliderBlock} from "../C5_SliderBlock/SliderBlock";
import bgr from "../../assets/png/firstBlockBackground.png";
import style from "./HomePage.module.scss";
import {MintSchedule} from "../C9_MintSchedule/MintSchedule";
import {MintSoldOut} from "../C10_MintSoldOut/MintSoldOutBottom";
//import bgr from "../../assets/png/firstBlockBackground.png";

export const HomePage = () => {
    return (
        <div className={style.homePage}>
            {/*<img src={bgr} alt="" className={style.map}/>*/}
            <FirstBlock/>
            <TabsBlock/>
            <VideoBlock/>
            <CardsBlock/>
            <SliderBlock/>
            <Roadmap/>
            <MintSchedule/>
            <MintFaq/>
            {/*<LoadMore/>*/}
            <MintSoldOut/>
        </div>
    )
}