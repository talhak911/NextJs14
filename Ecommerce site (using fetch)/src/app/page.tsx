import Products from "./components/products";



export default function Home(){
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to Ecommerce Site
        </h1>
        <p className="text-lg text-gray-600">
          Cheap Produts at cheap Price
        </p>
      </header>

    <Products/>
    </main>
  );
}