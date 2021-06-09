import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    error?: string|null
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        error, red, className,
        ...restProps
    }
) => {

    return (
        <button
            className={className}
            {...restProps}
        />
    );
}

export default SuperButton;