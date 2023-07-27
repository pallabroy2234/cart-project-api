import React, {useEffect} from "react";

const CartItem = ({product = {}, onRemove}) => {
  const {title, image, price, id} = product;

  return (
    <div>
      <div className='bg-white shadow-xl card card-side'>
        <figure>
          <img className='w-40' src={image} alt='Movie' />
        </figure>
        <div className='card-body'>
          <h6 className='text-black'>{title}</h6>
          <h3 className='text-xl font-bold text-gray-700'>Price: ${price}</h3>
          <div className='justify-end card-actions'>
            <button onClick={() => onRemove(id)} className='btn btn-sm btn-primary btn-outline'>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
