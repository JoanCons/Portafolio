/* 
let btnHiddenText = document.getElementById('btnHiddenText');
let hiddenText = document.getElementById('hiddenText');

btnHiddenText.addEventListener('click', toggleText);

function toggleText() {
    hiddenText.classList.toggle('show');

    if (hiddenText.classList.contains('show')) {
        btnHiddenText.innerHTML = 'Ver menos';
    } else {
        btnHiddenText.innerHTML = 'Detalles del proyecto';
    }
}

*/



const arrow = document.querySelector('.btnArriba')

window.addEventListener('scroll', () => {
    if (window.scrollY >= '200') {
        arrow.classList.add('show')
    } else {
        arrow.classList.remove('show')

    }
})

arrow.addEventListener('click', () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

/*

window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.btnArriba')
            .classList.add('show');
    } else {
        document.querySelector('.btnArriba')
            .classList.remove('show');
    }
}

document.addEventListener('.btnArriba')
    .addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }); 
    
    */