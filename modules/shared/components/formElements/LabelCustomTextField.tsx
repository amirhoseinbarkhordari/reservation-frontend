import { InputLabel, styled } from "@mui/material";
import type { ReactNode } from "react";

function LabeledCustomTextField(props: { label: string; id: string; children: ReactNode; className?: string; }) {
    const { label, id, children, className } = props;
    return (
        <div className={className} >
            <InputLabel htmlFor={id}>{label}</InputLabel>
            {children}
        </div>
    );
}

export default LabeledCustomTextField;