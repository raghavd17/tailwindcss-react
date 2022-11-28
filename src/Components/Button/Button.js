import React from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button = ({children, active, disabled, icon, round, size, type}) => {

    const styles = () => {
        return classNames(
            "btn",
            active && "active",
            icon && "icon",
            round && "round",
            size,
            type
        );
    }

    return <button className={styles()} disabled={disabled}>
        {children}
    </button>

    }
    
    export default Button;