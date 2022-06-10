const menu = document.querySelector('#menu')
const menuList = document.querySelector('.menu-list')

menu.addEventListener('click', function (e) {

e.target.classList.add(".remove-border")
  if (menuList.classList.contains('show')) {
    menuList.classList.remove("show");
    menuList.classList.add("hide");
  } else {
    menuList.classList.remove("hide");
    menuList.classList.add("show");
  }
  console.log(e.target)
  console.log('show')
})
