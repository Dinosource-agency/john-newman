import {FunctionComponent} from 'preact';
import {Link} from 'preact-router';
import {FooterProps} from './Footer.types';
import {Heading, Image, SocialIcons} from '~/components';

export const Footer: FunctionComponent<FooterProps> = ({
                                                           termsLink,
                                                           facebookLink,
                                                           instagramLink,
                                                           tiktokLink,
                                                           twitterLink,
                                                       }) => {
    return (
        <footer className="o-footer">
            <div className="u-layout-constrain">
                <section className="o-footer__details">
                    <div className="o-footer__details__info">
                        <Image
                            src="images/JN-logo-small.svg"
                            alt="small logo John Newman"
                            className="o-footer__details__info__logo"
                        />
                        <Link
                            className="o-footer__details__info__link"
                            href={termsLink}
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="o-footer__details__links">
                        <Link
                            className="o-footer__details__links__link"
                            target="_blank"
                            href="https://www.musicglue.com/johnnewman/"
                        >
                            Merchandise
                        </Link>
                        <Link
                            className="o-footer__details__links__link"
                            href="#about"
                        >
                            About
                        </Link>
                        <Link
                            className="o-footer__details__links__link"
                            href="#music"
                        >
                            Latest releases
                        </Link>
                    </div>
                    <div className="o-footer__details__socials">
                        <p className="o-footer__details__socials__title">
                            Follow me
                        </p>
                        <SocialIcons
                            facebook={facebookLink}
                            instagram={instagramLink}
                            tiktok={tiktokLink}
                            twitter={twitterLink}
                            direction="row"
                        />
                    </div>
                </section>
                <section className="o-footer__contact">
                    <div className="o-footer__contact__management">
                        <Heading headingType="h5" headingStyle="h5">
                            Management
                        </Heading>
                        <p>
                            Nick Royaards
                        </p>
                        <a href="mailto:nick@tomorrowland.com">
                            nick@tomorrowland.com
                        </a>
                    </div>

                    <div>
                        <Heading headingType="h5" headingStyle="h5">
                            Bookings
                        </Heading>
                        <p>
                            Michel Kuklinski
                        </p>
                        <a href="mailto:info@oneworldartists.agency">
                            info@oneworldartists.agency
                        </a>
                    </div>
                </section>
                <section className="o-footer__creator">
                    Created by &nbsp;
                    <Link
                        className="o-footer__creator__link"
                        target="_blank"
                        href="https://dinosource.agency/"
                    >
                        Dinosource
                    </Link>
                </section>
            </div>
        </footer>
    );
};
