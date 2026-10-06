function calculateGrade() {
    let quiz = Number(document.getElementById("quiz").value);
    let exam = Number(document.getElementById("exam").value);
    let mco = Number(document.getElementById("mco").value);

    let grade = (quiz * 0.20) + (exam * 0.30) + (mco * 0.50);

    document.getElementById("result").innerHTML =
        "Final Grade: " + grade;
}
