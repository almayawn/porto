import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
	title: 'Alma Laras Bestari - Portofolio',
	description:
		'Welcome to my portfolio! Aspiring web developer with growing interest in data, systems, and cloud technologies. Currently exploring web development, data analysis, and cloud engineering while building projects to strengthen my skills and understanding.',
	keywords: [
		'Fullstack Developer',
		'Cloud Engineer',
		'Web Developer',
		'React Developer',
		'Next.js',
		'TypeScript',
		'JavaScript',
		'Java',
		'Python',
		'SQL',
		'Performance Optimization',
		'Web Accessibility',
		'Component Design',
		'Alma Laras Bestari',
	],
	authors: [{ name: 'Alma Laras Bestari' }],
	creator: 'Alma Laras Bestari',
	openGraph: {
		title: 'Alma Laras Bestari - Portfolio',
		description: 'Aspiring web developer with growing interest in data, systems, and cloud technologies.',
		url: 'https://your-domain.com',
		siteName: 'Alma Laras Bestari - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Alma Laras Bestari - Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Alma Laras Bestari - Portofolio',
		description: 'Aspiring web developer with growing interest in data, systems, and cloud technologies.',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}