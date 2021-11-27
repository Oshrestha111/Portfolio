import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
	return (
		<div className='pl'>
			<div className='pl-texts'>
				<h1 className='pl-title'>Create & Inspire</h1>
				<p className='pl-desc'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
					commodi! Accusantium maxime ipsum optio consequatur rem assumenda in
					quisquam delectus veritatis quaerat, totam aliquid amet repellat esse,
					fugiat neque? Id.
				</p>
			</div>
			<div className='pl-list'>
				{products.map((item) => (
					<Product key={item.id} img={item.img} link={item.link} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
