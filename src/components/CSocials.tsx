import React from 'react';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';

import '../shared/styles/thumbnail.css';

interface ISocialsProps {
    color: string;
    spaceInBetween?: string | number;
    showFacebook?: boolean;
    showInstagram?: boolean;
    showYoutube?: boolean;
}

export const CSocials: React.FC<ISocialsProps> = ({
    color,
    spaceInBetween = 0,
    showFacebook,
    showYoutube,
    showInstagram
}) => {
    return (
        <div style={{ marginTop: 4 }} className={'thumbnail'}>
            {showFacebook && (
                <a
                    href={'https://pt-br.facebook.com/maratona'}
                    target={'_blank'}
                    rel="noreferrer"
                    style={{
                        padding: 1,
                        marginRight: spaceInBetween,
                        color: color
                    }}
                >
                    <Facebook className={'thumbnail-link'} fontSize={'large'} />
                </a>
            )}
            {showInstagram && (
                <a
                    href={'https://www.instagram.com/maratonadeprogramacao'}
                    target={'_blank'}
                    rel="noreferrer"
                    style={{
                        padding: 1,
                        marginRight: spaceInBetween,
                        color: color
                    }}
                >
                    <Instagram
                        className={'thumbnail-link'}
                        fontSize={'large'}
                    />
                </a>
            )}
            {showYoutube && (
                <a
                    href={'https://www.youtube.com/c/maratonasbc'}
                    target={'_blank'}
                    rel="noreferrer"
                    style={{
                        padding: 1,
                        marginRight: spaceInBetween,
                        color: color
                    }}
                >
                    <YouTube className={'thumbnail-link'} fontSize={'large'} />
                </a>
            )}
        </div>
    );
};
