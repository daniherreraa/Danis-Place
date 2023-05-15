import Link from 'next/link'
import MainNavBar from './Components/UI/MainNavbar'
import ProjectCard from './Components/UI/ProjectCard'

export default function Home() {
  return (
    <main className='bg-purple w-full h-full'>
      <MainNavBar/>
      {/* Presentation container that have the names on it and the abilities */}
      <div id="presentationContainer" className="w-full h-[94.5%] flex md:h-[30rem] flex-col px-2 py-8 justify-end md:justify-center md:px-20 md:py-4 lg:px-40 lg:py-10">
        <div id="namesContainer">
          <h1 className='font-extrabold text-dark text-5xl md:text-8xl'>
            DANIEL
            <br/> 
            <span className='text-lightGray'>HERRERA</span>
          </h1>
        </div>
        <ul id="abilitiesList" className="flex flex-row text-bright">
          <li className='text-[0.72rem] pr-4 md:text-lg'>Desarrollador Web</li>
          <li className='pr-4 text-[0.72rem] md:text-lg'>Diseñador UI</li>
          <li className='pr-4 text-[0.72rem] md:text-lg'>Investigador</li>
        </ul>
        <div id="downloadCvButton" className="border-solid border-dark border-2 text-bright w-48 md:w-64 h-10 md:h-14 flex my-4 rounded-full justify-center  items-center">
          <h2 className='font-semibold text-sm text-center aling-middle'>Descarga mi CV</h2>
        </div>
      </div>
      
      {/* Projects Section */}
      <div id="projectsSection" className='project-section'>
        <h2 className='project-title'>Mis proyectos</h2>
        <div id="projectsContainer" className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full gap-8 pt-8 lg:pt-16 md:pt-8 lg:gap-4 md:gap-4'>
          <ProjectCard project='sunspotcalc'/>
          <ProjectCard project='centi'/>
          <ProjectCard project='danisplace'/>
          <ProjectCard project='enawa'/>
        </div>
      </div>

      {/* Abilities Section */}
      <div className="project-section">
        <h2 className="project-subtitle">Mis habilidades</h2>
        <div className='flex flex-row gap-4 lg:gap-4 pt-8 flex-wrap'>
          <div className="ability-button">HTML</div>
          <div className="ability-button">CSS</div>
          <div className="ability-button">JS</div>
          <div className="ability-button">REACT</div>
          <div className="ability-button">NEXTJS</div>
        </div>
      </div>

      {/* Idiomas */}
      <div className="project-section">
        <h2 className="project-subtitle">Idiomas</h2>
        <div className='flex flex-row gap-4 lg:gap-4 pt-8 flex-wrap'>
          <div className="ability-button">Español - Nativo</div>
          <div className="ability-button">Ingles - B2</div>
        </div>
      </div>

    </main>
  )
}
