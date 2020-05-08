import React from 'react';
import profileInfoStyles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader isFetching={true}/>;
    }
    return (
        <div>
            <div>

            </div>
            <div className={profileInfoStyles.descriptionBlock}>
                <img src={props.userProfile.photos.large} />
                <ProfileStatusWithHooks
                    status={props.status}
                    userId={props.userProfile.userId}
                    updateProfileStatus={props.updateProfileStatus}
                />
                <div>
                    {props.userProfile.aboutMe}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;