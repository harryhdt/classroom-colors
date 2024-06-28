import themes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				easyLook: {
					primary: '#2360e8',
					'primary-content': '#fff',
					secondary: '#6C2BD9',
					'secondary-content': '#fff',
					accent: '#be185d',
					'accent-content': '#fff',
					neutral: '#0f0f0f',
					'neutral-content': '#c8c8c8',
					'base-100': '#fff',
					'base-200': '#f0f0f4',
					'base-300': '#cbcbcc',
					'base-content': '#1c1b21',
					info: '#0284c7',
					'info-content': '#fff',
					success: '#057A55',
					'success-content': '#fff',
					warning: '#d97706',
					'warning-content': '#fff',
					error: '#E02424',
					'error-content': '#fff',
					//
					'--rounded-box': '0.25rem',
					'--rounded-btn': '0.25rem',
					'--rounded-badge': '2rem',
					'--animation-btn': '0.2s',
					'--animation-input': '0.2s',
					'--btn-focus-scale': '0.95',
					'--border-btn': '1px',
					'--tab-border': '1px',
					'--tab-radius': '0.25rem',

					//
					'--input-size-xs': '1rem',
					'--input-size-sm': '1.75rem',
					'--input-size-md': '2.25rem',
					'--input-size-lg': '3rem',
					'.btn,.btn-md': {
						height: 'var(--input-size-md)',
						'min-height': 'var(--input-size-md)'
					},
					'.btn-xs': {
						height: 'calc(var(--input-size-xs)*1.5)',
						'min-height': 'calc(var(--input-size-xs)*1.5)'
					},
					'.btn-sm': {
						height: 'var(--input-size-sm)',
						'min-height': 'var(--input-size-sm)'
					},
					'.btn-lg': {
						height: 'var(--input-size-lg)',
						'min-height': 'var(--input-size-lg)'
					},
					'.btn-square,.btn-circle': {
						width: 'var(--input-size-md)'
					},
					'.btn-square.btn-xs,.btn-circle.btn-xs': {
						width: 'var(--input-size-xs)'
					},
					'.btn-square.btn-sm,.btn-circle.btn-sm': {
						width: 'var(--input-size-sm)'
					},
					'.btn-square.btn-lg,.btn-circle.btn-lg': {
						width: 'var(--input-size-lg)'
					},
					'.file-input,.select,.input': {
						padding: '0 0.75rem',
						height: 'var(--input-size-md)'
					},
					'.file-input.file-input-xs,.select.select-xs,.input.input-xs': {
						height: 'calc(var(--input-size-xs)*1.5)',
						'min-height': 'calc(var(--input-size-xs)*1.5)'
					},
					'.file-input.file-input-sm,.select.select-sm,.input.input-sm': {
						height: 'var(--input-size-sm)'
					},
					'.file-input.file-input-lg,.select.select-lg,.input.input-lg': {
						height: 'var(--input-size-lg)'
					},
					'.toggle': {
						height: 'calc(var(--input-size-md)/1.5)',
						width: 'calc(var(--input-size-md)*1.25)',
						'--handleoffset': 'calc(var(--input-size-md)/1.8)',
						'border-radius': '0.25rem!important'
					},
					'.toggle.toggle-xs': {
						height: 'calc(var(--input-size-xs)/1.5)',
						width: 'calc(var(--input-size-xs)*1.25)',
						'--handleoffset': 'calc(var(--input-size-xs)/2.25)'
					},
					'.toggle.toggle-sm': {
						height: 'calc(var(--input-size-sm)/1.5)',
						width: 'calc(var(--input-size-sm)*1.25)',
						'--handleoffset': 'calc(var(--input-size-sm)/1.9)'
					},
					'.toggle.toggle-lg': {
						height: 'calc(var(--input-size-lg)/1.5)',
						width: 'calc(var(--input-size-lg)*1.25)',
						'--handleoffset': 'calc(var(--input-size-lg)/1.75)'
					},
					'.checkbox,.radio': {
						height: 'calc(var(--input-size-md)/1.5)',
						width: 'calc(var(--input-size-md)/1.5)',
						'border-radius': '0.25rem!important',
						background: 'var(--fallback-bc,oklch(var(--b2)/0.25))'
					},
					'.radio': {
						'border-radius': '100%!important'
					},
					'.checkbox.checkbox-xs,.radio.radio-xs': {
						height: 'calc(var(--input-size-xs)/1.25)',
						width: 'calc(var(--input-size-xs)/1.25)'
					},
					'.checkbox.checkbox-sm,.radio.radio-sm': {
						height: 'calc(var(--input-size-sm)/1.5)',
						width: 'calc(var(--input-size-sm)/1.5)'
					},
					'.checkbox.checkbox-lg,.radio.radio-lg': {
						height: 'calc(var(--input-size-lg)/1.5)',
						width: 'calc(var(--input-size-lg)/1.5)'
					},
					'.input-bordered:not(.input-primary,.input-secondary,.input-accent,.input-info,.input-success,.input-warning,.input-error)':
						{
							'border-color': 'var(--fallback-bc,oklch(var(--bc)/0.2))'
						},
					'.input:focus': {
						'outline-width': '0.5px',
						'outline-offset': '0'
					},
					'.link:focus-visible': {
						'outline-style': 'dashed',
						'outline-width': '1px',
						'outline-offset': '0'
					},
					'.btn:focus-visible,.toggle:focus-visible,.checkbox:focus-visible,.radio:focus-visible': {
						'outline-offset': '2px',
						'outline-width': '2px'
					},
					'.badge': {
						height: '1.5rem',
						'font-weight': '500',
						'font-size': '0.8rem'
					},
					'.badge-xs': {
						height: '1rem',
						'font-size': '0.65rem'
					},
					'.badge-sm': {
						height: '1.25rem',
						'font-size': '0.75rem'
					},
					'.badge-lg': {
						height: '1.5rem',
						'font-size': '0.9rem'
					},
					'.badge-primary': {
						'--tw-bg-opacity': '0.15',
						'--tw-border-opacity': '0.3',
						color: 'var(--fallback-p,oklch(var(--p)))',
						'border-color': 'var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)))',
						background: 'var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)))'
					},
					'.badge-secondary': {
						'--tw-bg-opacity': '0.15',
						'--tw-border-opacity': '0.3',
						color: 'var(--fallback-s,oklch(var(--s)))',
						'border-color': 'var(--fallback-s,oklch(var(--s)/var(--tw-border-opacity)))',
						background: 'var(--fallback-s,oklch(var(--s)/var(--tw-bg-opacity)))'
					},
					'.badge-accent': {
						'--tw-bg-opacity': '0.15',
						'--tw-border-opacity': '0.3',
						color: 'var(--fallback-a,oklch(var(--a)))',
						'border-color': 'var(--fallback-a,oklch(var(--a)/var(--tw-border-opacity)))',
						background: 'var(--fallback-a,oklch(var(--a)/var(--tw-bg-opacity)))'
					},
					'.badge-info': {
						'--tw-bg-opacity': '0.15',
						'--tw-border-opacity': '0.3',
						color: 'var(--fallback-in,oklch(var(--in)))',
						'border-color': 'var(--fallback-in,oklch(var(--in)/var(--tw-border-opacity)))',
						background: 'var(--fallback-in,oklch(var(--in)/var(--tw-bg-opacity)))'
					},
					'.badge-success': {
						'--tw-bg-opacity': '0.15',
						'--tw-border-opacity': '0.3',
						color: 'var(--fallback-su,oklch(var(--su)))',
						'border-color': 'var(--fallback-su,oklch(var(--su)/var(--tw-border-opacity)))',
						background: 'var(--fallback-su,oklch(var(--su)/var(--tw-bg-opacity)))'
					},
					'.badge-warning': {
						'--tw-bg-opacity': '0.15',
						'--tw-border-opacity': '0.3',
						color: 'var(--fallback-wa,oklch(var(--wa)))',
						'border-color': 'var(--fallback-wa,oklch(var(--wa)/var(--tw-border-opacity)))',
						background: 'var(--fallback-wa,oklch(var(--wa)/var(--tw-bg-opacity)))'
					},
					'.badge-error': {
						'--tw-bg-opacity': '0.15',
						'--tw-border-opacity': '0.3',
						color: 'var(--fallback-er,oklch(var(--er)))',
						'border-color': 'var(--fallback-er,oklch(var(--er)/var(--tw-border-opacity)))',
						background: 'var(--fallback-er,oklch(var(--er)/var(--tw-bg-opacity)))'
					},
					'.progress': {
						height: '1rem'
					},
					'.alert': {
						'--alert-bg': 'var(--fallback-in,oklch(var(--b2)/0.3))',
						'--alert-border-color': 'var(--fallback-in,oklch(var(--bc)/0.1))',
						border: '1px solid var(--alert-border-color)',
						padding: '0.5rem 0.75rem',
						gap: '1rem 0.5rem'
					},
					'.alert.alert-info': {
						'--alert-bg': 'var(--fallback-in,oklch(var(--in)/0.1))',
						'--alert-border-color': 'var(--fallback-in,oklch(var(--in)/0.4))',
						color: 'var(--fallback-in,oklch(var(--in)/1))'
					},
					'.alert.alert-success': {
						'--alert-bg': 'var(--fallback-su,oklch(var(--su)/0.1))',
						'--alert-border-color': 'var(--fallback-su,oklch(var(--su)/0.4))',
						color: 'var(--fallback-su,oklch(var(--su)/1))'
					},
					'.alert.alert-warning': {
						'--alert-bg': 'var(--fallback-wa,oklch(var(--wa)/0.05))',
						'--alert-border-color': 'var(--fallback-wa,oklch(var(--wa)/0.4))',
						color: 'var(--fallback-wa,oklch(var(--wa)/1))'
					},
					'.alert.alert-error': {
						'--alert-bg': 'var(--fallback-er,oklch(var(--er)/0.1))',
						'--alert-border-color': 'var(--fallback-er,oklch(var(--er)/0.4))',
						color: 'var(--fallback-er,oklch(var(--er)/1))'
					},
					'.link': {
						'text-decoration': 'none'
					},
					'.link:hover': {
						'text-decoration': 'underline'
					},
					'.btn': {
						'box-shadow': 'none'
					}
				},
				easyLookDark: {
					...themes['easyLook'],
					primary: '#1e40af',
					'primary-content': '#dbeafe',
					secondary: '#6b21a8',
					'secondary-content': '#f3e8ff',
					accent: '#9d174d',
					'accent-content': '#fce7f3',
					neutral: '#0f0f0f',
					'neutral-content': '#c8c8c8',
					'base-100': '#18181a',
					'base-200': '#222225',
					'base-300': '#38383d',
					'base-content': '#a4a4a6',
					info: '#0369a1',
					'info-content': '#e0f2fe',
					success: '#15803d',
					'success-content': '#dcfce7',
					warning: '#a16207',
					'warning-content': '#fefce8',
					error: '#991b1b',
					'error-content': '#fee2e2',
					//
					'--rounded-box': '0.25rem',
					'--rounded-btn': '0.25rem',
					'--rounded-badge': '2rem',
					'--animation-btn': '0.2s',
					'--animation-input': '0.2s',
					'--btn-focus-scale': '0.95',
					'--border-btn': '1px',
					'--tab-border': '1px',
					'--tab-radius': '0.25rem'
				}
			}
		],
		darkTheme: 'easyLookDark',
		logs: false
	}
};
