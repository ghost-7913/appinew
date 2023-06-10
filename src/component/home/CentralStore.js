import React from 'react';
import ProductCard from '../ProductCard';

const CentralStore = () => {
    return (
        // <!-- central store -->
        <div class="main-Central-Store">
            <div class="section-Title">
                <h2>فروشگاه مرکزی</h2>
                <i class="bi bi-caret-left-fill"></i>
            </div>
            <div class="card-Container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    );
};

export default CentralStore;