<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<CustomCursor />
<ScrollProgress />
<Navbar />

{#key $page.url.pathname}
	<main in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }}>
		{@render children()}
	</main>
{/key}

<Footer />

<style>
	main {
		padding-top: 80px; /* Offset for fixed navbar */
		min-height: 100vh;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding-left: var(--spacing-sm);
		padding-right: var(--spacing-sm);
	}
</style>
