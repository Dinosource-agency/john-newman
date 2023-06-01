/* eslint-disable react/prop-types */
import { FunctionComponent } from 'preact';
import { Link } from 'preact-router';
import { TourDateProps } from './TourDate.types';
import { Image } from '~/components';

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
				<Image
					src="images/rotating_earth_animated_transparent.gif"
					alt="rotating earth"
					className="a-world"
				/>
			</div>
			<div className="m-tour-date__link">
				<Link target="_blank" href={link}>
					{linkText}
				</Link>
			</div>
		</div>
	);
};
