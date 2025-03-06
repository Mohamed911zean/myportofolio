// أضف هذا الكود مؤقتاً للتشخيص
document.addEventListener('DOMContentLoaded', function() {
    // العثور على العناصر الرئيسية والتحقق من حالتها
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const homeSection = document.querySelector('.home');
    const sections = document.querySelectorAll('section');
    
    console.log('Header visible:', header && getComputedStyle(header).display !== 'none');
    console.log('Nav visible:', nav && getComputedStyle(nav).display !== 'none');
    console.log('Home section visible:', homeSection && getComputedStyle(homeSection).display !== 'none');
    console.log('Number of sections:', sections.length);
    
    // التحقق من حالة CSS variables
    const rootStyles = getComputedStyle(document.documentElement);
    console.log('Primary color used:', rootStyles.getPropertyValue('--primary-color'));
    
    // تحقق من سلامة قواعد CSS الـ responsive
    const mediaQueryList = window.matchMedia('(max-width: 768px)');
    console.log('Is mobile view:', mediaQueryList.matches);
    
    // إضافة تأطير للعناصر المهمة للتحقق من وجودها
    const importantElements = document.querySelectorAll('header, nav, section, .home, .logo');
    importantElements.forEach(el => {
        const originalBorder = el.style.border;
        el.style.border = '2px solid red';
        
        // إعادة الحدود إلى حالتها الأصلية بعد 5 ثوانٍ
        setTimeout(() => {
            el.style.border = originalBorder;
        }, 5000);
    });
});

// كود مُحسن لقائمة الهامبرجر
document.addEventListener('DOMContentLoaded', function() {
    // تحديد العناصر
    const navbarToggler = document.querySelector('.navbar-toggler');
    const nav = document.querySelector('nav');
    
    if (!navbarToggler || !nav) {
        console.error('لم يتم العثور على عناصر القائمة أو زر الهامبرجر');
        return; // منع أخطاء إذا لم يتم العثور على العناصر
    }
    
    // التبديل فقط عند النقر على زر الهامبرجر
    navbarToggler.addEventListener('click', function(e) {
        e.stopPropagation(); // منع انتشار الحدث
        nav.classList.toggle('show');
        console.log('تم تبديل حالة القائمة:', nav.classList.contains('show'));
    });
    
    // إخفاء القائمة عند النقر على الروابط
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // فقط إخفاء القائمة في وضع الموبايل
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
                console.log('تم إخفاء القائمة بعد النقر على رابط');
            }
        });
    });
    
    // منع إخفاء القائمة عند النقر داخلها
    nav.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});



