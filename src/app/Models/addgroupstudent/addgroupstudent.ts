import { publishFacade } from "@angular/compiler";
import { Student } from "../student/student";
import { Groupstudent } from "../groupstudent/groupstudent";

export class Addgroupstudent {
    constructor(
        public id: number,

        public student: Student,

        public groupStudent: Groupstudent,
    ){}
}