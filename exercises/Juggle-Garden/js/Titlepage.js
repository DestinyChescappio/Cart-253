class Titlepage {
  constructor(){
    }

//drawing the title
drawTitleText(){
  fill(255,0,0);
  textFont();
  textSize(100);
  textAlign(CENTER,CENTER);
  text(`Catch the Chainsaws!`,width/2,height/2);
//drawing the instructions
  fill(255);
  textFont();
  textSize(50);
  textAlign(CENTER,CENTER);
  text(`Use the arrow keys to move the paddle to catch the bouncing chainsaws`,width/2,height/2 - 200);

}
}
