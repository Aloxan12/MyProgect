import React, {ChangeEvent, FormEvent, useState} from "react";
import SuperDoubleRange from "../c8-SuperDoubleRange/SuperDoubleRange";
import {CardsPacksType} from "../../../bll/reducers/cardsPacks-reducer";
import {connect, useDispatch, useSelector} from 'react-redux'
import {Dispatch} from "redux";
import {AppRootStateType} from "../../../bll/store";

type CardsPacksItemType = {
    _id?: string
    name: string
    cardsCount: number
}
const Item = (props: CardsPacksItemType) => {
    return <div>
        {props.name}
        {props.cardsCount}
    </div>
}


type SearchType = {
    cardsPacks: CardsPacksType[]
}

const Search = () => {
    const [name, setName] = useState('')
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(105)
    const cardsPacks = useSelector<AppRootStateType, Array<CardsPacksType>>(state => state.packs.cardsPacks)

    const setValue = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    const newList = cardsPacks.filter(pack => {
        return pack.name.toLowerCase().includes(name.toLowerCase())
    })

    return (
        <div>
            <input type={'text'}
                   placeholder='student name'
                   onChange={(e) => {
                       setName(e.target.value)
                   }}
            />
            <SuperDoubleRange value={[value1, value2]} onChangeRange={setValue}/>
            <button>Search</button>
            {newList}
        </div>
    )
}
export default Search

// const Search = () => {
//     const [value, setValue] = useState('')
//
//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setValue(e.target.value)
//     }
//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         searchPacks(value)
//     }
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type={'text'}
//                        placeholder='student name'
//                        onChange={handleChange}
//                 />
//             </form>
//             <button>Search</button>
//         </div>
//     )
// }
//
// const searchPacks = (text: string) => (dispatch: Dispatch) => {
//     dispatch({type: 'CARDS/SEARCH/PACKS', payload: text} as const)
// }
//
// export default connect(null, {searchPacks})(Search)
