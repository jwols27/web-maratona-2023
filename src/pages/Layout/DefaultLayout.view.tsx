import React, { useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { VAppBar, VDrawer, VFooter } from './components';
import { useLocation } from 'react-router-dom';

import { navHome, navItems } from './data/NavItems';
import { CBanner } from '../../shared/components';
import { FooterContent } from './components/FooterContent';

import mainBanner from '../../shared/assets/main-banner.png';
import smallBanner from '../../shared/assets/small-banner.png';

interface IDefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const location = useLocation();
    const path = location.pathname.split('/')[1];

    const handleDrawer = (b: boolean) => {
        setOpen(b);
    };

    // altera título da web de acordo com a página
    useEffect(() => {
        const title = navItems.find((obj) => {
            return obj.path === path;
        });
        document.title = title
            ? `Maratona de Programação | ${title.label}`
            : 'Maratona SBC de Programação 2023';
    }, [path]);

    return (
        <Box flex={1}>
            <VAppBar handleDrawer={handleDrawer} path={path} />
            <VDrawer
                itens={[navHome, ...navItems]}
                open={open}
                handleDrawer={handleDrawer}
                path={path}
            />

            {path === '' ? (
                <CBanner
                    path={mdDown ? smallBanner : mainBanner}
                    alt={'Banner'}
                />
            ) : (
                <Box height={{ xs: 115, md: 175 }} bgcolor={'primary.dark'} />
            )}

            <Box
                minHeight={'75.5vh'}
                flexDirection={'column'}
                px={{ xs: 0, xl: 10, xxl: 15 }}
            >
                {children}
            </Box>
            <VFooter>
                <FooterContent />
            </VFooter>
        </Box>
    );
};

export default DefaultLayout;
