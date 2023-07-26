import React from 'react';
import { FadeInSection } from '../../../components';
import { CronogramaResumido, CronogramaTitle } from '../Home/components';

export const ProgramacaoTemplate = () => {
    return (
        <div id={'programacao'}>
            <FadeInSection>
                <CronogramaTitle />
            </FadeInSection>

            <FadeInSection>
                <CronogramaResumido />
            </FadeInSection>
        </div>
    );
};
