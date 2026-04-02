import "./Footer.css"

export default function Footer(){
    return (
        <>
           <footer className="px-4 sm:px-8  py-6 flex flex-col gap-6 dark:text-gray-100 transition-colors duration-300">
                <section className="flex md:flex-row flex-col border-b  justify-center md:justify-between pb-6 items-center">
                    <article>
                       <p >Life is too Short Enjoy it.</p>
                    </article>
                    <article>
                         <h1 className="font-bold text-xl text-center md:text-start  bg-linear-to-r from-[#4c11bb] via-[#4c11bb] to-[#9A88F9] bg-clip-text text-transparent">AKWANINE BACHIKANYE Didier</h1>
                         <h2 className=" text-[1rem]  text-center md:text-start">Full Stack, Software Developer & Telecommumication Engeneer</h2>
                    </article>
                </section>
                <section className="flex items-center w-full justify-center ">
                    <p className=" text-center">© 2023 - 2026 • All rights reserved.</p>
                </section>
            </footer>
        </>
    )
}