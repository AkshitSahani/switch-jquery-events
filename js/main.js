function switchup() {
  if ($('.switch > button').attr('class') === 'on'){
    $('.switch > button').attr('class', 'off');
  }
  else {
    $('.switch > button').attr('class', 'on');
  }
};

function switchbody() {
  if ($('.light').attr('class') === 'light'){
    $('.light').attr('class', 'dark');
  }
  else if ($('.dark').attr('class') === 'dark'){
    $('.dark').attr('class', 'light');
  }
};

function switchtext() {
  if ($('.light').attr('class') === 'light'){
    $('h1').text("It's so bright in here!");
  }
  else if ($('.dark').attr('class') === 'dark'){
    $('h1').text("Hey, who turned off the lights?");
  }
};

$(document).ready(function(){
  $('.switch > button').on('click', switchup);
  $('.switch').on('click', switchbody);
  $('.switch').on('click', switchtext);
});
