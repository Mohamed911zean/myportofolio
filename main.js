

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


ScrollReveal().reveal('.h1-about' , {
    delay: 600,
    duration: 1000,
    reset: true,
    origin: 'right',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})


ScrollReveal().reveal('.description' , {
    delay: 600,
    duration: 1000,
    reset: true,
    origin: 'left',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.my-skills-content' , {
    delay: 600,
    duration: 1000,
    reset: true,
    origin: 'left',
    distance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.h1-skills' , {
    delay: 600,
    duration: 1000,
    reset: true,
    origin: 'left',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.skills-bars' , {
    delay: 600,
    duration: 1000,
    reset: true,
    origin: 'rgiht',
    distance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.service-box-item' , {
    delay: 600,
    duration: 1000,
    reset: true,
    origin: 'bottom',
    distance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.h1-contact' , {
    delay: 600,
    duration: 1000,
    reset: true,
    origin: 'top',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.p-contact' , {
    delay: 1000,
    duration: 1000,
    reset: true,
    origin: 'left',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.name-input' , {
    delay: 1000,
    duration: 1000,
    reset: true,
    origin: 'left',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.email-input' , {
    delay: 1000,
    duration: 1000,
    reset: true,
    origin: 'right',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.message-input' , {
    delay: 1300,
    duration: 1000,
    reset: true,
    origin: 'bottom',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})

ScrollReveal().reveal('.submit-btn' , {
    delay: 1700,
    duration: 1000,
    reset: true,
    origin: 'bottom',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})


ScrollReveal().reveal('.home_img' , {
    delay: 1000,
    duration: 1000,
    reset: true,
    origin: 'right',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})


ScrollReveal().reveal('.home_content' , {
    delay: 1200,
    duration: 1000,
    reset: true,
    origin: 'left',
    dstance: '50%',
    opacity: 0,
    easing: 'ease-in-out'
})


