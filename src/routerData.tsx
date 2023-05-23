import React from 'react';
import ErrorView from './pages/Error/Error.view';
import {
    ComoParticiparTemplate,
    EquipeColaboradoresTemplate,
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

    //MARATONA
    {
        path: 'maratona',
        element: <></>
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

    //EQUIPE E COLABORADORES
    {
        path: 'equipe-e-colaboradores',
        element: <EquipeColaboradoresTemplate />
    },

    //ACOMODAÇÕES E TURISMO
    {
        path: 'acomodacoes-e-turismo',
        element: <></>
    },

    //PATROCINADORES
    {
        path: 'patrocinadores',
        element: <PatrocinadoresTemplate />
    },

    //CAFÉ COM LEITE E VISITANTES
    {
        path: 'cafe-com-leite-e-visitantes',
        element: <></>
    },

    //ERROR
    {
        path: '*',
        element: <ErrorView />
    }
];

export default routerData;
