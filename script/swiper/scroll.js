window.addEventListener('scroll', function(){
    const header = document.querySelector("header");
    header.classList.toggle("container", window.scrollY >0)
  })