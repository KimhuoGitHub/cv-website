import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ personalInfo }) => {
	return (
		<header className='header' role='banner'>
			<div className='header-content'>
				<div className='profile-section'>
					<div className='profile-image'>
						<img
							src={'/profile.jpg'}
							alt={`Profile photo of ${personalInfo.name}`}
							loading='lazy'
							onError={(e) => {
								e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
									personalInfo.name,
								)}&size=200&background=4a5568&color=fff&bold=true`;
							}}
						/>
					</div>
					<div className='profile-info'>
						<h1 className='name'>{personalInfo.name}</h1>
						<h2 className='title'>{personalInfo.title}</h2>
						<p className='subtitle'>{personalInfo.subtitle}</p>
					</div>
				</div>

				<nav className='contact-info' aria-label='Contact information'>
					<div className='contact-item'>
						<svg
							className='icon'
							fill='currentColor'
							viewBox='0 0 20 20'
							aria-hidden='true'
						>
							<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
							<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
						</svg>
						<a href={`mailto:${personalInfo.email}`} aria-label={`Email ${personalInfo.name}`}>
							{personalInfo.email}
						</a>
					</div>

					<div className='contact-item'>
						<svg
							className='icon'
							fill='currentColor'
							viewBox='0 0 20 20'
							aria-hidden='true'
						>
							<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
						</svg>
						<a href={`tel:${personalInfo.phone}`} aria-label={`Call ${personalInfo.name}`}>
							{personalInfo.phone}
						</a>
					</div>

					<div className='contact-item'>
						<svg
							className='icon'
							fill='currentColor'
							viewBox='0 0 20 20'
							aria-hidden='true'
						>
							<path
								fillRule='evenodd'
								d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
								clipRule='evenodd'
							/>
						</svg>
						<span>
							{personalInfo.location} |{' '}
							{personalInfo.availability}
						</span>
					</div>

					{personalInfo.linkedin && (
						<div className='contact-item'>
							<svg
								className='icon'
								fill='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'
							>
								<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
							</svg>
							<a
								href={personalInfo.linkedin}
								target='_blank'
								rel='noopener noreferrer'
								aria-label={`Visit ${personalInfo.name}'s LinkedIn profile`}
							>
								LinkedIn Profile
							</a>
						</div>
					)}
				</nav>

				<div className='download-section'>
					<button
						className='download-btn'
						onClick={() => window.print()}
						aria-label='Download CV as PDF'
					>
						<svg
							className='icon'
							fill='currentColor'
							viewBox='0 0 20 20'
							aria-hidden='true'
						>
							<path
								fillRule='evenodd'
								d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
						Download CV
					</button>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	personalInfo: PropTypes.shape({
		name: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		availability: PropTypes.string.isRequired,
		linkedin: PropTypes.string,
	}).isRequired,
};

export default Header;
