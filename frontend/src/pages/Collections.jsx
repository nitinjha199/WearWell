

// import React, { useContext, useEffect, useState } from 'react';
// import { FaChevronRight, FaChevronDown } from "react-icons/fa";
// import Title from '../component/Title';
// import { shopDataContext } from '../context/ShopContext';
// import Card from '../component/Card';

// function Collections() {
//     const [showFilter, setShowFilter] = useState(false);
//     const { products, search, showSearch } = useContext(shopDataContext);
//     const [filterProduct, setFilterProduct] = useState([]);
//     const [category, setCategory] = useState([]);
//     const [subCategory, setSubCategory] = useState([]);
//     const [sortType, setSortType] = useState("relavent");

//     const toggleCategory = (e) => {
//         if(category.includes(e.target.value)){
//             setCategory(prev => prev.filter(item => item !== e.target.value))
//         } else {
//             setCategory(prev => [...prev, e.target.value])
//         }
//     };

//     const toggleSubCategory = (e) => {
//         if(subCategory.includes(e.target.value)){
//             setSubCategory(prev => prev.filter(item => item !== e.target.value))
//         } else {
//             setSubCategory(prev => [...prev, e.target.value])
//         }
//     };

//     const applyFilter = () => {
//         let productCopy = [...products];

//         if(showSearch && search){
//             productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
//         }
//         if(category.length > 0){
//             productCopy = productCopy.filter(item => category.includes(item.category))
//         }
//         if(subCategory.length > 0){
//             productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
//         }

//         setFilterProduct(productCopy);
//     };

//     const sortProducts = () => {
//         let fbCopy = [...filterProduct];
//         switch(sortType){
//             case 'low-high':
//                 setFilterProduct(fbCopy.sort((a,b) => a.price - b.price));
//                 break;
//             case 'high-low':
//                 setFilterProduct(fbCopy.sort((a,b) => b.price - a.price));
//                 break;
//             default:
//                 applyFilter();
//                 break;
//         }
//     };

//     useEffect(() => sortProducts(), [sortType]);
//     useEffect(() => setFilterProduct(products), [products]);
//     useEffect(() => applyFilter(), [category, subCategory, search, showSearch]);

//     return (
//         <div className='w-full min-h-[100vh] bg-gray-900 text-gray-200 flex flex-col md:flex-row pt-[70px] pb-[110px]'>
            
//             {/* Filter Sidebar */}
//             <div className={`md:w-[25%] w-full p-5 border-r border-gray-700 ${showFilter ? "h-auto" : "h-12"} lg:fixed`}>
//                 <p className='text-gray-200 text-xl font-semibold flex items-center gap-2 cursor-pointer' onClick={()=>setShowFilter(prev=>!prev)}>
//                     FILTERS
//                     {!showFilter ? <FaChevronRight /> : <FaChevronDown />}
//                 </p>

//                 <div className={`${showFilter ? "block" : "hidden"} mt-6`}>
//                     {/* Categories */}
//                     <p className='text-gray-200 font-semibold mb-2'>CATEGORIES</p>
//                     <div className='flex flex-col gap-2'>
//                         {['Men','Women','Kids'].map(cat => (
//                             <label key={cat} className='flex items-center gap-2 text-gray-400 font-light'>
//                                 <input type="checkbox" value={cat} onChange={toggleCategory} className='w-4 h-4 rounded border-gray-600 focus:ring-2 focus:ring-pink-500'/>
//                                 {cat}
//                             </label>
//                         ))}
//                     </div>

//                     {/* Sub-Categories */}
//                     <p className='text-gray-200 font-semibold mt-4 mb-2'>SUB-CATEGORIES</p>
//                     <div className='flex flex-col gap-2'>
//                         {['TopWear','BottomWear','WinterWear'].map(sub => (
//                             <label key={sub} className='flex items-center gap-2 text-gray-400 font-light'>
//                                 <input type="checkbox" value={sub} onChange={toggleSubCategory} className='w-4 h-4 rounded border-gray-600 focus:ring-2 focus:ring-pink-500'/>
//                                 {sub}
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Products Area */}
//             <div className='md:ml-[25%] w-full px-5 md:px-10'>
//                 <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-5'>
//                     <Title text1="ALL" text2="COLLECTIONS" />

