import Link from 'next/link'

const ProjectCard = (props) => {

  const cardTitlesArray = ['SunSpotCalc (Web & UI)', 'CentiApp (Web & UI)', `Dani's place (Web & UI)`, 'Enawa (UI)'];
  const cardDescriptionsArray = [
    'SunSpotCalc es una app web que permite calcular la rotacion diferencial del sol usando como referencia las manchas que aparecen en las fotos del mismo.',
    'Centi es la app ideal para los aficionados a la astronomía. Obtén información en tiempo real sobre las condiciones del cielo y los astros visibles. ¡Ten el cielo nocturno en la palma de tu mano!',
    'Es justo lo que estas viendo... 😎',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officia, nihil quae, enim asperiores deserunt nemo eos nesciunt error ullam, odio accusantium distinctio voluptatibus quam!',
  ];

  let cardTitle = '';
  let cardDescription = '';
  let detailLink = '';

  if (props.project == 'sunspotcalc') {
    cardTitle = cardTitlesArray[0];
    cardDescription = cardDescriptionsArray[0];
    detailLink = '/sunspotcalc';

  } if (props.project == 'centi') {
    cardTitle = cardTitlesArray[1];
    cardDescription = cardDescriptionsArray[1];
    detailLink = '/centiapp'

  } if (props.project == 'danisplace') {
    cardTitle = cardTitlesArray[2];
    cardDescription = cardDescriptionsArray[2];

  } if (props.project == 'enawa') {
    cardTitle = cardTitlesArray[3];
    cardDescription = cardDescriptionsArray[3];

  
  }


  return (
    <div className="flex flex-col w-full h-max bg-darkless p-4 lg:p-6 xl:p-8 md:p-6 rounded-2xl align-middle">
        <div className="">
            <h2 className="text-darklessText font-medium text-base xl:text-lg md:text-sm lg:text-base">{cardTitle}</h2>
            <p className="text-lightGray font-normal xl:min-h-[10vh] text-sm xl:text-[1rem] lg:text-xs mt-4 lg:mt-4 xl:mt-4 md:text-xs md:mt-4">{cardDescription}</p>
        </div>
        <div className="mt-4 md:mt-8 lg:mt-4 xl:mt-8">
            <ul className="flex flex-row justify-end gap-4">
                <li className="flex text-lightPurple text-sm xl:text-base lg:text-xs md:text-xs"><Link href={detailLink}>Más detalles</Link></li>
                <li className="flex text-lightPurple text-sm xl:text-base lg:text-xs md:text-xs"><a href='https://theskylabteam.github.io/sunspotcalc/#/' target='_blank'>Visitar pagina</a></li>
            </ul>
        </div>
    </div>
  )
}

export default ProjectCard