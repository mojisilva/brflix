window.addEventListener('scroll', function(){
    const header = document.querySelector("header");
    header.classList.toggle("container", window.scrollY >0)
  })

function popUp(){
  showPopup();
  volume();
  likedDesliked();
  addList();
  closePopup();
}

function showPopup(){
  const btnInfo = document.getElementById('btn-info');
  const popUp = document.getElementById('popup');

  btnInfo.addEventListener('click', () => {
      popUp.classList.add('mostrar')
  });
}

function closePopup(){
  const btnClose = document.getElementById('btn-close');
  const popUp = document.getElementById('popup');

  btnClose.addEventListener('click', () => {
      popUp.classList.remove('mostrar')
  });
}

function addList(){
  const btnList = document.getElementById('list')
  const list = document.getElementById('i-list')
  const acept = 'fa-check';
  const plus = 'fa-plus';
  btnList.addEventListener('click', () =>{
    if(list.classList.contains(plus)){
      list.classList.remove(plus);
      list.classList.add(acept);
    }else{
      list.classList.remove(acept);
      list.classList.add(plus);
    }
  });
}

function likedDesliked(){
  const btnLike = document.getElementById('like');
  const like = document.getElementById('i-like')
  const btnDeslike = document.getElementById('deslike');
  const deslike = document.getElementById('i-deslike');

  btnLike.addEventListener('click', ()=>{
    like.classList.toggle('vermelho');
    deslike.classList.remove('vermelho');
  });

  btnDeslike.addEventListener('click', ()=>{
    deslike.classList.toggle('vermelho');
    like.classList.remove('vermelho');
  });

}

function volume(){
  const btnVolume = document.getElementById('volume')
  const volume = document.getElementById('i-volume')
  const volumeHigh = 'fa-volume-high';
  const volumeLow = 'fa-volume-xmark';
  btnVolume.addEventListener('click', () =>{
    if(volume.classList.contains(volumeHigh)){
      volume.classList.remove(volumeHigh);
      volume.classList.add(volumeLow);
    }else{
      volume.classList.remove(volumeLow);
      volume.classList.add(volumeHigh);
    }
  });
}

popUp();