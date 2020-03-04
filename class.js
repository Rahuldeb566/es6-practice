class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa School";
    }
}

const student1 = new student(20, "Kabbo");
const student2 = new student(23, "Rahul");

console.log(student1.name, student2.name);