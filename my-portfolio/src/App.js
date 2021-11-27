import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Intro from "./components/intro/Intro.jsx";
import ProductList from "./components/productList/ProductList.jsx";

function App() {
	return (
		<div>
			<Intro />
			<About />
			<ProductList />
			<Contact />
		</div>
	);
}

export default App;
