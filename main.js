const menu = document.querySelector('#menu')
const menuList = document.querySelector('.menu-list')

menu.addEventListener('click', function () {  
  if (menuList.classList.contains('show')) {
    menuList.classList.remove("show");
    menuList.classList.add("hide");
  } else {
    menuList.classList.remove("hide");
    menuList.classList.add("show");
  }
})
let myFunction = () => {
  alert("Hello! Patronize us via this link https://eunnylans.github.io/Cook_Book_Group_One/#");
};
