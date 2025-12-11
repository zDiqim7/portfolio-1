<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { fade } from 'svelte/transition';

	function toggleTheme() {
		$theme = $theme === 'dark' ? 'light' : 'dark';
	}
</script>

<button onclick={toggleTheme} aria-label="Toggle Theme" class="theme-toggle">
	{#if $theme === 'dark'}
		<span in:fade={{ duration: 200 }}>☀</span>
	{:else}
		<span in:fade={{ duration: 200 }}>☾</span>
	{/if}
</button>

<style>
	.theme-toggle {
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		color: var(--text-main);
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		transition: all var(--transition-fast);
		backdrop-filter: blur(5px);
	}

	.theme-toggle:hover {
		border-color: var(--primary);
		box-shadow: 0 0 10px var(--primary);
		color: var(--primary);
	}
</style>
