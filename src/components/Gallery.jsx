
import { useState } from "react"
import {imageList1,imageList2} from "../data/Gallery"
import { useTranslation } from 'react-i18next';


export default function  Gallery(){
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
  
    // Affiche 4 images à partir de l'index actuel
    const imagesDisplayed1 = imageList1.slice(index1, index1 + 3);
  
    const handleNext1 = () => {
      // On s'arrête quand les 4 dernières images sont visibles
      if (index1 < imageList1.length - 3) {
        setIndex1(index1 + 1);
      }
    };
  
    const handlePrev1 = () => {
      if (index1 > 0) {
        setIndex1(index1 - 1);
      }
    };


    // Affiche 4 images à partir de l'index actuel
    const imagesDisplayed2 = imageList2.slice(index2, index2 + 3);
  
    const handleNext2 = () => {
      // On s'arrête quand les 4 dernières images sont visibles
      if (index2 < imageList2.length - 3) {
        setIndex2(index2 + 1);
      }
    };
  
    const handlePrev2 = () => {
      if (index2 > 0) {
        setIndex2(index2 - 1);
      }
    };

    const { t } = useTranslation();
  
    return (
        <>
        <section className="section-5 w-full px-4 sm:px-8  py-8 transition-colors duration-300 dark:text-(--white-color--)" id="gallery">
            <header className="flex items-center flex-col w-full mb-8">
              <h1 className="font-bold text-xl mb-2 bg-linear-to-r from-(--primary-color--) via-(--secondary-color--) to-(--tertiary-color--) bg-clip-text text-transparent">{t("Gallerie")}</h1>
              <h2 className="text-sm  mb-2 sm:mb-4 text-center">{t("Certaines de mes photos")}</h2>
            </header>
            <section className="btns items-center justify-center mb-4 w-full ">
                <article className="flex items-center justify-center gap-4 p-4 flex-col md:flex-row">
                    {/* Bouton Précédent */}
                    <button 
                      className={`prev p-2 border rounded-full ${index1 === 0 ? 'opacity-30' : 'hover:bg-(--white-color--) dark:hover:bg-(--dark-color--)'}`}
                      onClick={handlePrev1}
                      disabled={index1 === 0}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>

                    {/* Zone d'affichage des 4 images */}
                    <section className="image-list-1 w-full flex flex-col md:flex-row gap-4 transition-all duration-300">
                      {imagesDisplayed1.map((img, i) => (
                        <div key={i} className="flex flex-col items-center border rounded shadow-sm md:w-[33.3%] w-full h-96 transition-all duration-300">
                          <img 
                            className="w-full h-[88%] rounded object-cover" 
                            src={img.url} 
                            alt={img.alt} 
                          />
                          <p className="text-sm mt-2 dark:text-(--white-color--) px-2 text-center transition-colors duration-300">{img.description}</p>
                        </div>
                      ))}
                    </section>

                    {/* Bouton Suivant */}
                    <button 
                      className={`next p-2 border rounded-full ${index1 >= imageList1.length - 3 ? 'opacity-30' : 'hover:bg-(--white-color--) dark:hover:bg-(--dark-color--)'}`}
                      onClick={handleNext1}
                      disabled={index1 >= imageList1.length - 3}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>

                </article>

                <article className="flex items-center justify-center gap-4 p-4 flex-col md:flex-row w-full">
                    {/* Bouton Précédent */}
                    <button 
                      className={`prev p-2 border rounded-full ${index2 === 0 ? 'opacity-30' : 'hover:bg-(--white-color--) dark:hover:bg-(--dark-color--)'}`}
                      onClick={handlePrev2}
                      disabled={index2 === 0}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>

                    {/* Zone d'affichage des 4 images */}
                    <section className="image-list-1 flex w-full flex-col md:flex-row gap-4 transition-all duration-300">
                      {imagesDisplayed2.map((img, i) => (
                        <div key={i} className="flex flex-col items-center border rounded shadow-sm md:w-[33.3%] w-full h-96 transition-all duration-300">
                          <img 
                            className="w-full h-[88%] rounded object-cover" 
                            src={img.url} 
                            alt={img.alt} 
                          />
                          <p className="text-sm mt-2 dark:text-(--white-color--) px-2 text-center transition-colors duration-300">{img.description}</p>
                        </div>
                      ))}
                    </section>

                    {/* Bouton Suivant */}
                    <button 
                      className={`next p-2 border rounded-full ${index2 >= imageList2.length - 3 ? 'opacity-30' : 'hover:bg-(--white-color--) dark:hover:bg-(--dark-color--)'}`}
                      onClick={handleNext2}
                      disabled={index2 >= imageList2.length - 3}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>

                </article>
            </section>
        </section>
        </>
    )
}