import {useState} from 'react';
import classNames from 'classnames';

import styles from './QuestionItem.module.scss';
import {Button} from '@/components/UI/Button/Button';
import {Plus} from '@/components/UI/Icons/Plus';
import {Minus} from '@/components/UI/Icons/Minus';

interface IQuestionItemProps {
    question: string,
    answer: string,
}

export const QuestionItem = ({question, answer}: IQuestionItemProps) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClickShowAnswer = () => {
        setShowAnswer((prevState) => !prevState);
    };

    return (
        <div className={styles.question}>
            <div className={classNames(styles.questionHeader, !showAnswer && styles.questionHeaderWithoutAnswer)}>
                <h5 className={styles.questionHeaderTitle}>{question}</h5>
                <Button classes={styles.questionButton} onClick={handleClickShowAnswer}>
                    {showAnswer ?
                        <Minus width={14} height={2}/>
                        :
                        <Plus width={12} height={12}/>
                    }
                </Button>
            </div>
            <div className={classNames(!showAnswer ? styles.answerHide : styles.answerShow)}>
                <p className={styles.questionText}>{answer}</p>
            </div>
        </div>
    );
};
