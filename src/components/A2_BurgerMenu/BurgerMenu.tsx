import style from "./BurgerMenu.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {links} from "../A1_Header/Header";
import {Link} from "react-router-dom";

export const BurgerMenu = observer(() => {
    const {burgerMenu, setBurgerMenu} = useStore();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_show]: burgerMenu,
        })}>
            <div className={style.links}>
                {
                    links.map(({label, to}, index) => (
                            <Link to={to}
                                  key={index}
                                  className={style.link}
                                  onClick={() => setBurgerMenu(false)}
                            >
                                {label}
                            </Link>
                        )
                    )
                }
            </div>
        </div>
    )
})