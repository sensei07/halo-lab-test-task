import {FC} from 'react';
import styles from './OurTeam.module.scss';
import Image from 'next/image';
import {TEAM_ITEMS} from 'data/constants';

export const OurTeamSection: FC = () => {
    return (
        <section className={styles.ourTeam}>
            <div className={styles.ourTeamContainer}>
                <div className={styles.ourTeamContent}>
                    <h4 className={styles.ourTeamTitle}>Our top team</h4>
                    <p className={styles.ourTeamText}>Learn more about how you can save our planet's nature. </p>
                    <div className={styles.ourTeamImages}>
                        {TEAM_ITEMS.map((team) => (
                            <div key={team.id} className={styles.ourTeamImgContainer}>
                                <Image className={styles.ourTeamImage} src={team.imageUrl} width={team.width}
                                       height={team.height} alt={team.alt}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
