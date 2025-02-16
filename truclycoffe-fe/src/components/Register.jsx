import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 login-form" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Đăng nhập</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Tên tài khoản
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Nhập tên tài khoản"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Số điện thoại
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Nhập lại mật khẩu"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Đăng ký
          </button>
        </form>
        <div className="text-center mt-3">
          <Link to="/truclycoffe/login" href="#">
            Bạn đã có tài khoản?
          </Link>
        </div>
      </div>
    </div>
  );
}
