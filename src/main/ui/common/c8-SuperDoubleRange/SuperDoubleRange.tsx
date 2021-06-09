import React, {ChangeEvent} from 'react'
import {Slider} from "@material-ui/core";
import s from './SuperRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value
    }
) => {
    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {

        onChangeRange && onChangeRange(newValue as [number, number]);
    };

    return (
        <span className={s.range}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                step={5}
            />
        </span>
    )
}

export default SuperDoubleRange
