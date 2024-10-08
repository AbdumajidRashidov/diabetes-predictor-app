import PropTypes from "prop-types";
// material
import { Grid, Stack } from "@material-ui/core";
//
import ProfileAbout from "./ProfileAbout";
import ProfilePostCard from "./ProfilePostCard";
import ProfilePostInput from "./ProfilePostInput";
import ProfileFollowInfo from "./ProfileFollowInfo";
import ProfileSocialInfo from "./ProfileSocialInfo";
import ProfileHealthHistory from "./ProfileHistory";

// ----------------------------------------------------------------------

Profile.propTypes = {
  myProfile: PropTypes.object,
  posts: PropTypes.array,
};

export default function Profile({ myProfile, profileHealthHistory }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <ProfileAbout profile={myProfile} />
        </Stack>
      </Grid>

      <Grid item xs={12} md={8}>
        <Stack spacing={3}>
          {/* <ProfilePostInput />
          {posts?.map((post) => (
            <ProfilePostCard key={post.id} post={post} />
          ))} */}
          <ProfileHealthHistory profileHealthHistory={profileHealthHistory} />
        </Stack>
      </Grid>
    </Grid>
  );
}
