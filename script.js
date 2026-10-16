document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử từ HTML
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Lắng nghe sự kiện click vào biểu tượng ☰
    menuIcon.addEventListener("click", function () {
        // Lệnh toggle giúp thêm class 'active' nếu chưa có, và xóa đi nếu đã có
        navLinks.classList.toggle("active");
    });
});