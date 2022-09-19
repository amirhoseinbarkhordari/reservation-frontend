import type {FunctionComponent} from "react";
import TutorialVideoCover from "../../../__MOCK__/images/tutorial-video-cover.png"
import ProfilePic from "../../../__MOCK__/images/profile-picture.png"
import {Container, styled, Typography} from "@mui/material";
import RowBasedAvatar from "./RowBasedAvatar";
import {useTranslations} from "use-intl";

const Video = styled("video")({
    borderRadius: 10
})

const TutorialVideo: FunctionComponent = () => {
    const _ = useTranslations('about');
    return (<>
        <Container maxWidth="md">
            <Typography variant="h5" sx={{ fontSize: "2.4rem", margin: "3rem 0" }}>
                {_('videoTitle')}
            </Typography>
            <Video width="100%" poster={TutorialVideoCover.src} controls controlsList="nodownload">
                <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"/>
                <source src="https://www.w3schools.com/html/movie.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
            </Video>
        </Container>
        <Container maxWidth="md" sx={{display: "block", mt: 2, px: "5rem"}}>
            <RowBasedAvatar avatarProps={{
                src: ProfilePic.src
            }} title={_('avatars.ramzali.name')} description={_('avatars.ramzali.role')} size={60}/>
        </Container>
        </>)
}

export default TutorialVideo;