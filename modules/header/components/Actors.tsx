import type { FunctionComponent } from "react";
import { Avatar, styled, Typography } from "@mui/material";

const ActorsStyle = styled("div")(() => ({
    display: "flex",
    flexWrap: "wrap",
    marginTop: "1rem",
    justifyContent: "center",
    textAlign: "center",
}));

const PersonalInfo = styled("div")<{bordered: boolean}>(({bordered}) => ({
    flexDirection: "column",
    padding: "1rem 0.8rem 0 0.8rem",
    borderRight: bordered ? "1px solid rgba(0, 0, 0, 0.28)" : "none"
}));

const Actors: FunctionComponent = () => {
    const item = [1, 2, 3, 4, 5, 6];
    return (
        <ActorsStyle>
            {
                !!item && item.map((item, index) => {
                    return (
                        <PersonalInfo key={item} bordered={index == 0}>
                            <Avatar />
                            <div style={{ marginTop: "0.7rem" }}>
                                <Typography variant="h5" sx={{ fontSize: "1rem" }}>Asghar Farhadi</Typography>
                                <Typography variant="h5" sx={{ fontSize: "1rem", fontWeight: 400 }}>director</Typography>
                            </div>
                        </PersonalInfo>
                    )
                })
            }
        </ActorsStyle>
    )
}
export default Actors;