import React from 'react';
import spinner from "../../../assets/images/spinner.gif";

const Preloader = (props) => {
    return <div>
        {props.isFetching ? <img alt='spinner' src={spinner} /> : null}
    </div>

};

export default Preloader;