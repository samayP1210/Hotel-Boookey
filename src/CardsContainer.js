import React from "react";
import Card from './Card';


export default function CardsContainer({data}) {
    const cardElement = data.map((hotelData,idx)=>{
        return <Card key={idx} id={idx} data = {hotelData}/>
    })
  return (
    <>
    <h2 className="text-center m-2">Hotels</h2>
    <div className="container mt-4" style={{width : "700px"}}>
        {cardElement}
    </div>
    </>
  );
}
