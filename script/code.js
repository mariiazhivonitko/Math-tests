//Check question1
document.getElementById("check1").onclick = checkAnswer();
let answerInput1 = Number(document.getElementById("answer1").value);

function checkAnswer() {
   
    if(answerInput1 == 11){
        console.log(answerInput1);
    }else{
        console.log("wrong");
    }
}