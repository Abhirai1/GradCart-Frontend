import React from 'react';
import './ProductCategory.css';


// Define a type for the category items
interface Category {
  name: string;
  imageSrc: string;
}

// Array of category objects
const categories: Category[] = [
  { name: 'Grocery', imageSrc: 'https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100' },
  { name: 'Mobiles', imageSrc: 'https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100' },
  { name: 'Fashion', imageSrc: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100' },
  { name: 'Electronics', imageSrc: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100' },
  { name: 'Home & Furniture', imageSrc: 'https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100' },
  { name: 'Appliances', imageSrc: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100' },
  { name: 'Flight Bookings', imageSrc: 'https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100' },
  { name: 'Beauty, Toys & More', imageSrc: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100' },
  { name: 'Two Wheelers', imageSrc: 'https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100' }
];

// Category component
const CategoryMenu: React.FC = () => {
  return (
    <div className="category-menu" style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#f5f5f5' }}>
      {categories.map((category, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <img src={category.imageSrc} alt={category.name} style={{ width: '50px', height: '50px' }} />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
