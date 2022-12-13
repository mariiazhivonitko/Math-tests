/*Mariia Zhivonitko 
TIK22SP, sg 6
Web-projekti*/
let resultPisteet = 0;
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
    comment.textContent = "Mahtava! Vastaus on oikein.";
    comment.style.color = "white";
    comment.style.background = "#369f39";
    comment.style.fontSize = "1.5em";
    comment.style.padding = "5px";
    element.append(comment);

    //Add bonus star-picture
    /*bonus.scr = "assets/answers/Star.svg";
    bonus.style.height = "20px";

    question1.append(bonus);*/
}

/**
 * 
 * Make changes for the case-wrong answer.
 */
 function wrongAnswer(element, rightAnswer) {
    let comment = document.createElement("p");

    element.style.borderColor = "red";
    
    comment.textContent = "Vastaus on väärä. Oikein vastaus on " + rightAnswer + ".";
    comment.style.color = "white";
    comment.style.background = "red";
    comment.style.fontSize = "1.5em";
    comment.style.padding = "5px";
    element.append(comment);
}


function checkAnswer1() {
    let answerInput1 = Number(document.getElementById("answer1").value);
    let image1 = document.getElementById("flower_img");
    let answerBox1 = document.getElementById("answerBox1");
    let question1 = document.getElementById("question1");
    let rightAnswer1 = 11;
    // Show the solution 1, when the button was pressed. 
    // Hide answer-box
    image1.src = "assets/answers/flowers_answer.svg";
    answerBox1.style.display = "none";

    if(answerInput1 == rightAnswer1){
        //In case, Answer1 is right, write comment and add star-bonus.
        rightAnswer(question1);
        result++;
        
    }else{
        //In case, Answer1 is wrong, write comment and change border color.
        wrongAnswer(question1, rightAnswer1)
    }
}



function checkAnswer2(){
    let answerRadioButton2 = checkRadioButton("square");
    let rightAnswer2 = "A";

    let image2 = document.getElementById("square_img");
    let answerBox2 = document.getElementById("answerBox2");
    let question2 =document.getElementById("question2");

    image2.src = "assets/answers/square_answer.svg";
    answerBox2.style.display = "none";

    if (answerRadioButton2 == rightAnswer2){
        rightAnswer(question2);
        result++;
    }else{
        wrongAnswer(question2, rightAnswer2);
    }
    


}

function checkAnswer3(){
    let answerInput3 = Number(document.getElementById("answer3").value);
    let image3 = document.getElementById("car_img");
    let answerBox3 = document.getElementById("answerBox3");
    let question3 =document.getElementById("question3");
    let rightAnswer3 = 87;
    
    // Show the solution 1, when the button was pressed. 
    // Hide answer-box
    image3.src = "assets/answers/car_answer.svg";
    answerBox3.style.display = "none";

    if(answerInput3 == rightAnswer3){
        //In case, Answer1 is right, write comment and add star-bonus.
        rightAnswer(question3);
        result++;
        
    }else{
        //In case, Answer1 is wrong, write comment and change border color.
        wrongAnswer(question3, rightAnswer3)
    }

}
function checkAnswer4(){
    let answerRadioButton4 = checkRadioButton("tetris");
    let image4 = document.getElementById("tetris_img");
    let answerBox4 = document.getElementById("answerBox4");
    let question4 =document.getElementById("question4");
    let rightAnswer4 = "E";


    image4.src = "assets/answers/tetris_answer.svg";
    answerBox4.style.display = "none";

    if (answerRadioButton4 == rightAnswer4){
        rightAnswer(question4);
        result++;
    }else{
        wrongAnswer(question4, rightAnswer4);
    }
   


}
function rightAnswer5() {
    let question5 =document.getElementById("question5");
    let image5 = document.getElementById("socks_img");
    image5.src = "assets/answers/socks_answer.svg";
    let socksDiv = document.getElementById("socks");
    socksDiv.style.display = "none";

    image5.src = "assets/answers/socks_answer.svg";

    rightAnswer(question5);
    result++;
}

function wrongAnswer5(){
    let question5 = document.getElementById("question5");
    let image5 = document.getElementById("socks_img");
    let socksDiv = document.getElementById("socks");

    image5.src = "assets/answers/socks_answer.svg";
    let comment = document.createElement("p");

    question5.style.borderColor = "red";
    
    comment.textContent = "Vastaus on väärä";
    comment.style.color = "white";
    comment.style.background = "red";
    comment.style.fontSize = "1.5em";
    comment.style.padding = "5px";
    socksDiv.style.display = "none";
    question5.append(comment);
}

function result(){
    let result = document.getElementById("result");
    let comment = document.createElement("p");
    let button = document.getElementById("result_button");
    let starPicture = "<img src='assets/answers/Star.png'>"
    let prize = document.createElement("div");

    button.style.display = "none";
    comment.textContent = "Loistava Työtä! Saat " + resultPisteet + " pisteet!";
    comment.style.color = "white";
    comment.style.background = "#369f39";
    comment.style.fontSize = "1.5em";
    comment.style.padding = "5px";
    result.appendChild(comment);
    for (let index = 0; index < resultPisteet; index++) {
        prize.innerHTML += starPicture;
        
    }
    result.appendChild(prize);

}
    //Check if the answer is right
    //if (radioButtonAnswer == "D") {

    
