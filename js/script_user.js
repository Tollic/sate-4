// $(".st_1").click(function(){
//   $(".option").show();
// });

// $("#roll").click(function(){
//   $(".option").hide();
// });

$(".st_1").click(function(){
  var $option = $(".option");
  if ($option.is(":visible")) {
    $option.hide();
  } else {
    $option.show();
  }
});

$("#roll").click(function(){
  $(".option").hide();
});




// let textarea = document.querySelector('textarea')

// let field = document.getElementById("story");

// if (sessionStorage.getItem("autosave")) {
//   field.value = sessionStorage.getItem("autosave");
// }

// field.addEventListener("change", () => {
//   sessionStorage.setItem("autosave", field.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('textarea, input').forEach(function(e) {
//       if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
//       e.addEventListener('input', function() {
//           window.sessionStorage.setItem(e.name, e.value);
//       })
//   })

// }); 

const textArea = document.getElementById("story");
const storageKey = 'text';

const init = () => {

textArea.value = localStorage.getItem(storageKey);

textArea.addEventListener('input', () => {
  localStorage.setItem(storageKey, textArea.value);
});
}

init();

// $(".st_2").click(function(){
//   $(".option_2").show();
// });

// $(".go").click(function(){
//   $(".option_2").hide();
// });

$(".st_2").click(function(){
  var $option = $(".option_2");
  if ($option.is(":visible")) {
    $option.hide();
  } else {
    $option.show();
  }
});

$("#roll").click(function(){
  $(".option_2").hide();
});

// let field_1 = document.getElementById("story_1");

// if (sessionStorage.getItem("autosave_1")) {
//   field_1.value = sessionStorage.getItem("autosave_1");
// }

// field_1.addEventListener("change", () => {
//   sessionStorage.setItem("autosave_1", field_1.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('textarea, input').forEach(function(e) {
//       if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
//       e.addEventListener('input', function() {
//           window.sessionStorage.setItem(e.name, e.value);
//       })
//   })
// }); 

const textArea_1 = document.getElementById("story_1");
const storageKey_1 = 'text_1';

const init_1 = () => {

textArea_1.value = localStorage.getItem(storageKey_1);

textArea_1.addEventListener('input', () => {
  localStorage.setItem(storageKey_1, textArea_1.value);
});
}

init_1();

// $(".st_3").click(function(){
//   $(".option_3").show();
// });

// $(".go").click(function(){
//   $(".option_3").hide();
// });

$(".st_3").click(function(){
  var $option = $(".option_3");
  if ($option.is(":visible")) {
    $option.hide();
  } else {
    $option.show();
  }
});

$("#roll").click(function(){
  $(".option_3").hide();
});

// let field_2 = document.getElementById("story_2");

// if (sessionStorage.getItem("autosave_2")) {
//   field_2.value = sessionStorage.getItem("autosave_2");
// }

// field_2.addEventListener("change", () => {
//   sessionStorage.setItem("autosave_2", field_2.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('textarea, input').forEach(function(e) {
//       if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
//       e.addEventListener('input', function() {
//           window.sessionStorage.setItem(e.name, e.value);
//       })
//   })
// });

const textArea_2 = document.getElementById("story_2");
const storageKey_2 = 'text_2';

const init_2 = () => {

textArea_2.value = localStorage.getItem(storageKey_2);

textArea_2.addEventListener('input', () => {
  localStorage.setItem(storageKey_2, textArea_2.value);
});
}

init_2();

// $(".st_4").click(function(){
//   $(".option_4").show();
// });

// $(".go").click(function(){
//   $(".option_4").hide();
// });

$(".st_4").click(function(){
  var $option = $(".option_4");
  if ($option.is(":visible")) {
    $option.hide();
  } else {
    $option.show();
  }
});

$("#roll").click(function(){
  $(".option_4").hide();
});

// let field_3 = document.getElementById("story_3");

// if (sessionStorage.getItem("autosave_3")) {
//   field_3.value = sessionStorage.getItem("autosave_3");
// }

