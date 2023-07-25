
const MainNavBar = () => {

  return (
    <nav className='w-full flex columns-2 py-4 px-2 md:p-4'>
        <div id="brandContainer" className='w-1/2'>
          <h1 id="brand" className='text-bright'>¡Hola!</h1>
        </div>
        <div id="navMenuContainer" className='w-1/2 flex justify-end'>
          <ul className='flex flex-row text-bright'>
            <li className='px-3'><a href='#presentationContainer'>Proyectos</a></li>
            <li className='px-3'><a href='#abilitiesTitle'>Habilidades</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default MainNavBar