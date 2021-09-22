import 'styled-components';

import { Theme as ThemeData } from './theme';


declare module 'styled-components' {
   type ThemeType = ThemeData; 

   export interface DefaultTheme extends ThemeType {};
}