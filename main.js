/* =========================
   III. Related products
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy-load");

  lazyImages.forEach((img) => {
    // Nếu ảnh đã nằm trong bộ nhớ đệm (cache) và tải xong ngay lập tức
    if (img.complete) {
      img.classList.add("loaded");
    }

    // Sự kiện khi ảnh tải xong
    img.addEventListener("load", function () {
      img.classList.add("loaded");
    });
  });
});
