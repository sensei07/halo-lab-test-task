import {FC} from 'react';
import {Nav} from '@/components/Header/Nav/Nav';
import {Logo} from '@/components/Header/Logo/Logo';

import styles from './Header.module.scss';
import {Button} from '@/components/UI/Button/Button';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerInner}>
                    <Logo/>
                    <Nav/>
                    <Button classes={styles.headerButton}>Apply</Button>
                </div>
                <div className={styles.headerDivider}/>
            </div>
        </header>
    );
};

