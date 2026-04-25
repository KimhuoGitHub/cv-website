// src/pages/Resume.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	personalInfo,
	profile,
	experience,
	certifications,
	education,
	languages,
} from '../data/resumeData';
import './Resume.css';

// ─── APPS ────────────────────────────────────────────────────────────────────
const APPS = [
	{ name: 'Realestate.com.kh', logo: '/assets/logos/realestate.com.kh.png' },
	{ name: 'Yula.la', logo: '/assets/logos/yula.png' },
	{ name: 'Hausples.com.pg', logo: '/assets/logos/hausples.png' },
	{ name: 'Filmo', logo: '/assets/logos/filmo.png' },
	{ name: 'Selli', logo: '/assets/logos/selli.png' },
	{ name: 'Lamudi', logo: '/assets/logos/lamudi.png' },
];

// ─── SKILL COLUMNS ───────────────────────────────────────────────────────────
const SKILL_COLS = [
	{
		label: 'Mobile',
		tags: [
			'React Native',
			'Expo',
			'RN CLI',
			'Flutter',
			'Redux / FLUX',
			'React Navigation',
			'Push Notifications',
			'Deep Linking',
			'Reanimated 2',
			'App Store',
			'Google Play',
			'EAS / Fastlane',
			'TypeScript',
		],
	},
	{
		label: 'Web & Tools',
		tags: [
			'React',
			'Next.js',
			'JavaScript ES6+',
			'REST APIs',
			'GraphQL',
			'Firebase',
			'AsyncStorage',
			'Jest',
			'Git & GitHub',
			'HTML5 / CSS3',
		],
	},
	{
		label: 'Leadership',
		tags: [
			'System Design',
			'API Alignment',
			'Code Review',
			'Mentorship',
			'Technical Roadmaps',
			'Release Management',
			'Performance Profiling',
		],
	},
];

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────
function Section({ id, label, title, children }) {
	return (
		<section id={id} className='rp-section'>
			<div className='rp-section__head'>
				<span className='rp-label'>{label}</span>
				<h2 className='rp-section__title'>{title}</h2>
			</div>
			<div className='rp-section__body'>{children}</div>
		</section>
	);
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Resume() {
	const [showTop, setShowTop] = useState(false);

	// Scroll to top on mount
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Show/hide scroll-to-top button
	useEffect(() => {
		const onScroll = () => setShowTop(window.scrollY > 300);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<div className='rp-page'>
			{/* NAV */}
			<nav className='rp-nav' aria-label='Resume navigation'>
				<div className='rp-nav__inner'>
					<Link to='/' className='rp-nav__back'>
						<svg
							width='15'
							height='15'
							fill='none'
							stroke='currentColor'
							strokeWidth='2.2'
							strokeLinecap='round'
							strokeLinejoin='round'
							viewBox='0 0 24 24'
							aria-hidden='true'
						>
							<path d='M19 12H5M12 19l-7-7 7-7' />
						</svg>
						Back to Portfolio
					</Link>

					<span className='rp-nav__logo'>
						KH<span className='rp-accent'>.</span>
					</span>

					<button
						className='rp-nav__print'
						onClick={() => window.print()}
					>
						<svg
							width='15'
							height='15'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							viewBox='0 0 24 24'
							aria-hidden='true'
						>
							<path d='M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' />
							<rect x='6' y='14' width='12' height='8' />
						</svg>
						Print / Save PDF
					</button>
				</div>
			</nav>

			<div className='rp-container'>
				{/* ── HEADER ── */}
				<header className='rp-header'>
					<img
						className='rp-header__photo'
						src='/profile.jpg'
						alt={personalInfo.name}
						onError={(e) => {
							e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&size=200&background=00E5CC&color=080810&bold=true`;
						}}
					/>

					<div className='rp-header__info'>
						<h1 className='rp-header__name'>{personalInfo.name}</h1>
						<p className='rp-header__title'>
							Senior Mobile App
							Developer&nbsp;&nbsp;·&nbsp;&nbsp;React Native
							&nbsp;&nbsp;·&nbsp;&nbsp;Flutter&nbsp;&nbsp;·&nbsp;&nbsp;Cross-platform
							Development &nbsp;&nbsp;·&nbsp;&nbsp;React &amp;
							Next.js
						</p>

						<div className='rp-header__contacts'>
							<a
								href={`mailto:${personalInfo.email}`}
								className='rp-contact'
							>
								<svg
									width='13'
									height='13'
									fill='currentColor'
									viewBox='0 0 20 20'
									aria-hidden='true'
								>
									<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
									<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
								</svg>
								{personalInfo.email}
							</a>
							<a
								href={`tel:${personalInfo.phone}`}
								className='rp-contact'
							>
								<svg
									width='13'
									height='13'
									fill='currentColor'
									viewBox='0 0 20 20'
									aria-hidden='true'
								>
									<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
								</svg>
								{personalInfo.phone}
							</a>
							{personalInfo.linkedin && (
								<a
									href={personalInfo.linkedin}
									target='_blank'
									rel='noopener noreferrer'
									className='rp-contact'
								>
									<svg
										width='13'
										height='13'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'
									>
										<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
									</svg>
									linkedin.com/in/kimhuo
								</a>
							)}
							<span className='rp-contact rp-contact--plain'>
								<svg
									width='13'
									height='13'
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
								{personalInfo.location}
							</span>
						</div>
					</div>
				</header>

				{/* ── PROFILE ── */}
				<Section id='profile' label='About' title='Profile'>
					<p className='rp-summary'>{profile.summary}</p>
					<div className='rp-highlights'>
						<p className='rp-highlights__label'>Core Highlights</p>
						<ul className='rp-highlights__list'>
							{profile.highlights.map((h) => (
								<li key={h.slice(0, 40)}>{h}</li>
							))}
						</ul>
					</div>
				</Section>

				{/* ── EXPERIENCE ── */}
				<Section id='experience' label='Career' title='Experience'>
					<div className='rp-timeline'>
						{experience.map((job, i) => (
							<article
								key={`${job.company}-${i}`}
								className='rp-job'
							>
								<div className='rp-job__head'>
									<div>
										<h3 className='rp-job__company'>
											{job.company}
										</h3>
										<p className='rp-job__role'>
											{job.position}
										</p>
										<p className='rp-job__meta'>
											{job.location}
										</p>
									</div>
									<span className='rp-job__period'>
										{job.period}
									</span>
								</div>
								<ul className='rp-job__points'>
									{job.achievements.map((a) => (
										<li key={a.slice(0, 40)}>{a}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</Section>

				{/* ── APPS DELIVERED ── */}
				<Section id='apps' label='Portfolio' title='Apps Delivered'>
					<div className='rp-apps'>
						{APPS.map((app) => (
							<div key={app.name} className='rp-app'>
								<img
									src={app.logo}
									alt={app.name}
									className='rp-app__logo'
									onError={(e) => {
										e.target.style.display = 'none';
									}}
								/>
								<span className='rp-app__name'>{app.name}</span>
							</div>
						))}
					</div>
				</Section>

				{/* ── SKILLS ── */}
				<Section id='skills' label='Expertise' title='Skills'>
					<div className='rp-skills'>
						{SKILL_COLS.map((col) => (
							<div key={col.label} className='rp-skills__col'>
								<h3 className='rp-skills__col-label'>
									{col.label}
								</h3>
								<div className='rp-skills__tags'>
									{col.tags.map((tag) => (
										<span key={tag} className='rp-tag'>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</Section>

				{/* ── EDUCATION ── */}
				<Section id='education' label='Academic' title='Education'>
					<div className='rp-edu-list'>
						{education.map((edu) => (
							<div key={edu.institution} className='rp-edu'>
								<div className='rp-edu__left'>
									<h3 className='rp-edu__school'>
										{edu.institution}
									</h3>
									<p className='rp-edu__degree'>
										{edu.degree}
									</p>
									{edu.description && (
										<p className='rp-edu__desc'>
											{edu.description}
										</p>
									)}
								</div>
								<span className='rp-edu__period'>
									{edu.period}
								</span>
							</div>
						))}
					</div>
				</Section>

				{/* ── TRAINING ── */}
				<Section id='training' label='Courses' title='Training'>
					<div className='rp-edu-list'>
						{certifications.map((cert) => (
							<div key={cert.name} className='rp-edu'>
								<div className='rp-edu__left'>
									<h3 className='rp-edu__school'>
										{cert.issuer}
									</h3>
									<p className='rp-edu__degree'>
										{cert.name}
									</p>
									{cert.description && (
										<p className='rp-edu__desc'>
											{cert.description}
										</p>
									)}
								</div>
								<span className='rp-edu__period'>
									{cert.year || cert.period}
								</span>
							</div>
						))}
					</div>
				</Section>

				{/* ── LANGUAGES ── */}
				<Section id='languages' label='Communication' title='Languages'>
					<div className='rp-langs'>
						{languages.map((lang) => (
							<div key={lang.name} className='rp-lang'>
								<span className='rp-lang__name'>
									{lang.name}
								</span>
								<span className='rp-lang__level'>
									{lang.proficiency}
								</span>
							</div>
						))}
					</div>
				</Section>
			</div>

			{/* FOOTER */}
			<footer className='rp-footer'>
				<p>
					© {new Date().getFullYear()} {personalInfo.name} ·{' '}
					{personalInfo.location}
				</p>
			</footer>

			{/* SCROLL TO TOP — identical to homepage */}
			{showTop && (
				<button
					className='h-scroll-top'
					onClick={() =>
						window.scrollTo({ top: 0, behavior: 'smooth' })
					}
					aria-label='Back to top'
					title='Back to top'
				>
					↑
				</button>
			)}
		</div>
	);
}
