import {useEffect, useState} from "react";
import Product from "./Product";
import {fetchProducts} from "./../utils/fetchProducts";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchProducts()
      .then((data) => {
        return setProducts(data);
      })
      .catch((error) => {
        return setError("There was an error");
      });
  }, []);

  let output;
  if (error) {
    output = <div>There Was an error</div>;
  } else if (products?.length > 0) {
    output = products.map((product) => <Product key={product.id} product={product} />);
  } else {
    output = <div>Not Product Found</div>;
  }
  return (
    <div className='container z-10 mx-auto my-12 p-9'>
      <div className='grid grid-cols-1 gap-4 mt-2 md:grid-cols-2 lg:grid-cols-4'>
        <div className='bg-white shadow-xl card w-100'>
          <figure>
            <img src='https://static-01.daraz.com.bd/p/b802b8ebb0a784ec791caa75e2d4de66.jpg' alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h6 className='text-black'>iPhone 14 Pro Max iOS 16 6.7 inches Super Retina</h6>
            <p className='text-sm text-gray-400'>If a dog chews shoes whose shoes does he choose?</p>
            <h6 className='font-bold'>Price: $1,000</h6>
            <div className='justify-end card-actions'>
              <button className='btn btn-sm btn-outline btn-primary'>Add Cart</button>
            </div>
          </div>
        </div>
        {output}
      </div>
    </div>
  );
};
export default ProductList;
