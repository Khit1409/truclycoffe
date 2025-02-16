import { useEffect, useState } from "react";
import NavFilter from "./NavFilter";

export default function FoodOption() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3000/api/menu/shopfood")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/menu/shopfood/${id}`, {
      method: "DELETE",
    }).then(() => fetchData());
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleUpdate = () => {
    fetch(`http://localhost:3000/api/menu/shopfood/${editProduct._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editProduct),
    }).then(() => {
      setEditProduct(null);
      fetchData();
    });
  };

  const handleAdd = () => {
    fetch("http://localhost:3000/api/menu/shopfood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then(() => {
      setNewProduct({ name: "", price: "", image: "" });
      fetchData();
    });
  };

  return (
    <>
      <section className="menu-area section-gap p-3" id="food">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-60 col-lg-10 mt-5">
              <div className="title text-center">
                <h1 className="text-center">FOOD SHOP</h1>
                <NavFilter />
              </div>
            </div>
          </div>

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
                    <div className="d-flex">
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => handleDelete(product._id)}
                      >
                        <i className="fa-solid fa-close" />
                      </button>
                      <button
                        className="btn btn-warning mx-2"
                        onClick={() => handleEdit(product)}
                      >
                        <i className="fa-solid fa-pen" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h2 className="text-center text-white bg-black rounded">
                NO PRODUCT...
              </h2>
            )}
          </div>

          {/* Form thêm sản phẩm */}
          <div className="add-product-form">
            <h3>Thêm sản phẩm</h3>
            <input
              type="text"
              placeholder="Tên sản phẩm"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Giá"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Hình ảnh"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <button className="btn btn-success" onClick={handleAdd}>
              Thêm
            </button>
          </div>

          {/* Form sửa sản phẩm */}
          {editProduct && (
            <div className="edit-product-form">
              <h3>Chỉnh sửa sản phẩm</h3>
              <input
                type="text"
                value={editProduct.name}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, name: e.target.value })
                }
              />
              <input
                type="text"
                value={editProduct.price}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, price: e.target.value })
                }
              />
              <input
                type="text"
                value={editProduct.image}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, image: e.target.value })
                }
              />
              <button className="btn btn-warning" onClick={handleUpdate}>
                Cập nhật
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setEditProduct(null)}
              >
                Hủy
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
