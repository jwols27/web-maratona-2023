import React from 'react';
import ErrorView from './pages/Error/Error.view';
import {
    ComoParticiparTemplate,
    HomeTemplate,
    PatrocinadoresTemplate,
    SobreFinalTemplate
} from './pages/Templates';
import { ProgramacaoTemplate } from './pages/Templates/Programacao/ProgramacaoTemplate';

interface IRouterProps {
    path: string;
    element: React.ReactElement;
    children?: IRouterProps[];
}

const routerData: IRouterProps[] = [
    //HOME
    {
        path: '',
        element: <HomeTemplate />
    },

    //COMO PARTICIPAR
    {
        path: 'como-participar',
        element: <ComoParticiparTemplate />
    },

    //SOBRE A FINAL
    {
        path: 'final',
        element: <SobreFinalTemplate />
    },

    //PROGRAMAÇÃO
    {
        path: 'programacao',
        element: <ProgramacaoTemplate />
    },

    //PATROCINADORES
    {
        path: 'patrocinadores',
        element: <PatrocinadoresTemplate />
    },

    //ERROR
    {
        path: '*',
        element: <ErrorView />
    }
];

export default routerData;
