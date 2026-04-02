import "./Contact.css"
import { useTranslation } from 'react-i18next';
export default function  Contact (){
    const { t } = useTranslation();
    return (
        <>
            <section className="section-6  px-4 sm:px-8  py-12 dark:text-gray-100" id="contacts">
                <header className="flex items-center flex-col w-full mb-12">
                     <h1 className="font-bold text-xl mb-2 bg-linear-to-r from-[#4c11bb] via-[#4c11bb] to-[#9A88F9] bg-clip-text text-transparent">{t("Contacts")}</h1>
                     <h2 className="font-bold text-[1rem]  mb-2sm:mb-4 text-center">{t("Travaillons ensemble sur tes prochains projets")}</h2>
                     <p className="text-center">{t("Je suis toujours dispoble pour discuter les opportunités et projects")}</p>
                </header>
                <section className="contact-icons mb-4  items-center flex flex-col ">
                    <article className="flex gap-8 md:w-[90%] w-full flex-wrap mb-8 ">
                        <section className=" w-full lg:w-[22.5%]  md:w-[45%] border dark:border-gray-400 transition-colors duration-300 py-8 rounded-2xl  flex items-center justify-center">
                            <a href="https://github.com/Dev-AKWANINE-Didier" className="flex flex-col border dark:border-gray-400 transition-colors duration-300 items-center gap-2 hover:bg-[#4c11bb] px-4 py-2  rounded-[inherit]">
                                <div className="py-3 px-4 rounded-full bg-[#040814]">
                                    <i className="bi bi-github text-white"></i>
                                </div>
                                <h1 className="font-bold ">GitHub</h1>
                                <p className="text-[0.8rem]">Dev-AKWANINE-Didier</p>
                            </a>
                        </section>
                        <section className="w-full lg:w-[22.5%]  md:w-[45%] border dark:border-gray-400 transition-colors duration-300  py-8 rounded-2xl  flex items-center justify-center">
                            <a href="mailto:akwaninebachikanyed@gmail.com" className="flex flex-col border dark:border-gray-400 transition-colors duration-300 items-center gap-2 hover:bg-[#4c11bb] px-4 py-2  rounded-[inherit]">
                                <div className="py-3 px-4 rounded-full bg-[#040814]">
                                    <i className="bi bi-envelope text-[#EF4444]"></i>
                                </div>
                                <h1 className="font-bold">Email</h1>
                                <p className="text-center text-[0.8rem]">akwanine <br/> bachikanyed@gmail.com</p>
                            </a>
                        </section>
                        <section className="w-full lg:w-[22.5%]  md:w-[45%] border dark:border-gray-400 transition-colors duration-300  py-8 rounded-2xl  flex items-center justify-center">
                            <a href="https://wa.me/qr/J4UCKYZW4BNLC1" className="flex flex-col border dark:border-gray-400 transition-colors duration-300 items-center gap-2 hover:bg-[#4c11bb] px-4 py-2  rounded-[inherit]">
                                <div className="py-3 px-4 rounded-full bg-[#040814]">
                                    <i className="bi bi-whatsapp text-[#22C55E]"></i>
                                </div>
                                <h1 className="font-bold ">Whatsapp</h1>
                                <p className="text-[0.8rem]">+257 77 112 862</p>
                            </a>
                        </section>
                        <section className="w-full lg:w-[22.5%]  md:w-[45%] border dark:border-gray-400 transition-colors duration-300  py-8 rounded-2xl  flex items-center justify-center">
                            <a href="https://www.linkedin.com/in/didier-akwanine-0ba824330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex flex-col border dark:border-gray-400 transition-colors duration-300 items-center gap-2 hover:bg-[#4c11bb] px-4 py-2  rounded-[inherit]">
                                <div className="py-3 px-4 rounded-full bg-[#040814]">
                                    <i className="bi bi-linkedin text-[#3B82F6]"></i>
                                </div>
                                <h1 className="font-bold ">LinkedIn</h1>
                                <p className="text-[0.8rem]">AKWANINE Didier</p>
                            </a>
                        </section>
                        <section className="w-full lg:w-[22.5%]  md:w-[45%] border dark:border-gray-400 transition-colors duration-300  py-8 rounded-2xl  flex items-center justify-center">
                            <a href="https://x.com/IrAkwanine/" className="flex flex-col border dark:border-gray-400 transition-colors duration-300 items-center gap-2 hover:bg-[#4c11bb] px-4 py-2  rounded-[inherit]">
                                <div className="py-3 px-4 rounded-full bg-[#040814]">
                                    <i className="bi bi-twitter-x text-[#283D9E]"></i>
                                </div>
                                <h1 className="font-bold ">X</h1>
                                <p className="text-[0.8rem]">AKWANINE Didier</p>
                            </a>
                        </section>
                        <section className="w-full lg:w-[22.5%]  md:w-[45%] border dark:border-gray-400 transition-colors duration-300  py-8 rounded-2xl  flex items-center justify-center">
                            <a href="https://www.facebook.com/didier.kasende.adbb/" className="flex border dark:border-gray-400 transition-colors duration-300 flex-col items-center gap-2 hover:bg-[#4c11bb] px-4 py-2  rounded-[inherit]">
                                
                                <div className="py-3 px-4 rounded-full bg-[#040814]">
                                   <i className="bi bi-facebook text-blue-600"></i>
                                </div>
                                <h1 className="font-bold ">Facebook</h1>
                                <p className="text-[0.8rem]">AKWANINE Didier</p>
                            </a>
                        </section>
                        <section className="w-full lg:w-[22.5%]  md:w-[45%] border dark:border-gray-400 transition-colors duration-300  py-8 rounded-2xl  flex items-center justify-center">
                            <a href="https://www.instagram.com/akwanine_didier/" className="flex border dark:border-gray-400 transition-colors duration-300 flex-col items-center gap-2 hover:bg-[#4c11bb] px-4 py-2  rounded-[inherit]">
                                <div className="py-3 px-4 rounded-full bg-[#040814]">
                                   <i className="bi bi-instagram text-[red]"></i>
                                </div>
                                <h1 className="font-bold ">Instagram</h1>
                                <p className="text-[0.8rem]">AKWANINE Didier</p>
                            </a>
                        </section>
                        <section className="w-full lg:w-[22.5%]  md:w-[45%] border dark:border-gray-400 transition-colors duration-300  py-8 rounded-2xl  flex items-center justify-center">
                            <a href="" className="flex border dark:border-gray-400 transition-colors duration-300 flex-col items-center gap-2 hover:bg-[#4c11bb] px-4 py-2  rounded-[inherit]">
                                <div className="py-3 px-4 rounded-full bg-[#040814]">
                                   <i className="bi bi-globe text-[#22C55E]"></i>
                                </div>
                                <h1 className="font-bold">Website</h1>
                                <p className="text-[0.8rem]">www.didierakwanine.com</p>
                            </a>
                        </section>
                    </article>
                    <article className=" location w-full md:w-[60%] border dark:border-gray-400 transition-colors duration-300  py-8 rounded-2xl  flex items-center flex-col justify-center gap-2">
                            <i className="bi bi-geo-alt text-[2rem] text-[#8E4CFF]"></i>
                            <h1 className="font-bold ">Localisation</h1>
                            <h2>Bukavu, RD Congo & Bujumbura, Burundi</h2>
                    </article>
                </section>
           </section>
        </>
    )
}