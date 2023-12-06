import { publishFacade } from "@angular/compiler";
import { Teacher } from "../teacher/teacher";

export class Groupstudent {
    constructor(
        public id: number,

        public code: string,

        public teacher: Teacher,

        public note: String,
    ){}
}
