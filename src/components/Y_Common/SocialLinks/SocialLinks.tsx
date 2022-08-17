import style from "./SocialLinks.module.scss"

import {FC} from "react";
import clsx from "clsx";
import {svgIcons} from "../../../assets/svgIcons";

const socialLinks = [
    { icon: svgIcons.web, href: "http://spartan.com" },
    { icon: svgIcons.discord, href: "#" },
    { icon: svgIcons.instagram, href: "https://www.instagram.com/spartanrace/?hl=en" },
    { icon: svgIcons.twitter, href: "https://twitter.com/SpartanRace" },

];

interface ISocialLinks {
    className?: string
}

export const SocialLinks: FC<ISocialLinks> = ({className}) => {
    return (
        <div className={clsx(style.socialLinks, Boolean(className) && className)}>
            {
                socialLinks.map(({href, icon}, index) => (
                    <a key={index}
                       href={href}
                       target="_blank"
                       rel="nofollow noopener noreferrer"
                       className={style.socialLink}
                    >
                        {icon}
                    </a>
                ))
            }
        </div>
    )
}