import React from 'react';
import styles from './User.module.css';
import defaultAvatar from "../../../assets/images/default-avatar.jpg";
import {NavLink} from "react-router-dom";

const User = ({user, follow, unFollow, followingInProgress}) => {

    return <div className={styles.userItem}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small ? user.photos.small : defaultAvatar} alt="avatar"/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            user.followed ?
                                <button
                                    disabled={followingInProgress.isFetching && user.id === followingInProgress.userId}
                                    onClick={() => {
                                        unFollow(user.id);
                                    }}
                                >UnFollow</button>
                                :
                                <button
                                    disabled={followingInProgress.isFetching && user.id === followingInProgress.userId}
                                    onClick={() => {
                                        follow(user.id);
                                    }}
                                >Follow</button>
                        }
                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
    </div>
};

export default User;