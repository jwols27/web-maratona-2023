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

import logo from '../../../shared/assets/logo.png';
import '../layout.css';
import { CSocials } from '../../../shared/components';

interface IVAppBarProps {
    handleDrawer: (b: boolean) => void;
    path: string;
}
export const VAppBar: React.FC<IVAppBarProps> = ({
    handleDrawer,
    path
}) => {
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
                    height={115}
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                >
                    <Grid
                        item
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        pl={{ xs: 5, md: 10, lg: 15 }}
                    >
                        <Tooltip title={'Voltar ao início'} arrow>
                            <Link to={'/'}>
                                <img
                                    src={logo}
                                    style={{
                                        objectFit: 'contain'
                                    }}
                                    width={mdDown ? '125px' : '150px'}
                                    alt={'Maratona SBC de Programação'}
                                ></img>
                            </Link>
                        </Tooltip>
                    </Grid>
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
