import {instance} from "../instance";

export type LogOutDataType = {
    info: string
}

export const logOutAPI = {
    logOutOfProfile() {
        return instance.delete<LogOutDataType>(`auth/me`, {})
    }
};