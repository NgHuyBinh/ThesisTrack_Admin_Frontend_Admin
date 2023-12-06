export class Semester {
    constructor(
        public id: number,

        public schoolYear: string,

        public semester: string,

        public startData: Date,

        public endDate: Date,

        public rtStartDate: Date,

        public rtEndDay: Date,
    ){}
}
