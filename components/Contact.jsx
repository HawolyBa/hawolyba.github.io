import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="bg-[#141414] min-h-[300px] p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Me contacter</h2>
      <div className="flex items-center justify-center gap-24">
        <div className="flex items-center gap-4 flex-col">
          {/* <MailOutlined style={{ color: '#14d9a2', fontSize: 38 }} /> */}
          <p className="leading-none text-xs">Adresse email</p>
          <a className="hover:text-teal-500" href="mailto:hawolyba@gmail.com">
            <span>hawolyba@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4 flex-col">
          {/* <LinkedinOutlined style={{ color: '#14d9a2', fontSize: 38 }} /> */}
          <p className="leading-none text-xs">Linkedin</p>
          <a target='_blank' className="hover:text-teal-500" href="https://www.linkedin.com/in/hawoly-ba-21068449/">
            <span>Mon profil</span>
          </a>
        </div>
        <div className="flex items-center gap-4 flex-col">
          {/* <GithubOutlined style={{ color: '#14d9a2', fontSize: 38 }} /> */}
          <p className="leading-none text-xs">Github</p>
          <a target='_blank' className="hover:text-teal-500" href="https://github.com/HawolyBa">
            <span>Mon profil</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact