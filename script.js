  // Danh sách sản phẩm (ví dụ có 10 sản phẩm)
  // { name: "#", image: "#", link: "#" }
const products = [
        {name: "Áo Cardigan unisex nam nữ, chất nỉ tăm dày dặn, áo khoác nhẹ mùa thu đông", image: "https://tinyurl.com/3env3xmy", link: "https://tinyurl.com/bdzmv33v" },
	{name: "Áo sweater form rộng ESTDAB nam nữ", image: "https://tinyurl.com/2p6vhnra", link: "https://tinyurl.com/mv3csar2" },
	{name: "Bé dễ thương hoạt hình búp bê sang trọng an toàn mềm mại", image: "https://tinyurl.com/86yaddb5", link: "https://tinyurl.com/3xnr2aet" },
	{name: "Bodymist Nam Nữ Toàn Thân Lưu Hương 6 Giờ - Nước Hoa Hẹn Hò BODYMISS 105ml (Chai)", image: "https://tinyurl.com/3c82rc24", link: "https://tinyurl.com/23cn7spf" },
	{name: "FOCALLURE Son Kem Nhung Lì Mềm Mịn Thoáng Khí Cảm Giác Nhẹ Dưỡng Ẩm Lâu Trôi", image: "https://tinyurl.com/keatvyte", link: "https://tinyurl.com/f4mcdk4y" },
	{name: "Gấu Bông Chuột Capybara Đeo Balo Thú Nhồi Chuột Lang Nước Bộ Trưởng Bộ Ngoại Giao Đáng Yêu", image: "https://tinyurl.com/msukwecf", link: "https://tinyurl.com/2s45kezz" },
	{name: "Gel Bôi Trơn VANESSA COOL 200ml Siêu Mát Lạnh - Tăng Cảm Giác", image: "https://tinyurl.com/2uek66by", link: "https://tinyurl.com/4emheav9" },
	{name: "ICON Ô dù che mưa nắng cầm tay tự động 2 chiều đóng mở", image: "https://tinyurl.com/4e4uhm3j", link: "https://tinyurl.com/3772zvmt" },
	{name: "Khăn giấy Top Gia Sắc Hạ 6 bịch, giấy vệ sinh treo tường 1280 tờ 4 lớp dày dặn, mềm mịn", image: "https://tinyurl.com/3bkyuh3t", link: "https://tinyurl.com/uvjvpw2c" },
	{name: "KIQUNE Nồi Lẩu Điện Mini IGN23A10ZK", image: "https://tinyurl.com/mr27x49y", image: "https://tinyurl.com/mr27x49y", link: "https://tinyurl.com/mt8syd78" },
	{name: "Nước giặt quần áo Dnee cho bé 3000ml - Nước giặt xả Thái Lan có tem Đại Thịnh", image: "https://tinyurl.com/4rhusmb5", link: "https://tinyurl.com/bddusft5" },
	{name: "Nước Hoa Cho Nam Bí Quyết Sự Tự Tin - Sexy Men, Active Men, Strong Men", image: "https://tinyurl.com/mthayd3d", link: "https://tinyurl.com/2tjaacbt" },
	{name: "Nước Hoa Hồng Dear Klairs Supple Preparation Unscented Toner Không Mùi 180ml", image: "https://tinyurl.com/2e6ck9br", link: "https://tinyurl.com/ycyyjewn" },
	{name: "Nước tẩy trang và làm sạch sâu 3-in-1 L'Oreal Paris Micellar Water 400ml", image: "https://tinyurl.com/ycyst9w3", link: "https://tinyurl.com/2s3y9fsm" },
	{name: "Ốp lưng Iphone 15 14 12 13 11 Pro Max IP 7 8 Plus Iphon X Xs XR Xs Max Silicon Softcase", image: "https://tinyurl.com/2mjkmpkj", link: "https://tinyurl.com/ahsv22zd" },
	{name: "Pin Sạc Dự Phòng Hoco SU02 20000mAh 2 Output USB 2 Input Micro Type-C", image: "https://tinyurl.com/2raae8v9", link: "https://tinyurl.com/bdzx6xef" },
	{name: "Quạt phản lực cầm tay có thể sạc lại Gió mạnh 100 Gear Tốc độ gió Thân kim loại Màn hình kỹ thuật số", image: "https://tinyurl.com/25hewar9", link: "https://tinyurl.com/yatptzvj" },
	{name: "Serum Vaseline Gluta-Hya Dưỡng Da Sáng Mịn Sau 7 Ngày", image: "https://tinyurl.com/yr9f3wyp", link: "https://tinyurl.com/hexy9hu5" },
	{name: "Sét Váy Nữ Dễ Thương Gồm Áo Trễ Vai Màu Xanh Ngọc + Chân Váy Bí Phồng", image: "https://tinyurl.com/7ux6h7vk", link: "https://tinyurl.com/fz2bnm7m" },
	{name: "Sữa rửa mặt Cerave 236ml dưỡng ẩm sữa rửa mặt cho da dầu mụn ,da khô", image: "https://tinyurl.com/3j7mrb84", link: "https://tinyurl.com/bdem47sz" },
	{name: "Sữa rửa măt tạo bọt Hadalabo Nhật Bản", image: "https://tinyurl.com/3r893xwe", link: "https://tinyurl.com/4h4z8nmk" },
	{name: "Sữa Tắm Lux Botanical Hương Nước Hoa Cao Cấp Sáng Mịn Rạng Ngời", image: "https://tinyurl.com/5x35v39p", link: "https://tinyurl.com/374yxazz" },
	{name: "Sữa Tắm Lux Botanical Hương Nước Hoa Cao Cấp Sáng Mịn Rạng Ngời", image: "https://tinyurl.com/2w5xd8jw", link: "https://tinyurl.com/374yxazz" },
	{name: "Sữa Tắm Lux Botanical Hương Nước Hoa Cao Cấp Sáng Mịn Rạng Ngời", image: "https://tinyurl.com/vmh45k7s", link: "https://tinyurl.com/374yxazz" },
	{name: "Sữa Tắm Lux Botanical Hương Nước Hoa Cao Cấp Sáng Mịn Rạng Ngời", image: "https://tinyurl.com/2ue395pr", link: "https://tinyurl.com/374yxazz" },
	{name: "Tất cổ cao nữ chất liệu cotton, họa tiết hình thêu dễ thương", image: "https://tinyurl.com/y95vnzsr", link: "https://tinyurl.com/yexw6b8h" },
	{name: "Thanh lăn mặt nạ đất sét The Originote B3 Clay Stick se khít lỗ chân lông,cải thiện mụn 30g", image: "https://tinyurl.com/bdsbp32a", link: "https://tinyurl.com/3x2ry3rh" },
	{name: "Tinh chất dưỡng sáng SKIN1004 Madagascar Centella Tone Brightening Capsule Ampoule 100ml", image: "https://tinyurl.com/mr3decnt", link: "https://tinyurl.com/96vf4uf9" },
	{name: "VEECCI Bảng Phấn Bắt Sáng Và Tạo Khối Tự Nhiên Lâu Trôi Chống Nước 9g", image: "https://tinyurl.com/y6xybpfz", link: "https://tinyurl.com/5csxrwcp" }
];

