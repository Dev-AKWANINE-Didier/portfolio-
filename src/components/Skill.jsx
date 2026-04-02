import "./Skill.css"
import { useTranslation } from 'react-i18next';

export default function Skill(){
  const { t } = useTranslation();
    return (
    <>
        <section className="section-3 px-4  sm:px-8  py-8 transition-colors duration-300 dark:text-gray-100" id="skills">
          <header className="flex items-center flex-col w-full mb-8">
            <h1 className="font-bold text-xl mb-2 bg-linear-to-r from-[#4c11bb] via-[#4c11bb] to-[#9A88F9] bg-clip-text text-transparent">{t('Compétences & Technologies')}</h1>
            <h2 className="font-bold text-[1rem]  mb-2sm:mb-4 text-center">{t("Mes Expertises Techniques")}</h2>
          </header>
          <section className="main flex-col lg:flex lg:flex-row justify-center lg:flex-wrap w-full pb-8 gap-[3%]">
            <article className="w-full lg:w-[22.5%] floating">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.6rem] text-[#4712a8]">4+</h1>
                <h2 className="text-[rem]">FRONT-END</h2>
              </section>
              <section className=" main-section bg-linear-to-r rounded-2xl from-[#184EB9] via-[#356ab1] to-[#1d6b94] border-[#ffffffa4] border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-[#ffffffa4] border">
                  <h1 className="text-[2rem]">🎨</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-[1.5rem]">Front-end</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">HTML</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">CSS</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">JavaScript</p>
                  </div>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">React JS</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">TailwindCSS</p>
                  </div>
                </article>
              </section>
            </article>
            <article className="w-full lg:w-[22.5%] floating-reverse">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.6rem] text-[#4712a8]">5+</h1>
                <h2 className="text-[rem]">BACK-END</h2>
              </section>
              <section className="main-section bg-linear-to-r rounded-2xl from-[#12773C] via-[#147445] to-[#076543] border-[#ffffffa4] border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-[#ffffffa4] border">
                  <h1 className="text-[2rem]">⚙️</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-[1.5rem]">Back-end</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">PHP</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Laravel</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Python</p>
                  </div>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Django</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Flask</p>
                  </div>
                </article>
              </section>
            </article>
            <article className="w-full lg:w-[22.5%] floating">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.6rem] text-[#4712a8]">4+</h1>
                <h2 className="text-[rem]">{t("BASE DES DONNEES")}</h2>
              </section>
              <section className=" main-section bg-linear-to-r rounded-2xl from-[#7D1EB0] via-[#8C2693] to-[#901457] border-[#ffffffa4] border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-[#ffffffa4] border">
                  <h1 className="text-[2rem]">🗃️</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-[1.5rem]">{t("Base des données")}</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">PSQL</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">MySQL</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">SQLite</p>
                  </div>
                </article>
                <article>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">MongoDB</p>
                  </div>
                </article>
              </section>
            </article>
            <article className="w-full lg:w-[22.5%] floating-reverse">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.6rem] text-[#4712a8]">4+</h1>
                <h2 className="text-[rem]">DEVOPS</h2>
              </section>
              <section className=" main-section bg-linear-to-r rounded-2xl from-[#D04A0D] via-[#D04622] to-[#A32214] border-[#ffffffa4] border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-[#ffffffa4] border">
                  <h1 className="text-[2rem]">🚀</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-[1.5rem]">DevOps &amp; Tools</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Git</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Postman</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Lunix</p>
                  </div>
                </article>
                <article>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Docker</p>
                  </div>
                </article>
              </section>
            </article>
            <article className="w-full  lg:w-[25%] floating-reverse">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.6rem] text-[#4712a8]">4+</h1>
                <h2 className="text-[rem]">{t("RÉSEAUX")}</h2>
              </section>
              <section className=" main-section bg-linear-to-r rounded-2xl from-[#184EB9] via-[#356ab1] to-[#1d6b94] border-[#ffffffa4] border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-[#ffffffa4] border">
                  <h1 className="text-[2rem]">📶</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-[1.5rem]">{t("Réseaux")}</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">CiscoPT</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Wireshrk</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Nmap</p>
                  </div>
                </article>
                <article>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">{t("Protocoles")}</p>
                  </div>
                </article>
              </section>
            </article>
            <article className="w-full lg:w-[22.5%] floating">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.6rem] text-[#4712a8]">5+</h1>
                <h2 className="text-[rem]">{t("DONNÉES")}</h2>
              </section>
              <section className="main-section bg-linear-to-r rounded-2xl from-[#12773C] via-[#147445] to-[#076543] border-[#ffffffa4] border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-[#ffffffa4] border">
                  <h1 className="text-[2rem]">📊</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-[1.5rem]">{t("Analyse de données")}</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Numpy</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Pandas</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Matplotlib</p>
                  </div>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">Seaborn</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-[#ffffffa4] border">
                    <p className="text-[0.9rem]">JupyterLab</p>
                  </div>
                </article>
              </section>
            </article>
          </section>
        </section>
    </>
    )
}