import { Navbar,ProductCard } from "../../components/index";
import { getAllProducts } from "../../api/GetAllProducts";
import { getAllCategories } from "../../api/getAllcategories";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]); // State for the master list
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts(),
          getAllCategories(),
        ]);
        setProducts(productsData);
        setOriginalProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchAllData();
  }, []);

  const onCategoryClick = (name) => {
    const filterByCategories = originalProducts.filter(
      (product) => product.category.name.toLowerCase() === name.toLowerCase()
    );
    setProducts(filterByCategories);
  };

  const showAllProducts = () => {
    setProducts(originalProducts);
  };

  return (
    <div>
      <Navbar />
      <div className="flex gap-4 justify-center m-4 flex-wrap">
        <div
          className="bg-emerald-500 hover:bg-emerald-700 px-2 py-0.5 rounded-3xl text-slate-100 font-bold text-xl cursor-pointer"
          onClick={showAllProducts}
        >
          All
        </div>

        {categories?.length > 0 &&
          categories.map((category) => (
            <div
              key={category.id}
              className="bg-emerald-500 hover:bg-emerald-700 px-2 py-0.5 rounded-3xl text-slate-100 font-bold text-xl cursor-pointer"
              onClick={() => onCategoryClick(category.name)}
            >
              {category.name}
            </div>
          ))}
      </div>
      <div className="flex gap-12 justify-center flex-wrap mt-8">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-xl text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};
