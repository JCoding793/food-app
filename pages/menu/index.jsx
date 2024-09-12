import React from "react";
import MenuWrapper from "../../components/product/MenuWrapper";
import axios from "axios";
import { category, product } from "../../util/data";
const Index = () => {
  
  return (
    <div className="pt-10">
      <MenuWrapper categoryList={category} productList={product} />
    </div>
  );
};


export default Index;
