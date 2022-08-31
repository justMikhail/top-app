import cn from 'classnames';
import {IAppButtonProps} from './AppButton.props';
import ArrowRightIcon from '../../public/icons/arrow-right-icon.svg';
import styles from './AppButton.module.scss';

export const AppButton = (props: IAppButtonProps): JSX.Element => {
  const {
    children,
    arrow = 'none',
    appearance,
    className,
    ...spreadProps
  } = props;

  return (
    <button
      className={cn(className, styles.button, {
        [styles.button_primary]: appearance === 'primary',
        [styles.button_secondary]: appearance === 'secondary',
      })}
      {...spreadProps}
    >
      {children}
      {arrow !== 'none' &&
        <ArrowRightIcon className={cn('icon', styles.arrow, {
        [styles.arrow_down]: arrow === 'down',
      })}/>}
    </button>
  );
};

