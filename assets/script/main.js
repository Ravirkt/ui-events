let interaction = document.querySelector("a:nth-of-type(12)");

interaction.addEventListener("click", jumpHandler);
interaction.addEventListener("animationend", jumpHandler);

function jumpHandler() {
  interaction.classList.toggle("jump");
}

// ///////////////////////////////////////////////////////////////////////////////////

// knop 1 frontend kleur veranderen
// mouseover event
let interactionFrontend = document.querySelector("a:nth-of-type(1)");

interactionFrontend.addEventListener("mouseover", () => {
  rocket.classList.add("animate");
  interactionFrontend.classList.toggle("button-frontend");
  document.body.classList.toggle("body-color");
});

rocket.addEventListener("animationend", () => {
  rocket.classList.remove("animate");
});

// ///////////////////////////////////////////////////////////////////////////////////

// knop 2 Design veranderen van kleur en rotaten
// click event
const design_button = document.querySelector("a:nth-of-type(2)");

design_button.addEventListener("click", rotate);
design_button.addEventListener("animationend", rotate);

function rotate() {
  design_button.classList.toggle("button-design");
}

// knop 3 &  verdwijnen van button
// mousedown event
const and_button = document.querySelector("a:nth-of-type(3)");

and_button.addEventListener("mousedown", scale);

function scale() {
  console.log("jfsdfsf");
  and_button.classList.toggle("button-and");
}

// knop 4 Development shaking button
// keydown event
const development_button = document.querySelector("a:nth-of-type(4)");

development_button.addEventListener("keydown", shake);

function shake(event) {
  console.log("testts");

  if (event.ctrlKey) {
    console.log("teststsetse");
    development_button.classList.toggle("development-button");
  }
}

// knop 5 sprint 5 button
// load event
const sprint_button = document.querySelector("a:nth-of-type(5)");

window.addEventListener("load", tilt);

function tilt() {
  console.log("tetststststs");
  sprint_button.classList.toggle("sprint-button");
}

// knop 6 fix
// keyup event
const fix_button = document.querySelector("a:nth-of-type(6)");

fix_button.addEventListener("keyup", pulse);

function pulse() {
  console.log("teststsetse");
  fix_button.classList.toggle("fix-button");
}

// knop 7 the
// keyup event
const the__button = document.querySelector("a:nth-of-type(7)");

the__button.addEventListener("dblclick", fall);

function fall() {
  console.log("teststsetse");
  the__button.classList.toggle("the-button");
}

// knop 8 flow
// keypress event
const flow_button = document.querySelector("a:nth-of-type(8)");

flow_button.addEventListener("keypress", count);

function count(event) {
  console.log("teststsetse");
  flow_button.textContent = event.key;
}

// knop 9 user
// mouse over clienty
const user_button = document.querySelector("a:nth-of-type(9)");

user_button.addEventListener("mousemove", clienty);

function clienty(event) {
  console.log("teststsetse");
  user_button.textContent = event.clientY;
}

// knop 10 interface
// mouse over clienty

const interface_button = document.querySelector("a:nth-of-type(10)");

// Luister naar het pointerdown event
interface_button.addEventListener("pointerdown", clienty);

function clienty(event) {
  console.log(event.clientY);

  interface_button.classList.toggle("interface-button");
}
