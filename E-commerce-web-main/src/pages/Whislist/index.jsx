import { useCart } from "../../hooks/useCart";
import { ProductCard, Navbar } from "../../components/index"

export default function Whislist() {
  const { fav } = useCart();

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-center mb-10 text-amber-500 text-4xl font-extrabold tracking-tight">
          My Whislist ❤️
        </h1>

        <div>
          <div className="flex-grow">
            {fav?.length > 0 ? (
              <div className="flex flex-wrap gap-8 justify-center">
                {fav.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">
                  Your Whislist is empty!
                </h2>
                <p className="text-gray-500 mt-2">
                  Looks like you haven't added anything to your liked yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};