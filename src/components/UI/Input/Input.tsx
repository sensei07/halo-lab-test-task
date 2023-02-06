import styles from './Input.module.scss';

interface InputProps {
    disabled?: boolean,
    type: string,
    placeholder: string
}

export const Input = ({disabled = false, type, placeholder}: InputProps) => {
    return (
        <input type={type} className={styles.input} disabled={disabled} placeholder={placeholder}/>
    );
};
