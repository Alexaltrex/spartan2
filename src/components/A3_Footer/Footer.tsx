import style from "./Footer.module.scss";
import {SocialLinks} from "../Y_Common/SocialLinks/SocialLinks";

const links = [
    {label: "Terms", href: "https://www.premint.xyz/terms/"},
    {label: "Privacy policy", href: "https://www.premint.xyz/terms/"},
]

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.inner}>
                <div className={style.first}>
                    <div className={style.links}>
                        {
                            links.map(({label, href}, index) => (
                                <a href={href}
                                   className={style.link}
                                   key={index}
                                   target="_blank"
                                   rel="nofollow noopener noreferrer"
                                >
                                    {label}
                                </a>
                            ))
                        }
                    </div>
                    <SocialLinks className={style.socialLinks}/>
                </div>
                <div className={style.second}>
                    © 2022 Spartan Race Inc. Established 2010 - Vermont
                </div>
            </div>
        </footer>
    )
}