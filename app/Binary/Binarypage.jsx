import React from "react"
import Cards from "../components/Cards"
import { useEffect, useState } from "react"
const Binarypage = ({ item }) => {
  const [data, setdata] = useState({})
  function loadData() {
    setdata(item)
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      {console.log(data)}
      <div className='w-full h-full pt-6 bg-green-700'>
        <h1>{item.name}</h1>
        {/* {
          conversionInfo.forEach(conversion => {
            console.log("Operation: " + conversion.operation)
          })
        } */}
        {/* {item.conversions.map(item => console.log(item))} */}
        {/* <Cards data={item.conversions} />  */}
      </div>




    </>
  )
}

export default Binarypage