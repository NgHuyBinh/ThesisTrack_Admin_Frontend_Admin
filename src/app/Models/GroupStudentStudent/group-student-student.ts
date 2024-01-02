import { Groupstudent } from "../groupstudent/groupstudent";
import { Student } from "../student/student";

export class GroupStudentStudent {
    constructor(
        public id: number,
        public groupStudent: Groupstudent,
        public student: Student
    ){

    }
}