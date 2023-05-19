import React from 'react';
import { Box, BoxProps, Paper, Tooltip, Typography } from '@mui/material';

interface ICImageSliceProps {
    image: {
        src: string;
        alt: string;
        label?: {
            text: React.ReactNode;
            contrastText?: boolean;
        };
        thumbnail?: {
            enlarge?: boolean;
            width: string | number;
            height?: string | number;
        };
    };

    mainBoxProps?: BoxProps;
    textBoxProps?: BoxProps;
    reversed?: boolean;
    noShadow?: boolean;
    ratio?: {
        text: number;
        image: number;
    };
    children?: React.ReactNode;
}

export const CImageSlice: React.FC<ICImageSliceProps> = ({
    image,
    mainBoxProps,
    textBoxProps,
    reversed,
    noShadow,
    children,
    ratio = { text: 50, image: 50 }
}) => {
    return (
        <Box
            component={Paper}
            borderRadius={0}
            boxShadow={noShadow ? 0 : undefined}
            display={'flex'}
            flexDirection={{
                xs: 'column',
                md: reversed ? 'row-reverse' : 'row'
            }}
            {...mainBoxProps}
        >
            <Box
                py={image.label ? { xs: 2, md: 4 } : 0}
                px={image.label ? { xs: 2, md: 0 } : 0}
                display={'flex'}
                alignItems={image.thumbnail && 'center'}
                justifyContent={image.thumbnail && 'center'}
                width={{
                    xs: '100%',
                    md: `${(ratio.image / (ratio.text + ratio.image)) * 100}%`
                }}
                flexDirection={'column'}
            >
                <Tooltip title={image.alt} placement={'top'} arrow>
                    <img
                        src={image.src}
                        alt={image.alt}
                        className={image.thumbnail?.enlarge ? 'thumbnail' : ''}
                        style={
                            image.thumbnail
                                ? {
                                      width: image.thumbnail.width,
                                      height: image.thumbnail.height,
                                      maxWidth: '100%'
                                  }
                                : {
                                      display: 'flex',
                                      width: '100%',
                                      height: '100%',
                                      objectFit: 'cover'
                                  }
                        }
                    />
                </Tooltip>
                {image.label && (
                    <Box
                        alignItems={'center'}
                        justifyContent={'center'}
                        display={'flex'}
                        width={'100%'}
                        mt={image.thumbnail?.enlarge ? 3 : 1}
                    >
                        <Typography
                            color={`text${
                                image.label.contrastText
                                    ? '.secondary'
                                    : '.primary'
                            }`}
                            variant={'subtitle2'}
                        >
                            {image.label.text}
                        </Typography>
                    </Box>
                )}
            </Box>
            <Box
                flexDirection={'column'}
                display={'flex'}
                alignItems={'start'}
                py={{ xs: 2, md: 4 }}
                px={{ xs: 4, sm: 8, md: reversed ? 8 : 2 }}
                width={{
                    xs: '100%',
                    md: `${(ratio.text / (ratio.text + ratio.image)) * 100}%`
                }}
                {...textBoxProps}
            >
                {children}
            </Box>
        </Box>
    );
};
