import type { IconProps } from "../../types/IconProps";
import type { ReactElement } from "react";
import React from "react";
import { SvgIcon } from "@mui/material";

const GiftCardIcon: React.FunctionComponent<IconProps> = (props): ReactElement => {
    const color = props.color;
    return (
        <SvgIcon
            htmlColor="transparent"
            style={{ fontSize: `${props.fontSize}rem`, height: "4rem" }}
            width="47"
            height="32"
            fill="none"
            viewBox="0 0 47 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M46.2108 7.4912V5.05431C46.2108 2.26289 43.9479 0 41.1565 0H5.05431C2.26289 0 0 2.26289 0 5.05431V7.4912C0 7.7404 0.202082 7.94248 0.451277 7.94248H45.7595C46.0087 7.94248 46.2108 7.7404 46.2108 7.4912Z" fill={color} />
            <path d="M0 11.2814V26.715C0 29.5065 2.26289 31.7693 5.05431 31.7693H41.1565C43.9479 31.7693 46.2108 29.5065 46.2108 26.715V11.2814C46.2108 11.0322 46.0087 10.8301 45.7595 10.8301H0.451277C0.202082 10.8301 0 11.0322 0 11.2814ZM11.5527 23.1048C11.5527 23.9023 10.9061 24.5489 10.1086 24.5489H8.66453C7.86703 24.5489 7.22044 23.9023 7.22044 23.1048V21.6607C7.22044 20.8632 7.86703 20.2166 8.66453 20.2166H10.1086C10.9061 20.2166 11.5527 20.8632 11.5527 21.6607V23.1048Z" fill={color} />
        </SvgIcon>
    );
};

export default GiftCardIcon;
