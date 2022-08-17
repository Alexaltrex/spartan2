import * as React from "react";
import style from "./Header.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import avatarSrc from "../../assets/jpeg/avatar.jpg";
import {Link} from "react-router-dom";
import clsx from "clsx";
import {useStore} from "../../store/useStore";
import {observer} from "mobx-react-lite";

export const links = [
    {label: "race", to: "/race"},
    {label: "Train", to: "/train"},
    {label: "shop", to: "/shop"},
    {label: "Unbreakable", to: "/unbreakable"},
];

export const Header = observer(() => {
    const {burgerMenu, setBurgerMenu, hideHeader} = useStore();

    return (
        <header className={style.header}>

            <div className={style.topBlock}>
                <div className={style.left}>
                    <a href="/" className={style.logo}>
                        {svgIcons.logo}
                    </a>
                    <button className={clsx(style.findBtn, style.findBtnTop)}>FIND A RACE</button>
                </div>
                <div className={style.right}>
                    <Link to="/" className={style.search}>{ svgIcons.search }</Link>
                    <Link to="/" className={style.cart}>{ svgIcons.cartEmpty }</Link>
                    <button className={style.burgerBtn}
                            onClick={() => setBurgerMenu(!burgerMenu)}
                    >
                        {burgerMenu ? svgIcons.close : svgIcons.burger_open}
                    </button>
                    <Link to="/" className={style.globe}>{ svgIcons.globe }</Link>
                    <Link to="/" className={style.deka}>DEKA</Link>
                </div>

            </div>

            <div className={style.bottomBlock}>

                <a href="/" className={style.logo}>
                    {svgIcons.logo}
                </a>

                <div className={style.links}>
                    {
                        links.map(({to, label}, index) => (
                            <Link key={index}
                                  to={to}
                                  className={style.link}
                            >
                                {label}
                            </Link>
                        ))
                    }
                </div>


                <div className={style.rightBlock}>
                    <button className={style.findBtn}>FIND A RACE</button>

                    <div className={style.avatar}>
                        <img src={avatarSrc} alt=""/>
                    </div>
                </div>


            </div>
        </header>
    )
})