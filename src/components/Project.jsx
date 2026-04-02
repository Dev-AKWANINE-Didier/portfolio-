import { useState } from "react"
import "./Project.css"
import { useTranslation } from 'react-i18next';

export default function Project(){

    const [project, setProject] = useState('all')
    function toggleProject(projectName){
        setProject(project == projectName ? 'all' : projectName)
    }

    const { t } = useTranslation();

    return (
        <>
        <section className="section-4 w-full px-4 sm:px-8  py-8 transition-colors duration-300 dark:text-gray-100" id="projects">
            <header className="flex items-center flex-col w-full mb-8">
              <h1 className="font-bold text-xl mb-2 bg-linear-to-r from-[#4c11bb] via-[#4c11bb] to-[#9A88F9] bg-clip-text text-transparent">{t("Projets")}</h1>
              <h2 className="font-bold text-4  mb-2sm:mb-4 text-center">{t("Présenter mes travaux")}</h2>
            </header>
            <section className="btns flex items-center justify-center mb-4 w-full">
                <article className="flex flex-col md:flex-col lg:flex-row mdgap-8 gap-4">
                  <div id="all-project" onClick={()=>toggleProject('all')} className={`all ${project === 'all' ? 'bg-[#4c11bb] text-white ' :'bg-transparent '}  cursor-pointer  rounded-full py-2 px-4  flex justify-center items-center border dark:border-gray-300`}>
                    <p className="font-semi-bold">{t("Tous")}</p>
                  </div>
                  <div id="desktop-app" onClick={()=>toggleProject("desktop-app")} className={`Desktop-application ${project === 'desktop-app' ? 'bg-[#4c11bb]  text-white ' :'bg-transparent '}  cursor-pointer  rounded-full py-2 px-4 flex justify-center items-center border dark:border-gray-300`}>
                    <p>{t("Application Desktop")}</p>
                  </div>
                  <div id="telecomm-tool" onClick={()=>toggleProject('telecomm-tool')} className={`telecomm-tool ${project === 'telecomm-tool' ? 'bg-[#4c11bb]  text-white ' :'bg-transparent '}  cursor-pointer  rounded-full py-2 px-4 flex justify-center items-center border dark:border-gray-300`}>
                    <p>{t("Outils de Télécommunication")}</p>
                  </div>
                  <div id="web-app" onClick={()=>toggleProject("web-app")} className={`web-application ${project === 'web-app' ? 'bg-[#4c11bb]  text-white ' :'bg-transparent '} cursor-pointer  rounded-full py-2 px-4 flex justify-center items-center border dark:border-gray-300`}>
                    <p>{t("Application Web")}</p>
                  </div>
                </article>
            </section>
            <section className="w-full flex flex-col mt-12 project h-[90%]">
                <article className="w-full flex md:flex-row  lg:gap-[2%] mg:gap-[2%]  gap-4 flex-wrap projects">
                    {(project === "web-app" || project === "all") && 
                    <section className="project web-project w-full lg:w-[32%] mb-2 lg:mb-6 md:w-[48%] py-4 px-4 flex flex-col justify-between rounded-2xl border dark:border-gray-400">
                        <div className="w-full flex justify-between mb-4">
                            <h1 className="font-bold text-xl ">STMIS</h1>
                            <a href="https://github.com/Dev-AKWANINE-Didier">
                              <i className="bi bi-github" />
                            </a>
                        </div>
                        <div className="w-full mb-4">
                            <p>{t("Favorisez échanges et le suivi académique au sein d'une université grâce à un système qui reproche enseignants et étudiants dans un environnement structuré et interactifs.")}</p>
                        </div>
                        <div className="w-full flex gap-4">
                            <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                              <p>HTML</p>
                            </div>
                            <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                              <p>TailwindCSS</p>
                            </div>
                            <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                              <p>Django</p>
                            </div>
                        </div>
                    </section>}

                    {(project === "telecomm-tool" || project === 'all') &&
                    <section className="project telecom-project  w-full lg:w-[32%] mb-2 lg:mb-6 md:w-[48%] py-4 px-4 flex flex-col justify-between rounded-2xl border dark:border-gray-400">
                        <div className="w-full flex justify-between mb-4">
                          <h1 className="font-bold text-xl ">Packet Sniffer (Analyseur de paquets)</h1>
                        </div>
                        <div className="w-full mb-4">
                          <p>{t("Capture et analyse le trafic réseau pour afficher les protocoles utilisés, les adresses IP, ports, etc.")}</p>
                        </div>
                        <div className="w-full flex gap-4">
                          <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>Wireshark</p>
                          </div>
                          <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>Scapy (Python)</p>
                          </div>
                        </div>
                    </section>}
                    {(project === 'web-app' || project === 'all') &&
                    <section className="project web-project  w-full lg:w-[32%] mb-2 lg:mb-6 md:w-[48%] py-4 px-4 flex flex-col justify-between rounded-2xl border dark:border-gray-400">
                        <div className="w-full flex justify-between mb-4">
                          <h1 className="font-bold text-xl ">Auth Laraval</h1>
                          <a href="https://github.com/Dev-AKWANINE-Didier">
                            <i className="bi bi-github " />
                          </a>
                        </div>
                        <div className="w-full mb-4">
                          <p>{t("Système d'authentification personnalisé développé avec Laravel Fortify.")}</p>
                        </div>
                        <div className="w-full flex gap-4">
                          <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>HTML</p>
                          </div>
                          <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>TailwindCSS</p>
                          </div>
                          <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>Laravel</p>
                          </div>
                        </div>
                    </section>}
                     
                    {(project === 'telecomm-tool' || project ==='all') &&
                    <section className="telecom-project project w-full lg:w-[32%] mb-2 lg:mb-6 md:w-[48%] py-4 px-4 flex flex-col justify-between rounded-2xl border dark:border-gray-400">
                        <div className="w-full flex justify-between mb-4">
                          <h1 className="font-bold text-xl ">Chat Client-Serveur (TCP/IP)</h1>
                        </div>
                        <div className="w-full mb-4">
                          <p>{t("Permet la communication instantanée entre plusieurs utilisateurs sur un réseau local via sockets.")}</p>
                        </div>
                        <div className="w-full flex gap-4">
                          <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>Python</p>
                          </div>
                          <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>TCP/IP sockets</p>
                          </div>
                        </div>
                    </section>}

                    {(project === 'web-app' || project === 'all') &&
                    <section className="project web-project w-full lg:w-[32%] mb-2 lg:mb-6 md:w-[48%] py-4 px-4 flex flex-col justify-between rounded-2xl border dark:border-gray-400">
                        <div className="w-full flex justify-between mb-4">
                          <h1 className="font-bold text-xl ">StuFaPay</h1>
                          <a href="https://github.com/Dev-AKWANINE-Didier">
                            <i className="bi bi-github " />
                          </a>
                        </div>
                        <div className="w-full mb-4">
                          <p>{t("Favorisez la gestion des bordereaux et faire le paiement exprès de frais académiques d’une manière numérique en réduisant le cout de transport et résoudre le problème de gestion des bordereaux.")}</p>
                        </div>
                        <div className="w-full flex gap-4">
                          <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>HTML</p>
                          </div>
                          <div className="rounded-full   px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>TailwindCSS</p>
                          </div>
                          <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>Django</p>
                          </div>
                        </div>
                    </section>}
                    
                    {(project === 'telecomm-tool' || project === 'all') &&
                    <section className="telecom-project project  w-full lg:w-[32%] mb-2 lg:mb-6 md:w-[48%] py-4 px-4 flex flex-col justify-between rounded-2xl border dark:border-gray-400">
                        <div className="w-full flex justify-between mb-4">
                          <h1 className="font-bold text-xl ">Simulateur de réseau LAN</h1>
                        </div>
                        <div className="w-full mb-4">
                          <p>{t("Conception d’un petit réseau (ordinateurs, routeurs, commutateurs) pour apprendre la communication IP.")}</p>
                        </div>
                        <div className="w-full flex gap-4">
                          <div className="rounded-full    px-3 flex justify-center items-center border dark:border-gray-300">
                            <p>Cisco Packet Tracer</p>
                          </div>
                        </div>
                    </section>}
                </article>
                   {project !== 'all' && project !== "web-app" && project !== 'telecomm-tool' && (
                        <p className="text-center">{t("Aucun projet disponible")}</p>
                    )}
            </section>
        </section>
        </>
    )
}