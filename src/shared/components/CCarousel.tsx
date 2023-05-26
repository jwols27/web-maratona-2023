import React, { useCallback } from 'react';
import Carousel from 'react-multi-carousel';
import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

//import logo from '../../shared/assets/logo.png';
import '../styles/custom-carousel.css';

export type TCarouselItem = {
    path: string;
    alt: string;
    label?: string;
    href?: string;
};

interface ICCarouselProps {
    items?: TCarouselItem[];
    background?: 'primary' | 'secondary';
    noShadow?: boolean;
    multi?: boolean;
    size?: number;
}

const defaultItems = [
    {
        path: '',
        alt: 'logo',
        label: 'logo'
    }
];

export const CCarousel: React.FC<ICCarouselProps> = ({
    items = defaultItems,
    background,
    noShadow,
    multi = false,
    size = 100
}) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    // Se for um único item, assim o carrossel fica "centralizado"
    const isSingle = useCallback((): TCarouselItem[] => {
        if (items.length === 1 && !mdDown) {
            const placeholder: TCarouselItem = {
                path: '',
                alt: '',
                label: ''
            };
            return [placeholder, ...items];
        }
        return items;
    }, [items, mdDown]);

    return (
        <Box
            component={Paper}
            width={`${size}%`}
            borderRadius={0}
            boxShadow={noShadow ? 0 : undefined}
            position={'relative'}
            // Se define a posição dos pontos com padding-bottom nesse npm
            pb={isSingle().length > 1 ? 5 : 0}
        >
            <Box
                bgcolor={`${background}.dark`}
                py={multi ? 2 : 0}
                //
                component={Carousel}
                arrows={isSingle().length > 1}
                showDots={isSingle().length > 1}
                //
                renderDotsOutside
                dotListClass="custom-dot-list"
                draggable
                infinite
                pauseOnHover
                keyBoardControl
                minimumTouchDrag={80}
                slidesToSlide={1}
                swipeable
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 6000,
                            min: 950
                        },
                        items: multi ? 3 : 1,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 950,
                            min: 600
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: {
                            max: 600,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
            >
                {items &&
                    isSingle().map((item, index) => (
                        <Box key={`${index}#${item}`} height={'100%'}>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                height={'90%'}
                            >
                                <a
                                    href={item.href}
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    <img
                                        src={item.path}
                                        alt={item.alt}
                                        className={'custom-carousel'}
                                    />
                                </a>
                            </Box>
                            {item.label && (
                                <Box
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    height={'5%'}
                                >
                                    <Typography
                                        variant={'subtitle1'}
                                        color={`${background}.contrastText`}
                                        style={{ wordWrap: 'break-word' }}
                                        align={'center'}
                                        width={'80%'}
                                        fontStyle={'italic'}
                                        pt={2}
                                        pb={1}
                                    >
                                        {item.label}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    ))}
            </Box>
        </Box>
    );
};
