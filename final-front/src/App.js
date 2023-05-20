import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/main.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./pages/home/home.jsx";
import Product from "./pages/products/product.jsx";
import Entertainmnet from "./pages/entertainment/entertainment.jsx";
import Contact from "./pages/contact-us/contact.jsx";
import About from "./pages/about-us/about";
import Menu from "./pages/menu/menu.jsx";
function App() {
	return (
		<div className="App">
			{" "}
			
			<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
					<Route exact path="/" element={<Main/>}/>
				<Route path="/products" element={<Product />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/entertainment" element={<Entertainmnet />} />
				{/* <Route path="/Register" element={< />} />
				<Route path="/Login" element={<Home />} /> */}

			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
