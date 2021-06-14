import {instance} from "../instance";

export type ProfileDataType = {
    created: Date
    avatar?: string
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
    error?: string;
}
export type ChangeDataProfile = {
    updatedUser: ProfileDataType
    error?: string
}

export const profileAPI = {
    authProfileData() {
        return instance.post<ProfileDataType>(`auth/me`, {})
    },
    changeAvatarProfile(avatar?: string) {
        return instance.put<ChangeDataProfile>(`auth/me`, {avatar})
    },
    changeNameProfile(name: string) {
        return instance.put<ChangeDataProfile>(`auth/me`, {name})
    }
};