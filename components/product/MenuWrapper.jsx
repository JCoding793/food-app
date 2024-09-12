import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState([]);
  const [productLimit, setProductLimit] = useState(3);
  const [menudata, setMenudata] = useState();

  // useEffect(() => {
  //   setFilter(
  //     menudata.filter(
  //       (product) =>
  //         product.category.toLowerCase() ===
  //         categoryList[active].title.toLowerCase()
  //     )
  //   );
  // }, []);

  const parseStringToJsonArray = (str) => {

    try {

      const cleanedStr = `[${str}]`;
      const parseData = JSON.parse(cleanedStr);
      return parseData;
    } catch (error) {
      console.error('Error parsing JSON string:', error);
    }
  };

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbx4iVZuD3OTjnaLv976vCkGtHWMQ_AIMAtYIlvBcs6H1Ah-IkwvFaqkrBf7lwT_PTY7/exec?sheetName=Food')
      .then((response) => response.json())
      .then((data) => {

        const menuData = data.Food[0];
        const menurawData = menuData.cards;
        const menucards = parseStringToJsonArray(menurawData);
        setMenudata(menucards);

        console.log("console", menucards);

      })
      .catch((error) => {

        console.error('Error fetching data:', error)

      });

  }, []);

  // console.log("data", menudata);


  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Our Menu</Title>
        <div className="mt-10">


          {menudata &&
            menudata.map((category, index) => (
              <button
                className={`px-6 py-2 ${index === active && "bg-secondary text-white "
                  } ml-4 rounded-3xl `}
                key={category._id}
                onClick={() => {
                  setActive(index);
                  setProductLimit(3);
                }}
              >
                {category.title}
              </button>
            ))}

        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 min-h-[450px]">

        {menudata && menudata.map((product) => <MenuItem key={product._id} product={product} />)}

      </div>

      <div className="flex items-center justify-center my-8">
        <button
          className="btn-primary"
          onClick={() => setProductLimit(productLimit + 3)}
        >
          View More
        </button>
      </div>

    </div>
  );
};

export default MenuWrapper;
