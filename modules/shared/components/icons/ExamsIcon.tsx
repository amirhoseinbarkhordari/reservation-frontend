import type { IconProps } from "../../types/IconProps";
import type { ReactElement } from "react";
import React from "react";
import { SvgIcon } from "@mui/material";

const ExamIcon: React.FunctionComponent<IconProps> = (props): ReactElement => {
    const color = props.color;
    return (
        <SvgIcon
            htmlColor="transparent"
            style={{ fontSize: `${props.fontSize}rem`, height: "4rem" }}
            width="38"
            height="48"
            fill="none"
            viewBox="0 0 38 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15.0567 19.7617L16.5186 23.5258H13.5947L15.0567 19.7617Z" fill={color} />
            <path d="M32.6999 0H5.81364C4.47664 0 3.19439 0.531123 2.24899 1.47653C1.30358 2.42193 0.772461 3.70417 0.772461 5.04118V42.0098C0.772461 43.3468 1.30358 44.6291 2.24899 45.5745C3.19439 46.5199 4.47664 47.051 5.81364 47.051H24.298V38.649C24.298 37.312 24.8291 36.0298 25.7745 35.0844C26.7199 34.139 28.0021 33.6079 29.3391 33.6079H37.7411V5.04118C37.7411 3.70417 37.21 2.42193 36.2646 1.47653C35.3192 0.531123 34.0369 0 32.6999 0ZM21.5421 31.8098C21.3504 31.8892 21.1447 31.9293 20.9372 31.9275C20.5987 31.9265 20.2684 31.8233 19.9895 31.6314C19.7107 31.4395 19.4963 31.1678 19.3744 30.852L17.8284 26.8863H12.2832L10.7372 30.852C10.67 31.0732 10.5578 31.2781 10.4078 31.454C10.2577 31.6298 10.073 31.7728 9.86516 31.8741C9.65732 31.9753 9.43083 32.0325 9.19986 32.0422C8.96889 32.0519 8.73841 32.0138 8.52283 31.9304C8.30724 31.8469 8.11119 31.7199 7.94695 31.5572C7.7827 31.3945 7.65378 31.1997 7.56826 30.9849C7.48274 30.7702 7.44245 30.5401 7.44992 30.309C7.45739 30.078 7.51245 29.8509 7.61166 29.6421L13.493 14.5186C13.6169 14.2052 13.8322 13.9362 14.1109 13.7467C14.3895 13.5572 14.7188 13.4558 15.0558 13.4558C15.3928 13.4558 15.7221 13.5572 16.0007 13.7467C16.2794 13.9362 16.4947 14.2052 16.6186 14.5186L20.5171 24.601L22.4999 29.6421C22.6591 30.0567 22.6477 30.5174 22.4682 30.9236C22.2888 31.3298 21.9558 31.6484 21.5421 31.8098ZM29.3391 16.8039H27.6587V18.4843C27.6587 18.93 27.4817 19.3574 27.1666 19.6725C26.8514 19.9877 26.424 20.1647 25.9784 20.1647C25.5327 20.1647 25.1053 19.9877 24.7901 19.6725C24.475 19.3574 24.298 18.93 24.298 18.4843V16.8039H22.6176C22.1719 16.8039 21.7445 16.6269 21.4293 16.3118C21.1142 15.9966 20.9372 15.5692 20.9372 15.1235C20.9372 14.6779 21.1142 14.2505 21.4293 13.9353C21.7445 13.6202 22.1719 13.4431 22.6176 13.4431H24.298V11.7627C24.298 11.3171 24.475 10.8897 24.7901 10.5745C25.1053 10.2594 25.5327 10.0824 25.9784 10.0824C26.424 10.0824 26.8514 10.2594 27.1666 10.5745C27.4817 10.8897 27.6587 11.3171 27.6587 11.7627V13.4431H29.3391C29.7848 13.4431 30.2122 13.6202 30.5274 13.9353C30.8425 14.2505 31.0195 14.6779 31.0195 15.1235C31.0195 15.5692 30.8425 15.9966 30.5274 16.3118C30.2122 16.6269 29.7848 16.8039 29.3391 16.8039ZM27.6587 38.649V46.0764L36.7665 36.9686H29.3391C28.8935 36.9686 28.4661 37.1457 28.1509 37.4608C27.8358 37.776 27.6587 38.2034 27.6587 38.649Z" fill={color} />
        </SvgIcon>
    );
};

export default ExamIcon;
