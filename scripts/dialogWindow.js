$(document).ready(() => {
  $("#reset").click((e) => CreateModalWindow(e));
});

function CreateModalWindow(targetElement) {
  targetElement.preventDefault();
  const $background = $('<div class="background">');
  const $dialogWindow = $(
    '<div class="dialog-window"> <h1 style="text-align: center; color: white; margin: 40px 20px "> Вы уверены, что хотите обнулить форму? </h1> </div>'
  );
  const $modalButtons = $('<div class="buttons" style="top: 60%; left: 24%"> </div>');
  const $accept = $('<button style="background-color: green"><h2 style="margin: 0;">Да</h2></button>');
  const $deny = $('<button style="background-color: red"><h2 style="margin: 0;">Нет</h2></button>');

  $accept.click(() => {
    console.log($("form")[0].nodeType);
    $("input").val("");
    $("textarea").val("");
    $background.remove();
  });
  $deny.click(() => {
    $background.remove();
  });
  $modalButtons.append($accept, $deny);
  $dialogWindow.append($modalButtons);
  $background.append($dialogWindow);
  $("body").append($background);
}
