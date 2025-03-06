

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



