import { TNavItem } from '../components';
import {
    BsCalendar2Fill,
    BsFillBalloonFill,
    BsHeartFill,
    BsLaptopFill,
    BsPeopleFill,
    BsTrophyFill
} from 'react-icons/bs';
import { FaCoffee, FaHotel } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import React from 'react';

export const navHome: TNavItem = {
    label: 'Início',
    path: '',
    icon: <AiFillHome size={'20'} />
};
export const navItems: TNavItem[] = [
    {
        label: 'Como participar?',
        path: 'como-participar',
        icon: <BsLaptopFill size={'20'} />
    },
    {
        label: 'Maratona de Programação',
        path: 'maratona',
        icon: <BsFillBalloonFill size={'20'} />
    },
    {
        label: 'Sobre a final',
        path: 'final',
        icon: <BsTrophyFill size={'20'} />
    },
    {
        label: 'Programação',
        path: 'programacao',
        icon: <BsCalendar2Fill size={'20'} />
    },
    {
        label: 'Equipe e colaboradores',
        path: 'equipe-e-colaboradores',
        icon: <BsPeopleFill size={'20'} />
    },
    {
        label: 'Acomodações e Turismo',
        path: 'acomodacoes-e-turismo',
        icon: <FaHotel size={'20'} />
    },
    {
        label: 'Patrocinadores',
        path: 'patrocinadores',
        icon: <BsHeartFill size={'20'} />
    },
    {
        label: 'Café-com-leite e visitantes',
        path: 'cafe-com-leite-e-visitantes',
        icon: <FaCoffee size={'20'} />
    }
];
