import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingOpt=use(pricingPromise)
    // console.log(pricing)
    return (
        <div className='mt-6'>
            <h1 className='text-4xl text-center text-amber-600 my-10'>Affordable Plan For Any Situation</h1>
            <div className='grid grid-cols-3 gap-8 w-9/12 mx-auto'>
                {
                    pricingOpt.map(pricing=><PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;