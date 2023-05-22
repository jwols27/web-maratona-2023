import React from 'react';
import { Box, Divider, Drawer } from '@mui/material';

import { NavItem, TNavItem } from './NavItem';
import '../layout.css';
import logoChap from '../../../shared/assets/logos/logo-chapeco.png';

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
                    <img
                        src={logoChap}
                        style={{
                            objectFit: 'contain',
                            height: '100%'
                        }}
                        alt={'Maratona SBC de Programação'}
                    />
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
