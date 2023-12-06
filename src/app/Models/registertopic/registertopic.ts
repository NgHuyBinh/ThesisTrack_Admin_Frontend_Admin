import { Semester } from "../semester/semester";
import { Student } from "../student/student";
import { Topic } from "../topic/topic";

export class RegisterTopic {
  constructor(
    public id: number,

    public student: Student,

    public topic: Topic,

    public semester: Semester,
    
    public topicName: string,
    public status: number,
    public reason: string,
  ) {}
}
