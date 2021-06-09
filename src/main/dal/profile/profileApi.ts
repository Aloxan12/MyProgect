import {instance} from "../instance";

export type ProfileDataType = {
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

export const profileAPI = {
    getProfileData() {
        return instance.post<ProfileDataType>(`auth/me`, {})
    }
};