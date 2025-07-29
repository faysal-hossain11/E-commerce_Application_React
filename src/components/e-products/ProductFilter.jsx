import React, { useContext } from 'react';
import { ProductContext } from '../../context';

const ProductFilter = () => {

    const { sortOption, setSortOption } = useContext(ProductContext);

    return (
        <div className="flex items-center space-x-2">
            <span className="text-sm">Sort by:</span>
            <select
                className="border rounded-md px-2 py-1 text-sm"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
            >
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Low to High</option>
                <option>High to Low</option>
            </select>
        </div>
    );
};

export default ProductFilter;