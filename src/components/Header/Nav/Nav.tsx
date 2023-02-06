import {FC} from 'react';

import {NAV_ITEMS} from 'data/constants';
import Link from 'next/link';

import styles from './Nav.module.scss';
import {useRouter} from 'next/router';
import classNames from 'classnames';

export const Nav: FC = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <ul className={styles.navList}>
            {NAV_ITEMS.map((navItem) => (
                <li key={navItem.name}
                    className={classNames(styles.navListItem, currentRoute === navItem.link ? styles.active : ' ')}>
                    <Link href={navItem.link} className={styles.navListLink}>{navItem.name}</Link>
                </li>
            ))}
        </ul>
    );
};
