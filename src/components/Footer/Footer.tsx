import { FunctionComponent } from 'preact';
import { Link } from 'preact-router';
import { FooterProps } from './Footer.types';
import { Image, SocialIcons } from '~/components';
import { SocialLinksMock } from '~/views/HomeView/TourDate.Mock';

export const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<footer className="o-footer u-layout-constrain">
			<section className="o-footer__details">
				<div className="o-footer__info">
					<Image
						src="images/JN-logo-letters.png"
						alt="small logo John Newman"
						className="o-footer__info__logo"
					/>
					<a className="o-footer__info__link" href="/terms">
						Privacy Policy
					</a>
				</div>
				<div className="o-footer__links">
					<Link
						className="o-footer__links__link"
						target="_blank"
						href="https://www.musicglue.com/johnnewman/"
					>
						Merchandise
					</Link>
					<a className="o-footer__links__link" href="#about">
						About
					</a>
					<a className="o-footer__links__link" href="#music">
						Latest releases
					</a>
				</div>
				<div className="o-footer__socials">
					<p className="o-footer__socials__title">Social Media</p>
					<SocialIcons
						facebook={SocialLinksMock.facebook}
						instagram={SocialLinksMock.instagram}
						tiktok={SocialLinksMock.tiktok}
						twitter={SocialLinksMock.twitter}
						direction="row"
					/>
				</div>
			</section>
			<section className="o-footer__creator">
				<p>
					Created by &nbsp;
					<Link
						className="o-footer__creator__link"
						target="_blank"
						href="https://dinosource.agency/"
					>
						Dinosource
					</Link>
				</p>
			</section>
		</footer>
	);
};
