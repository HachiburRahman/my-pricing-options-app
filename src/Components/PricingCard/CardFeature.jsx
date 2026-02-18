import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const CardFeature = ({feature}) => {
    console.log(feature)
    return (
        <div >
            <p className='flex'> <CircleCheckBig className='mr-3 my-1'></CircleCheckBig>{feature}</p>
            
        </div>
    );
};

export default CardFeature;