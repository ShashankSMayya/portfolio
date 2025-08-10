/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Warm color palette
				stone: {
					50: '#fafaf9',
					100: '#f5f5f4',
					200: '#e7e5e4',
					300: '#d6d3d1',
					400: '#a8a29e',
					500: '#78716c',
					600: '#57534e',
					700: '#44403c',
					800: '#292524',
					900: '#1c1917',
					950: '#0c0a09',
				},
				orange: {
					50: '#fff7ed',
					100: '#ffedd5',
					200: '#fed7aa',
					300: '#fdba74',
					400: '#fb923c',
					500: '#f97316',
					600: '#ea580c',
					700: '#c2410c',
					800: '#9a3412',
					900: '#7c2d12',
					950: '#431407',
				},
				amber: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
					950: '#451a03',
				},
				red: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
					950: '#450a0a',
				},
				yellow: {
					50: '#fefce8',
					100: '#fef9c3',
					200: '#fef08a',
					300: '#fde047',
					400: '#facc15',
					500: '#eab308',
					600: '#ca8a04',
					700: '#a16207',
					800: '#854d0e',
					900: '#713f12',
					950: '#422006',
				}
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				'body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'fade-up': 'fadeUp 0.5s ease-out',
				'slide-in': 'slideIn 0.3s ease-out',
				'scale-in': 'scaleIn 0.2s ease-out',
				'spin-slow': 'spin 3s linear infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideIn: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				scaleIn: {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'glow': '0 0 20px rgba(0, 0, 0, 0.1)',
				'inner-glow': 'inset 0 0 20px rgba(0, 0, 0, 0.06)',
				'warm': '0 10px 40px -15px rgba(245, 158, 11, 0.15)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'mesh-gradient': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
				'warm-gradient': 'linear-gradient(135deg, rgba(251, 146, 60, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%)',
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				// Warm Light Theme
				"warm-light": {
					"primary": "#f97316",      // Orange-500
					"secondary": "#eab308",    // Yellow-500
					"accent": "#dc2626",       // Red-600
					"neutral": "#44403c",      // Stone-700
					"base-100": "#fffbf7",     // Warm white
					"base-200": "#fef3e2",     // Warm cream
					"base-300": "#fde8d0",     // Light peach
					"info": "#0ea5e9",
					"success": "#16a34a",
					"warning": "#f59e0b",
					"error": "#dc2626",
				},
				// Warm Dark Theme
				"warm-dark": {
					"primary": "#fb923c",      // Orange-400
					"secondary": "#fbbf24",    // Amber-400
					"accent": "#f87171",       // Red-400
					"neutral": "#fef3c7",      // Amber-100
					"base-100": "#1c1917",     // Stone-900
					"base-200": "#292524",     // Stone-800
					"base-300": "#44403c",     // Stone-700
					"info": "#38bdf8",
					"success": "#4ade80",
					"warning": "#fbbf24",
					"error": "#f87171",
				}
			}
		],
		darkTheme: "warm-dark",
		logs: false,
	}
}