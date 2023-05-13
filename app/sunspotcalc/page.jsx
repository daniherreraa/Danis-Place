
import TitleDescription from "../Components/forProjects/TitleDescription"
import Colors from "../Components/forProjects/Colors"
import ProjectsNavbar from "../Components/UI/ProjectsNavbar"

const app = () => {
  return (
    <div className="w-full">
      <ProjectsNavbar/>
      <main className='projectPage'>

        
        <TitleDescription project="sun"/>
        <Colors colorOne='#FF595E' colorTwo='#FFCA3A' colorThree='#8AC926' colorFour='#1982C4' colorFive='#6A4C93'/>
      </main>
    </div>
    
  )
}

export default app