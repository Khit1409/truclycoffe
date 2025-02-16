import { useState, useEffect } from "react";
import NavFilter from "./NavFilter";
export default function DrinksProducts() {
  const [products, setProducts] = useState([]); // Lưu dữ liệu sản phẩm

  // Fetch dữ liệu từ API khi component render
  useEffect(() => {
    fetch("http://localhost:3000/api/menu/shopfood") // API backend
      .then((res) => res.json()) // Chuyển dữ liệu về JSON
      .then((data) => setProducts(data)) // Lưu vào state
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, []);

  return (
    <>
      <section className="menu-area section-gap p-3" id="coffee">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-60 col-lg-10 mt-5">
              <div className="title text-center">
                <h1 className="text-center">FOOD SHOP</h1>
                <NavFilter />
              </div>
            </div>
          </div>

          {/* Hiển thị sản phẩm */}
          <div className="row mx-auto my-5 justify-content-center">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="card product-container m-2" key={product._id}>
                  <img
                    src={product.image}
                    className="card-img product-img"
                    alt={product.name}
                  />
                  <div className="card-body d-flex align-items-center flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: {product.price} VND</p>
                    <button className="btn btn-success">
                      <i className="fa-solid fa-cart-plus" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h2 className="text-center text-white bg-black rounded">
                NO PRODUCT...
              </h2>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
