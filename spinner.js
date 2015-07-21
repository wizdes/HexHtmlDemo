var angleStart = -360;

// jquery rotate animation
function rotate(li, d) {
  $({
    d: angleStart
  }).animate({
    d: d
  }, {
    step: function(now) {
      $(li)
        .css({
          transform: 'rotate(' + now + 'deg)'
        })
        .find('label')
        .css({
          transform: 'rotate(' + (-now) + 'deg)'
        });
    },
    duration: 0
  });
}

// show / hide the options
function toggleOptions(s) {
  $(s).toggleClass('open');
  var li = $(s).find('li');
  var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
  for (var i = 0; i < li.length; i++) {
    var d = $(s).hasClass('half') ? (i * deg) - 90 : i * deg;
    $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
  }
}

setTimeout(function() {
  toggleOptions('.selector');
  
  $(function () {
  $('#1').on('click', function () {
    $('for').appendTo('#Content');
  });
});
  $(function () {
  $('#2').on('click', function () {
    $('<br/>').appendTo('#Content');
  });
});
  $(function () {
  $('#3').on('click', function () {
    $('if').appendTo('#Content');
  });
});
  $(function () {
  $('#4').on('click', function () {
    $('<p><font size="6">int</font></p>').appendTo('#Content');
  });
});
  $(function () {
  $('#5').on('click', function () {
    $('<p><font size="6">string</font></p>').appendTo('#Content');
  });
});
  $(function () {
  $('#6').on('click', function () {
    $('<p><font size="6">{</font></p>').appendTo('#Content');
  });
});
  $(function () {
  $('#7').on('click', function () {
    $('<p><font size="6">}</font></p>').appendTo('#Content');
  });
});
  $(function () {
  $('#8').on('click', function () {
    $('<p><font size="6">(</font></p>').appendTo('#Content');
  });
});
  $(function () {
  $('#9').on('click', function () {
    $('<p><font size="6">)</font></p>').appendTo('#Content');
  });
});
  $(function () {
  $('#10').on('click', function () {
    $('<p><font size="6">=</font></p>').appendTo('#Content');
  });
});
  $(function () {
  $('#11').on('click', function () {
    $('<p><font size="6">;</font></p>').appendTo('#Content');
  });
});

    
  $('.selector button').click(function(e) {
  toggleOptions($(this).parent());
});
}, 100);
