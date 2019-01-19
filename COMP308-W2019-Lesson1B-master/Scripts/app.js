// IIFE -- Immediately Invoked Function Expression
(function () {
    function Start() {
        var student;
        student = new objects.Student(21, "komaldeep", "300926834");
        student.saysHello();
        student.studies();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map