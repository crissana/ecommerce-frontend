import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import About from './pages/About';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Compare from './pages/Compare';

function App() {
    return (
        <Router>
            {/* Announcement Bar */}
            <Header />

            {/* Sticky Navbar */}
            <Navbar />

            {/* Main Content */}
            <main style={{ minHeight: '80vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/policies" element={<Policies />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/compare" element={<Compare />} />
                </Routes>
            </main>

            <Footer />
        </Router>
    );
}

export default App;