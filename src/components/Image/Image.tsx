import { FunctionComponent, createElement } from 'preact';
import { ImageProps } from './Image.types';

export const Image: FunctionComponent<ImageProps> = ({
	src,
	alt,
	className,
}) => {
	return createElement('img', {
		src: src,
		alt: alt,
		className: className,
	});
};
