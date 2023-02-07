import {AboutSection} from '@/components/Homepage/AboutSection/AboutSection';
import {OurTeamSection} from '@/components/Homepage/OurTeamSection/OurTeamSection';
import {GetStartedSection} from '@/components/Homepage/GetStartedSection/GetStartedSection';
import {QuestionsSection} from '@/components/Homepage/QuestionsSection/QuestionsSection';
import {SliderSection} from '@/components/Homepage/SliderSection/SliderSection';

import homepageData from '../../data/homepage/homepage.json';

export default function Home() {
    return (
        <>
            <AboutSection/>
            <OurTeamSection/>
            <GetStartedSection/>
            <QuestionsSection questionsData={homepageData.questionsData}/>
            <SliderSection/>
        </>
    );
};
