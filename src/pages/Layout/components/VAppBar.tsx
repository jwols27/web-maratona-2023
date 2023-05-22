import React from 'react';
import {
    AppBar,
    Grid,
    IconButton,
    Slide,
    Tooltip,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import logoProg from '../../../shared/assets/logos/logo-programacao.png';
import logoChap from '../../../shared/assets/logos/logo-chapeco.png';
import '../layout.css';
import { CSocials } from '../../../shared/components';

interface IVAppBarProps {
    handleDrawer: (b: boolean) => void;
    path: string;
}
export const VAppBar: React.FC<IVAppBarProps> = ({ handleDrawer, path }) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={'down'} in={!trigger}>
            <AppBar
                sx={{
                    background:
                        path === ''
                            ? 'transparent'
                            : theme.palette.primary.dark,
                    boxShadow: 'none'
                }}
            >
                <Grid
                    container
                    height={{ xs: 115, md: 175 }}
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                    py={4}
                >
                    {!mdDown && (
                        <>
                            <Grid
                                item
                                pl={{ xs: 5, md: 10, lg: 15 }}
                                height={'100%'}
                            >
                                <Tooltip title={'Voltar ao início'} arrow>
                                    <Link to={'/'}>
                                        <img
                                            src={logoProg}
                                            style={{
                                                objectFit: 'contain',
                                                height: '100%'
                                            }}
                                            alt={'Maratona SBC de Programação'}
                                        ></img>
                                    </Link>
                                </Tooltip>
                            </Grid>
                            <Grid
                                item
                                display={'flex'}
                                justifyContent={'start'}
                                alignItems={'center'}
                                ml={4}
                                p={0.33}
                                height={'100%'}
                            >
                                <img
                                    src={logoChap}
                                    style={{
                                        objectFit: 'contain',
                                        height: '100%'
                                    }}
                                    alt={'Maratona SBC de Programação'}
                                ></img>
                            </Grid>
                        </>
                    )}
                    <Grid
                        item
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        component={IconButton}
                        sx={{
                            color:
                                path === ''
                                    ? theme.palette.tertiary.dark
                                    : theme.palette.secondary.contrastText
                        }}
                        onClick={() => handleDrawer(true)}
                        ml={2}
                    >
                        <MenuIcon fontSize={'large'} />
                    </Grid>
                    <Grid
                        item
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        ml={2}
                    >
                        <CSocials
                            color={
                                path === ''
                                    ? theme.palette.tertiary.dark
                                    : theme.palette.secondary.contrastText
                            }
                            spaceInBetween={theme.spacing(0.5)}
                            showFacebook
                            showInstagram
                        />
                    </Grid>
                </Grid>
            </AppBar>
        </Slide>
    );
};
