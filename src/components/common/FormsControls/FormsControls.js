import React from "react";
import styles from "./FormsControls.module.css";

export const FormControl  = ({input, meta: {touched, error}, ...props}) => {
    let hasError = error && touched;
    return <div className={hasError && styles.error}>
        <div>
            {props.children}
        </div>
        {hasError && <div className={styles.red}>{error}</div>}
    </div>;
};

export const Textarea  = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
};

export const TextInput  = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
};