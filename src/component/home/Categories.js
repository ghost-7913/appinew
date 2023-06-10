import React from 'react';
import CatCard from '../CatCard';

const Categories = () => {
    return (
        // <!-- categories -->
        <div class="main-Category">
            <div class="section-Title">
                <h2> دسته بندی ها</h2>
                <i class="bi bi-caret-left-fill"></i>
            </div>
            <div class="card-Container">
                <CatCard/>
                <CatCard/>
                <CatCard/>
                <CatCard/>
                <CatCard/>
                <CatCard/>
                <CatCard/>
                <CatCard/>

            </div>

        </div>
    );
};

export default Categories;