import { InputAdornment, TextField, TextFieldProps, Typography } from "@mui/material";
import { ChangeEvent, ChangeEventHandler, FunctionComponent, ReactElement } from "react";
import { useState } from "react";

type CustomTextFieldProps = TextFieldProps & {
    value?: string;
};

const CustomTextField: FunctionComponent<CustomTextFieldProps> = ({ value = "", ...props }): ReactElement => {
    const [input, setInput] = useState<string>(value);

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <TextField
            {...props}
            value={input}
            onChange={changeHandler}
        />
    );
};

export default CustomTextField;
