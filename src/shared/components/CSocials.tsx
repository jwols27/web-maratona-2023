import React from 'react';

import '../../shared/styles/thumbnail.css';
import { Facebook, Instagram, WhatsApp, YouTube } from '@mui/icons-material';

interface ICSocialsProps {
    color: string;
    spaceInBetween?: string | number;
    showFacebook?: boolean;
    showInstagram?: boolean;
    showWhatsapp?: boolean;
    showYoutube?: boolean;
}

export const CSocials: React.FC<ICSocialsProps> = ({
    color,
    spaceInBetween = 0,
    showFacebook,
    showYoutube,
    showWhatsapp,
    showInstagram
}) => {
    return (
        <div style={{ marginTop: 4 }}>
            {showFacebook && (
                <a
                    href={'https://www.google.com'}
                    target={'_blank'}
                    rel="noreferrer"
                    className={'thumbnail-link'}
                    style={{
                        padding: 1,
                        marginRight: spaceInBetween,
                        color: color
                    }}
                >
                    <Facebook className={'thumbnail'} fontSize={'large'} />
                </a>
            )}
            {showInstagram && (
                <a
                    href={'https://www.google.com'}
                    target={'_blank'}
                    rel="noreferrer"
                    className={'thumbnail-link'}
                    style={{
                        padding: 1,
                        marginRight: spaceInBetween,
                        color: color
                    }}
                >
                    <Instagram className={'thumbnail'} fontSize={'large'} />
                </a>
            )}
            {showWhatsapp && (
                <a
                    href={'https://www.google.com'}
                    target={'_blank'}
                    rel="noreferrer"
                    className={'thumbnail-link'}
                    style={{
                        padding: 1,
                        marginRight: spaceInBetween,
                        color: color
                    }}
                >
                    <WhatsApp className={'thumbnail'} fontSize={'large'} />
                </a>
            )}
            {showYoutube && (
                <a
                    href={'https://www.google.com'}
                    target={'_blank'}
                    rel="noreferrer"
                    className={'thumbnail-link'}
                    style={{
                        padding: 1,
                        marginRight: spaceInBetween,
                        color: color
                    }}
                >
                    <YouTube className={'thumbnail'} fontSize={'large'} />
                </a>
            )}
        </div>
    );
};
