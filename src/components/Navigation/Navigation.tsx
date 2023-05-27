import { Link } from 'preact-router';
import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

export const Navigation: FunctionComponent = () => {
	const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);
	const toggleHamburgerMenu = () => {
		setIsHamburgerMenuActive(!isHamburgerMenuActive);
	};
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
					<a className="o-navigation__items__item__link" href="/">
						Home
					</a>
				</li>
				<li
					onClick={toggleHamburgerMenu}
					className="o-navigation__items__item"
				>
					<a className="o-navigation__items__item__link" href="#live">
						Live
					</a>
				</li>
				<li
					onClick={toggleHamburgerMenu}
					className="o-navigation__items__item"
				>
					<a
						className="o-navigation__items__item__link"
						href="#music"
					>
						Music
					</a>
				</li>
				<li
					onClick={toggleHamburgerMenu}
					className="o-navigation__items__item"
				>
					<a
						className="o-navigation__items__item__link"
						href="#about"
					>
						About
					</a>
				</li>
				<li
					onClick={toggleHamburgerMenu}
					className="o-navigation__items__item"
				>
					<Link
						className="o-navigation__items__item__link"
						target="_blank"
						href="https://google.com"
					>
						Store
					</Link>
				</li>
			</ul>
		</nav>
	);
};
