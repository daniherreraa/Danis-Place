

import TitleDescription from "../Components/forProjects/TitleDescription"
import Colors from "../Components/forProjects/Colors"

const app = () => {
  return (
    <>
      <main className='projectPage'>

        <TitleDescription />
        <Colors colorOne='#FF595E' colorTwo='#FFCA3A' colorThree='#8AC926' colorFour='#1982C4' colorFive='#6A4C93'/>
      </main>
    </>
    
  )
}

export default app