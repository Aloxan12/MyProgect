import React, {ChangeEvent, useState} from "react";
import SuperDoubleRange from "../c8-SuperDoubleRange/SuperDoubleRange";
import {getCardsPacksTC, setSearchAC} from "../../../bll/reducers/cardsPacks-reducer";
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from "../../../bll/store";


const Search = () => {
    // const [name, setName] = useState('')
    const min = useSelector<AppRootStateType, number>(state => state.packs.min)
    const max = useSelector<AppRootStateType, number>(state => state.packs.max)
    const [value1, setValue1] = useState(min)
    const [value2, setValue2] = useState(max)
    // const cardsPacks = useSelector<AppRootStateType, Array<CardsPacksType>>(state => state.packs.cardsPacks)
     const dispatch = useDispatch()
    const setValue = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
        dispatch(getCardsPacksTC())
    }

    const search =(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch(setSearchAC(e.currentTarget.value))
        dispatch(getCardsPacksTC())
    }
    // const newList = cardsPacks.filter(pack => {
    //     return pack.name.toLowerCase().includes(name.toLowerCase())
    // })

    return (
        <div>
            <input type={'text'}
                   placeholder='student name'
                   onChange={search}
            />
            <SuperDoubleRange value={[value1, value2]} onChangeRange={setValue}/>
            {/*<button>Search</button>*/}
        </div>
    )
}
export default Search

