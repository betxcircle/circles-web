
  
import { useNavigate } from "react-router-dom";
import { useCart } from "../Home/CartContext"; // Import the Cart Context

const products = [
  { 
    id: 1, 
    name: "MacBook Pro", 
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/3713193/1.jpg?7953", 
    price: 3250000, 
    discount: "35% Off", 
  },
  { 
    id: 2, 
    name: "Dell XPS 13", 
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/6362704/1.jpg?4705", 
    price: 2850000, 
    discount: "6% Off", 
  },
  { 
    id: 3, 
    name: "HP Spectre x360", 
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/3816552/1.jpg?5431", 
    price: 2550000, 
    discount: "12% Off", 
  },
  { 
    id: 4, 
    name: "Asus ROG Zephyrus", 
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/6079783/1.jpg?9555", 
    price: 4250500, 
    discount: "0% Off", 
  },
  { 
    id: 5, 
    name: "Lenovo ThinkPad X1", 
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/6973283/1.jpg?1691", 
    price: 2455000, 
    discount: "0% Off", 
  },
  { 
    id: 6, 
    name: "Acer Predator Helios", 
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/3713193/1.jpg?7953", 
    price: 3025800, 
    discount: "0% Off", 
  },
];

const Laptops = () => {
  const { addToCart } = useCart(); // Use the Cart Context
  const navigate = useNavigate();  // For navigation after adding to cart

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Add product to cart
    navigate("/cart"); // Redirect to Cart Page
  };

  return (
    <section className="py-10 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">💻 Best Laptops for Work & Play</h2>
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

export default Laptops;
