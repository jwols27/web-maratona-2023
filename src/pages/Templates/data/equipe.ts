import { IPerfilProps } from '../EquipeColaboradores/components/Perfil';
import zonta from '../../../shared/assets/avatars/zonta.jpg';
import tabuti from '../../../shared/assets/avatars/tabuti.jpg';
import juliana from '../../../shared/assets/avatars/juliana.jpg';

export const equipe: IPerfilProps[] = [
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
    // {},
    // {},
    // {},
    // {},
    // {}
];
