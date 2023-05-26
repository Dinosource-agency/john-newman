import { FunctionComponent } from 'preact';
import { TourDateProps } from './TourDate.types';

export const TourDate: FunctionComponent<TourDateProps> = ({
	tour,
	venue,
	city,
	country,
	link,
	linkText,
}) => {
	return (
		<div className="m-tour-date">
			<div className="m-tour-date__details">
				<div className="m-tour-date__info">
					<p className="m-tour-date__info__name h5">{tour}</p>
					<p className="p">
						{venue}, {city}, {country}
					</p>
				</div>
				<p> image </p>
			</div>
			<div className="m-tour-date__link">
				<a href={link}>{linkText}</a>
			</div>
		</div>
	);
};
