export class TaskModel{

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public whenToDo: Date,
        public groupType: string) { }
}