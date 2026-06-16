import "./Skill.css"
import { useTranslation } from 'react-i18next';

export default function Skill(){
  const { t } = useTranslation();
    return (
    <>
        <section className="section-3 px-4  sm:px-8  py-8 transition-colors duration-300 dark:text-(--white-color--)" id="skills">
          <header className="flex items-center flex-col w-full mb-8">
            <h1 className="font-bold text-xl mb-2 bg-linear-to-r from-(--primary-color--) via-(--secondary-color--) to-(--tertiary-color--) bg-clip-text text-transparent">{t('Compétences & Technologies')}</h1>
            <h2 className="text-sm  mb-2 sm:mb-4 text-center">{t("Mes Expertises Techniques")}</h2>
          </header>
          <section className="main flex-col lg:flex lg:flex-row justify-center lg:flex-wrap w-full pb-8 gap-[3%]">
            <article className="w-full lg:w-[22.5%] floating">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-xl text-(--primary-color--)">4+</h1>
                <h2 className="text-xl">FRONT-END</h2>
              </section>
              <section className=" main-section bg-linear-to-r rounded-2xl from-[#184EB9] via-[#356ab1] to-[#1d6b94] border-(--border-color--) border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-(--border-color--) border">
                  <h1 className="text-xl">🎨</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-xl">Front-end</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">HTML</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">CSS</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">JavaScript</p>
                  </div>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">React JS</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">TailwindCSS</p>
                  </div>
                </article>
              </section>
            </article>
            <article className="w-full lg:w-[22.5%] floating-reverse">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-xl text-(--primary-color--)">5+</h1>
                <h2 className="text-xl">BACK-END</h2>
              </section>
              <section className="main-section bg-linear-to-r rounded-2xl from-[#12773C] via-[#147445] to-[#076543] border-(--border-color--) border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-(--border-color--) border">
                  <h1 className="text-xl">⚙️</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-xl">Back-end</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">PHP</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Laravel</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Python</p>
                  </div>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Django</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Flask</p>
                  </div>
                </article>
              </section>
            </article>
            <article className="w-full lg:w-[22.5%] floating">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-xl text-(--primary-color--)">4+</h1>
                <h2 className="text-xl">{t("BASE DES DONNEES")}</h2>
              </section>
              <section className=" main-section bg-linear-to-r rounded-2xl from-[#7D1EB0] via-[#8C2693] to-[#901457] border-(--border-color--) border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-(--border-color--) border">
                  <h1 className="text-xl">🗃️</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-xl">{t("Base des données")}</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">PSQL</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">MySQL</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">SQLite</p>
                  </div>
                </article>
                <article>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">MongoDB</p>
                  </div>
                </article>
              </section>
            </article>
            <article className="w-full lg:w-[22.5%] floating-reverse">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-xl text-(--primary-color--)">4+</h1>
                <h2 className="text-xl">DEVOPS</h2>
              </section>
              <section className=" main-section bg-linear-to-r rounded-2xl from-[#D04A0D] via-[#D04622] to-[#A32214] border-(--border-color--) border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-(--border-color--) border">
                  <h1 className="text-xl">🚀</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-xl">DevOps &amp; Tools</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Git</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Postman</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Lunix</p>
                  </div>
                </article>
                <article>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Docker</p>
                  </div>
                </article>
              </section>
            </article>
            <article className="w-full  lg:w-[25%] floating-reverse">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-xl text-(--primary-color--)">4+</h1>
                <h2 className="text-[rem]">{t("RÉSEAUX")}</h2>
              </section>
              <section className=" main-section bg-linear-to-r rounded-2xl from-[#184EB9] via-[#356ab1] to-[#1d6b94] border-(--border-color--) border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-(--border-color--) border">
                  <h1 className="text-xl">📶</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-xl">{t("Réseaux")}</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">CiscoPT</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Wireshrk</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Nmap</p>
                  </div>
                </article>
                <article>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">{t("Protocoles")}</p>
                  </div>
                </article>
              </section>
            </article>
            <article className="w-full lg:w-[22.5%] floating">
              <section className="w-full mb-8 flex flex-col items-center justify-center">
                <h1 className="font-bold text-xl text-(--primary-color--)">5+</h1>
                <h2 className="text-[rem]">{t("DONNÉES")}</h2>
              </section>
              <section className="main-section bg-linear-to-r rounded-2xl from-[#12773C] via-[#147445] to-[#076543] border-(--border-color--) border w-full py-6 flex flex-col items-center">
                <article className="bg-[#ffffff4d] py-2 px-3 mb-3 rounded-full border-(--border-color--) border">
                  <h1 className="text-xl">📊</h1>
                </article>
                <article className="mb-4">
                  <h1 className="font-bold text-xl">{t("Analyse de données")}</h1>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Numpy</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Pandas</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Matplotlib</p>
                  </div>
                </article>
                <article className="flex gap-2">
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">Seaborn</p>
                  </div>
                  <div className="bg-[#ffffff4d] py-1 px-3 mb-3 rounded-xl border-(--border-color--) border">
                    <p className="text-sm">JupyterLab</p>
                  </div>
                </article>
              </section>
            </article>
          </section>
        </section>
    </>
    )
}