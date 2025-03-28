import { useNavigate } from "react-router-dom";
import { useCart } from "../Home/CartContext"; // Import the Cart Context

const products = [
  { 
    id: 1, 
    name: "Samsung Galaxy S25 Ultra", 
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/8537104/1.jpg?5943", 
    price: 1699000, 
    discount: "Varies", 
  },
  { 
    id: 2, 
    name: "Samsung Galaxy A54 5G", 
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/2223353/1.jpg?9065", 
    price: 350000, 
    discount: "5% Off", 
  },
  { 
    id: 3, 
    name: "OPPO Reno 13F Dual Sim", 
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/0449604/1.jpg?2986", 
    price: 650000, 
    discount: "Varies", 
  },
  { 
    id: 4, 
    name: "Xiaomi Red Mi Pro", 
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/1560473/1.jpg?9428", 
    price: 463807, 
    discount: "Varies", 
  },
  { 
    id: 5, 
    name: "Vivo X200 Pro Dual SIM", 
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/8842704/1.jpg?6109", 
    price: 2450000, 
    discount: "Varies", 
  },
  { 
    id: 6, 
    name: "Samsung Galaxy Z Fold 6 5G", 
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/4418963/1.jpg?5787", 
    price: 1997999, 
    discount: "Varies", 
  },
];

const Phones = () => {
  const { addToCart } = useCart(); // Use Cart Context
  const navigate = useNavigate();  // For redirecting to cart

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Add product to cart
    navigate("/cart"); // Navigate to cart page
  };

  return (
    <section className="py-10 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📱 Best Smartphones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">
                ₦{product.price.toLocaleString()} 
                <span className="text-red-500 text-sm ml-2">{product.discount}</span>
              </p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700 transition"
              >
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Phones;

  
