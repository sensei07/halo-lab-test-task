import {FC} from 'react';

import styles from './About.module.scss';
import Image from 'next/image';
import {Input} from '@/components/UI/Input/Input';
import {Button} from '@/components/UI/Button/Button';

export const AboutSection: FC = () => {
    return (
        <section className={styles.about}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutInfo}>
                        <div className={styles.aboutInfoImgContainer}>
                            <Image className={styles.aboutInfoImg} src="/images/headline.png" alt="Nature needs you"
                                   fill={true}/>
                        </div>
                        <p className={styles.aboutInfoText}>The scale of the challenges facing our planet can seem
                            daunting, but we can all do something.</p>
                        <div className={styles.aboutInfoSearch}>
                            <div className={styles.aboutInfoSearchInput}>
                                <img src="/location.svg" alt="location icon"/>
                                <Input type="text" placeholder="Find the place to help"/>
                            </div>
                            <div>
                                <Button classes={styles.aboutInfoSearchButton} children="search"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutDecor}>
                        <Image className={styles.aboutDecorCard} src="/images/card.png" alt="members card"
                               width={272} height={320}/>
                        <Image className={styles.aboutDecorParrot} src="/images/parrot1.png" alt=" parrot"
                               width={460} height={565}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
