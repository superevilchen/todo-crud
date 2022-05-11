import {Notyf} from 'notyf'

// edit here - success status
export enum SccMsg{
    ADDED_TASK = 'Added task successfully',
    UPDATED_TASK = 'Updated task successfully',
    DELETED_TASK = 'Deleted task successfully',
    GOT_TASKS = 'got tasks successfully',
    LOGIN_SUCCESS = 'Login successful',
    REGISTRATION_SUCCESS = 'Registration failed',
    LOGOUT_SUCCESS = 'Logout successful',
}

// edit here - fail status
export enum ErrMsg{
    NETWORK_ERROR = "matan bo lechol",
    FAILED_ADDING = "couldnt add your task",
    LOGIN_FAILED = "login failed",
    REGISTRATION_FAILED = "registration failed",
    LOGOUT_FAILED = "logout failed",
    LOGIN_NEEDED = "Please log in",
    DELETE_FAILED = "delete failed",
    UPDATE_FAILED = "update failed",
    
}
class Notify {

    private notification = new Notyf({ duration: 4000, position: { x: "left", y: "bottom" } });
    public success(message: string) {
        this.notification.success(message);
    }

    public error(err: any) {
        const msg = this.extractMsg(err);
        this.notification.error(msg);
    }

    private extractMsg(err: any): string {

        if (typeof err === 'string') {
            return err;
        }

        if (typeof err?.response?.data?.description === 'string') {//Todo's App exact error
            return err?.response?.data?.description;
        }

        if (typeof err?.response?.data === 'string') { //Backend exact error
            return err?.response?.data;
        }

        if (Array.isArray(err?.response?.data)) { // Backend exact error list
            return err?.response?.data[0];
        }


        // Must be last
        if (typeof err?.message === 'string') {
            return err.message;
        }


        return "Operation failed, please try again";


    }
}
const notify = new Notify();

export default notify;