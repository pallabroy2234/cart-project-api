import {useEffect, useState} from "react";
import CartItem from "./CartItem";
import {fetchCartList} from "../utils/fetchCartList";
import {removeCart} from "./../utils/removeCart";
import {convertPriceStringtoNumber} from "../utils/convertPriceStringtoNumber";

const CartList = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetchCartList()
      .then((data) => {
        if (data?.msg == "success") {
          setItems(data?.data);
        }
      })
      .catch((err) => console.log("There was an error"));
  }, []);

  const handleRemove = (porductId) => {
    removeCart(porductId)
      .then((data) => {
        if (data?.msg === "success") {
          const remainingItems = items.filter((item) => item.product.id !== porductId);
          setItems(remainingItems);
        }
      })
      .catch((err) => console.log("There was an error"));
  };

  const calCulateTotalPrice = () => {
    const totalPrice = items.reduce((total, currentValue) => {
      const price = convertPriceStringtoNumber(currentValue);
      return total + price;
    }, 0);
    return totalPrice.toLocaleString();
  };

  return (
    <div className='container z-10 mx-auto my-12 p-9'>
      <div className='grid grid-cols-1 gap-3 mt-2 md:grid-cols-1 lg:grid-cols-3'>
        <div className='container col-span-2'>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-1'>
            {/* Add to Cart Components */}
            {items.map((item) => (
              <CartItem key={item.id} product={item.product} onRemove={handleRemove} />
            ))}
          </div>
        </div>

        <div className='bg-white shadow-xl card h-44 w-100'>
          <div className='card-body'>
            <h2 className='card-title'>Total Item: 10</h2>
            <h6>Total Price: ${calCulateTotalPrice()}</h6>
            <div className='card-actions'>
              <button className='my-4 btn btn-sm btn-primary btn-outline'>Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartList;
