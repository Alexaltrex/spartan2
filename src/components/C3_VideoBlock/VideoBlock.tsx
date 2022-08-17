import * as React from "react";
import style from "./VideoBlock.module.scss"
import {useRef, useState} from "react";
import ReactPlayer from "react-player";
import {svgIcons} from "../../assets/svgIcons";

const url = 'https://user-images.githubusercontent.com/56224288/143682321-534ae799-1d84-41a1-a9f1-7429eac7c751.mp4';

export const VideoBlock = () => {
    const [playing, setPlaying] = useState(false);

    return (
        <div className={style.videoBlock}>
            {/*<ReactPlayer*/}
            {/*    className={style.video}*/}
            {/*    url={url}*/}
            {/*    width='100%'*/}
            {/*    height='auto'*/}
            {/*    playing={playing}*/}
            {/*    loop={true}*/}
            {/*    muted={true}*/}
            {/*    playsinline={true}*/}
            {/*/>*/}

            {
                !playing &&
                <button className={style.playBtn}
                        //onClick={() => setPlaying(true)}
                >
                    {svgIcons.play}
                </button>
            }
        </div>
    )
}
