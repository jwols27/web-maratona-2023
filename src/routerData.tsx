import React from 'react';
import ErrorView from './pages/Error/Error.view';
import {
    AcomodacoesTurismo,
    ComoParticiparTemplate,
    EquipeColaboradoresTemplate,
    HomeTemplate,
    PatrocinadoresTemplate,
    SobreFinalTemplate,
    SobreMaratona,
    ProgramacaoTemplate,
    CafeComLeite
} from './pages/Templates';

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
        element: <SobreMaratona />
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
        element: <AcomodacoesTurismo />
    },

    //PATROCINADORES
    {
        path: 'patrocinadores',
        element: <PatrocinadoresTemplate />
    },

    //CAFÉ COM LEITE E VISITANTES
    {
        path: 'cafe-com-leite-e-visitantes',
        element: <CafeComLeite />
    },

    //ERROR
    {
        path: '*',
        element: <ErrorView />
    }
];

export default routerData;
