import React from "react"
import { useState, useEffect } from "react"
import Cards from "../components/Cards"

const Binarypage = ({ binaryData }) => {

  const [name, setname] = useState('')
  const [conversions, setConversions] = useState([])

  useEffect(() => {
    function loadData() {
      setname(binaryData.name);
      setConversions(binaryData.conversions);
    }
    loadData();
  }, [])


  return (
    <>

      <div className='w-full flex flex-wrap  h-full pt-6 bg-green-200'>
        <h1>{name}</h1>
        {conversions.map((item) => {
           return <Cards data={item} />
        })}

      </div>




    </>
  )
}

export default Binarypage