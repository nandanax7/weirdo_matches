// Initialize score, question count, and maximum possible score
let score = 0;
let questionCount = 5; // Total number of questions
const maxScore = questionCount * 10; // Maximum score is 30 (3 questions * 10 points each)

// Function to add score, update the meter, and check if quiz is complete
function addScore(points) {
    score += points;
    updateMeter();

    // Disable the buttons for the current question to prevent multiple clicks
    event.target.parentNode.querySelectorAll("button").forEach(button => button.disabled = true);
}

// Function to update the weirdness meter
function updateMeter() {
    const meterBar = document.getElementById('meter-bar');
    let percentage = (score / maxScore) * 100;
    meterBar.style.width = `${percentage}%`;
}

// Function to calculate and display weirdness level
function calculateWeirdness() {
    let resultText = "";

    // Determine weirdness level and associated famous person
    if (score >= 26) {
        resultText = "You're extraordinarily weird! You match with masao gunji,weird hello kitty collector";
    } else if (score >= 21) {
        resultText = "You're super weird! You match with sumiko iwamura, weird dj artist ";
    } else if (score >= 16) {
        resultText = "You're pretty weird! You match mr cherry, weird record maker";
    } else if (score >= 11) {
        resultText = "You're somewhat weird! You match with lily pamy, weird .";
    } else if (score >= 6) {
        resultText = "You're a little weird! You match with romio rogan, weird collectoion.";
    } else {
        resultText = "You're pretty normal! ";
    }
    
    document.getElementById('result').innerHTML = resultText;
}
function displayResult(score) {
    const resultDiv = document.getElementById("result");
    let message = "You have similarities with: ";

    // Calculate meter width
    const meterBar = document.querySelector('.meter-bar');
    const meterWidth = (score / 5) * 100; // Assuming 5 is the max score
    meterBar.style.width = `${meterWidth}%`; // Set the width of the meter bar

    // Find matched characters
    const matchedCharacters = characters.filter(character => score >= character.minScore && score <= character.maxScore);

    if (matchedCharacters.length > 0) {
        message += matchedCharacters.map(character => character.name).join(", ") + "!";
    } else {
        message = "You're wonderfully unique in your own way!";
    }

    resultDiv.textContent = message;
}
