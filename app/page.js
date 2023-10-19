import React from 'react';
import numberSystemsData from '../public/numberSystem.js';
import cards from '@/components/cards.jsx';
export default function Home() {

  return (
    <>

      <div className="h-full w-full bg-blue-200 my-5  ">
        hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, necessitatibus ab asperiores, sint eligendi voluptas, corporis tempora eius exercitationem unde consequuntur eveniet. In facere officia accusamus tempora, minima ab dolorum facilis adipisci.

        {
          numberSystemsData.number_systems.map((item) => {
           return <cards item={item} />
          })
        }

      </div>
    </>


  )
}
