import { useEffect, useState } from "react";
import NavFilter from "./NavFilter";

export default function DrinkOption() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/apix/menu/shopwater")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Lỗi khi lấy dữ liệu:", data);
          setProducts([]);
        }
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) return;
    try {
      const response = await fetch(`http://localhost:3000/api/menu/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setProducts(products.filter((product) => product._id !== id));
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/menu/${editProduct._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editProduct),
        }
      );
      if (response.ok) {
        setProducts(
          products.map((p) => (p._id === editProduct._id ? editProduct : p))
        );
        setEditProduct(null);
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        const addedProduct = await response.json();
        setProducts([...products, addedProduct]);
        setNewProduct({ name: "", price: "", image: "" });
      }
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
    }
  };

  return (
    <section className="menu-area section-gap p-3" id="coffee">
      <div className="container">
        <div className="title text-center">
          <h1>DRINK SHOP</h1>
          <NavFilter />
        </div>
        <div className="row mx-auto my-5 justify-content-center">
          {products.map((product) => (
            <div className="card product-container m-2" key={product._id}>
              <img
                src={product.image}
                className="card-img product-img"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5>{product.name}</h5>
                <p>Price: {product.price} VND</p>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => handleDelete(product._id)}
                >
                  ❌
                </button>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => handleEditClick(product)}
                >
                  ✏️
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2>Thêm sản phẩm mới</h2>
        <input
          type="text"
          placeholder="Tên"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Giá"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="URL Ảnh"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <button onClick={handleAdd}>Thêm</button>

        {editProduct && (
          <div>
            <h2>Chỉnh sửa sản phẩm</h2>
            <input
              type="text"
              value={editProduct.name}
              onChange={(e) =>
                setEditProduct({ ...editProduct, name: e.target.value })
              }
            />
            <input
              type="number"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({ ...editProduct, price: e.target.value })
              }
            />
            <button onClick={handleUpdate}>Lưu</button>
          </div>
        )}
      </div>
    </section>
  );
}
