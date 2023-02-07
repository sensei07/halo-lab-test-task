import {FC} from 'react';

import styles from './LoginForm.module.scss';
import {Input} from '@/components/UI/Input/Input';
import {Button} from '@/components/UI/Button/Button';

export const LogInForm: FC = () => {
    return (
        <div className={styles.login}>
            <h5 className={styles.loginTitle}>Log in</h5>
            <form>
                <Input classes={styles.loginInput} type="text" placeholder="Name"/>
                <Input classes={styles.loginInput} type="email" placeholder="Email"/>
                <Button type="submit" classes={styles.loginButton}>Book a demo</Button>
            </form>
        </div>
    );
};
