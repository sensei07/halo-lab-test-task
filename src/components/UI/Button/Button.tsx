import styles from './Button.module.scss';
import {ReactNode} from 'react';
import classNames from 'classnames';

interface ButtonProps {
    classes: string,
    disabled?: boolean,
    children: ReactNode;
}

export const Button = ({classes, disabled = false, children}: ButtonProps) => {
    return (
        <button className={classNames(styles.button, classes)} disabled={disabled}>
            {children}
        </button>
    );
};
