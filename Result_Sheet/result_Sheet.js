function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A+';
    }
    else if (marks >= 80) {
        return 'A';
    }
    else if (marks >= 70) {
        return 'B';
    }
    else if (marks >= 60) {
        return 'C';
    }
    else if (marks >= 50) {
        return 'D';
    }
    else {
        return 'F';
    }
}
function generateResultSheet(students) {
    console.log('Result Sheet:');
    console.log('--------------------------');
    console.log('Name\t\tGrade');
    console.log('--------------------------');
    students.forEach(student => {
        console.log(`${student.name}\t\t${calculateGrade(student.marks)}`);
    });
    console.log('--------------------------');
}
const students = [
    { name: 'Ali', marks: 85 },
    { name: 'umer', marks: 70 },
    { name: 'usman', marks: 95 },
    { name: 'ahmed', marks: 50 },
    { name: 'hassan', marks: 35 },
    { name: 'haris', marks: 35 },
];
generateResultSheet(students);
export {};
