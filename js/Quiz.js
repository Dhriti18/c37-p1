class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
    //write code to change the background color here
background("yellow");
    //write code to show a heading for showing the result of Quiz
  fill ("black")
textSize(35);
textFont("Bodoni Bold")
text("RESULT OF QUIZ",130,70)

stroke ("black");
strokeWeight(5)

line(130,75,400,75);

    //call getContestantInfo( ) here

Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
if(allContestants!==undefined){
  fill("blue")
  textSize(20)
  strokeWeight(1)
  textFont("castellar")
  
   //write code to add a note here
  text("*NOTE:Contestant who answered correct are highlighted in green colour!",130,230);
var yPosition=250

      //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      yPosition+=30
      var correctAns="2"
     
      
      if(correctAns===allContestants[plr].answer){
        fill("green")
        console.log("hi")
        
       

      }
      else{
        fill("red");
        console.log("hi,bye")
       
      }
      textSize(15)
      text (allContestants[plr].name + ":" + allContestants[plr].answer, 120, yPosition )
      
    }
  }
  }
}
