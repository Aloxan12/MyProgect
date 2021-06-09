import {instance} from "../instance";

export const setPasswordAPI = {
    setNewPassword(password: string, resetPasswordToken: string) {
        return instance.post('auth/set-new-password', {password, resetPasswordToken})
    }
}