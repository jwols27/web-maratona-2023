import React from 'react';
import { RouteObject } from 'react-router-dom';
import ErrorView from './pages/Fallback/Error.view';
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

const routerData: RouteObject[] = [
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
