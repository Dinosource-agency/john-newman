/* eslint-disable react/prop-types */
/*
			{content.map((item, index) => (
				<p key={index} className="m-bio__content p">
					{item}
				</p>
			))}*/
import { FunctionComponent } from 'preact';
import { BioProps } from './Bio.types';

export const Bio: FunctionComponent<BioProps> = ({ about }) => {
	return (
		<div className="m-bio">
			<div className="m-bio__details">
				<p>{about}</p>
			</div>
		</div>
	);
};
