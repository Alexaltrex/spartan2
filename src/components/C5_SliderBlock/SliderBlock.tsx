import * as React from "react";
import style from "./SliderBlock.module.scss";
import {H2} from "../Y_Common/H2/H2";
import {useState} from "react";
import SwiperClass from 'swiper/types/swiper-class';
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import {slides} from "./slides";
import {svgIcons} from "../../assets/svgIcons";
import ReactPlayer from "react-player";
import placeholder from "../../assets/jpeg/videoPlaceHolderModal.jpg";

const url = 'https://user-images.githubusercontent.com/56224288/143682321-534ae799-1d84-41a1-a9f1-7429eac7c751.mp4';

export const SliderBlock = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modal, setModal] = useState(false);
    const [playing, setPlaying] = useState(false);

    return (
        <div className={style.sliderBlock}>
            <H2 title="how to mint"/>

            <div className={style.swiperWrapper}>
                <Swiper slidesPerView="auto"
                        slidesPerGroup={1}
                        //loop={true}
                        centeredSlides={true}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                        className={style.swiper}
                        spaceBetween={18}
                        speed={300}
                >
                    {
                        slides.map(({date, title}, index) => (
                            <SwiperSlide key={index}
                                         className={style.slide}
                                         onClick={() => setModal(true)}
                            >
                                <p className={style.date}>{date}</p>
                                <p className={style.title}>{title}</p>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>

            <div className={style.controlWrapper}>
                <div className={style.controlInner}>
                    <div className={style.status}>
                        <div className={style.statusInner}
                             style={{
                                 width: `${100 * (currentIndex + 1) / slides.length}%`
                             }}
                        />
                    </div>
                    <div className={style.btns}>
                        <button className={style.btn}
                                onClick={() => swiper?.slidePrev()}
                        >
                            {svgIcons.arrow_left}
                        </button>
                        <button className={style.btn}
                                onClick={() => swiper?.slideNext()}
                        >
                            {svgIcons.arrow_left}
                        </button>
                    </div>
                </div>
            </div>

            {
                modal &&
                <div className={style.modal}>
                    <button className={style.closeBtn}
                            onClick={() => {
                                setModal(false);
                                setPlaying(false);
                            }}
                    >
                        {svgIcons.close}
                    </button>

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

                    <img src={placeholder}
                         alt=""
                         className={style.placeholder}
                    />

                    {
                        !playing &&
                        <button className={style.playBtn}
                                //onClick={() => setPlaying(true)}
                        >
                            {svgIcons.play}
                        </button>
                    }

                </div>
            }

        </div>
    )
}