import { FunctionComponent, createElement } from 'preact';
import { HeadingProps } from './Heading.types';

export const Heading: FunctionComponent<HeadingProps> = ({
	children,
	headingStyle,
	headingType,
	className,
}) => {
	return createElement(
		headingType,
		{
			className: `${headingStyle} ${className}`,
		},
		children,
	);
};
