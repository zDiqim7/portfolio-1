import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const defaultValue = 'dark';
const initialValue = browser ? (window.localStorage.getItem('theme') as Theme) ?? defaultValue : defaultValue;

export const theme = writable<Theme>(initialValue);

theme.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('theme', value);
        document.documentElement.setAttribute('data-theme', value);

        if (value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
});
