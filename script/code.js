//Check question1
document.getElementById("check1").onclick = checkAnswer();
//let answerInput1 = Number(document.getElementById("answer1").value);

/**
 * @param {Event} e 
 */
function checkAnswer(e) {
    e.preventDefault();
    let answerInput1 = Number(document.getElementById("answer1").value);
    if(answerInput1 == 11){
        console.log(answerInput1);
    }else{
        console.log("wrong");
    }
}
