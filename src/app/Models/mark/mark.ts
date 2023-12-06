import { publishFacade } from "@angular/compiler";
import { Teacher } from "../teacher/teacher";
import { Student } from "../student/student";
import { Semester } from "../semester/semester";
import { Time } from "@angular/common";

export class Mark {
    constructor(
        public id: number,

        public teacher: Teacher,

        public student: Student,

        public semester: Semester,

        public startTime: Time,

        public sendDate: Date,

        public endTime: Time,

        public day: Date,

        public mark11: number,
        public note11: string,

        public mark12: number, 
        public note12: string,

        public mark13: number,
        public note13: string,

        public mark14: number,
        public note14: string,

        public mark15: number,
        public note15: string,

        public mark2: number,
        public note2: string,

        public mark21: number,
        public note21: string,

        public mark22: number,
        public note22: string,

        public mark23: number,
        public note23: string,

        public sumMark: number,

    ) { }
}
