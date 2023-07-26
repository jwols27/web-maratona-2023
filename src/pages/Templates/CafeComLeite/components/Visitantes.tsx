import React from 'react';
import { Grid } from '@mui/material';

import { MushroomLine } from './MushroomLine';
import { CCLComponentProps } from '../CafeComLeite';
import { CParagraph, CTextSlice, CTitle } from '../../../../components';

import lanche from '../../../../shared/assets/lanche.png';
import redMushroom from '../../../../shared/assets/icon-mushroom-red.png';

export const Visitantes: React.FC<CCLComponentProps> = ({ mediaQuery }) => {
    const responsiveness = React.useMemo((): number => {
        switch (mediaQuery) {
            case 'sm525':
                return 0;
            case 'sm650':
                return 5;
            case 'mdDown':
                return 7;
            case 'lgDown':
                return 12;
            default:
                return 17;
        }
    }, [mediaQuery]);

    return (
        <CTextSlice px={{ xs: 0, sm: 4, md: 8 }}>
            <Grid container justifyContent={'space-evenly'}>
                <Grid item xs={12} px={4}>
                    <CTitle
                        variant={'h4'}
                        fontWeight={650}
                        color={'tertiary.main'}
                        align={responsiveness <= 7 ? 'center' : undefined}
                    >
                        Visitantes
                    </CTitle>
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
                            A organização vai cobrir as despesas de hospedagem e
                            de alimentação somente para três competidores(as) e
                            o(a) coach ou co-coach ou reserva (quatro pessoas ao{' '}
                            {'todo'} na delegação oficial).
                            <br />
                            <br />
                            Os times que desejarem vir com mais de quatro
                            pessoas (por exemplo, competidor(a) reserva, coach e
                            co-coach e/ou acompanhantes) deverão fazer seus
                            próprios arranjos de hospedagem para as demais
                            pessoas. Além disso, será necessário pagar uma taxa
                            de inscrição de visitante caso essas pessoas queiram
                            participar das atividades comuns da competição:
                            <br />
                            <br />
                            As pessoas acompanhantes de times (visitantes) que
                            quiserem frequentar as áreas comuns do evento,
                            incluindo o jantar do dia 19 de outubro,
                        </CParagraph>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5.8} px={2} className={'special-link'}>
                    <CParagraph component={'p'}>
                        almoço do dia 20 de outubro (não inclui o jantar desse
                        dia), e almoço e jantar de premiação do dia 21 de
                        outubro, deverão pagar uma taxa de inscrição de
                        acompanhante no valor de R$ 150 reais. Essa taxa não
                        inclui hospedagem ou atividades adicionais que vierem a
                        ser divulgadas;
                    </CParagraph>
                    <Grid item bgcolor={'primary.main'} my={2}>
                        <CParagraph
                            component={'p'}
                            contrastText
                            px={3}
                            py={2}
                            borderColor={'tertiary.main'}
                        >
                            Para se inscrever como visistante, acesse o Sistema
                            SBC ECOS{' '}
                            <a
                                href={
                                    'https://centraldesistemas.sbc.org.br/ecos/finalmaratonasbc2023/'
                                }
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                clicando aqui!
                            </a>
                        </CParagraph>
                    </Grid>
                    <CParagraph component={'p'} borderColor={'tertiary.main'}>
                        Para mais informações sobre o turismo em Chapecó - SC,
                        acesse o site da{' '}
                        <a
                            href={'https://chapeco.sc.gov.br/'}
                            target={'_blank'}
                            rel={'noreferrer'}
                        >
                            Prefeitura Municipal
                        </a>{' '}
                        e conheça os melhores pontos para visitar.
                    </CParagraph>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    px={2}
                    alignItems={'end'}
                    justifyContent={'space-evenly'}
                    className={'deco'}
                >
                    <MushroomLine
                        responsiveness={responsiveness}
                        src={redMushroom}
                        height={40}
                    />
                    <Grid item height={140} ml={2} mt={{ xs: 2, md: 0 }}>
                        <img src={lanche} alt={'Café'} />
                    </Grid>
                </Grid>
            </Grid>
        </CTextSlice>
    );
};
