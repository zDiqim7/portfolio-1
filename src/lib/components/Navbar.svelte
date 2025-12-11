<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from './ThemeToggle.svelte';
	import { slide } from 'svelte/transition';

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<nav class="navbar">
	<div class="logo">
		<a href="/">DEV<span class="dot">.</span>IO</a>
	</div>

	<!-- Desktop Menu -->
	<div class="desktop-menu">
		{#each links as link}
			<a href={link.href} class:active={$page.url.pathname === link.href}>
				<span class="bracket">[</span>
				{link.name}
				<span class="bracket">]</span>
			</a>
		{/each}
	</div>

	<div class="controls">
		<ThemeToggle />
		<button class="menu-btn" onclick={toggleMenu} aria-label="Menu">
			<div class="hamburger" class:open={isOpen}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</button>
	</div>
</nav>

<!-- Mobile Drawer -->
{#if isOpen}
	<div class="mobile-drawer" transition:slide={{ duration: 300 }}>
		{#each links as link}
			<a href={link.href} onclick={closeMenu} class:active={$page.url.pathname === link.href}>
				{link.name}
			</a>
		{/each}
	</div>
{/if}

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 var(--spacing-md);
		background: rgba(5, 5, 5, 0.8);
		backdrop-filter: blur(10px);
		z-index: 100;
		border-bottom: 1px solid var(--glass-border);
	}

	.logo a {
		font-family: var(--font-mono);
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -1px;
		color: var(--text-main);
	}

	.logo .dot {
		color: var(--primary);
	}

	.desktop-menu {
		display: none;
		gap: var(--spacing-md);
	}

	.desktop-menu a {
		font-family: var(--font-mono);
		font-size: 0.9rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 1px;
		position: relative;
	}

	.desktop-menu a:hover,
	.desktop-menu a.active {
		color: var(--primary);
		text-shadow: 0 0 8px var(--primary);
	}

	.bracket {
		opacity: 0;
		transition: opacity 0.2s ease;
		color: var(--secondary);
	}

	.desktop-menu a:hover .bracket,
	.desktop-menu a.active .bracket {
		opacity: 1;
	}

	.controls {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}

	.menu-btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: transparent;
		border: 1px solid var(--glass-border);
		border-radius: 4px;
	}

	.hamburger span {
		display: block;
		width: 20px;
		height: 2px;
		background: var(--text-main);
		margin: 3px auto;
		transition: 0.3s;
	}

	.hamburger.open span:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.open span:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -6px);
	}

	/* Mobile Drawer */
	.mobile-drawer {
		position: fixed;
		top: 80px;
		left: 0;
		width: 100%;
		background: var(--bg-secondary);
		border-bottom: 1px solid var(--primary);
		display: flex;
		flex-direction: column;
		padding: var(--spacing-md);
		z-index: 99;
	}

	.mobile-drawer a {
		font-family: var(--font-mono);
		font-size: 1.2rem;
		padding: var(--spacing-sm) 0;
		color: var(--text-muted);
		border-bottom: 1px solid var(--glass-border);
	}

	.mobile-drawer a:last-child {
		border-bottom: none;
	}

	.mobile-drawer a.active {
		color: var(--primary);
	}

	@media (min-width: 768px) {
		.desktop-menu {
			display: flex;
		}
		.menu-btn {
			display: none;
		}
		.mobile-drawer {
			display: none !important;
		}
	}
</style>
