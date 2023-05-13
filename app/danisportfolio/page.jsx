import ProjectsNavbar from "../Components/UI/ProjectsNavbar"
import TitleDescription from "../Components/forProjects/TitleDescription"
import Colors from "../Components/forProjects/Colors"

const page = () => {
  return (
    <div className="w-full">
      <ProjectsNavbar />
      <main className='projectPage'>

        
        <TitleDescription project='dani'/>
        <Colors colorOne='#636AF2' colorTwo='#777DF2' colorThree='#5ECAF8' colorFour='#0D0D0D' colorFive='#FFFFFF'/>
      </main>
    </div>
  )
}

export default page