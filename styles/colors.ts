enum Blue {
  Blue900 = '#013D6B',
  Blue800 = '#0A558C',
  Blue700 = '#0F609B',
  Blue600 = '#196FAF',
  Blue500 = '#2680C2',
  Blue400 = '#4098D7',
  Blue300 = '#62B0E8',
  Blue200 = '#84C5F4',
  Blue100 = '#B6E0FE',
  Blue000 = '#DCEEFB'
}

enum Yellow {
  Yellow900 = '#8D2B0A',
  Yellow800 = '#B44D13',
  Yellow700 = '#CB6E18',
  Yellow600 = '#DD911D',
  Yellow500 = '#F0B429',
  Yellow400 = '#F7C847',
  Yellow300 = '#FADB5F',
  Yellow200 = '#FDE588',
  Yellow100 = '#FEF3C4',
  Yellow000 = '#FFFBEA'
}

enum BlueGrey {
  BlueGrey900 = '#0E2A43',
  BlueGrey800 = '#243B53',
  BlueGrey700 = '#344E68',
  BlueGrey600 = '#476581',
  BlueGrey500 = '#627D97',
  BlueGrey400 = '#8299B1',
  BlueGrey300 = '#9FB3C8',
  BlueGrey200 = '#BDCCDC',
  BlueGrey100 = '#DAE2EC',
  BlueGrey000 = '#F1F3F8'
}

enum Grey {
  Grey900 = '#222222',
  Grey800 = '#3A3A3A',
  Grey700 = '#515151',
  Grey600 = '#606060',
  Grey500 = '#7E7E7E',
  Grey400 = '#9E9E9E',
  Grey300 = '#B1B1B1',
  Grey200 = '#CECECE',
  Grey100 = '#E1E1E1',
  Grey000 = '#F7F7F7'
}

enum Cyan {
  Cyan900 = '#034D52',
  Cyan800 = '#066C74',
  Cyan700 = '#137C86',
  Cyan600 = '#10919B',
  Cyan500 = '#2DB1BD',
  Cyan400 = '#39BEC9',
  Cyan300 = '#55D1DB',
  Cyan200 = '#88EAF2',
  Cyan100 = '#BFF8FD',
  Cyan000 = '#E0FCFF'
}

enum Red {
  Red900 = '#5F0404',
  Red800 = '#780A0A',
  Red700 = '#911011',
  Red600 = '#A61B1B',
  Red500 = '#BA2524',
  Red400 = '#D33F3F',
  Red300 = '#E66A6A',
  Red200 = '#F29A9A',
  Red100 = '#FACDCC',
  Red000 = '#FFEEEE'
}

enum Purple {
  Purple900 = '#240754',
  Purple800 = '#34126F',
  Purple700 = '#421987',
  Purple600 = '#51279B',
  Purple500 = '#653CAD',
  Purple400 = '#724BB7',
  Purple300 = '#8662C7',
  Purple200 = '#A081D9',
  Purple100 = '#CFBCF2',
  Purple000 = '#EAE2F8'
}

enum LimeGreen {
  LimeGreen900 = '#2B4005',
  LimeGreen800 = '#42600C',
  LimeGreen700 = '#507712',
  LimeGreen600 = '#63921A',
  LimeGreen500 = '#7BB026',
  LimeGreen400 = '#94C843',
  LimeGreen300 = '#ABDB5E',
  LimeGreen200 = '#C7EA8F',
  LimeGreen100 = '#E2F7C2',
  LimeGreen000 = '#F2FDE0'
}

enum Other {
  White = '#ffffff', // "not white is actually white..."
  Casper = 'rgba(255,255,255,.7)', // transparent white
  Black = '#000000', // "not white is actually white..."
  // Social
  Facebook = '#4b66a4', // blue
  Google = '#db4338', // red
  ModalBackground = 'rgba(0, 0, 0, 0.5)'
}

export const Colors = {
  ...Blue,
  ...Yellow,
  ...BlueGrey,
  ...Grey,
  ...Cyan,
  ...Red,
  ...Purple,
  ...LimeGreen,
  ...Other
};

export type Colors = Blue | Yellow | BlueGrey | Grey | Cyan | Red | Purple | LimeGreen | Other;
