import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { VAppBar, VDrawer, VFooter } from './components';
import { useLocation } from 'react-router-dom';

import { navHome, navItems } from '../NavItems';
import { CBanner } from '../../shared/components';
import { FooterContent } from './components/FooterContent';

import mainBanner from '../../shared/assets/main-banner.png';
import mobileBanner from '../../shared/assets/small-banner.png';
import { useOnScreen } from '../../shared/hooks';

interface IDefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const location = useLocation();
    const path = location.pathname.split('/')[1];

    const elementRef = React.useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);

    const handleDrawer = (b: boolean) => {
        setOpen(b);
    };

    // altera título da web de acordo com a página
    React.useEffect(() => {
        const title = navItems.find((obj) => {
            return obj.path === path;
        });
        document.title = title
            ? `Maratona de Programação | ${title.label}`
            : 'Maratona SBC de Programação 2023';
    }, [path]);

    return (
        <Box flex={1}>
            <VAppBar handleDrawer={handleDrawer} isVisible={isOnScreen} />
            <VDrawer
                itens={[navHome, ...navItems]}
                open={open}
                handleDrawer={handleDrawer}
                path={path}
            />

            <div id={'header'} style={{ position: 'relative' }}>
                <div
                    ref={elementRef}
                    style={{
                        position: 'absolute',
                        top: '18vh',
                        display: path === '' ? 'initial' : 'none'
                    }}
                />
                <Box
                    height={{ xs: 115, md: 175 }}
                    bgcolor={'primary.dark'}
                    display={path !== '' ? 'block' : 'none'}
                />
                {path === '' && (
                    <CBanner
                        src={mdDown ? mobileBanner : mainBanner}
                        alt={'Banner'}
                        style={{
                            height: '100vh'
                        }}
                    />
                )}
            </div>

            <Box px={{ xs: 0, xl: 10, xxl: 15 }}>{children}</Box>
            <VFooter>
                <FooterContent />
            </VFooter>
        </Box>
    );
};

export default DefaultLayout;
