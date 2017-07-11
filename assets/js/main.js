const vm = {};

$(document).ready(function(){
  
  const bugs       = [];
  const maxWidth   = document.body.clientWidth;
  const maxHeight  = document.body.clientHeight; 
  
  let sectionLeft  = ($('#section')[0].getBoundingClientRect().left) - 60;
  let sectionRight = ($('#section')[0].getBoundingClientRect().right) + 30;
  
  createBugs();
  function createBugs(){
    for (var i = 20; i >= 0; i--) {
      const bug = document.createElement('div');
      document.body.appendChild(bug);
      $(bug).addClass("bug");
      bugs.push(bug);
    }
  
    for (let i = bugs.length - 1; i >= 0; i--) {
      const x = Math.round(maxWidth * Math.random());
      const y = Math.round(maxHeight * Math.random());
      // console.log(x);
      $(bugs[i]).css('left', x);
      $(bugs[i]).css('top', y);


      ///it gets read too early!!!!
      if (x % 2 == 0 && x % 3 == 0){
        $(bugs[i]).css('background-color','black');
      } else {
        $(bugs[i]).css('background-color','#01FF70');
      };
    }
  };

  window.setInterval(animateBugs, 100);

  function animateBugs(){
    for (let i = bugs.length - 1; i >= 0; i--) {
      let bug = bugs[i]
      $(bug).animate({top: Math.round(maxHeight * Math.random()), left: Math.round(maxWidth * Math.random())}, 40000);  
    }
  }

  window.setInterval(hideBugs, 100);
  window.setInterval(showBugs, 200);

  function hideBugs(){
    for (let i = bugs.length - 1; i >= 0; i--) {
      let bugLeft = parseInt(bugs[i].style.left);
      if (bugLeft > sectionLeft && bugLeft < sectionRight){
        $(bugs[i]).addClass('unactive');
      } else {
        $(bugs[i]).removeClass('unactive');
      }
    }
    // console.log(sectionLeft, sectionRight, bugLeft);
  };

  function showBugs(){
    for (var i = bugs.length - 1; i >= 0; i--) {
      let bugLeft = parseInt(bugs[i].style.left);
      if ((bugLeft < sectionLeft) && (bugLeft > sectionRight) ){
        $(bugs[i]).css('display', 'static');
      }
    }
  }
});


