import { useCart } from "../../hooks/useCart";
import { findItemInCart } from "../../utils/findItemInCart";
import { findItemInWhishlist } from "../../utils/findItemInWhislist";

export const ProductCard = ({ product }) => {
  const { cart, fav, cartDispatch } = useCart();
  const isItemInCart = findItemInCart(cart, product.id);
  const isItemInWishlist = findItemInWhishlist(fav, product.id);

  const onCartClick = (product) => {
    !isItemInCart
      ? cartDispatch({
          type: "ADD_TO_CART",
          payload: { product },
        })
      : cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: { product },
        });
  };

  const onLikeClick = (product) => {
    !isItemInWishlist
      ? cartDispatch({
          type: "ADD_TO_WISHLIST",
          payload: { product },
        })
      : cartDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: { product },
        });
  };

  return (
    <div className="w-80 h-[340px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
      <div className="relative h-56 flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={product.images[0]}
          alt={product.title}
          loading="lazy"
        />
        <div>
          <i
            onClick={() => onLikeClick(product)}
            className={`bi ${
              isItemInWishlist ? "bi-heart-fill text-rose-600" : "bi-heart"
            } absolute top-3 right-3 text-2xl cursor-pointer`}
          ></i>
        </div>
      </div>

      <div className="p-4 flex flex-col ">
        <div>
          <div className="flex justify-between gap-4">
            <p
              className="font-bold text-gray-900 truncate"
              title={product.title}
            >
              {product.title}
            </p>
            <p className="font-bold text-gray-900 flex-shrink-0">
              ${product.price}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={() => onCartClick(product)}
            className="cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center gap-2"
          >
            {!isItemInCart ? (
              <>
                <i className="bi bi-cart-plus-fill"></i>
                Add To Cart
              </>
            ) : (
              <>
                <i className="bi bi-cart-dash-fill"></i>
                Remove From Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
