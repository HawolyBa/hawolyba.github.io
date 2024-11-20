import React from 'react'

const Skills = () => {
  const tags = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "Redux",
    "Docker",
    "React Native"
  ];
  return (
    <div id="skills" className=" w-full ">
      <div className="p-8 w-full  bg-black bg-opacity-90">
        <h2 className="text-3xl text-center font-bold mb-6">Compétences</h2>
        <div className="flex flex-wrap justify-center gap-4 p-6  rounded-lg shadow-lg">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white text-teal-700 font-semibold rounded-full shadow-md text-sm sm:text-base hover:bg-teal-600 hover:text-white transition-transform transform hover:-translate-y-1 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills