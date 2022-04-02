export class TaskModel{

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public when: Date,
        public group: string) { }
}