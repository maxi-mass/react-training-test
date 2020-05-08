import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo 
                status={props.status}
                userProfile={props.userProfile}
                updateProfileStatus={props.updateProfileStatus}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;