import type {FunctionComponent} from "react";
import type {AvatarProps} from "@mui/material";
import {Avatar, styled, Typography} from "@mui/material";

const Container = styled("div")({
    display: "flex",
    alignItems: "center"
});

const MarginedDiv = styled("div")({
    marginLeft: "2rem"
})

export type RowBasedAvatarPropTypes = {avatarProps: AvatarProps, title: string, size: number, description?: string}

const RowBasedAvatar: FunctionComponent<RowBasedAvatarPropTypes> = (props) => {
    return (<Container>
        <Avatar {...props.avatarProps} sx={{width: props.size, height: props.size}}/>
        <MarginedDiv>
            <Typography color="text.primary" variant="h2" sx={{fontSize: '1.5rem'}}>{props.title}</Typography>
            {!!props.description && (<Typography color="text.secondary" sx={{fontSize: '1.5rem'}}>{props.description}</Typography>)}
        </MarginedDiv>
    </Container>)
}

export default RowBasedAvatar;