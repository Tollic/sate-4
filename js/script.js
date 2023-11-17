// document.getElementById("m1").addEventListener('click', function (e) {
//     var m1 = e.target
//     var rect = m1.getBoundingClientRect()
//     var dx = e.pageX - rect.left, dy = e.pageY - rect.top 
    
//     m1.style.background = 'silver'
    
//     document.addEventListener('click', function handler(e) {
//       m1.style.left = e.pageX - dx + 'px'
//       m1.style.top = e.pageY - dy + 'px'
//       m1.style.background = ''
    
//       document.removeEventListener('click', handler, true)
//       event.stopPropagation()
//     }, true)
// })

// document.getElementById("m_2").addEventListener('click', function (e) {
//     var div = e.target
//     var rect = div.getBoundingClientRect()
//     var dx = e.pageX - rect.left, dy = e.pageY - rect.top
    
//     div.style.background = 'silver'
    
//     document.addEventListener('click', function handler(e) {
//       div.style.left = e.pageX - dx + 'px'
//       div.style.top = e.pageY - dy + 'px'
//       div.style.background = ''
    
//       document.removeEventListener('click', handler, true)
//       event.stopPropagation()
//     }, true)
// })

// document.getElementById("m_3").addEventListener('click', function (e) {
//     var div = e.target
//     var rect = div.getBoundingClientRect()
//     var dx = e.pageX - rect.left, dy = e.pageY - rect.top
    
//     div.style.background = 'silver'
    
//     document.addEventListener('click', function handler(e) {
//       div.style.left = e.pageX - dx + 'px'
//       div.style.top = e.pageY - dy + 'px'
//       div.style.background = ''
    
//       document.removeEventListener('click', handler, true)
//       event.stopPropagation()
//     }, true)
// })

// document.getElementById("mm_4").addEventListener('click', function (e) {
//     var div = e.target
//     var rect = div.getBoundingClientRect()
//     var dx = e.pageX - rect.left, dy = e.pageY - rect.top
    
//     div.style.background = 'silver'
    
//     document.addEventListener('click', function handler(e) {
//       div.style.left = e.pageX - dx + 'px'
//       div.style.top = e.pageY - dy + 'px'
//       div.style.background = ''
    
//       document.removeEventListener('click', handler, true)
//       event.stopPropagation()
//     }, true)
// })



// $( function() {
//   $("#drag_1").draggable();
// } );

// $( function() {
//   $("#drag_2").draggable();
// } );

// $( function() {
//   $("#drag_3").draggable();
// } );

// $( function() {
//   $("#drag_4").draggable();
// } );

$( function() {
  $("#drag_5").draggable();
} );

$( function() {
  $("#drag_6").draggable();
} );

$( function() {
  $("#drag_7").draggable();
} );

$( function() {
  $("#drag_8").draggable();
} );

$(function() {
  $(".draggable").draggable({
    start: function() {
      // Удаляем класс активного состояния со всех элементов, кроме текущего
      $(".draggable").not(this).removeClass("active");
      // Устанавливаем класс активного состояния для начала подсветки текущего элемента
      $(this).addClass("active");
    },
    drag: function() {
      // Ничего не делаем во время перетаскивания, чтобы подсветка оставалась
    }
  });
});



