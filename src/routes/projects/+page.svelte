<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { fade } from 'svelte/transition';

	import { onMount } from 'svelte';

	let projects: any[] = [];
	let loading = true;

	onMount(async () => {
		try {
			const res = await fetch('/api/projects');
			projects = await res.json();
		} catch (error) {
			console.error('Failed to load projects', error);
		} finally {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>CYBER_PORTFOLIO // PROJECTS</title>
</svelte:head>

<div class="page-container" in:fade={{ duration: 500 }}>
	<Section title="PROJECT_ARCHIVE" subtitle="DEPLOYED_SYSTEMS">
		{#if loading}
			<div class="loading">LOADING_DATA...</div>
		{:else}
			<div class="projects-grid">
				{#each projects as project}
					<div class="grid-item">
						<ProjectCard {...project} />
					</div>
				{/each}
			</div>
		{/if}
	</Section>
</div>

<style>
	.loading {
		font-family: var(--font-mono);
		color: var(--primary);
		text-align: center;
		font-size: 1.2rem;
		padding: var(--spacing-xl);
		animation: blink 1s infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0.5;
		}
	}

	.page-container {
		padding-top: var(--spacing-lg);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: var(--spacing-md);
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (max-width: 600px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
