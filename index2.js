//PART2
// Create an array named students containing at least three student objects
var students = [
    {
        name: 'ARBAB ALI',
        grades: [85, 90, 78, 92],
    },
    {
        name: 'VANDANA',
        grades: [95, 88, 91, 89],
    },
    {
        name: 'Anmol',
        grades: [88, 92, 89, 90],
    },
];
// Implement a function named calculateAverageGrade
function calculateAverageGrade(grades) {
    var sum = grades.reduce(function (acc, current) { return acc + current; }, 0);
    return sum / grades.length;
}
// Display each student's name and average grade
students.forEach(function (student) {
    var averageGrade = calculateAverageGrade(student.grades);
    console.log("Student Name: ".concat(student.name, ", Average Grade: ").concat(averageGrade));
});
