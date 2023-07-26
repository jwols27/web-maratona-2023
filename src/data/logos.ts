import logoSBC from '../shared/assets/logos/logo-sbc.png';
import logo45 from '../shared/assets/logos/logo-sbc45.png';
import unoesc from '../shared/assets/logos/logo-unoesc-colorida.png';
import pontoZero from '../shared/assets/logos/logo-ponto_zero.png';
import logoAcic from '../shared/assets/logos/logo-acic.png';
import logoDeatec from '../shared/assets/logos/logo-deatec.png';
import LogoPollen from '../shared/assets/logos/logo-pollen.png';
import logoPrefeitura from '../shared/assets/logos/logo-prefeitura.png';
import logoUffs from '../shared/assets/logos/logo-uffs.png';
import logoUnochapeco from '../shared/assets/logos/logo-unochapeco.png';
import logoNstech from '../shared/assets/logos/logo-nstech.png';
import logoOneVC from '../shared/assets/logos/logo-onevc.png';
import logoFapesc from '../shared/assets/logos/logo-fapesc.png';
import logoStone from '../shared/assets/logos/logo-stone.png';

export type TOrganizacao = {
    src: string;
    alt: string;
    href: string;
};

export const logos: TOrganizacao[] = [
    {
        src: logoSBC,
        alt: 'Logo SBC',
        href: 'https://www.sbc.org.br/'
    },
    {
        src: logo45,
        alt: 'Logo SBC 45 anos',
        href: 'https://www.sbc.org.br/'
    },
    {
        src: unoesc,
        alt: 'Logo UNOESC',
        href: 'https://www.unoesc.edu.br/'
    },
    {
        src: pontoZero,
        alt: 'Logo Ponto Zero',
        href: 'https://www.instagram.com/unoescpontozero/'
    },
    {
        src: logoAcic,
        alt: 'Logo ACIC',
        href: 'https://www.acichapeco.com.br/'
    },
    {
        src: logoDeatec,
        alt: 'Logo DEATEC',
        href: 'https://deatec.org.br/pt'
    },
    {
        src: LogoPollen,
        alt: 'Logo pollen',
        href: 'https://www.instagram.com/pollenparque/'
    },
    {
        src: logoPrefeitura,
        alt: 'Logo Prefeitura de Chapecó',
        href: 'https://chapeco.sc.gov.br/'
    },
    {
        src: logoUffs,
        alt: 'Logo UFFS',
        href: 'https://www.uffs.edu.br/'
    },
    {
        src: logoUnochapeco,
        alt: 'Logo Unochapecó',
        href: 'https://www.unochapeco.edu.br/'
    },
    {
        src: logoNstech,
        alt: 'Logo nstech',
        href: 'https://www.nstech.com.br/'
    },
    {
        src: logoOneVC,
        alt: 'Logo ONEVC',
        href: 'https://www.onevc.vc/'
    },
    {
        src: logoFapesc,
        alt: 'Logo Fapesc',
        href: 'https://fapesc.sc.gov.br/'
    },
    {
        src: logoStone,
        alt: 'Logo Stone',
        href: 'https://www.stone.com.br/'
    }
];

export const realizacao: TOrganizacao[] = logos.slice(0, 2);
export const organizacao: TOrganizacao[] = logos.slice(2, 4);
export const patrocinadores: Record<string, TOrganizacao[]> = {
    diamante: [logos[13]],
    prata: [logos[10], logos[11]],
    apoio: [...logos.slice(4, 10)],
    apoioInstitucional: [logos[12]]
};
