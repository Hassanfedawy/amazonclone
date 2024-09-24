import Banner from "./components/Banner";
import ProductsFeed from "./components/ProductsFeed";



export default async function Home() {
  // Fetch the data from the API
  const res = await fetch("https://dummyjson.com/products");
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json(); // Await the parsing of the JSON response

  return (
    <div className="min-h-screen bg-gray-100">
   
   <main className="max-w-screen-2xl mx-auto">
   <Banner />
  <ProductsFeed data={data}/>
  </main>
 
 
    </div>
  );
}
