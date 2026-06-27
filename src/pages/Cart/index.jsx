import { useCart } from "../../hooks/useCart";
import { ProductCard, Navbar, PriceDetails} from "../../components/index";

export default function Cart() {
  const { cart } = useCart();

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-center mb-10 text-amber-500 text-4xl font-extrabold tracking-tight">
          My Cart 🛒
        </h1>

        <div>
          <div className="flex-grow">
            {cart?.length > 0 ? (
              <div className="flex flex-wrap gap-8 justify-center">
                {cart.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">
                  Your cart is empty!
                </h2>
                <p className="text-gray-500 mt-2">
                  Looks like you haven't added anything to your cart yet.
                </p>
              </div>
            )}
          </div>

          {cart?.length > 0 && (
            <div className="w-full max-w-2xl mx-auto mt-12">
              <PriceDetails />
            </div>
          )}
        </div>
      </main>
    </>
  );
};