import {FC} from 'react';

import styles from './Questions.module.scss';
import {TEAM_ITEMS} from '../../../../data/constants';
import Image from 'next/image';
import {Button} from '@/components/UI/Button/Button';

export const QuestionsSection: FC = () => {
    return (
        <section className={styles.questions}>
            <div className={styles.questionsContainer}>
                <div className={styles.questionsContent}>
                    <div className={styles.questionsContentInfo}>
                        <h4 className={styles.questionsContentInfoTitle}>Ready to Get started?</h4>
                        <p className={styles.questionsContentInfoText}>When pattern is mentioned in interior design, it
                            is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on
                            interior fabrics.</p>
                        <Button classes={styles.questionsContactUsButton}>Contact us</Button>
                    </div>
                    <div className={styles.questionsContentItems}>
                        que
                    </div>
                </div>
            </div>
        </section>
    );
};
