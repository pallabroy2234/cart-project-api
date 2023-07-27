import {createCart} from "../utils/createCart";

const Product = ({product = {}}) => {
  const handleAddToCart = () => {
    createCart(product.id)
      .then((data) => {
        if (data?.msg == "success") {
          alert("Product added successfully");
        }
      })
      .catch((err) => console.log("There was an error"));
  };

  return (
    <>
      <div className='bg-white shadow-xl card w-100'>
        <figure>
          <img src={product.image} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h6 className='text-black'>{product.title}</h6>
          <p className='text-sm text-gray-400'>{product.short_des}</p>
          <h6 className='font-bold'>Price: ${product.price}</h6>
          <div className='justify-end card-actions'>
            <button onClick={handleAddToCart} className='btn btn-sm btn-outline btn-primary'>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
