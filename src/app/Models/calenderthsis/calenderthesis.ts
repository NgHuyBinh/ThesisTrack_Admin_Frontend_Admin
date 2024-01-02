import { Calender } from "../calender/calender";
import { Groupstudent } from "../groupstudent/groupstudent";

export class Calenderthesis {
    constructor(
        public id: number,
        public calender: Calender,
        public groupStudent: Groupstudent,
    ){}
}
