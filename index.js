document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Select and cache the <main> element
  let mainEl = document.querySelector("main");

  // Step 2: Set the background color of mainEl to the value stored in the --main-bg CSS custom property
  mainEl.style.backgroundColor = "var(--main-bg)";

  // Step 3: Set the content of mainEl to <h1>DOM Manipulation</h1>
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

  // Step 4: Add a class of flex-ctr to mainEl
  mainEl.classList.add("flex-ctr");
});

//   PART 2
document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Select and cache the <nav id="top-menu"> element
  var topMenuEl = document.getElementById("top-menu");

  // Step 2: Set the height of the topMenuEl element to be 100%
  topMenuEl.style.height = "100%";

  // Step 3: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

  // Step 4: Add a class of flex-around to topMenuEl
  topMenuEl.classList.add("flex-around");
});

//  PART 3
// Menu data structure
let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

document.addEventListener("DOMContentLoaded", function () {
  // Define the updated menuLinks array
  let menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];

  // Step 1: Select and cache the <nav id="top-menu"> element
  let topMenuEl = document.getElementById("top-menu");

  // Step 2: Set the height of the topMenuEl element to be 100%
  topMenuEl.style.height = "100%";

  // Step 3: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

  // Step 4: Add a class of flex-around to topMenuEl
  topMenuEl.classList.add("flex-around");

  // Step 5: Iterate over the menuLinks array and create menu buttons
  menuLinks.forEach(function (link) {
    // Create <a> element
    let menuLink = document.createElement("a");

    // Set href attribute
    menuLink.setAttribute("href", link.href);

    // Set content
    menuLink.textContent = link.text;

    // Append to topMenuEl
    topMenuEl.appendChild(menuLink);
  });


  // Part 4: Submenu Element Manipulation
  let subMenuEl = document.getElementById('sub-menu');
  subMenuEl.style.height = '100%';
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  subMenuEl.classList.add('flex-around'); 

  // Hide the position
  subMenuEl.style.position = 'absolute'; // Set position to absolute
  subMenuEl.style.top = '0'; // Set top to 0 to hide it initially



});
