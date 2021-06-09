import {instance} from "../instance";

export type LoginType = {
    avatar?: string
    created: Date
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: Date
    verified: boolean
    __v: number
    _id: string
}

export const loginAPI = {
    postLogin(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginType>(`auth/login`, {email, password, rememberMe})
    }
};