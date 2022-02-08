import React from 'react';
import Navbar from '../components/navbar'
import Announcements from '../components/announcements';
import Slider from '../components/slider';
import { Categories } from '../components/category';
import { Products } from '../components/products';
const Home = () => {
  return <div>
     <Announcements/>
     <Navbar/>
     <Slider/>
     <Categories/>
     <Products/>
  </div>;
};

export default Home