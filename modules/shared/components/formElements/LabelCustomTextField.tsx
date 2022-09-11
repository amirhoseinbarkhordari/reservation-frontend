import { InputLabel, styled } from "@mui/material";
import type { ReactNode } from "react";

const CustomInputLabel = styled(InputLabel)(() => ({
    margin: "0 2rem 0 0",
    alignSelf: "center",
    overflow: "unset"
}));

function LabeledCustomTextField(props: { label: string; id: string; children: ReactNode; className?: string; isNumber?: boolean }) {
    const { label, id, children, className, isNumber } = props;
    if (isNumber) {
        return (
            <div className={className} style={{ display: "flex", justifyContent: "center" }}>
                <CustomInputLabel htmlFor={id}>{label}</CustomInputLabel>
                {children}
            </div>
        )
    }
    return (
        <div className={className} >
            <InputLabel htmlFor={id}>{label}</InputLabel>
            {children}
        </div>
    );
}

export default LabeledCustomTextField;