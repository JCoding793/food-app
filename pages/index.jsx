import Head from "next/head";
import Input from "../components/form/Input";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Home from "./home";
import { category, product } from "../util/data";
// import axios from "axios";
export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Feane</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Home categoryList={category} productList={product} />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
//   const product = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/products`
//   );
//   console.log(res.data)
//   return {
//     props: {
//       categoryList: res.data ? res.data : [],
//       productList: product.data ? product.data : [],
//     },
//   };
// };
