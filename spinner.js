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
    $('<font size="6">for</font>').appendTo('#inputVals');
  });
});
  $(function () {
  $('#2').on('click', function () {
    $('<font size="6"></font>').appendTo('#inputVals');
  });
});
  $(function () {
  $('#3').on('click', function () {
    $('<font size="6">if</font>').appendTo('#inputVals');
  });
});
  $(function () {
  $('#4').on('click', function () {
    $('<font size="6">int</font>').appendTo('#inputVals');
  });
});
  $(function () {
  $('#5').on('click', function () {
    $('<p><font size="6">x</font></p>').appendTo('#Content');
  });
});
  $(function () {
  $('#6').on('click', function () {
    $('<font size="6">{</font>').appendTo('#Content');
  });
});
  $(function () {
  $('#7').on('click', function () {
    $('<font size="6">}</font>').appendTo('#Content');
  });
});
  $(function () {
  $('#8').on('click', function () {
    $('<font size="6">(</font>').appendTo('#Content');
  });
});
  $(function () {
  $('#9').on('click', function () {
    $('<font size="6">)</font>').appendTo('#Content');
  });
});
  $(function () {
  $('#10').on('click', function () {
    $('<font size="6">=</font>').appendTo('#Content');
  });
});
  $(function () {
  $('#11').on('click', function () {
    $('<font size="6">;</font>').appendTo('#Content');
  });
});

    
  $('.selector button').click(function(e) {
  toggleOptions($(this).parent());
});
}, 100);
