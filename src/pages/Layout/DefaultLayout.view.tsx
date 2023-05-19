import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { VAppBar, VDrawer, VFooter } from './components';
import { useLocation } from 'react-router-dom';
import { navHome, navItems } from './data/NavItems';

import { FooterContent } from './components/FooterContent';
import mainBanner from '../../shared/assets/main-banner.png';
import { CBanner } from '../../shared/components';
interface IDefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false);

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
            : 'Maratona de Programação | Maratona SBC de Programação 2023';
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
                <CBanner path={mainBanner} alt={'Banner'} />
            ) : (
                <Box height={115} bgcolor={path !== '' ? 'primary.dark' : ''} />
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
