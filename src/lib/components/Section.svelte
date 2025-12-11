<script lang="ts">
	export let id: string = '';
	export let title: string = '';
	export let subtitle: string = '';
</script>

<section {id} class="section">
	{#if title}
		<div class="header">
			<h2 class="title" data-text={title}>{title}</h2>
			{#if subtitle}
				<p class="subtitle">{subtitle}</p>
			{/if}
			<div class="line"></div>
		</div>
	{/if}

	<div class="content">
		<slot />
	</div>
</section>

<style>
	.section {
		padding: var(--spacing-xl) 0;
		position: relative;
	}

	.header {
		margin-bottom: var(--spacing-lg);
		text-align: center;
	}

	.title {
		font-size: 2.5rem;
		color: var(--text-main);
		text-transform: uppercase;
		letter-spacing: 4px;
		margin-bottom: var(--spacing-xs);
		position: relative;
		display: inline-block;
	}

	.subtitle {
		font-family: var(--font-mono);
		color: var(--primary);
		font-size: 0.9rem;
		letter-spacing: 2px;
	}

	.line {
		width: 60px;
		height: 4px;
		background: var(--secondary);
		margin: var(--spacing-sm) auto;
	}

	@media (max-width: 768px) {
		.title {
			font-size: 1.8rem;
		}
	}
</style>
