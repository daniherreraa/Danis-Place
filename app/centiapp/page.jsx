import ProjectsNavbar from "../Components/UI/ProjectsNavbar"
import TitleDescription from "../Components/forProjects/TitleDescription"
import Colors from "../Components/forProjects/Colors"

const page = () => {
  return (
    <div className="w-full">
      <ProjectsNavbar />
      <main className='projectPage'>

        
        <TitleDescription project='centi'/>
        <Colors colorOne='#5852F2' colorTwo='#6F6BF2' colorThree='#AAA7F2' colorFour='#EBEDF2' colorFive='#0D0D0D'/>
      </main>
    </div>
  )
}

export default page