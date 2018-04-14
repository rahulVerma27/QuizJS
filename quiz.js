let ques = [
  'What is the correct jQuery code to set the background color of all p elements to red?', 
  'Which jQuery method is used to set one or more style properties for selected elements?', 
  'Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?', 
  'Which jQuery method is used to perform an asynchronous HTTP request?', 
  'The jQuery html() method works for both HTML and XML documents'
];

let  options = [
  [
    '$("p").color("red");',
    '$("p").style("color", "red");',
    '$("p").css("color", "red");',//
    '$("#p").css("color", "red");'
  ],
  [
    'set()',
    'css()',//
    'text()',
    'style()'
  ],
  [
    'toggle()',
    'switch()',
    'toggleClass()',//
    'switchClass()'
  ],
  [
    'jQuery.ajaxSync()',
    'jQuery.ajaxAsync()',
    'jQuery.http()',
    'jQuery.ajax()'//
  ],
  [
    'true',
    'false',//
    'It depends',
    'None of these'
  ]
];

let shuffle = arr => {
  let temp = [];
  for(let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * arr.length);
    
    if(!temp[j]) {
      temp[j] = arr[i];
    } else {
      i--;
    }
  }
  return temp;
}

for(let i in options) {
  options[i] = shuffle(options[i]);
}

const answers = [
  options[0][options[0].indexOf('$("p").css("color", "red");')],
  options[1][options[1].indexOf('css()')],
  options[2][options[2].indexOf('toggleClass()')],
  options[3][options[3].indexOf('jQuery.ajax()')],
  options[4][options[4].indexOf('false')]
];

$(function() {
  $('.result').css('display', 'none');
  
  let j = 0;
  for(let i in ques) {
    $('.container').append(
      "<div class='page well well-lg'><div class='head'><h1 class='ques'>" + ques[i] + "</h1></div><hr/><div class='option-list'><ul class='options'><li><label><input type='radio' name='option'/><span>" + options[i][j] + "</span></label></li><li><label><input type='radio' name='option'/><span>" + options[i][j+1] + "</span></label></li><li><label><input type='radio' name='option'/><span>" + options[i][j+2] + "</span></label></li><li><label><input type='radio' name='option'/><span>" + options[i][j+3] + "</span></label></li></ul><hr/><button class='btn btn-primary next'>Continue</button></div></div>"
    );
  }

  let k = 0, score = 0;
  let page = $('.page');
  
  $('.page').hide();
  $('.page').eq(k).slideDown();
  
  $('.next').on('click', function() {
    let parent = $(this).parent().parent();
    
    if(!parent.find('.checked').length > 0) {
      if(answers[k].toLowerCase() === parent.find('.checked').siblings($('span')).text().toLowerCase()) {
        score++;
      }
            
      if(ques[k + 1]) {
        k++;
        parent.hide();
        page.eq(k).slideDown();
      } else {
        $('.page').fadeOut(1500); 
        
        setTimeout(function() {
          $('.result').fadeIn(1000);
          $('.result').html("<h1 class='head'>Final Score</h1><div><h3 class='info'>You have scored&nbsp;&nbsp;&nbsp;<span class=\"badge\">" + (score / 5) * 100 + "%</span></h3></div><h4 id='me'>- Coded with <a href='#'>BootStrap3</a> and <a href='#'>jQuery</a> by <a href='https://codepen.io/Blue_5/' target='_blank'>Rahul</a></h4>");
        }, 1500);
      }            
    }
  });
  
  $('input').on('change', function() {
    $('input').removeClass('checked');
    $(this).addClass('checked');
  });
});
