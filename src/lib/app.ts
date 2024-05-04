import { writable } from 'svelte/store';

export const currentTheme = writable<'easyLook' | 'easyLookDark'>('easyLook');

export const initTheme = () => {
	const theme = localStorage.theme || 'easyLook';
	currentTheme.set(theme);
	document.documentElement.setAttribute('data-theme', theme);
};
export const toggleTheme = () => {
	const activeTheme = document.documentElement.getAttribute('data-theme');
	const theme = activeTheme === 'easyLook' ? 'easyLookDark' : 'easyLook';
	document.documentElement.setAttribute('data-theme', theme);
	currentTheme.set(theme);
	localStorage.theme = theme;
};

export const _elm = (selector: string) => {
	return {
		focus: () => (document.querySelector(selector) as HTMLElement | null)?.focus(),
		click: () => (document.querySelector(selector) as HTMLElement | null)?.click()
	};
};

export const generateColorFromBg = (
	bgColor: string,
	props = { blackColor: '#1a1a1a', whiteColor: '#fafafa' }
) => {
	// Convert hex color to RGB
	const r = parseInt(bgColor.substring(1, 3), 16);
	const g = parseInt(bgColor.substring(3, 5), 16);
	const b = parseInt(bgColor.substring(5, 7), 16);

	// Calculate relative luminance (perceptual brightness)
	const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

	const theme = localStorage.theme || 'easyLook';

	// Determine text color based on luminance
	return luminance > (theme === 'easyLook' ? 0.6 : 0.8) ? props.blackColor : props.whiteColor;
};
