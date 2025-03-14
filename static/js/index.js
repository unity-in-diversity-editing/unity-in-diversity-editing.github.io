window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // 为轮播图配置选项
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pagination: true,
        navigationSwipe: true,
        navigation: true,  // 确保显示导航按钮
    };

    // 初始化轮播图
    var carousels = bulmaCarousel.attach('.carousel', options);

    // 添加计数器显示
    carousels.forEach(carousel => {
        const element = carousel.element;
        const total = carousel.slides.length;
        
        element.setAttribute('data-total', total);
        
        carousel.on('before:show', state => {
            element.setAttribute('data-current', state.next + 1);
        });
        
        // 初始设置
        element.setAttribute('data-current', '1');
        
        // 连接自定义导航按钮
        if (carousel.nav) {
            const leftBtn = element.parentNode.querySelector('.carousel-nav-left button');
            const rightBtn = element.parentNode.querySelector('.carousel-nav-right button');
            
            if (leftBtn) {
                leftBtn.addEventListener('click', () => {
                    carousel.prev();
                });
            }
            
            if (rightBtn) {
                rightBtn.addEventListener('click', () => {
                    carousel.next();
                });
            }
        }
    });
    
    // 初始化slider组件
    bulmaSlider.attach();
});
