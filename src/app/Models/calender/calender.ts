import { publishFacade } from "@angular/compiler";

export class Calender {
    constructor(
        public id: number,

        public room: string,

        public week: number,

        public day: Date,

        public period: string,

        public note: string,

    ){}
}
