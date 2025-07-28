import React, { useContext } from 'react';
import Search from './Search';
import { ProductContext } from '../context';

const Header = () => {
    const { state } = useContext(ProductContext)
    return (
        <>
            <header className="border-b border-gray-200 py-4 px-4 md:px-8">
                <div className="container mx-auto flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold">SHOP</a>

                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-gray-500 transition-colors">Shop</a>
                        <a href="#" className="hover:text-gray-500 transition-colors">On Sale</a>
                        <a href="#" className="hover:text-gray-500 transition-colors">New Arrivals</a>
                        <a href="#" className="hover:text-gray-500 transition-colors">Brands</a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Search />

                        <a href="#" className="hover:text-gray-500 transition-colors flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className='w-[23px] h-[23px] bg-red-400 text-white font-semibold text-center leading-[20px] rounded-full mt-[-10px] ml-[-3px]'>{state?.productData?.length}</span>
                        </a>

                        <a href="#" className="hover:text-gray-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;