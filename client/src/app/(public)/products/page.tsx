'use client';

import Category from '@/components/products/Category'
import HeroSection from '@/components/products/HeroSection'
import Products from '@/components/products/Products'
import React, { useState } from 'react'

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleCategoryInView = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <>
      <HeroSection />
      <Category 
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <Products 
        onCategoryInView={handleCategoryInView}
      />
    </>
  )
}

export default Page;