const vm = {};

$(document).ready(function(){
  vm.bugs = [];
  console.log(vm.bugs, vm);
  const bugs = [];
  const maxWidth = document.body.clientWidth;
  const maxHeight = document.body.clientHeight; 

  for (var i = 100; i >= 0; i--) {
    const bug = document.createElement('div');
    document.body.appendChild(bug);
    $(bug).addClass("bug");
    $(bug).width('3px');
    $(bug).height('1px');
    $(bug).css('position','absolute');
    bugs.push(bug);
  }

  for (var i = bugs.length - 1; i >= 0; i--) {
    const x = Math.round(maxWidth * Math.random());
    const y = Math.round(maxHeight * Math.random());
    // console.log(x);
    $(bugs[i]).css('left', x);
    $(bugs[i]).css('top', y);
    
    if (x % 2 == 0 && x % 3 == 0){
      $(bugs[i]).css('background-color','lime');
    } else {
      $(bugs[i]).css('background-color','black');
    };
  }

  window.setInterval(animateBugs, 400);

  function animateBugs(){
    
      for (var i = bugs.length - 1; i >= 0; i--) {
        let BUG = bugs[i]
        $(BUG).animate({top: Math.round(maxHeight * Math.random()), left: Math.round(maxWidth * Math.random())}, 40000);  
      }
    
  }
  // console.log(document.body);
});


