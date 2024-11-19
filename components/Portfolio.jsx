'use client';

import React from 'react'
import Card from './Card'

import amazon from "../images/amazon.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import hdn from "../images/hdn.png";
import kronikea from '../images/kronikea.png';
import whatsapp from '../images/whatsapp.png';
import netflix from '../images/netflix.png';
import spotify from '../images/spotify.png';
import teakup from '../images/teakup.png';
import buyi from '../images/buyi.png';

const Portfolio = () => {
  return (
    <div className="relative overflow-hidden bg-[#141414]">
      <div id="portfolio" className="relative min-h-screen p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          <Card image={kronikea} title={'Kronikea'} stack={'Stack: NextJs, Tailwind, Firebase'} link={'https://kronikea-1t90nlvsv-hawolyba.vercel.app/fr'} />
          <Card image={hdn} title={'Hotel du Nord'} stack={'Stack: HTML, CSS, JQuery'} link={'https://hotel-du-nord.netlify.app/'} />
          <Card image={amazon} title={'Amazon Clone'} stack={'Stack: React, Tailwind'} link={'https://amazon-clone-hba.netlify.app/'} />
          <Card image={instagram} title={'Instagram Clone'} stack={'Stack: React, Tailwind'} link={''} />
          <Card image={twitter} title={'Twitter Clone'} stack={'Stack: React, Tailwind'} link={'https://twitter-clone-hba.netlify.app/'} />
          <Card image={whatsapp} title={'WhatsApp Clone'} stack={'Stack: React, Tailwind'} link={'https://hba-whatsapp-clone.netlify.app/'} />
          <Card image={netflix} title={'Netflix Clone'} stack={'Stack: React, Tailwind'} link={''} />
          <Card image={spotify} title={'Spotify Clone'} stack={'Stack: React, Tailwind'} link={'https://spotify-clone-hba.netlify.app/'} />
          <Card image={teakup} title={'Teak Up'} stack={'Stack: HTML, CSS, JQuery'} link={'https://teak-up.netlify.app/'} />
          <Card image={buyi} title={'Buyi'} stack={'Stack: HTML, CSS, JQuery'} link={'https://buyi.netlify.app/'} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio