import React from "react"
import { useState, useEffect } from "react"
import Cards from "../components/Cards"
const Hexadecimal = ({ HexaData }) => {

    const [name, setname] = useState('')
    const [conversions, setConversions] = useState([])

    useEffect(() => {
        function loadData() {
            setname(HexaData.name);
            setConversions(HexaData.conversions);
        }
        loadData();
    }, [])


    return (
        <>

            <h1 className=" text-white text-xl mt-10 ml-5"> {name} Number System </h1>
            <div className=' w-full flex flex-wrap justify-around  h-full pt-6 rounded'>
                {conversions.map((item, index) => {
                    return <Cards data={item} NumSys={"Hexadecimal"} key={index} index={index} />
                })}

            </div>

        </>
    )
}

export default Hexadecimal