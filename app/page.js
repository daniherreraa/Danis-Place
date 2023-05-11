import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-purple w-full h-screen'>
      <nav className='w-screen flex columns-2 p-2 md:p-4'>
        <div id="brandContainer" className='w-1/2'>
          <h1 id="brand" className='text-bright'>¡Hola!</h1>
        </div>
        <div id="navMenuContainer" className='w-1/2 flex justify-end'>
          <ul className='flex flex-row text-bright'>
            <li className='px-3'>Proyectos</li>
            <li className='px-3'>Contactame</li>
          </ul>
        </div>
      </nav>

      {/* Presentation container that have the names on it and the abilities */}
      <div id="presentationContainer" className="w-screen h-[94.5%] flex md:h-5/6 flex-col px-2 justify-end md:justify-center md:px-40 md:py-10">
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
        <div id="downloadCvButton" className="bg-dark text-bright w-48 md:w-64 md:h-14 flex px-4 py-4 my-4">
          <h2 className='font-semibold'>Descarga mi CV</h2>
        </div>

        <h2 id='projectsTitle' className='text-dark text-2xl md:text-3xl font-semibold pt-1 md:pt-6'>Proyectos</h2>
        <ul className='flex flex-col md:flex-row md:px-5 text-dark pb-4'>
          <li className='mx-2 py-1 text-xs md:py-2 underline'>SunSpotCalc (Web&UI)</li>
          <li className='mx-2 py-1 text-xs md:py-2 underline'>Dani's portfolio (Web&UI)</li>
          <li className='mx-2 py-1 text-xs md:py-2 underline'>Enawa (UI)</li>
          <li className='mx-2 py-1 text-xs md:py-2 underline'>Centi (UI)</li>
        </ul>
      </div>
      
    </main>
  )
}
