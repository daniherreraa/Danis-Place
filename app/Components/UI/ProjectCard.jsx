
const ProjectCard = (props) => {

  const cardTitlesArray = ['SunSpotCalc (Web & UI)', 'CentiApp (Web & UI)', `Dani's place (Web & UI)`, 'Enawa (UI)'];
  const cardDescriptionsArray = ['SunSpotCalc es una app web que permite calcular la rotacion diferencial del sol usando como referencia las manchas que aparecen en las fotos del mismo.'];
  let cardTitle = '';
  let cardDescription = '';

  if (props.project == 'sunspotcalc') {
    cardTitle = cardTitlesArray[0];
  }

  if (props.project == 'sunspotcalc') {
    cardDescription = cardDescriptionsArray[0];
  }


  return (
    <div className="flex flex-col w-full h-64 bg-darkless lg:p-8 rounded-2xl">
        <div className="lg:h-2/3 md:h-auto">
            <h2 className="text-darklessText font-medium text-lg">{cardTitle}</h2>
            <p className="text-lightGray font-normal text-[1rem] mt-8">{cardDescription}</p>
        </div>
        <div className="lg:h-1/3">
            <ul className="flex flex-row justify-end gap-4">
                <li className="flex text-lightPurple">Más detalles</li>
                <li className="flex text-lightPurple">Visitar pagina</li>
            </ul>
        </div>
    </div>
  )
}

export default ProjectCard