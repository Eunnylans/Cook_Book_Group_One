const menu = document.querySelector('#menu')
const menuList = document.querySelector('.menu-list')
const share = document.querySelector('.share')

menu.addEventListener('click', function () {  
  if (menuList.classList.contains('show')) {
    menuList.classList.remove("show");
    menuList.classList.add("hide");
  } else {
    menuList.classList.remove("hide");
    menuList.classList.add("show");
  }
})

// alert function
addEventListener('click', function () {
  let url = document.location.href
  alert(url)
})
