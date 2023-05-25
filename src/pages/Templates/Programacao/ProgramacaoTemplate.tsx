import React from 'react';
import {
    CBalloon,
    CHeader,
    CParagraph,
    CTitle,
    TBalloon
} from '../../../shared/components';
import {
    Box,
    Grid,
    GridProps,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import hotelLang from '../../../shared/assets/hotel/hotel-lang.webp';

const mogano: TBalloon = {
    size: 200,
    offset: '12px',
    color: 'gray',
    children: (
        <img src={hotelLang} alt={'icon'} className={'balloon-content-full'} />
    )
};
const lang: TBalloon = {
    size: 200,
    offset: '12px',
    color: 'gray',
    children: (
        <img src={hotelLang} alt={'icon'} className={'balloon-content-full'} />
    )
};

interface IHotelDescProps {
    header: React.ReactNode;
    children: React.ReactNode;
}

const HotelDesc: React.FC<IHotelDescProps & GridProps> = ({
    header,
    children,
    ...props
}) => {
    return (
        <Grid
            item
            bgcolor={'white'}
            flexGrow={1}
            display={'flex'}
            flexDirection={'column'}
            {...props}
        >
            <CHeader
                alignItems={'end'}
                contrastText
                boxColor={'purple'}
                arrow={{
                    width: '15px',
                    height: '15px',
                    class: 'hb-header',
                    borderWidth: 2
                }}
                p={1}
            >
                {header}
            </CHeader>
            <CParagraph
                pt={2}
                pb={4}
                px={4}
                lineHeight={1.25}
                component={'p'}
                className={'desc-text'}
                height={'100%'}
                sx={{ borderWidth: 2 }}
                {...props}
            >
                {children}
            </CParagraph>
        </Grid>
    );
};

interface IHotelBallProps {
    balloon: TBalloon;
}

const HotelBall: React.FC<IHotelBallProps> = ({ balloon }) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box mb={balloon.offset}>
            <CBalloon size={balloon.size} color={balloon.color} arrow={!mdDown}>
                {balloon.children}
            </CBalloon>
        </Box>
    );
};

export const ProgramacaoTemplate = () => {
    return (
        <div id={'programacao'}>
            <Grid container direction={{ xs: 'column', md: 'row' }}>
                <Grid item xs={12} md={6} p={4} bgcolor={'primary.main'}>
                    <CTitle
                        variant={'h3'}
                        textTransform={'uppercase'}
                        fontWeight={950}
                        titleColor={'secondary'}
                        contrastText
                        mb={6}
                    >
                        Acomodações e Turismo
                    </CTitle>
                    <CTitle
                        variant={'h4'}
                        fontWeight={700}
                        titleColor={'tertiary'}
                    >
                        Conheça Chapecó
                    </CTitle>
                    <CParagraph
                        className={'special-link'}
                        component={'p'}
                        borderColor={'tertiary.main'}
                        contrastText
                        width={{ xs: '90%', sm: '80%', md: '70%' }}
                        mb={4}
                    >
                        Acesse o site da Prefeitura de Chapecó para conhecer os
                        pontos turísticos da Capital do Oeste Catarinense:
                        <br />
                        <a
                            href={'https://chapeco.sc.gov.br/'}
                            target={'_blank'}
                            rel={'noreferrer'}
                            style={{ paddingBottom: 4 }}
                        >
                            chapeco.sc.gov.br
                        </a>
                    </CParagraph>
                    <Box
                        width={{
                            xs: 'calc(100% + 64px)',
                            sm: '100%',
                            md: '80%'
                        }}
                        height={{ xs: 450, md: 300 }}
                        ml={{ xs: -4, sm: 0 }}
                    >
                        <iframe
                            src={
                                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36850.47756757405!2d-52.6469510331741!3d-27.094850164276373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b5d763b81187%3A0x39191b9f478f776!2sHotel%20Lang%20Palace!5e0!3m2!1spt-BR!2sbr!4v1684954164903!5m2!1spt-BR!2sbr'
                            }
                            title={'Mapa de Chapecó'}
                            width={'100%'}
                            height={'100%'}
                            loading={'lazy'}
                            referrerPolicy={'no-referrer-when-downgrade'}
                        />
                    </Box>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={6}
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    pb={4}
                    pt={16}
                    px={8}
                    bgcolor={'tertiary.main'}
                >
                    <Grid
                        container
                        item
                        xs={5.8}
                        direction={{ xs: 'row', md: 'column' }}
                    >
                        <HotelBall balloon={mogano} />
                        <HotelDesc
                            header={
                                <Typography
                                    align={'center'}
                                    width={'100%'}
                                    fontStyle={'italic'}
                                    fontWeight={600}
                                >
                                    Hotel Mogano Business
                                </Typography>
                            }
                        >
                            oi
                        </HotelDesc>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={5.8}
                        direction={{ xs: 'row', md: 'column' }}
                    >
                        <HotelBall balloon={lang} />
                        <HotelDesc
                            header={
                                <Typography
                                    align={'center'}
                                    width={'100%'}
                                    fontStyle={'italic'}
                                    fontWeight={600}
                                >
                                    Hotel Mogano Business
                                </Typography>
                            }
                        >
                            oi
                        </HotelDesc>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
