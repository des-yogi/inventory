$(window).scroll(function(){
  var background = document.querySelector('.services__bg');
  //console.log(background);
  if (!background) { return; }

  $('.services__bg').bgscroll({
    direction: 'bottom', // направление bottom или top
    bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
    debug: false, // Режим отладки
    min:0, // минимальное положение (в %) на которое может смещаться фон
    max:100 // максимальное положение (в %) на которое может смещаться фон
  });
})
