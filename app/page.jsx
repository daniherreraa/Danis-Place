import Link from 'next/link'
import MainNavBar from './Components/UI/MainNavbar'
import ProjectCard from './Components/UI/ProjectCard'

export default function Home() {
  return (
    <main className='bg-purple w-full h-full'>
      <MainNavBar/>
      {/* Presentation container that have the names on it and the abilities */}
      <div id="presentationContainer" className="w-full h-[94.5%] flex md:h-[30rem] flex-col px-2 justify-end md:justify-center md:px-40 md:py-10">
        <div id="namesContainer">
          <h1 className='font-extrabold text-dark text-5xl md:text-8xl'>
            DANIEL
            <br/> 
            <span className='text-bright'>HERRERA</span>
          </h1>
        </div>
        <ul id="abilitiesList" className="flex flex-row text-bright">
          <li className='text-[0.72rem] pr-4 md:text-lg'>Desarrollador Web</li>
          <li className='pr-4 text-[0.72rem] md:text-lg'>Diseñador UI</li>
          <li className='pr-4 text-[0.72rem] md:text-lg'>Investigador</li>
        </ul>
        <div id="downloadCvButton" className="border-solid border-dark border-2 text-bright w-48 md:w-64 md:h-14 flex px-4 py-4 my-4 rounded-full justify-center align-middle">
          <h2 className='font-semibold'>Descarga mi CV</h2>
        </div>
      </div>
      
      {/* Projects Section */}
      <div id="projectsSection" className='w-full md:h-full bg-dark md:py-16 md:px-40'>
        <h2 className='text-lightGray font-bold text-4xl'>Mis proyectos</h2>
        <div id="projectsContainer" className='grid grid-cols-2 w-full lg:pt-14 gap-6'>
          <ProjectCard project='sunspotcalc'/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>

    </main>
  )
}
