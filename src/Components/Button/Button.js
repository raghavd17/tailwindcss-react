import React from 'react';
import classNames from 'classnames';

import './button.scss';

const Button = ({children, active, disabled, icon, round, size, type, dropdownToggle}) => {

    const styles = () => {
        return classNames(
            "btn",
            type,
            round && "round",
            icon && "icon",
            active && "active",
            size,
            dropdownToggle && "dropdown-toggle"
            
        );
    }

    return <button className={styles()} disabled={disabled}>
        {children}
    </button>

    }
    
    export default Button;