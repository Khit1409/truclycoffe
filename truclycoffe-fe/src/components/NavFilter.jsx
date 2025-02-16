export default function NavFilter() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* <!-- Ô tìm kiếm --> */}
        <div className="col-md-4 d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Tìm sản phẩm..."
            id="searchInput"
          />
          <button type="submit" className="btn btn-primary btn-search mx-1">
            <i className="fa-solid fa-search"></i>
          </button>
        </div>

        {/* <!-- Lọc theo giá --> */}
        <div className="col-md-4">
          <select className="form-select" id="priceFilter">
            <option value="">Lọc theo giá</option>
            <option value="low">Dưới 50.000 VND</option>
            <option value="medium">50.000 - 100.000 VND</option>
            <option value="high">Trên 100.000 VND</option>
          </select>
        </div>

        {/* <!-- Lọc theo loại --> */}
        <div className="col-md-4">
          <select className="form-select" id="typeFilter">
            <option value="">Lọc theo loại</option>
            <option value="food">Đồ ăn</option>
            <option value="drink">Nước uống</option>
          </select>
        </div>
      </div>
    </div>
  );
}
