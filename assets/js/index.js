const ticketsBtn = document.querySelectorAll(".btn");
const ticketsModal = document.querySelector(".modal ");
const ticketsClose = document.querySelector(".modal-close");
const ticketsContainer = document.querySelector(".modal-container");

const menuBtn = document.querySelector(".mobile-menu-btn");
const header = document.getElementById("header");

const menu = document.querySelector(".menu");
const menuSubnav = document.querySelector(".subnav");

const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (let i = 0; i < ticketsBtn.length; i++) {
  ticketsBtn[i].onclick = () => {
    ticketsModal.classList.add("open");
  };
}

ticketsClose.onclick = () => {
  ticketsModal.classList.remove("open");
};

ticketsModal.onclick = () => {
  ticketsModal.classList.remove("open");
};

ticketsContainer.onclick = (e) => {
  e.stopPropagation();
};

let headerHeight = header.clientHeight;
menuBtn.onclick = () => {
  let isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i];
  menuItem.onclick = (e) => {
    let isParent =
      menuItem.nextElementSibling &&
      menuItem.nextElementSibling.classList.contains("subnav");

    if (isParent) {
      e.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
