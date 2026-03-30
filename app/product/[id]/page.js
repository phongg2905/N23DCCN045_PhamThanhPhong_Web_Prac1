import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-sm h-80 object-contain"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {product.title}
            </h1>
            <p className="text-3xl font-bold text-green-600 mb-4">
              ${product.price}
            </p>
            <p className="text-gray-700 leading-7 mb-6">
              {product.description}
            </p>

            <Button>Add to Cart</Button>
          </div>
        </div>
      </section>
    </main>
  );
}