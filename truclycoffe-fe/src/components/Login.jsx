import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "quangdaikhit" && password === "14092005") {
      navigate("/truclycoffe/login/loggedin/admin");
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng!");
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 login-form" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Đăng nhập</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Tên tài khoản
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Nhập tên tài khoản"
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Đăng nhập
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="#">Quên mật khẩu?</a>
        </div>
        <div className="text-center mt-3">
          <Link to="/truclycoffe/register">Chưa có tài khoản?</Link>
        </div>
      </div>
    </div>
  );
}
