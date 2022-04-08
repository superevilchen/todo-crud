import { TaskModel } from "../components/TaskModel";

// Step 1 - Create AppState and manage the collection once and in a centralize place
export class TaskAppState {
    public tasks: TaskModel[] = [];
}

// Step 2 - Define all possible action for your application state
export enum TasksActionType {
    TasksDownloaded = "TasksDownloaded",
    TaskAdded = "TaskAdded",
    TaskUpdated = "TaskUpdated",
    TaskDeleted = "TaskDeleted"
}

// Step 3 - Define Action Interface to describe actionAction & payload if needed
export interface TaskAction {
    type: TasksActionType;
    payload?: any;
}

// Step 4 - Export Action Creators functions that gets payload and return relevant Action
export function tasksDownloadedAction(tasks: TaskModel[]): TaskAction {
    return { type: TasksActionType.TasksDownloaded, payload: tasks };
}

export function tasksAddedAction(task: TaskModel): TaskAction {
    return { type: TasksActionType.TaskAdded, payload: task };
}

export function tasksUpdatedAction(task: TaskModel): TaskAction {
    return { type: TasksActionType.TaskUpdated, payload: task };
}

export function tasksDeletedAction(id:number): TaskAction {
    return { type: TasksActionType.TaskDeleted, payload: id };
}

// Step 5 - Reducer function perform the required action
export function tasksReducer(currentState: TaskAppState = new TaskAppState(),action:TaskAction): TaskAppState{
    // const newState = new CatsAppState();
    // newState.cats = currentState.cats;

    const newState = {...currentState} //Spread Operator
    switch(action.type){
        case TasksActionType.TasksDownloaded:
            newState.tasks = action.payload;
            break;
        case TasksActionType.TaskAdded:
            newState.tasks.push(action.payload);
            break;
        case TasksActionType.TaskUpdated:
         const idx = newState.tasks.findIndex(t => t.id === action.payload.id);
            newState.tasks[idx] = action.payload; 
            break
            case TasksActionType.TaskDeleted:
                newState.tasks = newState.tasks.filter(t=>t.id !== action.payload);
                break
    }
    return newState;
    
}