import React from 'react'
import { GoMail } from "react-icons/go";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#141414] pt-32 md:pt-0 h-full md:min-h-screen p-8 flex items-center flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Me contacter</h2>
      <div className="flex  flex-col md:flex-row items-center justify-center gap-24">
        <div className="flex items-center gap-4 flex-col">
          <GoMail style={{ color: '#14d9a2', fontSize: 38 }} />
          <p className="leading-none text-xs">Adresse email</p>
          <a rel="noreferrer" className="hover:text-teal-500" href="mailto:hawolyba@gmail.com">
            <span className="underline hover:no-underline">hawolyba@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4 flex-col">
          <SlSocialLinkedin style={{ color: '#14d9a2', fontSize: 38 }} />
          <p className="leading-none text-xs">Linkedin</p>
          <a rel="noreferrer" target='_blank' className="hover:text-teal-500" href="https://www.linkedin.com/in/hawoly-ba-21068449/">
            <span className="underline hover:no-underline">Mon profil</span>
          </a>
        </div>
        <div className="flex items-center gap-4 flex-col">
          <FiGithub style={{ color: '#14d9a2', fontSize: 38 }} />
          <p className="leading-none text-xs">Github</p>
          <a rel="noreferrer" target='_blank' className="hover:text-teal-500" href="https://github.com/HawolyBa">
            <span className="underline hover:no-underline">Mon profil</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact