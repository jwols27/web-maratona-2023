import React from 'react';
import {
    AppBar,
    Grid,
    IconButton,
    Slide,
    styled,
    Tooltip,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import { CSocials } from '../../../shared/components';
import { LogoMaratonaChapeco } from '../../../shared/icons/LogoMaratonaChapeco';
import { LogoMaratonaSBC } from '../../../shared/icons/LogoMaratonaSBC';

import '../layout.css';

interface IVAppBarProps {
    handleDrawer: (b: boolean) => void;
    isVisible: boolean;
}

const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'isVisible'
})<{
    isVisible?: boolean;
}>(({ theme, isVisible }) => ({
    boxShadow: 'none',
    background: theme.palette.primary.dark,
    transition: theme.transitions.create(['background']),
    ...(isVisible && {
        backgroundColor: 'transparent'
    })
}));

export const VAppBar: React.FC<IVAppBarProps> = ({
    handleDrawer,
    isVisible
}) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const trigger = useScrollTrigger();

    const handleChapeco = () => {
        const element = document.getElementById('header');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Slide appear={false} direction={'down'} in={!trigger}>
            <StyledAppBar isVisible={isVisible}>
                <Grid
                    container
                    height={{ xs: 115, md: 175 }}
                    alignItems={'center'}
                    py={4}
                    pl={{ xs: 2, sm: 6, md: 10, lg: 14 }}
                    className={isVisible ? 'link-override' : ''}
                >
                    {!mdDown && (
                        <>
                            <Grid item height={'100%'} width={125}>
                                <Tooltip title={'Página da maratona'} arrow>
                                    <a
                                        href={
                                            'https://maratona.sbc.org.br/index.html'
                                        }
                                        target={'_blank'}
                                        rel={'noreferrer'}
                                    >
                                        <LogoMaratonaSBC
                                            color2={
                                                !isVisible
                                                    ? theme.palette.primary.dark
                                                    : undefined
                                            }
                                            invert={!isVisible}
                                        />
                                    </a>
                                </Tooltip>
                            </Grid>
                            <Grid item ml={4} height={'100%'} width={95}>
                                <Tooltip title={'Voltar ao início'} arrow>
                                    <Link to={''} onClick={handleChapeco}>
                                        <LogoMaratonaChapeco
                                            invert={!isVisible}
                                        />
                                    </Link>
                                </Tooltip>
                            </Grid>
                        </>
                    )}
                    <Grid
                        item
                        component={IconButton}
                        sx={{
                            color: isVisible
                                ? theme.palette.tertiary.dark
                                : theme.palette.secondary.contrastText
                        }}
                        onClick={() => handleDrawer(true)}
                        mx={2}
                    >
                        <MenuIcon fontSize={'large'} />
                    </Grid>
                    <Grid item>
                        <CSocials
                            color={
                                isVisible
                                    ? theme.palette.tertiary.dark
                                    : theme.palette.secondary.contrastText
                            }
                            spaceInBetween={theme.spacing(0.5)}
                            showFacebook
                            showInstagram
                        />
                    </Grid>
                </Grid>
            </StyledAppBar>
        </Slide>
    );
};
