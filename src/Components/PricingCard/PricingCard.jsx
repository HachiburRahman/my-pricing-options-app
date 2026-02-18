import React from "react";
import CardFeature from "./CardFeature";

const PricingCard = ({ pricing }) => {
  const { price, title, features } = pricing;
  return (
    <div className="border-2 border-white bg-amber-600 rounded-xl flex flex-col">
      <div>
        <h1 className="text-4xl">{title}</h1>
        <h3 className="text-2xl">{price}</h3>
      </div>
      
       <ul className="bg-amber-400 flex-1">
         {
            features.map((feature,index)=><CardFeature feature={feature} key={index}></CardFeature>)
        }
       </ul>
        
        <button className="btn w-full ">Wide</button>
    </div>
  );
};

export default PricingCard;
