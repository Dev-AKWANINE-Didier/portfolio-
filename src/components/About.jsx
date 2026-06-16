import "./About.css"
import { useTranslation } from 'react-i18next';
export default function About(){
    const { t } = useTranslation();
    return (
        <>
            <section id="about" className="section-2 w-full px-4 sm:px-8 pb-8 transition-colors duration-300 dark:text-gray-100">
                <header className="flex items-center flex-col w-full mb-4">
                    <h1 className="font-bold text-xl mb-2 bg-linear-to-r from-(--primary-color--) via-(--secondary-color--) to-(--tertiary-color--) bg-clip-text text-transparent">{t("A propos")}</h1>
                    <h2 className="text-sm mb-2 sm:mb-4 text-center">{t("Développeur passionné & Telecom Engeneer")}</h2>
                </header>
                <article className="flex-col lg:flex-row sm:flex gap-[4%] w-full">
                    <section className="section-left w-full lg:w-[48%] ">
                         <h1 className="font-bold text-xl mb-8 text-center">{t("Experiences professionnelles")}</h1>
                         <article className="flex rounded-xl gap-4 px-6 py-4 mb-8 dark:bg-(--dark-color--) ">
                            <div className="">
                                <i className="bi bi-braces text-[2rem] text-(--primary-color--)"></i>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl mb-2">Web developer</h1>
                                <p className="text-sm">{t("Concevez des expériences web modernes et ultra-réactives grâce à l'expertise Django, Tailwind et JavaScript, sublimées par la puissance de la stack TALL.")}</p>
                            </div>
                         </article>
                         <article className="flex rounded-xl gap-4 px-4 py-6 mb-8 dark:bg-(--dark-color--)">
                            <div>
                                <i className="bi bi-cpu text-[2rem] text-(--primary-color--)"></i>
                            </div>
                            <div>
                                <h1 className="font-bold  text-xl mb-2">Software developer</h1>
                                <p className="text-sm">{t("Création d’applications performantes avec Python, Java et PHP, orientées vers l’automatisation et la cybersécurité.")}</p>
                            </div>
                         </article>
                         <article className="flex  rounded-xl gap-4 px-4 py-6 mb-8 dark:bg-(--dark-color--)">
                            <div>
                                <i className="bi bi-hdd-network text-[2rem] text-(--primary-color--)"></i>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl mb-2">Telecomm Engeneer </h1>
                                <p className="text-sm">{t("Maîtrise des réseaux et systèmes de communication, avec un accent sur la sécurité et la performance.")}</p>
                            </div>
                         </article>
                    </section>
                    <section className="section-right w-full lg:w-[48%]  flex flex-col justify-center">
                        <article className="mb-8">
                            <p className="text-sm">{t("Passionné par la technologie et l’innovation, je développe des solutions numériques complètes en alliant mes compétences en développement logiciel, développement web et ingénierie des télécommunications. Mon objectif est de concevoir des applications performantes, sécurisées et accessibles, tout en intégrant une compréhension approfondie des systèmes et des réseaux.")}</p>
                        </article>
                        <article className="flex sm:gap-8 gap-4 w-full md:justify-center lg:justify-center">
                            <div className=" py-4 sm:px-4 px-1 flex flex-col dark:bg-(--dark-color--) rounded-xl justify-center items-center">
                                <h1 className="font-bold text-xl text-(--primary-color--)">10+</h1>
                                <p className="text-center">{t("Contributions cette année")}</p>
                            </div>
                            <div className=" py-4 px-4 flex flex-col dark:bg-(--dark-color--) rounded-xl justify-center items-center">
                                <h1 className="font-bold text-xl text-(--primary-color--)">22+</h1>
                                <p className="text-center">{t("Repositories")}</p>
                            </div>
                            <div className=" py-4 px-4 flex flex-col dark:bg-(--dark-color--) rounded-xl justify-center items-center">
                                <h1 className="font-bold text-xl text-(--primary-color--)">3+</h1>
                                <p className="text-center">{t("Année d'expérience")}</p>
                            </div>
                        </article>
                    </section>
                </article>
            </section>
        </>
    )
}