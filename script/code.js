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
    comment.textContent = "Mahtava! Vastaus on oikein.";
    comment.style.color = "white";
    comment.style.background = "#369f39";
    comment.style.fontSize = "1.5em";
    comment.style.padding = "5px";
    element.append(comment);
}

/**
 * 
 * Make changes for the case-wrong answer.
 */
 function wrongAnswer(element) {
    let comment = document.createElement("p");

    element.style.borderColor = "red";
    
    comment.textContent = "Vastauksesi on väärä.";
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
    // Show the solution, when the button was pressed. 
    // Hide answer-box
    image1.src = "assets/answers/flowers_answer.svg";
    answerBox1.style.display = "none";

    if(answerInput1 == rightAnswer1){
        //In case, Answer is right, write comment and count points.
        rightAnswer(question1);
        resultPisteet += 1;
        
    }else{
        //In case, Answer is wrong, write comment and change border color.
        wrongAnswer(question1)
    }
}



function checkAnswer2(){
    let answerRadioButton2 = checkRadioButton("square");
    let rightAnswer2 = "A";

    let image2 = document.getElementById("square_img");
    let answerBox2 = document.getElementById("answerBox2");
    let question2 =document.getElementById("question2");

    // Show the solution, when the button was pressed. 
    // Hide answer-box
    image2.src = "assets/answers/square_answer.svg";
    answerBox2.style.display = "none";

    if (answerRadioButton2 == rightAnswer2){
        //In case, Answer is right, write comment and summ points.
        rightAnswer(question2);
        resultPisteet++;
    }else{
        //In case, Answer is wrong, write comment and change border color.
        wrongAnswer(question2);
    }
}

function checkAnswer3(){
    let answerInput3 = Number(document.getElementById("answer3").value);
    let image3 = document.getElementById("car_img");
    let answerBox3 = document.getElementById("answerBox3");
    let question3 =document.getElementById("question3");
    let rightAnswer3 = 87;
    
    // Show the solution, when the button was pressed. 
    // Hide answer-box
    image3.src = "assets/answers/car_answer.svg";
    answerBox3.style.display = "none";

    if(answerInput3 == rightAnswer3){
        //In case, Answer1 is right, write comment and add star-bonus.
        rightAnswer(question3);
        resultPisteet++;
        
    }else{
        //In case, Answer1 is wrong, write comment and change border color.
        wrongAnswer(question3)
    }

}
function checkAnswer4(){
    let answerRadioButton4 = checkRadioButton("tetris");
    let image4 = document.getElementById("tetris_img");
    let answerBox4 = document.getElementById("answerBox4");
    let question4 =document.getElementById("question4");
    let rightAnswer4 = "E";

    // Show the solution, when the button was pressed. 
    // Hide answer-box
    image4.src = "assets/answers/tetris_answer.svg";
    answerBox4.style.display = "none";

    if (answerRadioButton4 == rightAnswer4){
        rightAnswer(question4);
        resultPisteet++;
    }else{
        wrongAnswer(question4);
    }
   


}
function rightAnswer5() {
    //show picture with an answer explanation
    let question5 =document.getElementById("question5");
    let image5 = document.getElementById("socks_img");
    image5.src = "assets/answers/socks_answer.svg";

    //Hide divs to choose an answer.
    let socksDiv = document.getElementById("socks");
    socksDiv.style.display = "none";

    rightAnswer(question5);
    resultPisteet++;
}

function wrongAnswer5(){
    //show picture with an answer explanation
    let question5 = document.getElementById("question5");
    let image5 = document.getElementById("socks_img");
    image5.src = "assets/answers/socks_answer.svg";

    //Hide divs to choose an answer.
    let socksDiv = document.getElementById("socks");
    socksDiv.style.display = "none";
    
    wrongAnswer(question5);
}

function visaResult(resultPisteet){
    
    let resultComment;

    //Classification and result comments
    if(Number(resultPisteet)>=4){
        resultComment = "Mahtava työtä!!! Olet Matematiikan mestari!!!";
    }else if (Number(resultPisteet)>=2) {
        resultComment = "Hyvää Työtä!";
    }else {
        resultComment = "Tarvitset harjoittella lisää.";
    }
      
    let resultDiv = document.getElementById("resultBonus");
    let resultPicture = document.getElementById("resultPicture");
    let comment = document.createElement("p");
    let button = document.getElementById("resultButton");
    let starPicture = "<img  width='80px'  src='assets/answers/Star.png'>"
    let prize = document.createElement("div");
    
    //Hide vastaus button and picture
    //button.style.display = "none";
    //resultPicture.style.display = "none";
    
    //Show result comment
    comment.textContent = resultComment;
    comment.style.color = "white";
    comment.style.background = "#369f39";
    comment.style.fontSize = "1.5em";
    comment.style.padding = "5px";

    
    //Show star-bonuses    
    for (let index = 0; index < resultPisteet; index++) {
        prize.innerHTML += starPicture;
        
    }
    
    resultDiv.appendChild(prize);
    resultDiv.appendChild(comment);
    

}

/**
 * 1. star-bonus 
 * 2. JS-tehtävä
 * 3. source of the pictures
 * style='display: block'
 */
 
 
    
