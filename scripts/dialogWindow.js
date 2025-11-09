$(document).ready(function dialogWindow() {
  dialogWindowCreate();
});

function dialogWindowCreate() {
  const back = document.createElement("div");
  back.classList.add("background");

  document.body.appendChild(back);

  const window = document.createElement("div");
  window.classList.add("dialog-window");

  const text = document.createElement("h2");
  text.style = "text-align: center";
  text.textContent = "Вы подтверждаете свой выбор?";

  window.appendChild(text);
  back.appendChild(window);
  //   $(back).hide();
}
