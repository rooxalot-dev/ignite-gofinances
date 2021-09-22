export interface Theme {
    colors: {
        primary: string;
        
        secondary: string;
        secondaryLight: string;

        success: string;
        successLight: string;

        attention: string;
        attentionLight: string;

        shape: string;
        title: string;
        text: string;
        background: string;
    },
    fonts: {
        regular: string,
        medium: string,
        bold: string,
    }
}

const defaultTheme: Theme = {
    colors: {
        primary: '#5636D3',

        secondary: '#FF872C',
        secondaryLight: 'rgba(255, 135, 44, 0.3)',

        success: '#12A454',
        successLight: 'rgba(18, 164, 84, 0.5)',

        attention: '#E83F5B',
        attentionLight: 'rgba(232, 63, 91, 0.4)',

        shape: '#ffffff',
        title: '#363F5F',
        text: '#969CB2',
        background: '#F0F2F5',
    },
    fonts: {
        regular: 'Regular',
        medium: 'Medium',
        bold: 'Bold',
    }
}

const moneyTheme: Theme = {
    colors: {
        primary: '#1DB277',

        secondary: '#18676B',
        secondaryLight: 'rgba(24, 103, 107, 0.3)',

        success: '#12A454',
        successLight: 'rgba(18, 164, 84, 0.5)',

        attention: '#E83F5B',
        attentionLight: 'rgba(232, 63, 91, 0.4)',

        shape: '#ddd',
        title: '#363F5F',
        text: '#969CB2',
        background: '#272727',
    },
    fonts: {
        regular: 'Regular',
        medium: 'Medium',
        bold: 'Bold',
    }
}

export default {
    default: defaultTheme,
    money: moneyTheme,
}