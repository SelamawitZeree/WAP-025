//Question 3: Fix the code below using wrapper, bind, call, or apply.

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        });
    }
};
group.showList();