//                     {/* Sort Dropdown */}
//                     <select 
//                         className='mt-3 md:mt-0 bg-gray-800 border border-gray-600 rounded-full px-4 py-2 text-gray-200 font-medium focus:ring-2 focus:ring-pink-500 hover:border-pink-500'
//                         onChange={(e)=>setSortType(e.target.value)}
//                     >
//                         <option value="relavent">Sort By: Relevant</option>
//                         <option value="low-high">Sort By: Low to High</option>
//                         <option value="high-low">Sort By: High to Low</option>
//                     </select>
//                 </div>

//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
//                     {filterProduct.map((item, index) => (
//                         <Card 
//                             key={index} 
//                             id={item._id} 
//                             name={item.name} 
//                             price={item.price} 
//                             image={item.image1} 
//                             textColor="text-gray-200"
//                             bgColor="bg-gray-800"
//                         />
//                     ))}
//                 </div>
//             </div>
            
//         </div>
//     );
// }

// export default Collections;


import React, { useContext, useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import Card from "../component/Card";

function Collections() {
  const [showFilter, setShowFilter] = useState(false);
  const { products, search, showSearch } = useContext(shopDataContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = [...products];

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProduct(productCopy);
  };

  const sortProducts = () => {
    let fbCopy = [...filterProduct];
    switch (sortType) {
      case "low-high":
        setFilterProduct(fbCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProduct(fbCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => sortProducts(), [sortType]);
  useEffect(() => setFilterProduct(products), [products]);
  useEffect(() => applyFilter(), [category, subCategory, search, showSearch]);

  return (
    <div className="w-full min-h-[100vh] bg-gray-900 text-gray-200 flex flex-col md:flex-row pt-[70px] pb-[110px]">
      {/* Filter Sidebar */}
      <div
        className={`md:w-[20%] w-full p-5 border-r border-gray-700 ${
          showFilter ? "h-auto" : "h-12"
        } lg:fixed`}
      >
        <p
          className="text-gray-200 text-xl font-semibold flex items-center gap-2 cursor-pointer"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          FILTERS
          {!showFilter ? <FaChevronRight /> : <FaChevronDown />}
        </p>

        <div className={`${showFilter ? "block" : "hidden"} mt-6`}>
          {/* Categories */}
          <p className="text-gray-200 font-semibold mb-2">CATEGORIES</p>
          <div className="flex flex-col gap-2">
            {["Men", "Women", "Kids"].map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 text-gray-400 font-light"
              >
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="w-4 h-4 rounded border-gray-600 focus:ring-2 focus:ring-pink-500"
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Sub-Categories */}
          <p className="text-gray-200 font-semibold mt-4 mb-2">
            SUB-CATEGORIES
          </p>
          <div className="flex flex-col gap-2">
            {["TopWear", "BottomWear", "WinterWear"].map((sub) => (
              <label
                key={sub}
                className="flex items-center gap-2 text-gray-400 font-light"
              >
                <input
                  type="checkbox"
                  value={sub}
                  onChange={toggleSubCategory}
                  className="w-4 h-4 rounded border-gray-600 focus:ring-2 focus:ring-pink-500"
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products Area */}
      <div className="md:ml-[20%] w-full px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5">
          <Title text1="ALL" text2="COLLECTIONS" />

          {/* Sort Dropdown */}
          <select
            className="mt-3 md:mt-0 bg-gray-800 border border-gray-600 rounded-full px-4 py-2 text-gray-200 font-medium focus:ring-2 focus:ring-pink-500 hover:border-pink-500"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-6 justify-items-center">
          {filterProduct.map((item, index) => (
            <div key={index} className="w-full max-w-[280px]">
              <Card
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
                textColor="text-gray-200"
                bgColor="bg-gray-800"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
