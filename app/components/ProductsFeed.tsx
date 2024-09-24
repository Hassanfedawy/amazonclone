import Product from "./Product";

type Data = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
};

interface ProductsFeedProps {
  data: {
    products: Data[];
  };
}

function ProductsFeed({ data }: ProductsFeedProps) {
  return (
    <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:-mt-36 p-5">
      {data.products.slice(0,4).map((product: Data) => (
        <Product key={product.id} product={product} />
      ))}
      <img src="https://links.papareact.com/dyz" alt="" className="md:col-span-full"/>

      <div className="md:col-span-2 h-full">
      {data.products.slice(4,5).map((product: Data) => (
        <Product key={product.id} product={product} />
      ))}
      </div>

      {data.products.slice(5,data.products.length).map((product: Data) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsFeed;
