import {FC} from 'react';

import styles from './GetStarted.module.scss';
import {LogInForm} from '@/components/auth/LogInForm/LogInForm';

export const GetStartedSection: FC = () => {
    return (
        <section className={styles.getStarted}>
            <div className={styles.getStartedContainer}>
                <div className={styles.getStartedContent}>
                    <div className={styles.getStartedContentInfo}>
                        <h4 className={styles.getStartedContentInfoTitle}>Get started today!</h4>
                        <p className={styles.getStartedContentInfoText}>Learn more about how you can save our planet's
                            nature. From smart consumption to switching to renewable energy, each of us can do our part
                            to save the planet. </p>
                    </div>
                    <div className={styles.getStartedContentLogin}>
                        <LogInForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};
