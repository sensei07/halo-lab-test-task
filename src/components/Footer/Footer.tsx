import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerContentContacts}>
                        <h5 className={styles.footerContentContactsTitle}>Contacts</h5>
                        <p className={styles.footerContentContactsText}>2019 Rootz Foundation. All rights reserved</p>
                    </div>
                    <div className={styles.footerContentHeadquarters}>
                        <h5 className={styles.footerContentHeadquartersTitle}>Headquarters</h5>
                        <p className={styles.footerContentHeadquartersText}>1234 Taliban<br/> Los Angeles,
                            La 1234567
                            <br/>(123) 456-7890
                        </p>
                    </div>
                    <div className={styles.footerContentSocial}>
                        <h5 className={styles.footerContentSocialTitle}>Social media</h5>
                        <ul className={styles.footerContentSocialList}>
                            <li className={styles.footerContentSocialListItem}>
                                <a href="#" className={styles.footerContentSocialListItemLink}>
                                    <img src="/images/icons/twitter.svg"/>
                                </a>
                            </li>
                            <li className={styles.footerContentSocialListItem}>
                                <a href="#" className={styles.footerContentSocialListItemLink}>
                                    <img src="/images/icons/facebook.svg"/>
                                </a>
                            </li>
                            <li className={styles.footerContentSocialListItem}>
                                <a href="#" className={styles.footerContentSocialListItemLink}>
                                    <img src="/images/icons/linkedin.svg"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
        ;
};
