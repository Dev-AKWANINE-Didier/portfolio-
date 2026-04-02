import didierImg from "../assets/didier.jpg"
import { useTranslation } from 'react-i18next';

export default function Home(){

    const { t } = useTranslation();
    
    return (
        <>
            <section id="home" className="section-1 flex flex-col w-full  items-center pt-20 pb-4 text-black dark:text-gray-100 transition-colors duration-300">
                <article className="w-[90%] flex flex-col items-center mb-4 ">
                    <div className="floating img w-50 rounded-full mb-4 h-50 p-0.5 bg-linear-to-r from-[#4c11bb] via-[#4c11bb] to-[#9A88F9]">
                        <img src={didierImg} className="w-full h-full rounded-[inherit] object-cover " alt="Didier AKWANINE"/>
                    </div>
                    <h1 className="text-xl text-center mb-4">{t("Bonjour ! 👋")}</h1>
                    <h1 className="font-bold text-xl text-center bg-linear-to-r from-[#4c11bb] via-[#4c11bb] to-[#9A88F9] bg-clip-text text-transparent mb-4">{t("Je suis AKWANINE BACHIKANYE Didier")}</h1>
                    <h2 className="font-bold text-[1rem] mb-4 text-center">Full Stack, Software Developer & Telecommumication Engeneer</h2>
                    <p className="text-center text-[1rem]">{t('Développeur passionné, spécialisé en développement web, logiciel et ingénierie de technologie. Je conçois des solutions innovantes pour résoudre des problèmes concrets.')}</p>
                </article>  
                <article className="w-[90%] flex flex-col items-center ">
                    <section className="flex gap-4 mb-4">
                        <div>
                            <i className="bi bi-geo-alt"></i>
                        </div>
                        <h1>Bukavu, RD Congo & Bujumbura, Burundi</h1>
                    </section>
                    <section className="contacts-icons flex gap-2">
                       <div className="hover:bg-[#4c11bb] cursor-pointer rounded-full w-10 h-10 justify-center items-center"><a title="github" className="w-full flex items-center justify-center h-full" href="https://github.com/Dev-AKWANINE-Didier"><i className="bi bi-github"></i></a></div>
                       <div className="hover:bg-[#4c11bb] cursor-pointer rounded-full w-10 h-10 justify-center items-center"><a title="twitter" className="w-full flex items-center justify-center h-full" href="https://x.com/IrAkwanine/"><i className="bi bi-twitter-x"></i></a></div>
                       <div className="hover:bg-[#4c11bb] cursor-pointer rounded-full w-10 h-10 justify-center items-center"><a title="linkedin" className="w-full flex items-center justify-center h-full" href="https://www.linkedin.com/in/didier-akwanine-0ba824330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin"></i></a></div>
                       <div className="hover:bg-[#4c11bb] cursor-pointer rounded-full w-10 h-10 justify-center items-center"><a title="e-mail" className="w-full flex items-center justify-center h-full" href="mailto:akwaninebachikanyed@gmail.com"><i className="bi bi-envelope"></i></a></div>
                       <div className="hover:bg-[#4c11bb] cursor-pointer rounded-full w-10 h-10 justify-center items-center"><a title="whatsapp" className="w-full flex items-center justify-center h-full" href="https://wa.me/qr/J4UCKYZW4BNLC1"><i className="bi bi-whatsapp"></i></a></div>
                       <div className="hover:bg-[#4c11bb] cursor-pointer rounded-full w-10 h-10 justify-center items-center"><a title="facebook" className="w-full flex items-center justify-center h-full" href="https://www.facebook.com/didier.kasende.adbb/"><i className="bi bi-facebook"></i></a></div>
                    </section>
                </article>
            </section>
        </>
    )
}