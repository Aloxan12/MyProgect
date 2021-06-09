import {instance} from "../instance";

export const cardsAPI = {
    getCards(id: string | undefined) {
        return instance.get(`cards/card?cardsPack_id=${id}`)
    },
}