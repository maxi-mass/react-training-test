import React from "react";
import {profileAPI} from "../../../api/api";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        currentStatusText: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deActivateEditMode = (event) => {
        this.setState({
            editMode: false
        });
        this.props.updateProfileStatus(this.state.currentStatusText);    
    };

    enterPress = (event) => {
        if(event.charCode === 13) {
            this.setState({
                editMode: false
            });
            this.props.updateProfileStatus(this.state.currentStatusText);    
        }
    };

    onStatusChange = (event) => {
        this.setState({
            currentStatusText: event.target.value
        })
    };
    
    render = () => {
        return (
            <div>
                {
                    !this.state.editMode && <div>
                        <span onDoubleClick={this.activateEditMode}>
                            Статус: {this.state.currentStatusText}
                        </span>
                    </div>
                }
                {
                    this.state.editMode && <div>
                        Статус: <input
                            autoFocus={true}
                            onChange={this.onStatusChange} 
                            onBlur={this.deActivateEditMode}
                            onKeyPress={this.enterPress} 
                            value={this.state.currentStatusText}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;