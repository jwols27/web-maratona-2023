import React from 'react';
import '../../shared/styles/balloon.css';

export type TBalloon = {
    size: number;
    offset: string;
    color: string;
    children: React.ReactNode;
};

interface ICBalloonProps {
    size: number;
    color: string;
    arrow?: boolean;
    children: React.ReactNode;
}

export const CBalloon: React.FC<ICBalloonProps> = ({
    size,
    color,
    arrow,
    children
}) => {
    return (
        <div className={`balloon-container`}>
            <div
                className={'balloon'}
                style={{
                    width: size,
                    height: size,
                    backgroundColor: color
                }}
            >
                {children}
            </div>
            {arrow && (
                <div
                    style={{
                        borderWidth: `${size / 3}px ${size / 12}px 0px ${
                            size / 12
                        }px`,
                        borderTopColor: color
                    }}
                    className={'balloon-arrow'}
                />
            )}
        </div>
    );
};
