import React from 'react';

interface ILogoMaratonaChapeco {
    color1?: string;
    color2?: string;
    invert?: boolean;
}

export const LogoMaratonaChapeco: React.FC<ILogoMaratonaChapeco> = ({
    invert,
    color1 = !invert ? '#2f4a75' : 'white',
    color2 = !invert ? '#cee7f8' : '#2f4a75'
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.5 188.81">
            <title>Logotipo Maratona Chapecó</title>
            <g id="Camada_2" data-name="Camada 2">
                <g id="Camada_1-2" data-name="Camada 1">
                    <path
                        fill={color1}
                        d="M58,119.07H99.05s1.72-11.76,1.53-20-2.73-24.53-9-30.73c0,0-12.86-5.51-26.42.14a44.66,44.66,0,0,0-7.87,24.73c-.16,14.72.72,25.82.72,25.82Z"
                    />
                    <path
                        fill={color1}
                        d="M98.5,69.67s5,13.83,5.09,25.1c0,0,6.92-5.45,9.32-18s1.37-19.49-.37-25.54Z"
                    />
                    <path
                        fill={color1}
                        d="M63.08,47.87l6.25-3a13.2,13.2,0,0,1,10.92-5.63s5.22-.66,9,5.49l5.53,3.13-4.68.72A10.5,10.5,0,0,1,87.74,59.2c-4.56,4.79-8.56,3.48-14.2,1.92s-4.86-12.71-4.86-12.71Z"
                    />
                    <path
                        fill={color1}
                        d="M88.92,48.29a.92.92,0,1,1,1.64-.84,9.94,9.94,0,0,1,.84,2.31A10.79,10.79,0,0,1,88,60.23a13.21,13.21,0,0,1-17.4,0A10.87,10.87,0,0,1,67,52.17a10.67,10.67,0,0,1,1.11-4.72.92.92,0,1,1,1.64.84,8.9,8.9,0,0,0-.9,3.88,9,9,0,0,0,3,6.66,11.34,11.34,0,0,0,14.92,0,9,9,0,0,0,3.06-6.66,8.75,8.75,0,0,0-.93-3.88Z"
                    />
                    <path
                        fill={color1}
                        d="M58.78,118.13H98.29a86.94,86.94,0,0,0,.62-22.29A90.74,90.74,0,0,0,96.6,81.49c-1.2-4.65-3-9-5.57-12.29a52.23,52.23,0,0,0-12.87-2.33A36.44,36.44,0,0,0,65.72,69.3c-1,1.37-7.11,10.23-7.61,25.77-.47,13.9.34,20.89.67,23.06ZM99.05,120H58a.89.89,0,0,1-.9-.75S55.7,112.41,56.25,95s8-26.89,8.15-27.08a1.11,1.11,0,0,1,.39-.28s6.85-2.8,13.42-2.64A54.84,54.84,0,0,1,91.84,67.5a1.19,1.19,0,0,1,.44.3c2.91,3.53,4.81,8.25,6.1,13.23a95,95,0,0,1,2.39,14.65,88.58,88.58,0,0,1-.79,23.5.93.93,0,0,1-.93.82Z"
                    />
                    <path
                        fill={color1}
                        d="M99.52,69.86c.76,2.43,4.25,13.76,4.9,23,2.38-2.36,7.2-8.65,8.33-21.68,1-12,.28-16.6-.32-18.32Zm3.17,24.93c-.28-10-4.75-23.79-5-24.77a.93.93,0,0,1,.12-.91l14-18.51,0,0a.9.9,0,0,1,1.29-.07s3.06,2.45,1.46,20.84-10.46,24.18-10.48,24.21a1.18,1.18,0,0,1-.49.16.93.93,0,0,1-.94-.91Z"
                    />
                    <polygon
                        fill={color1}
                        points="42.28 69.11 31.78 61.66 31.78 86.45 42.33 78.92 42.28 69.11"
                    />
                    <rect
                        fill={color1}
                        x="46.47"
                        y="65.95"
                        width="5.11"
                        height="54.61"
                    />
                    <path
                        fill={color1}
                        d="M41.36,79.2V69.58L32.7,63.43V84.74Zm1.85-10.09V79.72a.93.93,0,0,1-.44.77L32.31,87.22a1.13,1.13,0,0,1-.53.16.93.93,0,0,1-.93-.93V61.63a.93.93,0,0,1,.16-.51.94.94,0,0,1,1.3-.24l10.46,7.41a1,1,0,0,1,.44.82Z"
                    />
                    <path
                        fill={color1}
                        d="M51.58,121.5H46.47a.94.94,0,0,1-.93-.94V66a.92.92,0,0,1,.93-.93h5.11a.92.92,0,0,1,.93.93v54.61a.94.94,0,0,1-.93.94Zm-4.19-1.87h3.27V66.87H47.39Z"
                    />
                    <path
                        fill={color1}
                        d="M67.17,46.93h24l-2.47-1.4a.91.91,0,0,1-.4-.47h0s-2-5.37-9.37-4.86-8.77,4.93-8.77,5a.86.86,0,0,1-.48.56ZM94.73,48.8H63.08a.9.9,0,0,1-.83-.51A1,1,0,0,1,62.69,47l5.92-2.85c.6-1.29,3-5.31,10.22-5.82,7.57-.56,10.46,4.39,11.09,5.7l5.18,3a.92.92,0,0,1-.37,1.77Z"
                    />
                    <path
                        fill={color2}
                        d="M61.23,74.65a.93.93,0,0,1,1.41-1.22S72.1,84.69,76.75,96.59c2.75.91,18.3,6.31,24,13.67a1,1,0,0,1-.14,1.33,1,1,0,0,1-1.3-.16c-5.94-7.65-23.5-13.18-23.55-13.21a1,1,0,0,1-.58-.53c-4.49-11.76-14-23-14-23Z"
                    />
                    <polygon
                        fill={color1}
                        points="66.99 48.8 91.67 48.8 91.96 50.25 66.17 50.25 66.99 48.8"
                    />
                    <polygon
                        fill={color1}
                        points="119.99 37.18 120.34 38.62 117.98 38.7 118.6 37.02 119.99 37.18"
                    />
                    <path
                        fill={color1}
                        d="M118,38.79l0,0a.1.1,0,0,1,0-.09l.62-1.68a.11.11,0,0,1,.1-.06l1.39.16a.08.08,0,0,1,.08.07l.35,1.44a.11.11,0,0,1,0,.08.11.11,0,0,1-.07,0l-2.37.08Zm.7-1.67-.55,1.49,2.12-.08-.31-1.27Z"
                    />
                    <path
                        fill={color1}
                        d="M113.85,51.45a.2.2,0,0,1-.14-.19c.27-4.24,1.86-5.52,3.26-6.64a7.31,7.31,0,0,0,1.54-1.5,5.49,5.49,0,0,0,.7-4.41.19.19,0,0,1,.36-.11,5.79,5.79,0,0,1-.76,4.73,7.73,7.73,0,0,1-1.6,1.58c-1.41,1.13-2.87,2.3-3.13,6.37a.18.18,0,0,1-.19.18Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M123.41.44a11.24,11.24,0,0,0-8.09,2.18c-4.48,3.19-5.62,8.25-5.21,13.46a22.72,22.72,0,0,0,1.55,6.37h0c1.18,3.07,1.81,6.54,2.75,9.34s2.2,4.93,4.66,5.28h0a5.21,5.21,0,0,0,2.28-.24A5.65,5.65,0,0,0,124,35h0a18.23,18.23,0,0,0,2-4.14,11,11,0,0,1,3-4.5h0a20.07,20.07,0,0,0,4.57-5.22,13,13,0,0,0,1.72-8.69h0a14.37,14.37,0,0,0-3.62-7.69,13.83,13.83,0,0,0-6.64-4h0l-.77-.18c-.25,0-.51-.1-.77-.13Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M111.36,7.38a17.68,17.68,0,0,0-1.25,8.7,22.72,22.72,0,0,0,1.55,6.37h0c1.18,3.07,1.81,6.54,2.75,9.34s2.2,4.93,4.66,5.28h0a5.21,5.21,0,0,0,2.28-.24A5.65,5.65,0,0,0,124,35h0a18.23,18.23,0,0,0,2-4.14,11,11,0,0,1,3-4.5h0a20.07,20.07,0,0,0,4.57-5.22q.19-.33.36-.66c-2.61.36-5.33,2-8.18,2.59-5.61,1.11-11.58-2.56-13.71-7a13.67,13.67,0,0,1-.6-8.65Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M110.78,19.81c.24.85.53,1.72.88,2.64h0c1.18,3.07,1.81,6.54,2.75,9.34s2.2,4.93,4.66,5.28h0a5.21,5.21,0,0,0,2.28-.24A5.65,5.65,0,0,0,124,35h0a18.23,18.23,0,0,0,2-4.14,11,11,0,0,1,3-4.5h0a23.9,23.9,0,0,0,2-1.83c-1.62.61-11,1.23-15.39-.58a8.67,8.67,0,0,1-4.74-4.15Z"
                    />
                    <path
                        fill={color1}
                        d="M123.36.76a10,10,0,0,0-4,.26,12.48,12.48,0,0,0-3.89,1.87,11.52,11.52,0,0,0-4.32,5.81,18.33,18.33,0,0,0-.75,7.36,20.4,20.4,0,0,0,.5,3.05,24.7,24.7,0,0,0,1,3.21,54.58,54.58,0,0,1,1.66,5.52c.36,1.35.7,2.67,1.09,3.84a11.46,11.46,0,0,0,1.71,3.45,4.1,4.1,0,0,0,2.68,1.61,4,4,0,0,0,1,0,6.19,6.19,0,0,0,1.1-.23,5.41,5.41,0,0,0,1.33-.68,5.21,5.21,0,0,0,1.12-1.05,11.48,11.48,0,0,0,1.48-3c.13-.34.27-.68.43-1.07a15.88,15.88,0,0,1,1.22-2.44,8.66,8.66,0,0,1,1.88-2.2A22,22,0,0,0,131,24a16.92,16.92,0,0,0,2.23-3,13.42,13.42,0,0,0,1.54-3.83,12.25,12.25,0,0,0,.15-4.63,14.57,14.57,0,0,0-1.24-4.09A13.47,13.47,0,0,0,131.35,5a13.14,13.14,0,0,0-3-2.42,13,13,0,0,0-3.53-1.5h0a3.18,3.18,0,0,0-.37-.09,3.54,3.54,0,0,0-.38-.09,2.73,2.73,0,0,0-.37-.07l-.38-.07ZM119.23.38a10.3,10.3,0,0,1,4.24-.27c.14,0,.27,0,.39.06l.39.08.39.08.39.1h0A14.21,14.21,0,0,1,128.73,2a14.48,14.48,0,0,1,3.11,2.54,14.32,14.32,0,0,1,2.41,3.61,15.34,15.34,0,0,1,1.29,4.26,13,13,0,0,1-.16,4.88,14.08,14.08,0,0,1-1.6,4,18.07,18.07,0,0,1-2.33,3.13,21.32,21.32,0,0,1-2.32,2.18,8.57,8.57,0,0,0-1.74,2A17.07,17.07,0,0,0,126.23,31c-.14.33-.28.69-.42,1a12.09,12.09,0,0,1-1.59,3.16A5.71,5.71,0,0,1,123,36.38a5.54,5.54,0,0,1-1.51.77,5.35,5.35,0,0,1-1.22.26,4.82,4.82,0,0,1-1.21,0,4.76,4.76,0,0,1-3.11-1.84,12.27,12.27,0,0,1-1.81-3.66c-.41-1.22-.76-2.53-1.11-3.89a49.49,49.49,0,0,0-1.63-5.44,26,26,0,0,1-1.06-3.29,19.57,19.57,0,0,1-.52-3.17,19.08,19.08,0,0,1,.79-7.62,12.23,12.23,0,0,1,4.56-6.15,12.92,12.92,0,0,1,4.1-2Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M112.13,10.37c.09-5.5,5.68-8.7,10.34-8.53,8.61.31,13.73,9.06,8.13,18.4.08-2.44,1.06-1.66,0-8.46-.89-6-2.44-8.51-8.25-8.73-4.33-.15-9.13,3-10.25,7.32Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M119.47,21.39c3.09.82,6.41-1.53,7.4-5.24s-.72-7.4-3.81-8.23-6.4,1.53-7.39,5.25.72,7.39,3.8,8.22Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M117.89,14.28a4.84,4.84,0,1,0-3.38-5.91,4.83,4.83,0,0,0,3.38,5.91Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M120.5,2.92c2.38-.29,4.38.17,4.48,1.05s-1.73,1.83-4.1,2.12-4.38-.17-4.48-1,1.73-1.84,4.1-2.13Z"
                    />
                    <path
                        fill={color1}
                        d="M111.1,53.51a.19.19,0,0,0,.19-.15c.29-1.79-.57-3.31-2.49-4.42a4.62,4.62,0,0,1-2-2,.18.18,0,0,0-.24-.11.19.19,0,0,0-.11.23,4.86,4.86,0,0,0,2.2,2.24,3.94,3.94,0,0,1,2.3,4,.18.18,0,0,0,.16.21Z"
                    />
                    <polygon
                        fill={color1}
                        points="106.69 45.55 107.69 46.56 105.71 47.28 105.73 45.96 106.69 45.55"
                    />
                    <path
                        fill={color1}
                        d="M105.66,47.35a.07.07,0,0,1,0-.07l0-1.32a.11.11,0,0,1,0-.09l1-.41a.11.11,0,0,1,.1,0l1,1a.1.1,0,0,1,0,.09.09.09,0,0,1-.06.06l-2,.72h0Zm1-1.7-.85.37,0,1.13,1.73-.63Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M111.17,28a11.81,11.81,0,0,1-.32,9.21h0c-1.24,3-2.29,4.21-2.76,6.31h0A3.18,3.18,0,0,1,105.73,46h0a5.87,5.87,0,0,1-4.19-1h0a29.28,29.28,0,0,1-5-4.26h0c-2-1.95-5.52-6.55-5.08-11.46h0c.43-4.92,3.46-9,8.85-9.11h.18c5.29,0,9.49,4.43,10.71,7.82Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M111.17,28a11.81,11.81,0,0,1-.32,9.21h0c-1.24,3-2.29,4.21-2.76,6.31h0A3.18,3.18,0,0,1,105.73,46h0a5.87,5.87,0,0,1-4.19-1h0a29.28,29.28,0,0,1-5-4.26h0a18.82,18.82,0,0,1-4.69-7.64c2.41.19.69,1.71,6.24,1,1.73-.21,3.93-3.72,7.31-1.9,5.53,3,6-1.91,5-6a10.21,10.21,0,0,1,.84,1.74Z"
                    />
                    <path
                        fill={color1}
                        d="M110.86,28.1a12.4,12.4,0,0,0-4.31-5.49,10.3,10.3,0,0,0-6.09-2.12h-.18a8.07,8.07,0,0,0-5.83,2.42,10.28,10.28,0,0,0-2.69,6.38,11.19,11.19,0,0,0,1,5.54,19.33,19.33,0,0,0,3.93,5.65c1,1,1.89,1.84,2.71,2.55a15.57,15.57,0,0,0,2.26,1.67h0a6.94,6.94,0,0,0,1.76.81,6.76,6.76,0,0,0,2.22.12,2.84,2.84,0,0,0,2.08-2.19,13.79,13.79,0,0,1,1.4-3.49c.42-.81.88-1.73,1.38-2.9a12.92,12.92,0,0,0,1.06-4.31,11.84,11.84,0,0,0-.75-4.64Zm1.4,4.68a13.49,13.49,0,0,1-1.11,4.53c-.5,1.21-1,2.13-1.39,2.94a14.47,14.47,0,0,0-1.35,3.33,3.49,3.49,0,0,1-2.62,2.7h-.05a7.51,7.51,0,0,1-2.43-.13,7.77,7.77,0,0,1-1.93-.88h0A16.93,16.93,0,0,1,99,43.54c-.84-.73-1.75-1.6-2.75-2.58A20.68,20.68,0,0,1,92.2,35.1a12.08,12.08,0,0,1-1.11-5.86A11.06,11.06,0,0,1,94,22.44a8.8,8.8,0,0,1,6.29-2.62h.19a11.07,11.07,0,0,1,6.48,2.24,13.26,13.26,0,0,1,4.55,5.81,12.26,12.26,0,0,1,.77,4.91Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M96.26,22.11c-4.06,2.22-4,9.9-1.08,11.91-1-3.81-.94-9,1.08-11.91Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M110.33,31.39c.49-5.36-5.56-9.9-10-9.8l-2.11.33h0l-.31.07.16,0c4.62.57,11.09,4.6,12.28,9.38Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M102.51,30.81a4.38,4.38,0,1,1,4.33-4.38,4.37,4.37,0,0,1-4.33,4.38Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M103.6,24.09c-1.2-.88-2.42-1.26-2.73-.82s.41,1.49,1.6,2.37,2.41,1.25,2.73.83-.41-1.49-1.6-2.38Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M99.6,31.55a2.18,2.18,0,1,1,2.15-2.17,2.17,2.17,0,0,1-2.15,2.17Z"
                    />
                    <polygon
                        fill={color1}
                        points="128.75 46.53 127.78 47.26 129.22 48.53 129.75 47.3 128.75 46.53"
                    />
                    <path
                        fill={color1}
                        d="M129.15,48.7s0,0-.05,0l-1.45-1.27a.2.2,0,0,1-.06-.15.17.17,0,0,1,.08-.14l1-.72a.2.2,0,0,1,.23,0l1,.76a.17.17,0,0,1,.06.22l-.53,1.24a.17.17,0,0,1-.13.1A.14.14,0,0,1,129.15,48.7Zm-1.08-1.43,1.08,1,.38-.87-.79-.59Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M134.34,26a11.5,11.5,0,0,0-7.75,8.66h0c-.84,4.15,1.07,6.05,1.1,8.49h0c0,2.44.71,3.18,1.53,3.77h0a3.34,3.34,0,0,0,2.95.65h0c2-.32,4.34-1.91,7-3.12h0c3.75-1.71,8-5.6,7-11.57h0a8.15,8.15,0,0,0-5.07-6.31h0a10.48,10.48,0,0,0-6.75-.57Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M127.56,42.08a5.4,5.4,0,0,1,.13,1.07h0c0,2.44.71,3.18,1.53,3.77h0a3.34,3.34,0,0,0,2.95.65h0c2-.32,4.34-1.91,7-3.12h0a13.5,13.5,0,0,0,5.17-4.06c-1.86,1.45-3.75,3.21-6,3.64-3.77.7-7.85,1.17-10.69-2Z"
                    />
                    <path
                        fill={color1}
                        d="M134.43,26.32a10.69,10.69,0,0,0-4.85,3.13,11.33,11.33,0,0,0-2.66,5.28,10.07,10.07,0,0,0,.51,5.67,9.09,9.09,0,0,1,.59,2.75,5.72,5.72,0,0,0,.43,2.43,2.88,2.88,0,0,0,1,1.07l0,0a3,3,0,0,0,2.67.58,16.26,16.26,0,0,0,4.37-1.83c.8-.42,1.65-.87,2.54-1.27a12.81,12.81,0,0,0,5.62-4.8,9.2,9.2,0,0,0,1.19-6.41,7.8,7.8,0,0,0-1.59-3.63A8.35,8.35,0,0,0,141,26.87a10.49,10.49,0,0,0-3.33-.82,8.85,8.85,0,0,0-3.2.27ZM129.1,29a11.23,11.23,0,0,1,5.16-3.32,9.62,9.62,0,0,1,3.43-.3,11.58,11.58,0,0,1,3.53.88,9,9,0,0,1,3.54,2.63,8.24,8.24,0,0,1,1.73,3.93,9.86,9.86,0,0,1-1.28,6.88,13.57,13.57,0,0,1-5.91,5.06c-.87.39-1.7.83-2.51,1.25a16.63,16.63,0,0,1-4.57,1.89,3.59,3.59,0,0,1-3.15-.68l0,0a3.45,3.45,0,0,1-1.18-1.31,6.47,6.47,0,0,1-.5-2.73,8.47,8.47,0,0,0-.55-2.54,10.76,10.76,0,0,1-.53-6A12,12,0,0,1,129.1,29Z"
                    />
                    <path
                        fill={color1}
                        d="M112.92,55.94h0a.19.19,0,0,1-.08-.25,8.06,8.06,0,0,1,5.91-4.11c.68-.09,1.45-.13,2.28-.18a16.25,16.25,0,0,0,4.41-.65,7.93,7.93,0,0,0,2.92-2.94.19.19,0,0,1,.26-.07.18.18,0,0,1,.06.25,8,8,0,0,1-3.1,3.1,16.1,16.1,0,0,1-4.53.67c-.82.06-1.59.1-2.26.19a7.76,7.76,0,0,0-5.62,3.91A.18.18,0,0,1,112.92,55.94Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M141.52,28c4.38,2.95,4.48,7.85,1.13,11.68-1.39,1.6-2.26,1.76-4.17,2.64h0l-.58.25.23-.23c4.35-4.2,7.14-8.88,3.38-14.33Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M126.71,38.14c1.28,3.55,1.5,4.61,5.14,6-4-.34-4.92-2.39-5.14-6Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M133.42,27.69c-4.32,2.65-5.73,8-5,12.79a5.37,5.37,0,0,0,.19,1.26,11.05,11.05,0,0,1-1-2.68c-1-4.25,1.32-9.74,5.84-11.37Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M133.87,41.68c2.15.92,4.8-.43,5.9-3s.26-5.44-1.89-6.36-4.79.44-5.9,3-.25,5.43,1.89,6.34Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M133.47,36.38a3.54,3.54,0,1,0-1.82-4.63,3.53,3.53,0,0,0,1.82,4.63Z"
                    />
                    <path
                        fill={color1}
                        fillRule={'evenodd'}
                        d="M136.56,28.43c1.75,0,3.15.6,3.13,1.23s-1.45,1.15-3.19,1.11-3.15-.58-3.13-1.23,1.44-1.14,3.19-1.11Z"
                    />
                    <path
                        fill={color1}
                        d="M8.12,148.82,6,145.53l-2.1,3.29H1.49l3.32-5.17-3.15-4.92H4.08l1.93,3,1.94-3h2.42l-3.15,4.9,3.34,5.19Z"
                    />
                    <path
                        fill={color1}
                        d="M17.58,148.82l-2.11-3.29-2.11,3.29H10.94l3.32-5.17-3.15-4.92h2.42l1.94,3,1.94-3h2.42l-3.15,4.9L20,148.82Z"
                    />
                    <path
                        fill={color1}
                        d="M20.25,138.73h2.32l2.65,7.75,2.64-7.75H30.2l-3.66,10.09H23.89Z"
                    />
                    <path fill={color1} d="M33.38,138.73v10.09H31.24V138.73Z" />
                    <path fill={color1} d="M37.53,138.73v10.09H35.39V138.73Z" />
                    <path fill={color1} d="M41.69,138.73v10.09H39.55V138.73Z" />
                    <path
                        fill={color1}
                        d="M58.19,148.82H56.07v-6.54L53,147h-.25l-3.05-4.67v6.53H47.58V138.73h2.2l3.11,4.77,3.1-4.77h2.2Z"
                    />
                    <path
                        fill={color1}
                        d="M66.54,147H62.21l-.65,1.82H59.25l3.8-10.09H65.7l3.81,10.09H67.19Zm-.67-1.86L64.38,141l-1.49,4.12Z"
                    />
                    <path
                        fill={color1}
                        d="M74.33,145.32H72.71v3.5H70.57V138.73h4.34a3.48,3.48,0,0,1,3.61,3.34A3.28,3.28,0,0,1,76.43,145l2.4,3.81H76.52Zm-1.62-1.75h2.2a1.49,1.49,0,0,0,0-3h-2.2Z"
                    />
                    <path
                        fill={color1}
                        d="M86.41,147H82.09l-.66,1.82H79.12l3.8-10.09h2.65l3.82,10.09H87.06Zm-.67-1.86L84.26,141l-1.49,4.12Z"
                    />
                    <path
                        fill={color1}
                        d="M96.83,140.63H93.9v8.19H91.76v-8.19H88.84v-1.9h8Z"
                    />
                    <path
                        fill={color1}
                        d="M96.91,143.77a5.65,5.65,0,1,1,5.62,5.25A5.39,5.39,0,0,1,96.91,143.77Zm9.13,0a3.51,3.51,0,1,0-3.51,3.3A3.33,3.33,0,0,0,106,143.77Z"
                    />
                    <path
                        fill={color1}
                        d="M118.1,138.73v10.09h-1.63l-4.65-6.17v6.17h-2.14V138.73h1.63l4.65,6.15v-6.15Z"
                    />
                    <path
                        fill={color1}
                        d="M126.44,147h-4.33l-.65,1.82h-2.31l3.8-10.09h2.65l3.81,10.09h-2.32Zm-.67-1.86L124.28,141l-1.48,4.12Z"
                    />
                    <path
                        fill={color1}
                        d="M133.79,146.53l1.83-1a2.41,2.41,0,0,0,2.49,1.54c1.29,0,1.74-.5,1.74-1.06,0-.75-.73-1-2.34-1.47s-3.27-1.1-3.27-3,1.7-3,3.56-3a4.17,4.17,0,0,1,3.88,2.26l-1.8,1a2.14,2.14,0,0,0-2.08-1.3c-.9,0-1.42.43-1.42,1s.41.95,2.06,1.41,3.55,1,3.55,3.1c0,1.89-1.63,3-3.94,3S134.38,148,133.79,146.53Z"
                    />
                    <path
                        fill={color1}
                        d="M151.29,145.89a3.1,3.1,0,0,1-3.38,2.93h-4.6V138.73h4.27a3,3,0,0,1,3.31,2.84,2.45,2.45,0,0,1-1,2A2.52,2.52,0,0,1,151.29,145.89Zm-5.85-5.3v2.22h2.14a1.12,1.12,0,0,0,1.17-1.11,1.1,1.1,0,0,0-1.17-1.11Zm3.72,5.17a1.18,1.18,0,0,0-1.25-1.18h-2.47V147h2.47A1.19,1.19,0,0,0,149.16,145.76Z"
                    />
                    <path
                        fill={color1}
                        d="M152.19,143.77a5.31,5.31,0,0,1,5.64-5.24,5.51,5.51,0,0,1,4.67,2.38l-1.85,1a3.19,3.19,0,0,0-2.82-1.44,3.31,3.31,0,1,0,0,6.61,3.18,3.18,0,0,0,2.82-1.42l1.85,1a5.49,5.49,0,0,1-4.67,2.38A5.32,5.32,0,0,1,152.19,143.77Z"
                    />
                    <path
                        fill={color1}
                        d="M21.68,161.06a5,5,0,0,1-5.23,5.05h-4.3V156h4.3A5,5,0,0,1,21.68,161.06Zm-2.05,0a3,3,0,0,0-3.18-3.14H14.28v6.29h2.17A3,3,0,0,0,19.63,161.06Z"
                    />
                    <path
                        fill={color1}
                        d="M29.91,164.21v1.9H23.2V156h6.63v1.9H25.34v2.15h4.11v1.87H25.34v2.27Z"
                    />
                    <path
                        fill={color1}
                        d="M43,159.41a3.51,3.51,0,0,1-3.7,3.38H37.43v3.32H35.29V156h4.05A3.51,3.51,0,0,1,43,159.41Zm-2.12,0a1.51,1.51,0,0,0-1.58-1.53H37.43v3.05h1.91A1.52,1.52,0,0,0,40.92,159.41Z"
                    />
                    <path
                        fill={color1}
                        d="M48.2,162.61H46.58v3.5H44.44V156h4.34a3.48,3.48,0,0,1,3.61,3.34,3.28,3.28,0,0,1-2.09,2.94l2.4,3.81H50.39Zm-1.62-1.75h2.2a1.49,1.49,0,0,0,0-3h-2.2Z"
                    />
                    <path
                        fill={color1}
                        d="M53.34,161.06A5.65,5.65,0,1,1,59,166.31,5.39,5.39,0,0,1,53.34,161.06Zm9.13,0a3.51,3.51,0,1,0-3.51,3.3A3.33,3.33,0,0,0,62.47,161.06Z"
                    />
                    <path
                        fill={color1}
                        d="M76.76,161.47c0,2.91-2.22,4.84-5.33,4.84-3.4,0-5.82-2.35-5.82-5.23a5.41,5.41,0,0,1,5.69-5.26A5.59,5.59,0,0,1,76,158.17l-1.83,1a3.37,3.37,0,0,0-2.91-1.4,3.34,3.34,0,0,0-3.55,3.33c0,1.87,1.44,3.28,3.7,3.28a3,3,0,0,0,3.17-1.91H71.32v-1.76h5.44Z"
                    />
                    <path
                        fill={color1}
                        d="M82.05,162.61H80.42v3.5H78.28V156h4.34a3.48,3.48,0,0,1,3.61,3.34,3.28,3.28,0,0,1-2.09,2.94l2.4,3.81H84.23Zm-1.63-1.75h2.2a1.49,1.49,0,0,0,0-3h-2.2Z"
                    />
                    <path
                        fill={color1}
                        d="M94.12,164.29H89.8l-.65,1.82H86.84L90.64,156h2.65l3.81,10.09H94.77Zm-.66-1.86L92,158.31l-1.49,4.12Z"
                    />
                    <path
                        fill={color1}
                        d="M108.77,166.11h-2.12v-6.54l-3.05,4.68h-.25l-3.06-4.67v6.53H98.15V156h2.21l3.11,4.77,3.1-4.77h2.2Z"
                    />
                    <path
                        fill={color1}
                        d="M117.11,164.29h-4.32l-.65,1.82h-2.31l3.8-10.09h2.65l3.81,10.09h-2.33Zm-.66-1.86L115,158.31l-1.49,4.12Z"
                    />
                    <path
                        fill={color1}
                        d="M128.72,162.94l1.85,1a5.35,5.35,0,0,1-3.77,2.32v.52a1.22,1.22,0,0,1,1.09,1.12c0,.87-.81,1.47-3.41,1.33v-1.31c1.13.07,1.67,0,1.67-.29s-.37-.32-1-.36v-1a5.24,5.24,0,0,1-4.91-5.21,5.32,5.32,0,0,1,5.64-5.24,5.51,5.51,0,0,1,4.67,2.38l-1.85,1a3.19,3.19,0,0,0-2.82-1.44,3.31,3.31,0,1,0,0,6.61A3.18,3.18,0,0,0,128.72,162.94Z"
                    />
                    <path
                        fill={color1}
                        d="M138.17,164.29h-4.33l-.65,1.82h-2.31l3.8-10.09h2.65l3.81,10.09h-2.32ZM135,155.16h-1.61c0-2.29,1.48-2.54,2.82-1.75.6.36.8.38.8-.34h1.63c0,2.29-1.5,2.53-2.82,1.74C135.21,154.45,135,154.44,135,155.16Zm2.51,7.27L136,158.31l-1.49,4.12Z"
                    />
                    <path
                        fill={color1}
                        d="M141.31,161.06a5.65,5.65,0,1,1,5.63,5.25A5.4,5.4,0,0,1,141.31,161.06Zm9.13,0a3.51,3.51,0,1,0-3.5,3.3A3.32,3.32,0,0,0,150.44,161.06Z"
                    />
                    <path
                        fill={color1}
                        d="M0,180.46c0-4.71,3.77-8.35,9-8.35a8.84,8.84,0,0,1,7.46,3.8l-3.82,2A4.1,4.1,0,0,0,9,176.11a4.35,4.35,0,1,0,0,8.69A4,4,0,0,0,12.62,183L16.44,185A8.8,8.8,0,0,1,9,188.81C3.77,188.81,0,185.17,0,180.46Z"
                    />
                    <path
                        fill={color1}
                        d="M31.65,172.45v16H27.27v-6.15H22.42v6.15H18v-16h4.41v5.93h4.85v-5.93Z"
                    />
                    <path
                        fill={color1}
                        d="M44.15,186.15H38.42l-.74,2.31H32.9l5.69-16H44l5.69,16H44.89ZM43,182.63l-1.75-5.44-1.72,5.44Z"
                    />
                    <path
                        fill={color1}
                        d="M63.74,178.06c0,3.29-2.71,5.6-6.15,5.6H55.3v4.8H50.89v-16h6.7C61,172.45,63.74,174.76,63.74,178.06Zm-4.41,0a1.67,1.67,0,0,0-1.74-1.7H55.3v3.41h2.29A1.68,1.68,0,0,0,59.33,178.06Z"
                    />
                    <path
                        fill={color1}
                        d="M76.54,184.62v3.84H65.46v-16h11v3.82H69.87v2.22H75.8v3.77H69.87v2.36Z"
                    />
                    <path
                        fill={color1}
                        d="M77.84,180.46c0-4.71,3.77-8.35,9-8.35a8.84,8.84,0,0,1,7.46,3.8l-3.81,2a4.13,4.13,0,0,0-3.65-1.83,4.35,4.35,0,1,0,0,8.69A4.08,4.08,0,0,0,90.47,183L94.28,185a8.8,8.8,0,0,1-7.46,3.8C81.61,188.81,77.84,185.17,77.84,180.46Z"
                    />
                    <path
                        fill={color1}
                        d="M94.8,180.46c0-4.71,4-8.35,9-8.35s9,3.64,9,8.35-4,8.35-9,8.35S94.8,185.17,94.8,180.46Zm13.68,0a4.66,4.66,0,1,0-4.65,4.34A4.37,4.37,0,0,0,108.48,180.46Zm-3.2-9.49,2.86-3.32h-4.78l-2,3.32Z"
                    />
                    <path fill={color1} d="M114.9,179.77h9.6v3.61h-9.6Z" />
                    <path
                        fill={color1}
                        d="M126.05,184.83l3.77-2a3.38,3.38,0,0,0,3.39,2.13c1.55,0,2-.53,2-1.08,0-.91-1.13-1.19-3.32-1.76-2.71-.73-5.12-2-5.12-5s2.63-5,6-5a6.78,6.78,0,0,1,6.4,3.66l-3.69,2A2.75,2.75,0,0,0,132.8,176c-1.09,0-1.6.48-1.6,1.05s.61,1.1,3,1.74c2.66.73,5.49,1.64,5.49,5,0,3.18-2.66,5-6.55,5S127,187.18,126.05,184.83Z"
                    />
                    <path
                        fill={color1}
                        d="M140.57,180.46c0-4.71,3.77-8.35,9-8.35a8.84,8.84,0,0,1,7.46,3.8l-3.81,2a4.13,4.13,0,0,0-3.65-1.83,4.35,4.35,0,1,0,0,8.69A4.08,4.08,0,0,0,153.2,183L157,185a8.8,8.8,0,0,1-7.46,3.8C144.34,188.81,140.57,185.17,140.57,180.46Z"
                    />
                </g>
            </g>
        </svg>
    );
};