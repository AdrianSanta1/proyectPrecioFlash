const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

document.getElementById("registro").addEventListener("click", function() {
    window.location.href = "../index.html";
});
document.getElementById("iniciar").addEventListener("click", function() {
    window.location.href = "../index.html";
});
function falabella() {
    window.location.href = "https://www.falabella.com.co/falabella-co/product/119629528/Consola-Playstation-5-Edicion-Disco-Ps5-Cd-1-Ano-Garantia/119629529";
}
function linio() {
    window.location.href = "https://www.linio.com.co/p/consola-xbox-series-s-qbut3j?qid=60cf4d371bd96c3dc011e9d2276e5e9a";
}
function linio2() {
    window.location.href = "https://www.linio.com.co/p/apple-watch-series-7-45mm-gps-media-noche-original-garanti-a-1an-o-n2yr1x";
}