import product_img from "../../assets/img/product.jpg";
import { products } from "../../common/products";
import { Product } from "../Product/Product";

export function Home() {
  return (
    <div className="container">
      <h2>Header</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
        expedita porro obcaecati fugiat. Similique alias libero voluptatum et
        repellat deserunt, ex deleniti itaque dignissimos sunt assumenda
        delectus, harum quasi porro dolore ea, quis repudiandae? Vero, magni
        saepe? Tempora totam repellendus, beatae commodi quod nobis rerum hic
        doloribus, ipsum, minima natus?
      </p>
      <ul className="products-list main">
        {products.map((p) => (
          <Product {...p} />
        ))}
      </ul>
      <p>
        <a href="#" className="learnmore">
          Learn more
        </a>
      </p>
    </div>
  );
}
