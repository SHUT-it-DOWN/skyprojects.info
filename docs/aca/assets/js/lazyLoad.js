var targets = document.querySelectorAll("img");

//console.log(targets)

//window.addEventListener('scroll', (event) => {

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
//        console.log(entries)
        entries.forEach(entry => {
            console.log('😍');

            if (entry.intersectionRatio > 0) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);
                img.classList.add('fade');

                observer.disconnect();
            }
        });
    });

    io.observe(target)
};

targets.forEach(lazyLoad);

//});


//
//const images = document.querySelectorAll('.anim');
//
//observer = new IntersectionObserver((entries) => {
//
//    entries.forEach(entry => {
//        if (entry.intersectionRatio > 0) {
//            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
//        } else {
//            entry.target.style.animation = 'none';
//        }
//    })
//
//})
//
//images.forEach(image => {
//    observer.observe(image)
//})
