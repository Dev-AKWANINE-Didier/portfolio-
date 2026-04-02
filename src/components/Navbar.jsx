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
            <nav id="navbar" className="fixed min-h-16 px-7 dark:bg-gray-900 items-center border-gray-500   flex justify-between top-0 w-full z-50 border-b border-border backdrop-blur-xl ">
                <section>
                    <div id="logo">
                        <h1 className="font-bold text-3xl bg-linear-to-r from-[#4c11bb] via-[#4c11bb] to-[#9A88F9] bg-clip-text text-transparent">Didier</h1>
                    </div>
                </section>
                <section className="">
                    <ul id="navbarlinks" className={`transform  transition-all duration-300 ${showNavbarLink ? '' : '-translate-x-full '} flex md:md:translate-x-0 dark:text-white links left-0 top-16 px-4 h-60  absolute w-full  gap-4 links z-10 md:items-center  py-2 dark:bg-gray-900 border-gray-500 bg-gray-900 border flex-col`}>
                        <li className=""><NavLink smooth to="#home" end className=" hover:bg-[#4c11bb] px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-white dark:text-white text-white md:text-black">{t("Accueil")}</NavLink></li>
                        <li className=""><NavLink smooth to="#about" end className="hover:bg-[#4c11bb] px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-white dark:text-white text-white md:text-black">{t("A propos")}</NavLink></li>
                        <li className=""><NavLink smooth to="#skills" end className="hover:bg-[#4c11bb] px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-white dark:text-white text-white md:text-black">{t("Compétences")}</NavLink></li>
                        <li className=""><NavLink smooth to="#projects" end className="hover:bg-[#4c11bb] px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-white dark:text-white text-white md:text-black">{t("Projets")}</NavLink></li>
                        <li className=""><NavLink smooth to="#gallery" end className="hover:bg-[#4c11bb] px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-white dark:text-white text-white md:text-black">{t("Galleries")}</NavLink></li>
                        <li className=""><NavLink smooth to="#contacts" end className="hover:bg-[#4c11bb] px-4 py-1 rounded-[5px] transition-colors duration-300 hover:text-white dark:text-white text-white md:text-black">{t("Contacts")}</NavLink></li>
                    </ul>
                </section>
                <section className="flex gap-5 items-center dark:text-white transition-colors duration-300">
                    <div id="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="mode hover:bg-[#4c11bb] hover:text-white transition-colors duration-300  cursor-pointer rounded-full w-10 h-10 flex justify-center items-center">
                        <i id="sunIcon" className={`${theme === "dark" ? ' bi-moon ' : 'bi-brightness-high'} bi  text-xl`}></i>
                    </div>
                    <div id="translate" onClick={handleTranslateSection} className="translate hover:bg-[#4c11bb] cursor-pointer hover:text-white transition-colors duration-300 rounded-full w-10 h-10 flex justify-center items-center">
                        <i className="bi bi-translate"></i>
                    </div>
                    <div id="toggle-btn" onClick={handleShowNavbarLink} className="toggle-btn flex z-50  hover:bg-[#4c11bb] hover:text-white transition-colors duration-300 cursor-pointer rounded-xl w-10 h-10 justify-center items-center">
                        <i className={showNavbarLink ? 'bi bi-x-lg' : 'bi bi-list'}></i>
                    </div>
                </section>
            </nav>
            {showTranslateSection &&

                <section id="translate-section" className="translate-section flex fixed right-8 top-16 rounded-xl w-28 h-20 items-center justify-center flex-col">
                    <div className="w-full flex items-center justify-center flex-col">

                        <button onClick={() => changerLangue('fr')}
                            className="flex gap-1 items-center justify-center cursor-pointer w-full hover:bg-[#4c11bb] hover:text-white dark:text-white text-center py-1 transition-colors duration-300 rounded-t-xl">
                            <p>{t("Français")}</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="17" height="17"> <rect fill="#002654" width="1" height="2" /><rect fill="#fff" x="1" width="1" height="2" /><rect fill="#CE1126" x="2" width="1" height="2" /> </svg>
                            </span>
                        </button>
                    </div>
                    <div className="w-full flex items-center justify-center flex-col">

                        <button onClick={() => changerLangue('en')}
                            className="flex gap-1 items-center transition-colors duration-200 justify-center cursor-pointer w-full hover:bg-[#4c11bb] dark:text-white hover:text-white text-center py-1 
                                       rounded-b-xl">
                            <p>{t("Anglais")}</p>
                            <span>
                                <svg xmlns="http://www.w3.org" viewBox="0 0 60 30" width="17" height="17"><rect width="60" height="30" fill="#00247d" /><path d="M0 0l60 30M60 0L0 30" stroke="#ffffff" strokeWidth="6" /><path d="M0 0l60 30M60 0L0 30" stroke="#cf142b" strokeWidth="4" strokeDasharray="1,2" strokeDashoffset="1" /><path d="M30 0v30M0 15h60" stroke="#ffffff" strokeWidth="10" /><path d="M30 0v30M0 15h60" stroke="#cf142b" strokeWidth="6" /></svg>
                            </span>
                        </button>
                    </div>
                </section>
            }
        </>
    )
}