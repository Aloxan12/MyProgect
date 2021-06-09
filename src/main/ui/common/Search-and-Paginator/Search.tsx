import React, {useState} from "react";
import SuperDoubleRange from "../c8-SuperDoubleRange/SuperDoubleRange";
import {CardsPacksType} from "../../../bll/reducers/cardsPacks-reducer";

type CardsPacksItemType = {
    _id?: string
    name: string
    cardsCount: number
}
const Item = (props: CardsPacksItemType)=>{
    return <div>
        {props.name}
        {props.cardsCount}
    </div>
}


type SearchType = {
    cardsPacks: CardsPacksType[]
}

const Search =(props: SearchType)=>{
    const [name, setName] = useState('')
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(105)
    const [students, setStudents] = useState([
        {id: 1, name:"Vova", age: 20},
        {id: 2, name:"Dima", age: 62},
        {id: 3, name:"Alex", age: 41},
        {id: 4, name:"Mike", age: 13},
    ])

    const filteredName = props.cardsPacks.filter(pack => {
        return pack.name.toLowerCase().includes(name.toLowerCase())
    })

    const setValue = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    // const searchAge =()=>{
    //     const filterAge = filteredName.filter(s=> s.age>value1 && s.age < value2)
    //     setStudents(filterAge)
    // }

    return(
        <div>
            <input type={'text'}
                   placeholder='student name'
                   onChange={(e)=>{setName(e.target.value)}}
            />
            <SuperDoubleRange value={[value1, value2]} onChangeRange={setValue} />
            <button>Search</button>
            {
                filteredName.map((s, index) =><Item key={s._id} name={s.name} cardsCount={s.cardsCount}/>)
            }
        </div>
    )
}

export default Search