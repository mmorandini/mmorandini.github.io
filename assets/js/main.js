$(document).ready(function(){
  
  const bugs = [];
  const maxWidth = document.body.clientWidth;
  const maxHeight = document.body.clientHeight;
  
  
  for (var i = 500; i >= 0; i--) {
    const bug = document.createElement('div');
    document.body.appendChild(bug);
    bug.id = "bug";
    $(bug).width('4px');
    $(bug).height('2px');
    $(bug).css('position','absolute');
    bugs.push(bug);
  }

  for (var i = bugs.length - 1; i >= 0; i--) {
    const x = Math.round(maxWidth * Math.random());
    const y = Math.round(maxHeight * Math.random());
    console.log(x);
    $(bugs[i]).css('left', x);
    $(bugs[i]).css('top', y);
    
    if (x % 2 == 0 && x % 3 == 0){
      $(bug[i]).css('background-color','lime');
    } else {
      $(bug[i]).css('background-color','black');
    };
  }
  console.log(document.body);
});
  