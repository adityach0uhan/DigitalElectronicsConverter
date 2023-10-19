import React from 'react';
import numberSystemsData from '../public/numberSystem.js';
export default function Home() {

  return (
    <>

      <div className="h-full w-full bg-blue-200 my-5 flex ">

        {numberSystemsData.number_systems.map((item) => {
          <div><p>{item.name}</p></div>
        })}

      </div>
    </>


  )
}
