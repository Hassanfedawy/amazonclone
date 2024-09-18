import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductsFeed from "./components/ProductsFeed";
import { p } from "framer-motion/client";



export default async function Home() {
  // Fetch the data from the API
  const res = await fetch("https://dummyjson.com/products");
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json(); // Await the parsing of the JSON response

  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg">
    <Header />
   <Banner />
  <ProductsFeed data={data}/>

 
 
    </div>
  );
}
