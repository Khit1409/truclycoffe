import Review from "./Review";
import Shop from "./Shop";

export default function SectionBody() {
  return (
    <div className="container py-3">
      <section className="row align-items-center">
        {/* Hình ảnh bên trái */}
        <div className="col-md-5">
          <img
            className="img-fluid rounded"
            src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/357767519_753708776756331_9077995388727237516_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEdJH1EctHiQNalhe9v-39MDg2NVEvd0LQODY1US93QtGla3-WNfhN8BlzOAuS5K-mfceHpn6XT2zYKJxBjgR72&_nc_ohc=AXPJsa22w70Q7kNvgFsDto-&_nc_oc=Adj7c2E9ugdqXTAj5JY9kC6cmdAJl9fULsx3fJ0_0kPDMlWSKBSeuwZg4KSGPRQON30&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=ASSiYq3ze-s6awvQpYp8AGG&oh=00_AYDLtA0ocgrMRPR31ApRVnY5pX9bCzYzWWi5k9YFWJ5KfA&oe=67B1E5F3"
            alt="Hình ảnh tự hào"
          />
        </div>
        {/* Nội dung bên phải */}
        <div className="col-md-7 my-3 mt-3">
          <p style={{ color: "#b68834", fontStyle: "italic" }}>SỰ TỰ HÀO</p>
          <h1>Niềm tự hào khi 10 năm hoạt động</h1>
          <p style={{ color: "#777777" }}>
            Chúng tôi tự hào khi mang đến trải nghiệm tuyệt vời cho khách hàng
            tại quán. Với hơn 10 năm hoạt động, Trúc Ly luôn mang đến sự tuyệt
            vời trong trải nghiệm của khách hàng.
          </p>
        </div>
      </section>

      <hr className="dividing-border mx-auto my-5"></hr>
      <Shop />
      <hr className="dividing-border mx-auto my-5"></hr>
      {/* Đánh giá khách hàng */}
      <Review />
      {/* /// */}
    </div>
  );
}
