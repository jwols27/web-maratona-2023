import { IPerfilProps } from '../EquipeColaboradores/components/Perfil';
import ferreira from '../../../shared/assets/avatars/ferreira.jpg';
import meza from '../../../shared/assets/avatars/meza.png';
import ribas from '../../../shared/assets/avatars/ribas.jpg';
import viniSantos from '../../../shared/assets/avatars/vinicius_santos.jpeg';
import pauloCosta from '../../../shared/assets/avatars/paulo_costa.jpg';
import zonta from '../../../shared/assets/avatars/zonta.jpg';
import tabuti from '../../../shared/assets/avatars/tabuti.jpg';
import juliana from '../../../shared/assets/avatars/juliana.jpg';

export const equipe: IPerfilProps[] = [
    {
        src: ferreira,
        nome: 'Carlos E. Ferreira',
        instituicao: 'IME-USP',
        children: 'Diretor da Regional Brasil'
    },
    {
        src: meza,
        nome: 'Federico Meza',
        instituicao: 'Universidad de Talca, Chile',
        children: 'Diretor da América Latina'
    },
    {
        src: ribas,
        nome: 'Bruno César Ribas',
        instituicao: 'UNB',
        children: 'Diretor de Sistemas'
    },
    {
        src: viniSantos,
        nome: 'Vinicius Fernandes dos Santos',
        instituicao: 'UFMG',
        children: 'Juiz chefe do Brasil'
    },
    {
        src: pauloCosta,
        nome: 'Paulo Cezar Pereira Costa',
        instituicao: 'UFG',
        children: 'Juiz chefe da América Latina'
    },
    {
        src: zonta,
        nome: 'Tiago Zonta',
        instituicao: 'UNOESC',
        children:
            'Diretor da 28ª Final Brasileira da Maratona SBC de Programação'
    },
    {
        src: tabuti,
        nome: 'Lucy Mari Tabuti',
        instituicao: 'Instituto Criativo',
        children: 'Diretora de patrocínios da Maratona SBC de Programação'
    },
    {
        src: juliana,
        nome: 'Juliana e Sá Zonta',
        instituicao: 'ZIT Consultoria',
        children: 'Evento e integração'
    }
];
