import {useEffect, useState, KeyboardEvent} from 'react';
import cn from 'classnames';
import {AppRatingProps} from './AppRating.props';
import StarIcon from './star-empty-icon.svg';
import styles from './AppRating.module.scss';

export const AppRating = (props: AppRatingProps): JSX.Element => {
  const {
    isEditable = false,
    rating,
    setRating,
    className,
    ...otherProps
  } = props;

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((ratingItem: JSX.Element, index) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.star_filled]: index < currentRating,
            [styles.star_editable]: isEditable,
          })}
          {...otherProps}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => handleClick(index + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(evt: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(evt, index + 1)}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (ratingValue: number) => {
    if (!isEditable) return;
    constructRating(ratingValue);
  };

  const handleClick = (ratingValue: number) => {
    if (!isEditable || !setRating) return;
    setRating(ratingValue);
  };

  const handleSpace = (evt: KeyboardEvent<SVGAElement>, ratingValue: number) => {
    if (evt.code !== 'Space' || !setRating) return;
    setRating(ratingValue);
  };

  return (
    <div {...props}>
      {ratingArray.map((ratingItem, index) => (<span key={index}>{ratingItem}</span>))}
    </div>
  );
};
