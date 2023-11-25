import Footer from './components/footer';
import Navbar from './components/navbar';
import Search from './components/search';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero bg-blue-100 p-10 text-center">
        <h2 className="text-3xl font-bold mb-2">Find Your Perfect Flight</h2>
        <p className="text-xl mb-4">Best deals on flights worldwide</p>
        <Search />
      </div>
      <div className="featured-destinations p-10">
        <h3 className="text-2xl font-bold mb-5">Featured Destinations</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Destination cards will go here */}
        </div>
      </div>
      <Footer />
    </>
  );
}
