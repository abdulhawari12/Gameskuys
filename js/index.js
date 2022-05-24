var state = false;
function show(){
  if (state) {
    document.querySelector('#password').setAttribute('type','password');
document.querySelector('#password2').setAttribute('type','password');
    return state = false;
  }
  else{
    document.querySelector('#password').setAttribute('type','text');
document.querySelector('#password2').setAttribute('type','text');
    return state = true;
    
  }
}
const navitems = document.querySelectorAll('.nav-items');
function navlinks(){
  navitems.forEach((a)=>
    a.classList.remove('aktif'));
    this.classList.add('aktif');
}
navitems.forEach((a)=>
a.addEventListener('click',navlinks));
const btnBack = document.querySelector('.btnBack'),
      btnDetail =document.querySelectorAll('.btnDetail'),
      detail = document.querySelector('.details');
btnBack.addEventListener('click',function(){
  detail.classList.remove('muncul');
});
btnDetail.forEach((b)=>
b.addEventListener("click",function(){
  detail.classList.add('muncul');
}));
