import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, []);
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">All Category</h2>
      {
        categories.map(category => <NavLink
            to={`/category/${category.id}`}
            className={`ml-5 block text-[#9F9F9F] hover:bg-[#E7E7E7] hover:text-black duration-200 rounded-md p-2`}
            key={category.id}>
            {category.name}</NavLink>)
      }
    </div>
  );
};

export default LeftSideNav;
