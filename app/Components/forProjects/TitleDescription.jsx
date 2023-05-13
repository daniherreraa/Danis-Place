
const TitleDescription = (props) => {

  const titlesList = ['The SunSpotCacl Project', `The Centi Project`, `The Dani's portfolio Project`];
  const descriptionList = [
    'SunSpotCalc es una app web que permite calcular la rotacion diferencial del sol usando como referencia las manchas que aparecen en las fotos del mismo.',
    'Centi es la app ideal para los aficionados a la astronomía. Obtén información en tiempo real sobre las condiciones del cielo y los astros visibles. ¡Ten el cielo nocturno en la palma de tu mano!',
    'Es justo lo que estas viendo...'


  ]
  let title = '';
  let description = '';
  
  if (props.project == 'sun') {
    title = titlesList[0];
    description = descriptionList[0];
  } if (props.project == 'centi') {
    title = titlesList[1];
    description = descriptionList[1];
  } if (props.project == 'dani') {
    title = titlesList[2];
    description = descriptionList[2];
  }

  return (
    <div>
        <h1 className='text-dark text-4xl md:text-7xl font-extrabold w-72'>
            {title}
        </h1>
        <p className='text-dark text-base md:text-lg pt-4 md:mt-6 font-normal w-4/6'>
            {description}
        </p>
    </div>
    
  )
}

export default TitleDescription