// Lấy phần tử chứa danh sách sản phẩm
const productList = document.getElementById('product-list');

// Hàm để hiển thị ngẫu nhiên 4 sản phẩm
function displayRandomProducts() {
    // Xóa hết các sản phẩm hiện tại
    productList.innerHTML = '';

    // Chọn ngẫu nhiên 4 sản phẩm từ danh sách
    const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4);

    // Tạo nội dung sản phẩm từ danh sách ngẫu nhiên
    randomProducts.forEach(product => {
        // Tạo thẻ div cho mỗi content-item
        const contentItem = document.createElement('div');
        contentItem.classList.add('content-item');

        // Tạo thẻ img cho hình ảnh sản phẩm
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = 'Product Image';

        // Tạo thẻ h3 cho tên sản phẩm
        const productName = document.createElement('h3');
        productName.classList.add('product-name');
        productName.textContent = product.name;

        // Tạo thẻ a cho nút mua hàng và mở trong tab mới
        const buyButton = document.createElement('a');
        buyButton.href = product.link;
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Mua ngay';
        buyButton.target = '_blank'; // Mở liên kết trong tab mới

        // Gắn các phần tử vào content-item
        contentItem.appendChild(img);
        contentItem.appendChild(productName);
        contentItem.appendChild(buyButton);

        // Gắn content-item vào danh sách sản phẩm
        productList.appendChild(contentItem);
    });
}

// Gọi hàm lần đầu tiên khi trang được tải
displayRandomProducts();

// Cập nhật danh sách sản phẩm mỗi 5 giây (5000 ms)
setInterval(displayRandomProducts, 5000);
