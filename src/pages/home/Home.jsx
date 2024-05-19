import React from "react";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/api/productsApi";

const Home = () => {
  let { data, isLoading } = useGetProductsQuery();

  return (
    <div>{isLoading ? <h2>Loading...</h2> : <Product products={data} />}</div>
  );
};

export default Home;
