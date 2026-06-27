import { useCart } from "../../hooks/useCart";

export const PriceDetails = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (acc, currentItem) => acc + currentItem.price,
    0
  );

  const deliveryCharge = subtotal > 0 ? 7.0 : 0;
  const totalAmount = subtotal + deliveryCharge;

  return (
    <div className="bg-white border-[1px] border-gray-200 rounded-lg shadow-md p-6 h-fit w-full">
      <h2 className="text-xl font-bold text-gray-800 pb-3 mb-4 border-b border-gray-200">
        Price Details
      </h2>

      <div className="space-y-3 text-gray-600">
        <div className="flex justify-between">
          <p>Price ({cart.length} items)</p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <p className="font-medium">${deliveryCharge.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex justify-between font-bold text-lg text-gray-800 mt-4 pt-4 border-t border-gray-300">
        <p>Total Amount</p>
        <p>${totalAmount.toFixed(2)}</p>
      </div>

      <button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-colors duration-300">
        Proceed to Checkout
      </button>
    </div>
  );
};
