import styles from './Questions.module.scss';
import {Button} from '@/components/UI/Button/Button';

import {IQuestionsData} from 'data/homepage/homepage';
import {QuestionItem} from '@/components/Homepage/QuestionsSection/QuestionItem/QuestionItem';

interface IQuestionsSectionProps {
    questionsData: IQuestionsData;
}

export const QuestionsSection = ({questionsData}: IQuestionsSectionProps) => {
    return (
        <section className={styles.questions}>
            <div className={styles.questionsContainer}>
                <div className={styles.questionsContent}>
                    <div className={styles.questionsContentInfo}>
                        <h4 className={styles.questionsContentInfoTitle}>{questionsData.title}</h4>
                        <p className={styles.questionsContentInfoText}>{questionsData.description}</p>
                        <Button classes={styles.questionsContactUsButton}>{questionsData.button}</Button>
                    </div>
                    <div className={styles.questionsContentItems}>
                        {questionsData?.questions?.map((question) => (
                            <QuestionItem key={question.id} question={question.question} answer={question.answer}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
