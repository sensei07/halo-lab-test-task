import styles from './Button.module.scss';
import {ReactNode} from 'react';
import classNames from 'classnames';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset',
    classes: string,
    disabled?: boolean,
    children: ReactNode;
}

export const Button = ({type = 'button', classes, disabled = false, children}: ButtonProps) => {
    return (
        <button type={type} className={classNames(styles.button, classes)} disabled={disabled}>
            {children}
        </button>
    );
};
