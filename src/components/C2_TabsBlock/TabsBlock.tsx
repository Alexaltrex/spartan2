import * as React from "react";
import style from "./TabsBlock.module.scss"
import {H2} from "../Y_Common/H2/H2";
import {useState} from "react";
import clsx from "clsx";
import src0m from "../../assets/png/tabsBlock/tab0_mobile.png";
import src0d from "../../assets/png/tabsBlock/tab0_desktop.png";
import src10 from "../../assets/png/tabsBlock/tab1_0.png";
import src11 from "../../assets/png/tabsBlock/tab1_1.png";
import src12 from "../../assets/png/tabsBlock/tab1_2.png";
import src13 from "../../assets/png/tabsBlock/tab1_3.png";
import src14 from "../../assets/png/tabsBlock/tab1_4.png";
import src2 from "../../assets/png/tabsBlock/tab2.png";

const title = "There are NO LIMITS to the access this digital NFT will give you. Benefits can last up to 5 years";
const tabs = [
    "GLOBAL EVENTS",
    "COMMUNITY",
    "REGISTRATIONS",
];


export const TabsBlock = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className={style.tabsBlock}>
            <div className={style.inner}>
                <H2 title={title}
                    className={style.title}
                />
                <div className={style.tabs}>

                        <div className={style.tabsInner}>
                            {
                                tabs.map((tab, index) => (
                                    <button key={index}
                                            className={clsx({
                                                [style.btn]: true,
                                                [style.btn_selected]: index === tabIndex,
                                            })}
                                            onClick={() => setTabIndex(index)}
                                    >
                                        {tab}
                                    </button>
                                ))
                            }
                        </div>


                </div>

                {
                    tabIndex === 0 && (
                        <div className={style.block0}>
                            <img src={src0m} alt="" className={style.src0m}/>
                            <img src={src0d} alt="" className={style.src0d}/>
                            <p className={style.text}>450+ events</p>
                        </div>
                    )
                }

                {
                    tabIndex === 1 && (
                        <div className={style.block1}>
                            <p className={style.text}>10 MILLION+</p>
                              <div className={style.mobile}>
                                    <div className={style.row}>
                                        <img src={src10} alt=""/>
                                        <img src={src11} alt=""/>
                                        <img src={src12} alt=""/>
                                    </div>
                                  <div className={style.row}>
                                      <img src={src13} alt=""/>
                                      <img src={src14} alt=""/>
                                  </div>
                              </div>
                            <div className={style.desktop}>
                                <img src={src10} alt=""/>
                                <img src={src11} alt=""/>
                                <img src={src12} alt=""/>
                                <img src={src13} alt=""/>
                                <img src={src14} alt=""/>
                            </div>
                        </div>
                    )
                }

                {
                    tabIndex === 2 && (
                        <div className={style.block2}>
                            <p className={style.text}>1,5 MILLION+</p>
                        </div>
                    )
                }

            </div>
        </div>
    )
}