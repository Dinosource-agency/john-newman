import { Link } from 'preact-router';
import { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { NavigationProps } from './Navigation.types';

export const Navigation: FunctionComponent<NavigationProps> = ({ shopUrl }) => {
	const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);
	const toggleHamburgerMenu = () => {
		setIsHamburgerMenuActive(!isHamburgerMenuActive);
	};

	useEffect(() => {
		const closeHamburgerMenu = () => {
			setIsHamburgerMenuActive(false);
		};

		window.addEventListener('scroll', closeHamburgerMenu);
		return () => {
			window.removeEventListener('scroll', closeHamburgerMenu);
		};
	}, [isHamburgerMenuActive]);

	return (
		<nav
			className={
				'o-navigation' +
				(isHamburgerMenuActive ? ' o-navigation--active' : '')
			}
		>
			{/* TODO: refractor to img component */}
			<a className="o-navigation__logo__link" href="/">
				<img
					className="o-navigation__logo o-navigation__logo--big"
					src="images/JN-logo-big.svg"
					alt="John Newman logo"
				/>
				<img
					className="o-navigation__logo o-navigation__logo--small"
					src="images/JN-logo-small.svg"
					alt="John Newman logo"
				/>
			</a>

			<div
				onClick={toggleHamburgerMenu}
				className={
					'o-navigation__hamburger' +
					(isHamburgerMenuActive
						? ' o-navigation__hamburger--active'
						: '')
				}
			></div>
			<ul
				className={
					'o-navigation__items' +
					(isHamburgerMenuActive
						? ' o-navigation__items--active'
						: '')
				}
			>
				<li
					onClick={toggleHamburgerMenu}
					className="o-navigation__items__item"
				>
					<Link className="o-navigation__items__item__link" href="/">
						Home
					</Link>
				</li>
				<li
					onClick={toggleHamburgerMenu}
					className="o-navigation__items__item"
				>
					<Link
						className="o-navigation__items__item__link"
						href="#video"
					>
						Video
					</Link>
				</li>
				<li
					onClick={toggleHamburgerMenu}
					className="o-navigation__items__item"
				>
					<Link
						className="o-navigation__items__item__link"
						href="#music"
					>
						Music
					</Link>
				</li>
				<li
					onClick={toggleHamburgerMenu}
					className="o-navigation__items__item"
				>
					<Link
						className="o-navigation__items__item__link"
						href="#tour"
					>
						Tour
					</Link>
				</li>
				<li
					onClick={toggleHamburgerMenu}
					className="o-navigation__items__item"
				>
					<Link
						className="o-navigation__items__item__link"
						href="#about"
					>
						About
					</Link>
				</li>
				<li
					onClick={toggleHamburgerMenu}
					className="o-navigation__items__item"
				>
					<Link
						className="o-navigation__items__item__link"
						target="_blank"
						href={shopUrl}
					>
						Store
					</Link>
				</li>
			</ul>
		</nav>
	);
};
