let lastScrollTop = 0;
const header = document.querySelector('header');
const threshold = 100; // スクロールの感度を調整する閾値（px）

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // スクロールの変化量が閾値を超える場合のみ処理
    if (scrollTop <= 30) {
        header.style.top = '0';
    } else {
        if (Math.abs(scrollTop - lastScrollTop) > threshold) {
            if (scrollTop > lastScrollTop) {
                // 下にスクロールしているときはヘッダーを隠す
                header.style.top = '-80px';
            } else {
                // 上にスクロールしているときはヘッダーを表示
                header.style.top = '0';
            }
            lastScrollTop = scrollTop; // 現在のスクロール位置を更新
        }
    
    }
});

document.getElementById("memo-link").addEventListener("click", function(event) {
    event.preventDefault();
    const dropdown = document.getElementById("dropdown-menu");
    dropdown.classList.toggle("visible");
});

