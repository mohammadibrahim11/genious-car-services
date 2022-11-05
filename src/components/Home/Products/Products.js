import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => { setProducts(data)
            console.log(data)})
    },[])
    return (
        <div>
          <div className='text-center'>
          <p className=' text-xl text-orange-500'>
                popular products
            </p>
            <h2 className='text-4xl font-extrabold text-gray-900 py-2'>
                Browse Our Products
            </h2>
            <p className='py-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum culpa soluta voluptatum, <br /> autem ducimus veritatis eaque eius dolorem similique.
            </p>
          </div>
            {/* all products: {products.length} */}
<div className='container gap-y-4  mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-6'>
    
{
        products.map((product)=> <Product product= {product} key={product._id}></Product>)        
            }
</div>
            
        </div>
    );
};

export default Products;