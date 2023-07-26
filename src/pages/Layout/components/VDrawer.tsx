import React from 'react';
import { Box, Divider, Drawer } from '@mui/material';

import { NavItem, TNavItem } from './NavItem';
import { LogoMaratonaChapeco } from '../../../shared/icons/LogoMaratonaChapeco';

import '../layout.css';

interface IVDrawerProps {
    itens: TNavItem[];
    open: boolean;
    handleDrawer: (b: boolean) => void;
    path: string;
}

export const VDrawer: React.FC<IVDrawerProps> = ({
    itens,
    open,
    handleDrawer,
    path
}) => {
    return (
        <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={() => handleDrawer(false)}
        >
            <Box
                width={300}
                onClick={() => handleDrawer(false)}
                onKeyDown={() => handleDrawer(false)}
                bgcolor={'primary.main'}
                flexGrow={1}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    height={{ xs: 115, md: 175 }}
                    bgcolor={'primary.dark'}
                    py={1.5}
                >
                    <Box width={{ xs: 75, md: 125 }} height={'100%'}>
                        <LogoMaratonaChapeco invert />
                    </Box>
                </Box>
                {itens.map((item) => (
                    <div key={item.path}>
                        <Divider />
                        <NavItem
                            name={item.path}
                            label={item.label}
                            selected={path === item.path}
                        >
                            {item.icon}
                        </NavItem>
                    </div>
                ))}
                <Divider />
            </Box>
        </Drawer>
    );
};
