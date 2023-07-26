import React from 'react';
import { Box, BoxProps, Paper, Tooltip, Typography } from '@mui/material';

interface IImageComponentProps {
    label?: {
        text: React.ReactNode;
        contrastText?: boolean;
    };
    enlarge?: boolean;
}

export type TCustomImageProps = IImageComponentProps &
    React.ImgHTMLAttributes<HTMLImageElement>;

const ImageComponent: React.FC<TCustomImageProps> = ({
    label,
    enlarge,
    ...props
}) => {
    return (
        <>
            <Tooltip title={props.title} placement={'top'} arrow>
                <img
                    src={props.src}
                    alt={props.alt}
                    className={enlarge ? 'thumbnail' : ''}
                    style={{
                        display: 'flex',
                        objectFit: 'cover'
                    }}
                    {...props}
                />
            </Tooltip>
            {label && (
                <Box
                    alignItems={'center'}
                    justifyContent={'center'}
                    display={'flex'}
                    width={'100%'}
                    mt={enlarge ? 3 : 1}
                >
                    <Typography
                        color={`text${
                            label.contrastText ? '.secondary' : '.primary'
                        }`}
                        variant={'subtitle2'}
                    >
                        {label.text}
                    </Typography>
                </Box>
            )}
        </>
    );
};

interface IImageSliceProps {
    images: TCustomImageProps[];

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

export const CImageSlice: React.FC<IImageSliceProps> = ({
    images,
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
                xs: reversed ? 'column-reverse' : 'column',
                md: reversed ? 'row-reverse' : 'row'
            }}
            {...mainBoxProps}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'start'}
                width={{
                    xs: '100%',
                    md: `${(ratio.image / (ratio.text + ratio.image)) * 100}%`
                }}
                height={'100%'}
                flexDirection={'column'}
            >
                {images.map((img, index) => {
                    return (
                        <div key={`image-${index}`}>
                            <ImageComponent {...img} />
                            {index !== images.length - 1 && <Box mb={2} />}
                        </div>
                    );
                })}
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
