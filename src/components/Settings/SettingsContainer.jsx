import React from "react";
import Settings from "./Settings";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class SettingsContainer extends React.Component {
    render() {
        return <Settings {...this.props} />
    }
}

export default compose(
    WithAuthRedirect
)(SettingsContainer);
