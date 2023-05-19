import React from 'react';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';

export type TNavItem = {
    label: string;
    path: string;
    icon?: React.ReactElement;
};
export interface IDrawerItemProps {
    id?: string;
    name: string;
    label: string;
    children: React.ReactNode;
    selected: boolean;
}

export const NavItem: React.FC<IDrawerItemProps> = ({
    name,
    label,
    children,
    selected
}) => {
    const theme = useTheme();
    return (
        <ListItem disablePadding sx={{ display: 'block' }}>
            <Link to={`/${name}`} className={'nav-item'}>
                <ListItemButton
                    selected={selected}
                    className={'nav-item-drawer'}
                    sx={{
                        background: selected
                            ? `${theme.palette.secondary.main}!important`
                            : undefined
                    }}
                >
                    <ListItemIcon
                        className={selected ? 'nav-item-drawer-selected' : ''}
                        sx={{
                            minWidth: 50,
                            color: theme.palette.secondary.main
                        }}
                    >
                        {children}
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                color={'text.secondary'}
                                fontWeight={400}
                            >
                                {label}
                            </Typography>
                        }
                    />
                </ListItemButton>
            </Link>
        </ListItem>
    );
};
