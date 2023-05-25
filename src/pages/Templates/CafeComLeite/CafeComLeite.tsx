import React from 'react';

import './cafe-com-leite.styles.css';
import { TimesCCL, Visitantes } from './components';
import { useMediaQuery, useTheme } from '@mui/material';

export interface CCLComponentProps {
    mediaQuery: string;
}

export const CafeComLeite = () => {
    const theme = useTheme();
    const sm525 = useMediaQuery(theme.breakpoints.down(525));
    const sm650 = useMediaQuery(theme.breakpoints.down(650));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
    const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

    const responsiveness = React.useMemo((): string => {
        if (sm525) return 'sm525';
        if (sm650) return 'sm650';
        if (mdDown) return 'mdDown';
        if (lgDown) return 'lgDown';
        if (xlDown) return 'xlDown';
        return 'default';
    }, [sm525, sm650, mdDown, lgDown, xlDown]);

    return (
        <div id={'cafe-com-leite-e-visitantes'}>
            <TimesCCL mediaQuery={responsiveness} />
            <Visitantes mediaQuery={responsiveness} />
        </div>
    );
};