// field_3.addEventListener("change", () => {
//   sessionStorage.setItem("autosave_3", field_3.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('textarea, input').forEach(function(e) {
//       if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
//       e.addEventListener('input', function() {
//           window.sessionStorage.setItem(e.name, e.value);
//       })
//   })
// });

const textArea_3 = document.getElementById("story_3");
const storageKey_3 = 'text_3';

const init_3 = () => {

textArea_3.value = localStorage.getItem(storageKey_3);

textArea_3.addEventListener('input', () => {
  localStorage.setItem(storageKey_3, textArea_3.value);
});
}

init_3();

// $(".st_5").click(function(){
//   $(".option_5").show();
// });

// $(".go").click(function(){
//   $(".option_5").hide();
// });

$(".st_5").click(function(){
  var $option = $(".option_5");
  if ($option.is(":visible")) {
    $option.hide();
  } else {
    $option.show();
  }
});

$("#roll").click(function(){
  $(".option_5").hide();
});

// let field_4 = document.getElementById("story_4");

// if (sessionStorage.getItem("autosave_4")) {
//   field_4.value = sessionStorage.getItem("autosave_4");
// }

// field_4.addEventListener("change", () => {
//   sessionStorage.setItem("autosave_4", field_4.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('textarea, input').forEach(function(e) {
//       if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
//       e.addEventListener('input', function() {
//           window.sessionStorage.setItem(e.name, e.value);
//       })
//   })
// });

const textArea_4 = document.getElementById("story_4");
const storageKey_4 = 'text_4';

const init_4 = () => {

textArea_4.value = localStorage.getItem(storageKey_4);

textArea_4.addEventListener('input', () => {
  localStorage.setItem(storageKey_4, textArea_4.value);
});
}

init_4();

// $(".st_6").click(function(){
//   $(".option_6").show();
// });

// $(".go").click(function(){
//   $(".option_6").hide();
// });

$(".st_6").click(function(){
  var $option = $(".option_6");
  if ($option.is(":visible")) {
    $option.hide();
  } else {
    $option.show();
  }
});

$("#roll").click(function(){
  $(".option_6").hide();
});

// let field_5 = document.getElementById("story_5");

// if (sessionStorage.getItem("autosave_5")) {
//   field_5.value = sessionStorage.getItem("autosave_5");
// }

// field_5.addEventListener("change", () => {
//   sessionStorage.setItem("autosave_5", field_5.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('textarea, input').forEach(function(e) {
//       if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
//       e.addEventListener('input', function() {
//           window.sessionStorage.setItem(e.name, e.value);
//       })
//   })
// });

const textArea_5 = document.getElementById("story_5");
const storageKey_5 = 'text_5';

const init_5 = () => {

textArea_5.value = localStorage.getItem(storageKey_5);

textArea_5.addEventListener('input', () => {
  localStorage.setItem(storageKey_5, textArea_5.value);
});
}

init_5();

// $(".st_7").click(function(){
//   $(".option_7").show();
// });

// $(".go").click(function(){
//   $(".option_7").hide();
// });

$(".st_7").click(function(){
  var $option = $(".option_7");
  if ($option.is(":visible")) {
    $option.hide();
  } else {
    $option.show();
  }
});

$("#roll").click(function(){
  $(".option_7").hide();
});

// let field_6 = document.getElementById("story_6");

// if (sessionStorage.getItem("autosave_6")) {
//   field_6.value = sessionStorage.getItem("autosave_6");
// }

// field_6.addEventListener("change", () => {
//   sessionStorage.setItem("autosave_6", field_6.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('textarea, input').forEach(function(e) {
//       if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
//       e.addEventListener('input', function() {
//           window.sessionStorage.setItem(e.name, e.value);
//       })
//   })
// });

const textArea_6 = document.getElementById("story_6");
const storageKey_6 = 'text_6';

const init_6 = () => {

textArea_6.value = localStorage.getItem(storageKey_6);

textArea_6.addEventListener('input', () => {
  localStorage.setItem(storageKey_6, textArea_6.value);
});
}

init_6();

// $(".st_8").click(function(){
//   $(".option_8").show();
// });

