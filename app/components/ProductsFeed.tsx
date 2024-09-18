import Product from "./Product";

type Data = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string;
};

interface ProductsFeedProps {
  data: {
    products: Data[]; // Object that contains a `products` array
  };
}

function ProductsFeed({ data }: ProductsFeedProps) {
  return (
    <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -mt-36 p-5">
      {/* Access data.products */}
      {data.products.map((product: Data) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsFeed;
