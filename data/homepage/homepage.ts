// import {applyDataVariantOverrides} from 'data/applyVariantOverrides';
// import HOMEPAGE_DATA from './homepage.json';

export interface HomepageData {
    questionsData: IQuestionsData;
}

export interface IQuestionsData {
    title: string,
    description: string,
    button: string,
    questions: IQuestion[]
}

export interface IQuestion {
    id: number,
    question: string,
    answer: string,
}

// export const getHomepageData = (variant?: string): HomepageData => {
//     const data = applyDataVariantOverrides(HOMEPAGE_DATA as any, variant) as HomepageData;
//     return data;
// };
