import { FunctionComponent } from 'preact';
import { SocialIconsProps } from './SocialIcons.types.ts';

export const SocialIcons: FunctionComponent<SocialIconsProps> = ({
	facebook = undefined,
	twitter = undefined,
	instagram = undefined,
	tiktok = undefined,
	direction = 'row',
}) => {
	return (
		<div
			className={
				'o-social-icons' +
				(direction === 'column' ? ' o-social-icons--column' : '')
			}
		>
			{facebook !== undefined ? (
				<a
					className="o-social-icons__icon o-social-icons__icon--facebook"
					href={facebook}
					rel="noopener noreferrer"
					target="_blank"
				>
					<span className="u-visually-hidden">Facebook</span>
				</a>
			) : null}

			{twitter !== undefined ? (
				<a
					className="o-social-icons__icon o-social-icons__icon--twitter"
					href={twitter}
					rel="noopener noreferrer"
					target="_blank"
				>
					<span className="u-visually-hidden">Twitter</span>
				</a>
			) : null}

			{instagram !== undefined ? (
				<a
					className="o-social-icons__icon o-social-icons__icon--instagram"
					href={instagram}
					rel="noopener noreferrer"
					target="_blank"
				>
					<span className="u-visually-hidden">Instagram</span>
				</a>
			) : null}

			{tiktok !== undefined ? (
				<a
					className="o-social-icons__icon o-social-icons__icon--tiktok"
					href={tiktok}
					rel="noopener noreferrer"
					target="_blank"
				>
					<span className="u-visually-hidden">TikTok</span>
				</a>
			) : null}
		</div>
	);
};
