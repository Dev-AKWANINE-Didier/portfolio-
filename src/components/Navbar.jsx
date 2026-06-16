import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import "./Navbar.css"

export default function Navbar() {

    const [showTranslateSection, setTranslateSection] = useState(false)
    const [showNavbarLink, setShowNavbarLink] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

    function handleTranslateSection() {
        setTranslateSection(!showTranslateSection);
    }

    function handleShowNavbarLink() {
        setShowNavbarLink(!showNavbarLink)
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", 'dark');
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", 'light');
        }
    }, [theme])


    const { t, i18n } = useTranslation();

    const changerLangue = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <nav
                id="navbar"
                className="sticky min-h-16 px-7 dark:bg-(--dark-color--) items-center border-(--border-color--) flex justify-between top-0 w-full z-50 border-b backdrop-blur-xl ">
                <section>
                    <div id="logo">
                        <h1 className="font-bold text-3xl bg-linear-to-r from-(--primary-color--) via-(--secondary-color--) to-(--tertiary-color--) bg-clip-text text-transparent">Didier</h1>
                    </div>
                </section>
                <section className="">
                    <ul id="navbarlinks"
                        className={`transform  transition-all duration-300 ${showNavbarLink ? '' : '-translate-x-full '} flex md:md:translate-x-0 dark:text-(--white-color--) links left-0 top-16 px-4 h-60  absolute w-full  gap-4 links md:items-center  py-2 z-50  border-b border-(--border-color--) flex-col dark:bg-(--dark-color--) bg-[#fffffff0] backdrop-blur-xl`}>
                        <li className=""><NavLink smooth to="#home" end className=" hover:bg-(--primary-color--) px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-(--white-color--) dark:text-(--white-color--)  md:text-(--black-color--)">{t("Accueil")}</NavLink></li>
                        <li className=""><NavLink smooth to="#about" end className="hover:bg-(--primary-color--) px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-(--white-color--) dark:text-(--white-color--)  md:text-(--black-color--)">{t("A propos")}</NavLink></li>
                        <li className=""><NavLink smooth to="#skills" end className="hover:bg-(--primary-color--) px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-(--white-color--) dark:text-(--white-color--)  md:text-(--black-color--)">{t("Compétences")}</NavLink></li>
                        <li className=""><NavLink smooth to="#projects" end className="hover:bg-(--primary-color--) px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-(--white-color--) dark:text-(--white-color--)  md:text-(--black-color--)">{t("Projets")}</NavLink></li>
                        <li className=""><NavLink smooth to="#gallery" end className="hover:bg-(--primary-color--) px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-(--white-color--) dark:text-(--white-color--)  md:text-(--black-color--)">{t("Galleries")}</NavLink></li>
                        <li className=""><NavLink smooth to="#contacts" end className="hover:bg-(--primary-color--) px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-(--white-color--) dark:text-(--white-color--)  md:text-(--black-color--)">{t("Contacts")}</NavLink></li>
                    </ul>
                </section>
                <section className="flex gap-5 items-center dark:text-(--white-color--) transition-colors duration-300">
                    <div id="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="mode hover:bg-(--primary-color--) hover:text-(--white-color--) transition-colors duration-300  cursor-pointer rounded-full w-10 h-10 flex justify-center items-center">
                        <i id="sunIcon" className={`${theme === "dark" ? ' bi-moon ' : 'bi-brightness-high'} bi  text-xl`}></i>
                    </div>
                    <div id="translate" onClick={handleTranslateSection} className="translate hover:bg-(--primary-color--) cursor-pointer hover:text-(--white-color--) transition-colors duration-300 rounded-full w-10 h-10 flex justify-center items-center">
                        <i className="bi bi-translate"></i>
                    </div>
                    <div id="toggle-btn" onClick={handleShowNavbarLink} className="toggle-btn flex z-50  hover:bg-(--primary-color--) hover:text-(--white-color--) transition-colors duration-300 cursor-pointer rounded-xl w-10 h-10 justify-center items-center">
                        <i className={showNavbarLink ? 'bi bi-x-lg' : 'bi bi-list'}></i>
                    </div>
                </section>
            </nav>
            <section id="translate-section" className={`transform  transition-all z-40 ${showTranslateSection ? "translate-y-0" : '-translate-y-100'} backdrop-blur-xl dark:bg-(--dark-color--) translate-section flex fixed right-8 top-16 rounded-xl w-28 h-20 items-center justify-center flex-col`}>
                <div className="w-full flex items-center justify-center flex-col">

                    <button onClick={() => changerLangue('fr')}
                        className="flex gap-1 items-center justify-center cursor-pointer w-full hover:bg-(--primary-color--) hover:text-(--white-color--) dark:text-(--white-color--) text-center py-1 transition-colors duration-300 rounded-t-xl">
                        <p>{t("Français")}</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="17" height="17"> <rect fill="#002654" width="1" height="2" /><rect fill="#fff" x="1" width="1" height="2" /><rect fill="#CE1126" x="2" width="1" height="2" /> </svg>
                        </span>
                    </button>
                </div>
                <div className="w-full flex items-center justify-center flex-col">

                    <button onClick={() => changerLangue('en')}
                        className="flex gap-1 items-center transition-colors duration-200 justify-center cursor-pointer w-full hover:bg-(--primary-color--) dark:text-(--white-color--) hover:text-(--white-color--) text-center py-1 
                                       rounded-b-xl">
                        <p>{t("Anglais")}</p>
                        <span>
                            <svg xmlns="http://www.w3.org" viewBox="0 0 60 30" width="17" height="17"><rect width="60" height="30" fill="#00247d" /><path d="M0 0l60 30M60 0L0 30" stroke="#ffffff" strokeWidth="6" /><path d="M0 0l60 30M60 0L0 30" stroke="#cf142b" strokeWidth="4" strokeDasharray="1,2" strokeDashoffset="1" /><path d="M30 0v30M0 15h60" stroke="#ffffff" strokeWidth="10" /><path d="M30 0v30M0 15h60" stroke="#cf142b" strokeWidth="6" /></svg>
                        </span>
                    </button>
                </div>
            </section>
        </>
    )
}