import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

import { CParagraph, CTextSlice, CTitle } from '../../../../shared/components';
import { CCLComponentProps } from '../CafeComLeite';
import { MushroomLine } from './MushroomLine';

import shield from '../../../../shared/assets/coffee-shield.png';
import greenMushroom from '../../../../shared/assets/icon-mushroom-green.png';

export const TimesCCL: React.FC<CCLComponentProps> = ({ mediaQuery }) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const responsiveness = React.useMemo((): number => {
        switch (mediaQuery) {
            case 'sm525':
                return 0;
            case 'sm650':
                return 5;
            case 'mdDown':
                return 7;
            case 'lgDown':
                return 4;
            case 'xlDown':
                return 6;
            default:
                return 7;
        }
    }, [mediaQuery]);

    return (
        <CTextSlice px={{ xs: 0, sm: 4, md: 8 }}>
            <Grid container justifyContent={'space-evenly'}>
                <Grid item xs={12} md={5.8} px={2}>
                    <CTitle
                        variant={'h3'}
                        textTransform={'uppercase'}
                        fontWeight={950}
                        color={'secondary.main'}
                        align={mdDown ? 'center' : undefined}
                    >
                        Café com leite e visitantes
                    </CTitle>
                    <CTitle
                        variant={'h4'}
                        fontWeight={650}
                        color={'tertiary.main'}
                        align={mdDown ? 'center' : undefined}
                    >
                        Times Café Com Leite (CCL)
                    </CTitle>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={5.8}
                    px={2}
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    className={'deco'}
                >
                    <MushroomLine
                        responsiveness={responsiveness}
                        src={greenMushroom}
                    />
                    <Grid item height={140} ml={2} mb={{ xs: 2, md: 0 }}>
                        <img src={shield} alt={'Café'} />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={5.8}
                    px={2}
                    direction={'column'}
                    justifyContent={'space-between'}
                >
                    <Grid item>
                        <CParagraph component={'p'}>
                            <b>INSCRIÇÕES ATÉ ??/??/2023.</b>
                            <br />
                            Esse ano teremos novamente inscrição para times Café
                            com Leite (CCL). O valor da inscrição é R$ 150 por
                            integrante (limitado a três integrantes por time, R$
                            450) e inclui os mesmos benefícios que os de
                            visitantes (vide acima). Essa taxa não inclui
                            hospedagem ou atividades adicionais que vieram a ser
                            divulgadas. Há descontos para Times CCL cujos
                            integrantes seja coaches de times finalistas.
                        </CParagraph>
                    </Grid>
                    <Grid
                        item
                        bgcolor={'primary.main'}
                        mt={2}
                        mb={{ xs: 2, md: 0 }}
                        className={'special-link'}
                    >
                        <CParagraph
                            component={'p'}
                            contrastText
                            px={3}
                            py={2}
                            borderColor={'tertiary.main'}
                        >
                            Para se inscrever como café-com-leite, acesse o
                            Sistema SBC ECOS em
                            <br />
                            <a
                                href={
                                    'https://centraldesistemas.sbc.org.br/ecos/finalmaratonasbc2022/edit'
                                }
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                https://centraldesistemas.sbc.org.br/ecos/finalmaratonasbc2022/edit
                            </a>
                        </CParagraph>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5.8} px={2}>
                    <CParagraph component={'p'}>
                        Teremos limite de 10 times CCL. Garanta já a sua vaga!
                        <br />O valor de inscrição de um Time Café com Leite é
                        de R$ 450 (R$ 150 por competidor), considerando um time
                        com três competidores. Caso o seu time tenha menos
                        competidores (apenas um ou dois competidores), favor
                        entrar em contato com a organização para realizar o
                        respectivo desconto no valor final cobrado;
                        <br />
                        Caso o Time Café com Leite (CCL) tenha algum competidor
                        que seja coach de time finalista, entre em contato para
                        ajustar o valor de inscrição para R$40 por coach
                        integrante do Time CCL;
                        <br />
                        Quem já estiver inscrito como Visitante e decidir fazer
                        parte de um Time CCL terá direito a desconto de R$ 150
                        na inscrição do time pelo valor pago da inscrição de
                        Visitante.
                    </CParagraph>
                </Grid>
            </Grid>
        </CTextSlice>
    );
};
