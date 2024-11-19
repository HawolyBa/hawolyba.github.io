import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from 'antd';

import allocine from "../images/allocine.jpg";
import iicp from "../images/logo-iicp.png";
import ifocop from "../images/ifocop.jpg";
import linternaute from "../images/linternaute.jpg";
import uvsq from "../images/uvsq.png";
import webedia from "../images/webedia.jpg";

const About = () => {
  return (
    <div id="about" className="min-h-screen w-full relative">
      <div className="z-10 absolute top-12 right-8">
        <Link href='#contact'>
          <button className="border border-white rounded-lg p-4 cursor-pointer bg-transparent text-white hover:bg-emerald-300 hover:text-zinc-900 transition duration-300 ease-in-out transform hover:scale-105">
            Me solliciter
          </button>
        </Link>
      </div>
      <div className="relative overflow-hidden bg-black bg-opacity-90 h-screen flex items-center justify-center">

        {/* Barre inclinée */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transform skew-y-6" />

        {/* Contenu de la première section */}
        <div className="relative z-10 text-center px-12">
          <h1 className="text-4xl font-bold text-teal-700">À propos de moi</h1>
          <p className="mt-4 text-lg text-gray-400">
            Après plus de trois ans derrière mon clavier de journaliste cinéma, j&apos;ai décidé de changer de voie pour me lancer dans le développement web. 2017 est pour moi l&apos;année de tous les changements. Je me suis lancée dans la création de nombreux projets en autodidacte, mais c&apos;est après avoir intégrée une formation adaptée à mes besoins que j&apos;ai acquis une véritable expérience dans la création de sites internet. En plus de mes nouvelles dans le développement web, je mets également à votre service mes capacités rédactionnelles. N&apos;hésitez pas à me contacter pour plus d&apos;informations à ce sujet.
          </p>
          <div className="mt-12 flex justify-center gap-24">
            <div>
              <h4>A travaillé chez: </h4>
              <ul className="flex mt-2 gap-2">
                <li className="p-1 border border-emerald-800 rounded-full">
                  <Tooltip title="Allociné">
                    <div className="rounded-full overflow-hidden">
                      <Image src={allocine} alt="allociné" width={50} height={50} />
                    </div>
                  </Tooltip>
                </li>
                <li className="p-1 border border-emerald-800 rounded-full">
                  <Tooltip title="L&apos;internaute">
                    <div className="rounded-full overflow-hidden">
                      <Image src={linternaute} alt="linternaute" width={50} height={50} />
                    </div>
                  </Tooltip>
                </li>
                <li className="p-1 border border-emerald-800 rounded-full">
                  <Tooltip title="Webedia">
                    <div className="rounded-full overflow-hidden">
                      <Image src={webedia} alt="webedia" width={50} height={50} />
                    </div>
                  </Tooltip>
                </li>
              </ul>
            </div>
            <div>
              <h4>Est diplômée de: </h4>
              <ul className="flex mt-2 gap-2">
                <li className="p-1 border border-emerald-800 rounded-full flex justify-center items-center">
                  <Tooltip title="Université de Versailles Saint-Quentin en Yvelines">
                    <div className="rounded-full overflow-hidden">
                      <Image src={uvsq} alt="uvsq" width={50} height={50} />
                    </div>
                  </Tooltip>
                </li>
                <li className="p-1 border border-emerald-800 rounded-full flex justify-center items-center">
                  <Tooltip title="Institut International de Communauté de Paris">
                    <div className="rounded-full overflow-hidden">
                      <Image src={iicp} alt="iicp" width={50} height={50} />
                    </div>
                  </Tooltip>
                </li>
                <li className="p-1 border border-emerald-800 rounded-full flex justify-center items-center">
                  <Tooltip title="IFOCOP">
                    <div className="rounded-full overflow-hidden">
                      <Image src={ifocop} alt="ifocop" width={50} height={50} />
                    </div>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About