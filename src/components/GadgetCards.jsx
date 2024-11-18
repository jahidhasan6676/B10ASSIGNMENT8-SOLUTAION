import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const GadgetCards = () => {
    const gadgetData = useLoaderData();
    const {category} = useParams();
    const [gadgets,setGadgets] = useState([]);

    useEffect(()=>{
        if(category){
            const filteredCategory = [...gadgetData].filter(gadget => gadget.category === category);
            setGadgets(filteredCategory)
        }else{
            setGadgets(gadgetData.slice(0, 9))
        }
    },[category,gadgetData])
    // console.log(category)
    // console.log(gadgetData)
    return (

        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            
            {
                gadgets.map((gadget,index) => <Card key={index}   gadget={gadget}></Card>)
            }
            </div>
        </div>
       
    );
};

export default GadgetCards;