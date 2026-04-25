// src/pages/Home.jsx  ← create this new file at src/pages/Home.jsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// ─── DATA ────────────────────────────────────────────────────────────────────

const STATS = [
	{ value: '7+', label: 'Years Exp.' },
	{ value: '6', label: 'Apps Shipped' },
	{ value: '#1', label: 'Property Portal KH' },
];

const COMPETENCIES = [
	{
		icon: '📱',
		title: 'Cross-Platform Engineering',
		desc: 'React Native / Flutter delivering pixel-perfect UIs across iOS and Android from a single codebase.',
	},
	{
		icon: '⚡',
		title: 'Performance Optimization',
		desc: 'Load time reduction, Memory improvement, Smaller bundles — measurable, not theoretical.',
	},
	{
		icon: '🏗',
		title: 'Architecture & Leadership',
		desc: 'Technical direction, scalable system design, code reviews, and mentoring engineers at every level.',
	},
	{
		icon: '🚀',
		title: 'Full-Lifecycle Delivery',
		desc: 'Figma to App Store — EAS builds, and predictable multi-platform release cycles.',
	},
];

const EXPERIENCE = [
	{
		company: 'Lamudi',
		role: 'Senior React Native Developer',
		period: 'Aug 2024 – Present',
		location: 'Battambang, Cambodia · Remote',
		current: true,
		points: [
			'Leading high-performance feature development for a cross-platform real estate app using React Native + Expo.',
			'Improved app performance through profiling, lazy loading, and async optimization strategies.',
			'Maintained crash-free rate and reduced bundle size with successful deployments.',
			'Architected push notifications, deep linking, and complex navigation flows across iOS and Android.',
		],
	},
	{
		company: 'Realestate.com.kh',
		role: 'React Native Developer',
		period: 'Jul 2018 – Aug 2024',
		location: 'Phnom Penh, Cambodia',
		current: false,
		points: [
			'Led core mobile features.',
			'Load time reduction and memory footprint decrease through performance optimization.',
			'Shipped to iOS App Store and Google Play.',
			'Mentored junior developers and established code review best practices across the team.',
		],
	},
	{
		company: 'Codingate Co., Ltd',
		role: 'React Native Developer',
		period: 'Mar 2018 – Jul 2018',
		location: 'Phnom Penh, Cambodia',
		current: false,
		points: [
			'Developed and deployed React Native apps for iOS and Android from the ground up.',
			'Integrated REST APIs for auth, data fetching, and real-time updates in an team.',
		],
	},
];

const APPS = [
	{
		name: 'Realestate.com.kh',
		tagline: "Cambodia's #1 Property Portal",
		desc: 'Market-leading property platform serving buyers, sellers, and agents across Cambodia and the wider region.',
		challenge:
			"Cambodia's dominant property audience expects speed, trust, and depth of listings in one app.",
		logo: '/assets/logos/realestate.com.kh.png',
		cover: '/assets/store-images/realestate.com.kh.png',
		ios: 'https://apps.apple.com/kh/app/realestate-com-kh/id1219891105',
		android: 'https://play.google.com/store/apps/details?id=com.reakh_v2',
	},
	{
		name: 'Yula.la',
		tagline: 'Classifieds Across Laos',
		desc: 'Post and search classified ads across Laos — cars, phones, land, houses, and jobs organized by province.',
		challenge:
			'Classifieds across Laos need a localized, responsive experience without fragmenting the engineering playbook.',
		logo: '/assets/logos/yula.png',
		cover: '/assets/store-images/yula.png',
		ios: 'https://apps.apple.com/kh/app/yula-la/id1505966431',
		android: 'https://play.google.com/store/apps/details?id=la.yula',
	},
	{
		name: 'Hausples.com.pg',
		tagline: "Papua New Guinea's #1 Property Portal",
		desc: "PNG's leading property portal built to perform under geographic and infrastructure variance.",
		challenge:
			"PNG's leading portal must perform under the geographic and network conditions of regional expansion.",
		logo: '/assets/logos/hausples.png',
		cover: '/assets/store-images/hausples.png',
		ios: 'https://apps.apple.com/au/app/hausples-com-pg/id1308727704',
		android: 'https://play.google.com/store/apps/details?id=com.hausples',
	},
	{
		name: 'Selli',
		tagline: 'CRM for Real Estate Teams',
		desc: 'Centralized lead management with full transparency — where veteran real estate meets high-end tech.',
		challenge:
			'Real-estate teams lose deals when lead visibility and follow-up break down across tools.',
		logo: '/assets/logos/selli.png',
		cover: '/assets/store-images/selli.png',
		ios: 'https://apps.apple.com/kh/app/selli/id1502952231',
		android: 'https://play.google.com/store/apps/details?id=com.selli',
	},
	{
		name: 'Filmo',
		tagline: 'Live Shopping for Luxury & Beauty',
		desc: 'Watch live shows and shop instantly from verified brands — luxury, vintage, and beauty in one app.',
		challenge:
			'Live shopping blends real-time media, commerce, and trust — small instability shows up as churn.',
		logo: '/assets/logos/filmo.png',
		cover: '/assets/store-images/filmo.png',
		ios: 'https://apps.apple.com/kh/app/filmo-watch-and-shop-live/id1580188982',
		android: 'https://play.google.com/store/apps/details?id=com.filmo.live',
	},
	{
		name: 'Lamudi',
		tagline: 'Cross-Platform Real Estate App',
		desc: 'High-performance property search and management platform, delivering pixel-perfect UX at scale.',
		challenge:
			'Consistent performance and stability across a rapidly growing, diverse user base.',
		logo: '/assets/logos/lamudi.png',
		cover: '/assets/store-images/lamudi.png',
		ios: '#',
		android:
			'https://play.google.com/store/apps/details?id=com.lamudiconnect',
	},
];

