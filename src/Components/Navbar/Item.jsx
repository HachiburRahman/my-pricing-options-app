import React from 'react';

const Item = ({item}) => {
    const {title,path}=item;
    return (
       <div className=''>
        <li className='ml-5 hover:text-amber-400'><a href={path}>{title}</a></li>
       </div>
    );
};

export default Item;