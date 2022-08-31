import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface AppTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  size?: 's' | 'm';
  appearance?: 'primary' | 'secondary' | 'error' | 'success';
  href?: string;
  children: ReactNode;
}
