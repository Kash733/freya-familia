const Questions = [
    {
        q: "Who is the captain of the Freya Familia.",
        a: [{text: "Allen Formel.", isCorrect: false},
            {text: "Ottar.", isCorrect: true},
            {text: "Hedin", isCorrect: false},
            {text: "Hogni", isCorrect: false},
           ]
    },
    {
        q: "Why was Freya so dangerous in the mortal world.",
        a: [{text: "because of her familia.", isCorrect: false},
            {text: "because of her charm.", isCorrect: true},
            {text: "because of her ailiancese.", isCorrect: false},
            {text: "because of her goddess abilities.", isCorrect: false},
           ]
    },
    {
        q: "What is Freya Goddess of _____.",
        a: [{text: "love, fertility.", isCorrect: true},
            {text: "war and harm.", isCorrect: false},
            {text: "beauty and grace.", isCorrect: false},
            {text: "Arcane and happiness.", isCorrect: false},
           ]
    },
    
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
