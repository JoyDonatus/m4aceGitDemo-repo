//Operators & Conditionals - Build a grade calculator that accepts scores and returns letter grades, handling invalid inputs using both if/else and switch statements
//let studentScore = prompt("Enter student's score (0-100):");
// convert the input to a number
let studentScore = 70
studentScore = Number(studentScore);

function calculateGrade(score) {
    if (isNaN(score) || score < 0 || score > 100) {
        return "Please enter a number between 0 and 100.";
    } else {
        switch (true) {
            case (score >= 70):
                return "A";
            case (score >= 60):
                return "B";
            case (score >= 50):
                return "C";
            case (score >= 40):
                return "D";
        }
    }
}
console.log(calculateGrade(studentScore));