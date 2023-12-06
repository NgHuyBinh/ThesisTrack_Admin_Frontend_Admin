import { Faculty } from "../faculty/faculty";

export class Teacher {
   
    constructor(
        public id: number,
        public numberTeacher: String,
        public name: string,
        public adress: string,
        public email: string,
        public phone: string,
        public major: string,
        public birthday: Date,
        public faculty: Faculty,
        public gender: number,
    ){}

}