const SKILLS = {
	'Mobile Development': [
		'React Native',
		'Expo',
		'React Native CLI',
		'Flutter',
		'Redux / FLUX',
		'React Navigation',
		'TypeScript',
		'Push Notifications (FCM/APNS)',
		'Deep Linking',
		'Reanimated 2',
		'App Store',
		'Google Play',
		'EAS / Fastlane',
	],
	'Web & Tools': [
		'React & Next.js',
		'JavaScript ES6+',
		'REST APIs',
		'GraphQL',
		'Firebase & Analytics',
		'AsyncStorage',
		'Git & GitHub',
		'HTML5 / CSS3',
	],
	'Leadership & Process': [
		'Technical Roadmaps',
		'System Design',
		'API Alignment',
		'Performance Profiling',
		'Code Review',
		'Mentorship',
		'Cross-team Collaboration',
		'Release Management',
	],
};

// ─── ICONS ───────────────────────────────────────────────────────────────────

const AppleIcon = () => (
	<svg
		width='15'
		height='15'
		fill='currentColor'
		viewBox='0 0 24 24'
		aria-hidden='true'
	>
		<path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
	</svg>
);

const AndroidIcon = () => (
	<svg
		width='15'
		height='15'
		fill='currentColor'
		viewBox='0 0 24 24'
		aria-hidden='true'
	>
		<path d='M3.18 23.76c.3.17.64.25 1 .23l.03-.03L13 14.77l-3.1-3.1-6.72 12.09zM20.06 10.37L17.4 8.88l-3.48 3.12 3.48 3.12 2.69-1.49c.77-.43.77-1.83-.03-2.26zM2.46.37A.9.9 0 0 0 2.2 1v21.67c0 .26.09.49.26.66L13 13.63 2.46.37zM13.74 13l3.19-3.19-9.55-5.46L13.74 13z' />
	</svg>
);

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Home() {
	const [navScrolled, setNavScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('hero');
	const observerRef = useRef(null);
	const sectionObserverRef = useRef(null);

	// Nav scroll shadow
	useEffect(() => {
		const onScroll = () => setNavScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Active section tracking for nav highlight
	useEffect(() => {
		const sectionIds = ['hero', 'about', 'experience', 'apps', 'skills'];
		sectionObserverRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.35 },
		);
		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) sectionObserverRef.current.observe(el);
		});
		return () => sectionObserverRef.current?.disconnect();
	}, []);

	// Scroll-reveal via IntersectionObserver
	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('h-visible');
						observerRef.current.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
		);
		document
			.querySelectorAll('.h-reveal')
			.forEach((el) => observerRef.current.observe(el));
		return () => observerRef.current?.disconnect();
	}, []);

	const scrollTo = (id) => {
		setMenuOpen(false);
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	const navLinks = ['about', 'experience', 'apps', 'skills'];

	return (
		<div className='h-page'>
			{/* ── NAVIGATION ── */}
			<nav className={`h-nav${navScrolled ? ' h-nav--solid' : ''}`}>
				<div className='h-nav__inner'>
					<button
						className='h-nav__logo'
						onClick={() => scrollTo('hero')}
						title='Back to top'
						aria-label='Scroll to top'
					>
						KH<span className='h-accent'>.</span>
					</button>
					<div
						className={`h-nav__links${menuOpen ? ' h-nav__links--open' : ''}`}
					>
						{navLinks.map((s) => (
							<button
								key={s}
								onClick={() => scrollTo(s)}
								className={`h-nav__link${activeSection === s ? ' h-nav__link--active' : ''}`}
							>
								{s.charAt(0).toUpperCase() + s.slice(1)}
							</button>
						))}
						<Link to='/resume' className='h-nav__resume'>
							View Resume ↗
						</Link>
					</div>
					<button
						className='h-nav__hamburger'
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label='Toggle menu'
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</nav>

			{/* ── HERO ── */}
			<section id='hero' className='h-hero'>
				<div className='h-hero__bg-grid' aria-hidden='true' />
				<div className='h-hero__glow' aria-hidden='true' />

				<div className='h-hero__body'>
					<div className='h-hero__left'>
						<span className='h-badge'>
							Open to senior opportunities
						</span>
						<h1 className='h-hero__name'>
							Kimhuo
							<br />
							<span className='h-hero__name-accent'>
								Chhoeurng
							</span>
						</h1>
						<p className='h-hero__roles'>
							Senior Mobile App
							Developer&nbsp;&nbsp;·&nbsp;&nbsp;React Native
							&nbsp;&nbsp;·&nbsp;&nbsp;Flutter&nbsp;&nbsp;·&nbsp;&nbsp;Cross-platform
							Development &nbsp;&nbsp;·&nbsp;&nbsp;React &amp;
							Next.js
						</p>
						<p className='h-hero__sub'>
							I architect and ship cross-platform mobile
							experiences — from system design and API alignment
							to stable App Store and Google Play releases.
						</p>
						<div className='h-hero__cta'>
							<button
								className='h-btn h-btn--primary'
								onClick={() => scrollTo('apps')}
							>
								View My Work
							</button>
							<button
								className='h-btn h-btn--ghost'
								onClick={() => scrollTo('about')}
							>
								About Me
							</button>
							<Link to='/resume' className='h-btn h-btn--ghost'>
								View Resume ↗
							</Link>
						</div>
						<div className='h-hero__stats'>
							{STATS.map((s) => (
								<div key={s.label} className='h-stat'>
									<span className='h-stat__val'>
										{s.value}
									</span>
									<span className='h-stat__lbl'>
										{s.label}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className='h-hero__right'>
						<div className='h-hero__photo-wrap'>
							<div
								className='h-hero__photo-ring'
								aria-hidden='true'
							/>
							<img
								src='/profile.jpg'
								alt='Kimhuo Chhoeurng'
								className='h-hero__photo'
								onError={(e) => {
									e.target.src =
										'https://ui-avatars.com/api/?name=Kimhuo+Chhoeurng&size=400&background=00E5CC&color=080810&bold=true';
								}}
							/>
						</div>
					</div>
				</div>

				<div className='h-hero__contact'>
					<a href='mailto:kimhuo99@gmail.com'>kimhuo99@gmail.com</a>
					<span className='h-hero__dot' />
					<a href='tel:+85597641747'>+855 97 64 17 472</a>
					<span className='h-hero__dot' />
					<a
						href='https://www.linkedin.com/in/kimhuo/'
						target='_blank'
						rel='noopener noreferrer'
					>
						linkedin.com/in/kimhuo
					</a>
					<span className='h-hero__dot' />
					<span>Phnom Penh, Cambodia</span>
				</div>
			</section>

			{/* ── ABOUT ── */}
			<section id='about' className='h-section'>
				<div className='h-section__inner'>
					<p className='h-label h-reveal'>About Me</p>
					<h2 className='h-heading h-reveal'>Who I Am</h2>
					<p className='h-about__body h-reveal'>
						Over seven years, I have moved from hands-on React
						Native engineering to leading mobile delivery for
						market-defining products. Early on, the focus was
						execution — clean components, solid state patterns,
						reliable integrations. That foundation expanded into
						strategy: setting technical direction, keeping codebases
						healthy across React Native CLI and Expo, and making
						sure mobile and backend stay in lockstep so releases are
						predictable, not heroic. I still write and review every
						line of code — my edge is bridging teams.
					</p>
					<div className='h-comps'>
						{COMPETENCIES.map((c, i) => (
							<div
								key={c.title}
								className={`h-comp h-reveal h-reveal--d${i + 1}`}
							>
								<span className='h-comp__icon'>{c.icon}</span>
								<h3 className='h-comp__title'>{c.title}</h3>
								<p className='h-comp__desc'>{c.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── EXPERIENCE ── */}
			<section id='experience' className='h-section h-section--alt'>
				<div className='h-section__inner'>
					<p className='h-label h-reveal'>Career</p>
					<h2 className='h-heading h-reveal'>Experience</h2>
					<div className='h-timeline'>
						{EXPERIENCE.map((job, i) => (
							<article
								key={job.company}
								className={`h-job h-reveal h-reveal--d${(i % 3) + 1}`}
							>
								<div className='h-job__line'>
									<div
										className={`h-job__dot${job.current ? ' h-job__dot--active' : ''}`}
									/>
								</div>
								<div className='h-job__content'>
									<div className='h-job__top'>
										<div>
											<h3 className='h-job__company'>
												{job.company}
											</h3>
											<p className='h-job__role'>
												{job.role}
											</p>
										</div>
										<div className='h-job__meta'>
											{job.current && (
												<span className='h-job__badge'>
													Current
												</span>
											)}
											<span className='h-job__period'>
												{job.period}
											</span>
											<span className='h-job__location'>
												{job.location}
											</span>
										</div>
									</div>
									<ul className='h-job__points'>
										{job.points.map((p) => (
											<li key={p.slice(0, 40)}>{p}</li>
										))}
									</ul>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* ── APPS ── */}
			<section id='apps' className='h-section'>
				<div className='h-section__inner'>
					<p className='h-label h-reveal'>Portfolio</p>
					<h2 className='h-heading h-reveal'>Apps I've Built</h2>
					<div className='h-apps'>
						{APPS.map((app, i) => (
							<article
								key={app.name}
								className={`h-app h-reveal h-reveal--d${(i % 3) + 1}`}
							>
								{/* Cover image */}
								<div className='h-app__cover'>
									{app.cover ? (
										<img
											src={app.cover}
											alt={`${app.name} screenshot`}
										/>
									) : (
										<div className='h-app__cover-placeholder' />
									)}
								</div>

								{/* Logo + name row */}
								<div className='h-app__header'>
									{app.logo && (
										<img
											src={app.logo}
											alt={`${app.name} logo`}
											className='h-app__logo'
										/>
									)}
									<div>
										<h3 className='h-app__name'>
											{app.name}
										</h3>
										<span className='h-app__tagline'>
											{app.tagline}
										</span>
									</div>
								</div>

								<p className='h-app__desc'>{app.desc}</p>
								<div className='h-app__challenge'>
									<span className='h-app__challenge-lbl'>
										Challenge
									</span>
									<p>{app.challenge}</p>
								</div>
								<div className='h-app__stores'>
									<a
										href={app.ios}
										target='_blank'
										rel='noopener noreferrer'
										className='h-store-btn'
									>
										<AppleIcon /> App Store
									</a>
									<a
										href={app.android}
										target='_blank'
										rel='noopener noreferrer'
										className='h-store-btn'
									>
										<AndroidIcon /> Google Play
									</a>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* ── SKILLS ── */}
			<section id='skills' className='h-section h-section--alt'>
				<div className='h-section__inner'>
					<p className='h-label h-reveal'>Expertise</p>
					<h2 className='h-heading h-reveal'>Skills</h2>
					<div className='h-skills'>
						{Object.entries(SKILLS).map(([cat, items], i) => (
							<div
								key={cat}
								className={`h-skills__col h-reveal h-reveal--d${i + 1}`}
							>
								<h3 className='h-skills__title'>{cat}</h3>
								<div className='h-skills__tags'>
									{items.map((sk) => (
										<span key={sk} className='h-tag'>
											{sk}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── SCROLL TO TOP ── */}
			{navScrolled && (
				<button
					className='h-scroll-top'
					onClick={() => scrollTo('hero')}
					aria-label='Back to top'
					title='Back to top'
				>
					↑
				</button>
			)}

			{/* ── FOOTER ── */}
			<footer className='h-footer'>
				<div className='h-footer__inner'>
					<p className='h-footer__logo'>
						KH<span className='h-accent'>.</span>
					</p>
					<div className='h-footer__links'>
						<a href='mailto:kimhuo99@gmail.com'>
							kimhuo99@gmail.com
						</a>
						<a
							href='https://www.linkedin.com/in/kimhuo/'
							target='_blank'
							rel='noopener noreferrer'
						>
							LinkedIn
						</a>
						<Link to='/resume'>Resume</Link>
					</div>
					<p className='h-footer__copy'>
						© 2025 Kimhuo Chhoeurng · Phnom Penh, Cambodia
					</p>
				</div>
			</footer>
		</div>
	);
}
