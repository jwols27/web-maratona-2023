import React from 'react';

import { FadeInSection } from '../../../shared/components';
import { CronogramaResumido, CronogramaTitle } from './components';
import { FinalPrincipal } from '../SobreFinal/components/FinalPrincipal';

import './cronograma.css';
import { SobreMaratona } from '../SobreMaratona/SobreMaratona';

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
