// Constructor Function
function Student(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}

// Methods added to prototype
Student.prototype.addGrade = function(newGrade) {
    this.grades.push(newGrade);
};

Student.prototype.computeAverage = function() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
};

// Create students
const students = [
    new Student('Sophia', 'Martinez', [92, 88, 95]),
    new Student('Liam', 'Chen', [85, 90, 87]),
    new Student('Olivia', 'Kim', [91, 89, 93]),
    new Student('Noah', 'Patel', [84, 86, 88])
];

// Calculate class average
function getClassAverage(studentList) {
    const total = studentList.reduce((sum, student) => {
        return sum + student.computeAverage();
    }, 0);
    return total / studentList.length;
}

console.log("Average:", getClassAverage(students));