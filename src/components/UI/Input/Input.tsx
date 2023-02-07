import styles from './Input.module.scss';
import classNames from 'classnames';

interface InputProps {
    disabled?: boolean,
    type: string,
    placeholder: string,
    classes?: string,
}

export const Input = ({disabled = false, type, placeholder, classes}: InputProps) => {
    return (
        <input type={type} className={classNames(styles.input, classes)} disabled={disabled} placeholder={placeholder}/>
    );
};
