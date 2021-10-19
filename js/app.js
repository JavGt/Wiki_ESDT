window.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
    efectoHeader();
})

function iniciarApp(){
    efectoScroll();
}

function efectoScroll(){
    window.addEventListener('scroll', function (e){
        const header = document.querySelector('header');
        header.classList.toggle('scroll', window.scrollY > 0 )
    })
}

function efectoHeader(){

}