import {instance} from "../instance";


export type forgotPasswordType = {
    info: string
    error: string
}

export const forgotAPI = {
    postForgotPassword(email: string, from: string, message: string) {
        return instance.post<forgotPasswordType>(`auth/forgot`, {email, from, message})
    }
};