// IIFE -- Immediately Invoked Function Expression
(function(){
    function Start() {
    let student: objects.Student; 
    
    student = new objects.Student(21, "komaldeep", "300926834");
    student.saysHello();
    student.studies();
    }

    window.addEventListener("load", Start);
})();