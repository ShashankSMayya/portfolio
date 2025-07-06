/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				premium: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
				},
				accent: {
					50: '#fef7ff',
					100: '#fdeeff',
					200: '#fcddff',
					300: '#f8bfff',
					400: '#f192ff',
					500: '#e665ff',
					600: '#d43aff',
					700: '#b91cff',
					800: '#9b1adf',
					900: '#7c1fb8',
				},
				gold: {
					50: '#fffdf2',
					100: '#fffbe5',
					200: '#fff4c6',
					300: '#ffe79e',
					400: '#ffd96b',
					500: '#ffc53d',
					600: '#f59e0b',
					700: '#d97706',
					800: '#b45309',
					900: '#92400e',
				}
			},
			fontFamily: {
				'display': ['Inter', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
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
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'float-medium': 'float 5s ease-in-out infinite',
				'float-fast': 'float 4s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'glow-pulse': 'glowPulse 3s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s ease-in-out infinite',
				'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
				'scale-in': 'scaleIn 0.3s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
					'25%': { transform: 'translateY(-5px) translateX(2px)' },
					'50%': { transform: 'translateY(-10px) translateX(0px)' },
					'75%': { transform: 'translateY(-5px) translateX(-2px)' },
				},
				glow: {
					'0%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.2)' },
					'100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.4)' },
				},
				glowPulse: {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(99, 102, 241, 0.4), 0 0 40px rgba(139, 92, 246, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(139, 92, 246, 0.5)',
						transform: 'scale(1.05)'
					},
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				bounceGentle: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' },
				},
				scaleIn: {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'premium-gradient': 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
				'premium-glow': 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(34, 211, 238, 0.3) 100%)',
			},
		},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
				premium: {
					"primary": "#6366f1",
					"secondary": "#8b5cf6", 
					"accent": "#06b6d4",
					"neutral": "#1e293b",
					"base-100": "#ffffff",
					"base-200": "#f8fafc",
					"base-300": "#e2e8f0",
					"info": "#0ca5e9",
					"success": "#22c55e",
					"warning": "#f59e0b",
					"error": "#ef4444",
				},
				"premium-dark": {
					"primary": "#8b5cf6",
					"secondary": "#6366f1",
					"accent": "#22d3ee",
					"neutral": "#0f172a",
					"base-100": "#0f172a",
					"base-200": "#1e293b",
					"base-300": "#334155",
					"info": "#0ea5e9",
					"success": "#10b981",
					"warning": "#f59e0b",
					"error": "#f87171",
				}
			}
		],
		darkTheme: "premium-dark",
		logs: false,
	}
}
