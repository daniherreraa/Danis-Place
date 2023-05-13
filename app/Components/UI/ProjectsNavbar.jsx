import Link from "next/link"

const ProjectsNavbar = () => {
  return (
    <nav className='w-full absolute bg-transparent flex columns-2 p-2 md:p-4 '>
        <div id="brandContainer" className='w-2/6 text-dark'>
          <Link href='/'><h1 className="font-medium">Volver</h1></Link>
        </div>
        <div className="w-2/6"></div>
        <div id="navMenuContainer" className='w-2/6 flex justify-end'>
          <ul className='flex flex-row text-bright'>
            
          </ul>
        </div>
    </nav>
  )
}

export default ProjectsNavbar