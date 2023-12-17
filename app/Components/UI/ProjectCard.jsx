import Link from 'next/link'

const ProjectCard = (props) => {

  const cardTitlesArray = ['SunSpotCalc (Web & UI)', 'CentiApp (Web & UI)', `Dani's place (Web & UI)`, 'Enawa (UI)', 'Iter (Web & UI)'];
  const cardDescriptionsArray = [
    'SunSpotCalc es una app web que permite calcular la rotacion diferencial del sol usando como referencia las manchas que aparecen en las fotos del mismo.',
    'Centi es la app ideal para los aficionados a la astronomía. Obtén información en tiempo real sobre las condiciones del cielo y los astros visibles. ¡Ten el cielo nocturno en la palma de tu mano!',
    'Es justo lo que estas viendo... 😎',
    'Enawa es una idea de negocio que se basa en una app para reportar problemas ambientales en las diferentes ciudades.',
    'Iter es una app que permite a los usuarios saber informacion sobre los planetas del sistema solar y el tiempo que se tardaria viajando a ellos.'
  ];
  const cardLinksArray = [
    'https://theskylabteam.github.io/sunspotcalc/#/',
    'https://centi-app.vercel.app',
    'https://danis-place.vercel.app',
    'https://iter-five.vercel.app/',
  ];

  let cardTitle = '';
  let cardDescription = '';
  let detailLink = '';
  let cardLink = '';

  if (props.project == 'sunspotcalc') {
    cardTitle = cardTitlesArray[0];
    cardDescription = cardDescriptionsArray[0];
    detailLink = '/sunspotcalc';
    cardLink = cardLinksArray[0];

  } if (props.project == 'centi') {
    cardTitle = cardTitlesArray[1];
    cardDescription = cardDescriptionsArray[1];
    detailLink = '/centiapp';
    cardLink = cardLinksArray[1];

  } if (props.project == 'danisplace') {
    cardTitle = cardTitlesArray[2];
    cardDescription = cardDescriptionsArray[2];
    detailLink = '/danisportfolio';
    cardLink = cardLinksArray[2];

  } if (props.project == 'enawa') {
    cardTitle = cardTitlesArray[3];
    cardDescription = cardDescriptionsArray[3];
    detailLink = '/enawa';
    cardLink = cardLinksArray[3];
  } if (props.project == 'iter') {
    cardTitle = cardTitlesArray[4];
    cardDescription = cardDescriptionsArray[4];
    detailLink = '/iter';
    cardLink = cardLinksArray[3];
  }


  return (
    <div className="flex flex-col w-full h-max bg-darkless p-4 lg:p-6 xl:p-8 md:p-6 rounded-2xl align-middle">
        <div className="">
            <h2 className="text-darklessText font-medium text-base xl:text-lg md:text-sm lg:text-base">{cardTitle}</h2>
            <p className="text-lightGray font-normal xl:min-h-[10vh] text-xs xl:text-[1rem] lg:text-xs mt-4 lg:mt-4 xl:mt-4 md:text-xs md:mt-4">{cardDescription}</p>
        </div>
        <div className="mt-4 md:mt-8 lg:mt-4 xl:mt-8">
            <ul className="flex flex-row justify-end gap-4">
                <li className="flex text-lightPurple text-sm xl:text-base lg:text-xs md:text-xs"><a href={cardLink} target='_blank'>Visitar pagina</a></li>
            </ul>
        </div>
    </div>
  )
}

export default ProjectCard