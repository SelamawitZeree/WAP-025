function createStudent(firstName, lastName, grades) {
    const student = Object.create({
        addGrade: function(score) {
            this.grades.push(score);
        },
        calculateAverage: function() {
            if (this.grades.length === 0) return 0;
            let total = 0;
            for (let i = 0; i < this.grades.length; i++) {
                total += this.grades[i];
            }
            return total / this.grades.length;
        }
    });

    student.firstName = firstName;
    student.lastName = lastName;
    student.grades = grades || [];

    return student;
}

const students = [
    createStudent('Emma', 'Watson', [85, 90, 88]),
    createStudent('Daniel', 'Radcliffe', [92, 87, 89]),
    createStudent('Rupert', 'Grint', [82, 85, 90]),
    createStudent('Tom', 'Felton', [88, 91, 86])
];

function calculateClassAverage(studentList) {
    let Total = 0;
    for (let i = 0; i < studentList.length; i++) {
        Total += studentList[i].calculateAverage();
    }
    return Total / studentList.length;
}

console.log("Average:", calculateClassAverage(students));