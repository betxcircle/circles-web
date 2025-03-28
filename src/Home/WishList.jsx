
import React from 'react';
import Navbar from '../Home/Navbar';
import { useWishlist } from "../Home/WishlistContext";
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer';
import { FaTrash } from "react-icons/fa";

const WishList = () => {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist</h1>

            {wishlist.length === 0 ? (
                <p className="text-gray-600 text-lg text-center">Your wishlist is empty.</p>
            ) : (
                <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
                    <div className="hidden md:grid grid-cols-3 font-semibold border-b pb-3 text-gray-700 text-center">
                        <span>Product</span>
                        <span>Price</span>
                        <span>Action</span>
                    </div>

                    {wishlist.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col md:grid md:grid-cols-3 items-center py-4 border-b gap-4 md:gap-0"
                        >
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg" />
                                <span className="text-lg font-medium">{item.title}</span>
                            </div>

                            <p className="text-gray-600 w-full md:text-center">₦{item.price}</p>

                            <button
                                className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition w-full md:w-auto flex items-center justify-center"
                                onClick={() => removeFromWishlist(item.id)}
                            >
                                <FaTrash className="text-lg" />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full md:w-auto">
                    <Link to="/" className="w-full h-full block text-center text-white">
                        Continue Shopping
                    </Link>
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default WishList;
