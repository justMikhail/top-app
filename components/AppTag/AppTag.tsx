import cn from 'classnames';
import {AppTagProps} from './AppTag.props';
import styles from './AppTag.module.scss';

export const AppTag = (props: AppTagProps): JSX.Element => {
  const {
    size = 's',
    appearance = 'secondary',
    children,
    className,
    href,
    ...otherProps
  } = props;

  return (
    <div
      className={cn(styles.tag, {
        [styles.tag_s]: size === 's',
        [styles.tag_m]: size === 'm',
        [styles.tag_primary]: appearance === 'primary',
        [styles.tag_secondary]: appearance === 'secondary',
        [styles.tag_error]: appearance === 'error',
        [styles.tag_success]: appearance === 'success',
      })}
      {...otherProps}
    >
      {
        href
          ? <a href={href}>{children}</a>
          : <>{children}</>
      }
    </div>
  );
};

