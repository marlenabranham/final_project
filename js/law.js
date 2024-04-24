function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function classToggle() {
  const navs = document.querySelectorAll('.navbar_items')

  navs.forEach(nav => nav.classList.toggle('navbar_ToggleShow'));
}

document.querySelector('.navbar_link-toggle')
  .addEventListener('click', classToggle);
