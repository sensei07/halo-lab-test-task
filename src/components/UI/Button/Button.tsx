import styles from './Button.module.scss';
import React, {ReactNode} from 'react';
import classNames from 'classnames';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset',
    classes: string,
    disabled?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children: ReactNode;

}

export const Button = ({type = 'button', classes, disabled = false, children, onClick}: ButtonProps) => {
    return (
        <button type={type} className={classNames(styles.button, classes)} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};
