import type { IconProps } from "../../types/IconProps";
import type { ReactElement } from "react";
import React from "react";
import { SvgIcon } from "@mui/material";

const CircleChartIcon: React.FunctionComponent<IconProps> = (props): ReactElement => {
    const color = props.color;
    return (
        <SvgIcon
            htmlColor="transparent"
            style={{ fontSize: `${props.fontSize}rem`, height: "4rem" }}
            width="42"
            height="42"
            fill="none"
            viewBox="0 0 42 42"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M23.7139 17.9589H41.5897C40.9607 12.3807 37.0304 1.92349 23.7139 0V17.9589Z" fill={color} />
            <path d="M18.6213 2.28711C8.26515 2.88301 0 11.5144 0 22.0387C0 32.9286 8.81662 41.758 19.6732 41.758C30.1481 41.758 38.7229 33.5759 39.3139 23.0527H18.6213V2.28711Z" fill={color} />
        </SvgIcon>
    );
};

export default CircleChartIcon;
