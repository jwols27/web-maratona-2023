import React from 'react';

import { FadeInSection } from '../../../components';
import { SobreMaratona } from '../SobreMaratona/SobreMaratona';
import { CronogramaResumido, CronogramaTitle } from './components';
import { FinalPrincipal } from '../SobreFinal/components/FinalPrincipal';

import './cronograma.css';

export const HomeTemplate = () => {
    return (
        <div id={'home'}>
            <SobreMaratona />

            <FadeInSection>
                <CronogramaTitle />
            </FadeInSection>

            <FadeInSection>
                <CronogramaResumido />
            </FadeInSection>

            <FadeInSection>
                <FinalPrincipal />
            </FadeInSection>
        </div>
    );
};
