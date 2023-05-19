import React from 'react';
import ErrorView from './pages/Error/Error.view';
import {
    ComoParticiparTemplate,
    HomeTemplate,
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

    //SOBRE A FINAL
    {
        path: 'programacao',
        element: <ProgramacaoTemplate />
    },

    //ERROR
    {
        path: '*',
        element: <ErrorView></ErrorView>
    }
];

export default routerData;
