//Check question1
//document.getElementById("check1").onclick = checkAnswer();
//let answerInput1 = Number(document.getElementById("answer1").value);

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
        //In case, Answer1 is right, write comment
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
    
        comment1.textContent = "Vastaus " + answerInput1 + "on väärä. Oikein vastaus on 11.";
        comment1.style.color = "red";
        comment1.style.fontSize = "2em";
        question1.append(comment1);




    }
}
