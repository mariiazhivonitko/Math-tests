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
 * Returns comment for right answer
 */
function rightAnswer() {
    let comment = document.createElement("p");
    let bonus = document.createElement("img");
    comment.textContent = "Mahtava! Vasaus on oikein. Saat";
    comment.style.color = "#369f39";
    comment.style.fontSize = "2em";

    //Add bonus star-picture
    //bonus.style.scr = "assets/answers/Star.svg";
    return comment;
}



function checkAnswer1() {
    let answerInput1 = Number(document.getElementById("answer1").value);
    let image1 = document.getElementById("flower_img");
    let answerBox1 = document.getElementById("answerBox1");
    let question1 =document.getElementById("question1");
    let comment1 = document.createElement("p");
    let bonus = document.createElement("img");
    // Show the solution 1, when the button was pressed. 
    // Hide answer-box
    image1.src = "assets/answers/flowers_answer.svg";
    answerBox1.style.display = "none";

    if(answerInput1 == 11){
        //In case, Answer1 is right, write comment and add star-bonus.
        comment1.textContent = "Mahtava! Vasaus on oikein. Saat";
        comment1.style.color = "#369f39";
        comment1.style.fontSize = "2em";
        question1.append(comment1);
        

        //Add bonus star-picture
        bonus.style.scr = "assets/answers/Star.svg";
        question1.append(bonus);
    }else{
        //In case, Answer1 is wrong, write comment and change border color.
        question1.style.borderColor = "red";
    
        comment1.textContent = "Vastaus " + answerInput1 + " on väärä. Oikein vastaus on 11.";
        comment1.style.color = "red";
        comment1.style.fontSize = "2em";
        question1.append(comment1);
    }
}



function checkAnswer2(){
    let answerRadioButton = checkRadioButton("square");

    let image2 = document.getElementById("square_img");
    let answerBox2 = document.getElementById("answerBox2");
    let question2 =document.getElementById("question2");

    image2.style.src = "assets/answers/square_answer.svg";
    answerBox2.style.display = "none";
    
    let comment2 = rightAnswer();
    question2.appendChild(comment2);
   


}
function checkAnswer4(){
    let answer = checkRadioButton("tetris");

    console.log(answer);


}

    //Check if the answer is right
    //if (radioButtonAnswer == "D") {

    
