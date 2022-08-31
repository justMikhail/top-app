import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface IAppButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode;
  appearance: 'primary' | 'secondary';
  arrow?: 'right' | 'down' | 'none';
}
