const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGrades = (data, passingGrade) => data.filter( item => item >= passingGrade);

console.log(passingGrades(grades, 70));