//Check question1
//document.getElementById("check1").onclick = checkAnswer();
//let answerInput1 = Number(document.getElementById("answer1").value);

/**
 * Returns the chosen radio-button value
 */
 function checkRadioButton(name) {
    let radioButtons = document.getElementsByName(name);
    let radioButtonAnswer;

    for (radio of radioButtons) {
        if(radio.checked){
            radioButtonAnswer = radio.value;
        }
        
    }
    return radioButtonAnswer;
}   

/**
 * 
 * Make changes for the case-right answer.
 */
function rightAnswer(element) {
    let comment = document.createElement("p");
    let bonus = document.createElement("img");
    comment.textContent = "Mahtava! Vasaus on oikein. Saat";
    comment.style.color = "#369f39";
    comment.style.fontSize = "2em";
    element.append(comment);

    //Add bonus star-picture
    bonus.style.scr = "assets/answers/Star.svg";
    question1.append(bonus);
}

/**
 * 
 * Make changes for the case-wrong answer.
 */
 function wrongAnswer(element, wrongAnswer) {
    let comment = document.createElement("p");

    element.style.borderColor = "red";
    
    comment.textContent = "Vastaus " + wrongAnswer + " on väärä. Oikein vastaus on 11.";
    comment.style.color = "red";
    comment.style.fontSize = "2em";
    element.append(comment);
}


function checkAnswer1() {
    let answerInput1 = Number(document.getElementById("answer1").value);
    let image1 = document.getElementById("flower_img");
    let answerBox1 = document.getElementById("answerBox1");
    let question1 =document.getElementById("question1");
    
    // Show the solution 1, when the button was pressed. 
    // Hide answer-box
    image1.src = "assets/answers/flowers_answer.svg";
    answerBox1.style.display = "none";

    if(answerInput1 == 11){
        //In case, Answer1 is right, write comment and add star-bonus.
        rightAnswer(question1);
        
    }else{
        //In case, Answer1 is wrong, write comment and change border color.
        wrongAnswer(question1, answerInput1)
    }
}



function checkAnswer2(){
    let answerRadioButton2 = checkRadioButton("square");

    let image2 = document.getElementById("square_img");
    let answerBox2 = document.getElementById("answerBox2");
    let question2 =document.getElementById("question2");

    image2.style.src = "assets/answers/square_answer.svg";
    answerBox2.style.display = "none";

    if (answerRadioButton2 == "A"){
        rightAnswer(question2);
    }else{
        wrongAnswer(question2);
    }
    


}

function checkAnswer3(){
    let answerInput3 = Number(document.getElementById("answer3").value);
    let image3 = document.getElementById("car_img");
    let answerBox3 = document.getElementById("answerBox3");
    let question3 =document.getElementById("question3");
    
    // Show the solution 1, when the button was pressed. 
    // Hide answer-box
    image3.src = "assets/answers/flowers_answer.svg";
    answerBox3.style.display = "none";

    if(answerInput3 == 87){
        //In case, Answer1 is right, write comment and add star-bonus.
        rightAnswer(question3);
        
    }else{
        //In case, Answer1 is wrong, write comment and change border color.
        wrongAnswer(question3, answerInput3)
    }

}
function checkAnswer4(){
    let answerRadioButton4 = checkRadioButton("tetris");
    let image4 = document.getElementById("tetris_img");
    let answerBox4 = document.getElementById("answerBox4");
    let question4 =document.getElementById("question4");

    image4.style.src = "assets/answers/square_answer.svg";
    answerBox4.style.display = "none";

    if (answerRadioButton4 == "E"){
        rightAnswer(question4);
    }else{
        wrongAnswer(question4);
    }
   


}

    //Check if the answer is right
    //if (radioButtonAnswer == "D") {

    
