import { InputLabel } from "@mui/material";
import type { ReactNode } from "react";

function LabeledCustomTextField(props: { label: string; id: string; children: ReactNode; className?: string; fontSize?: number }) {
    const { label, id, children, className, fontSize } = props;
    return (
        <div className={className} >
            <InputLabel htmlFor={id} sx={{ fontSize: fontSize }}>{label}</InputLabel>
            {children}
        </div>
    );
}

export default LabeledCustomTextField;