// $(".go").click(function(){
//   $(".option_8").hide();
// });

$(".st_8").click(function(){
  var $option = $(".option_8");
  if ($option.is(":visible")) {
    $option.hide();
  } else {
    $option.show();
  }
});

$("#roll").click(function(){
  $(".option_8").hide();
});

// let field_7 = document.getElementById("story_7");

// if (sessionStorage.getItem("autosave_7")) {
//   field_7.value = sessionStorage.getItem("autosave_7");
// }

// field_7.addEventListener("change", () => {
//   sessionStorage.setItem("autosave_7", field_7.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('textarea, input').forEach(function(e) {
//       if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
//       e.addEventListener('input', function() {
//           window.sessionStorage.setItem(e.name, e.value);
//       })
//   })
// });

const textArea_7 = document.getElementById("story_7");
const storageKey_7 = 'text_7';

const init_7 = () => {

textArea_7.value = localStorage.getItem(storageKey_7);

textArea_7.addEventListener('input', () => {
  localStorage.setItem(storageKey_7, textArea_7.value);
});
}

init_7();

// $(".st_9").click(function(){
//   $(".option_9").show();
// });

// $(".go").click(function(){
//   $(".option_9").hide();
// });

$(".st_9").click(function(){
  var $option = $(".option_9");
  if ($option.is(":visible")) {
    $option.hide();
  } else {
    $option.show();
  }
});

$("#roll").click(function(){
  $(".option_9").hide();
});

// let field_8 = document.getElementById("story_8");

// if (sessionStorage.getItem("autosave_8")) {
//   field_8.value = sessionStorage.getItem("autosave_8");
// }

// field_8.addEventListener("change", () => {
//   sessionStorage.setItem("autosave_8", field_8.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('textarea, input').forEach(function(e) {
//       if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
//       e.addEventListener('input', function() {
//           window.sessionStorage.setItem(e.name, e.value);
//       })
//   })
// });

const textArea_8 = document.getElementById("story_8");
const storageKey_8 = 'text_8';

const init_8 = () => {

textArea_8.value = localStorage.getItem(storageKey_8);

textArea_8.addEventListener('input', () => {
  localStorage.setItem(storageKey_8, textArea_8.value);
});
}

init_8();

// $(".st_10").click(function(){
//   $(".option_10").show();
// });

// $(".go").click(function(){
//   $(".option_10").hide();
// });

$(".st_10").click(function(){
  var $option = $(".option_10");
  if ($option.is(":visible")) {
    $option.hide();
  } else {
    $option.show();
  }
});

$("#roll").click(function(){
  $(".option_10").hide();
});

// let field_9 = document.getElementById("story_9");

// if (sessionStorage.getItem("autosave_9")) {
//   field_9.value = sessionStorage.getItem("autosave_9");
// }

// field_9.addEventListener("change", () => {
//   sessionStorage.setItem("autosave_9", field_5.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('textarea, input').forEach(function(e) {
//       if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
//       e.addEventListener('input', function() {
//           window.sessionStorage.setItem(e.name, e.value);
//       })
//   })
// });

const textArea_9 = document.getElementById("story_9");
const storageKey_9 = 'text_9';

const init_9 = () => {

textArea_9.value = localStorage.getItem(storageKey_9);

textArea_9.addEventListener('input', () => {
  localStorage.setItem(storageKey_9, textArea_9.value);
});
}

init_9();

// имена
$('.nams1').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('nams_1');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<input type="text" class="editor-input">');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.nams_1').html(val).removeClass('nams_1');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('nams_1');
});


$('.nams2').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('nams_2');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<input type="text" class="editor-input">');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.nams_2').html(val).removeClass('nams_2');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('nams_2');
});

$('.nams3').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('nams_3');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<input type="text" class="editor-input">');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.nams_3').html(val).removeClass('nams_3');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('nams_3');
});

$('.nams4').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('nams_4');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<input type="text" class="editor-input" id="simpleEdit">');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.nams_4').html(val).removeClass('nams_4');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('nams_4');
});