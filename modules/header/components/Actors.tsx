import { Avatar, ListItem, styled, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

const ActorsStyle = styled("div")(() => ({
    display: "flex",
    flexWrap: "wrap",
    marginTop: "1rem",
    justifyContent: "center"
}));

const PersonalInfo = styled("div")(() => ({
    flexDirection: "column",
    textAlign: "center",
    padding: "1rem 0.8rem 0 0.8rem",
}));

const Actors: FunctionComponent = () => {
    const item = [1, 2, 3, 4, 5];
    return (
        <ActorsStyle>
            <PersonalInfo key={0} style={{ borderRight: "1px solid rgba(0, 0, 0, 0.28)" }}>
                <Avatar />
                <div style={{ marginTop: "0.7rem" }}>
                    <Typography variant="h5">Asghar Farhadi</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 400 }}>director</Typography>
                </div>
            </PersonalInfo>
            {
                !!item && item.map((item) => {
                    return (
                        <PersonalInfo key={item}>
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