import { instance } from "../instance"

type ResponseType = {
    addedUser: {
        created: string
        email: string
        isAdmin: boolean
        name: string
        publicCardPacksCount: number
        rememberMe: boolean
        updated: string
        verified: boolean
        __v: number
        _id: string
    }
    error?: string
}

export const registerAPI = {
    setRegisterData(email: string, password: string) {
        return instance.post<ResponseType>('auth/register', {email, password})
    }
}