'use client'

import { useEffect, useState } from 'react'
const Colors = (props) => {

  const colorOne = props.colorOne;
  const colorTwo = props.colorTwo;
  const colorThree = props.colorThree;
  const colorFour = props.colorFour;
  const colorFive = props.colorFive;

  return (
    <div className="md:mt-16">
        <h2 className="text-dark text-2xl font-extrabold py-8">
            Colores
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="h-52 w-52 flex justify-center items-center" style={{backgroundColor: colorOne}}>
              <h3 className='text-dark font-bold opacity-40'>{colorOne}</h3>
            </div>
            <div className="h-52 w-52 flex justify-center items-center" style={{backgroundColor: colorTwo}} id="colorTwo">
              <h3 className='text-dark font-bold opacity-40'>{colorTwo}</h3>              
            </div>
            <div className="h-52 w-52 flex justify-center items-center" style={{backgroundColor: colorThree}} id="colorThree">
              <h3 className='text-dark font-bold opacity-40'>{colorThree}</h3>
            </div>
            <div className="h-52 w-52 flex justify-center items-center" style={{backgroundColor: colorFour}} id="colorFour">
              <h3 className='text-dark font-bold opacity-40'>{colorFour}</h3>
            </div>
            <div className="h-52 w-52 flex justify-center items-center" style={{backgroundColor: colorFive}} id="colorFive">
              <h3 className='text-dark font-bold opacity-40'>{colorFive}</h3>
            </div>
        </div>
    </div>
  )
}

export default Colors