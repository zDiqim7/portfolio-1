<script lang="ts">
	export let title: string;
	export let description: string;
	export let tags: string[] = [];
	export let image: string = '';
	export let href: string = '/projects';
</script>

<a {href} class="card">
	<div class="image-container">
		{#if image}
			<img src={image} alt={title} loading="lazy" />
		{:else}
			<div class="placeholder">
				<span>NO_SIGNAL</span>
			</div>
		{/if}
		<div class="overlay"></div>
	</div>

	<div class="content">
		<h3>{title}</h3>
		<p>{description}</p>

		<div class="tags">
			{#each tags as tag}
				<span class="tag">#{tag}</span>
			{/each}
		</div>
	</div>

	<div class="corner-accents">
		<span></span><span></span><span></span><span></span>
	</div>
</a>

<style>
	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		background: var(--bg-secondary);
		border: 1px solid var(--glass-border);
		overflow: hidden;
		transition: all 0.4s ease;
		height: 100%;
		text-align: left;
	}

	.card:hover {
		border-color: var(--primary);
		transform: translateY(-5px);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
	}

	.image-container {
		position: relative;
		width: 100%;
		height: 200px;
		background: #000;
		overflow: hidden;
	}

	.placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-muted);
		font-family: var(--font-mono);
		letter-spacing: 2px;
		background: repeating-linear-gradient(45deg, #111, #111 10px, #151515 10px, #151515 20px);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s ease;
	}

	.card:hover img {
		transform: scale(1.05);
	}

	.overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
		opacity: 0.6;
	}

	.content {
		padding: var(--spacing-md);
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	h3 {
		color: var(--text-main);
		font-size: 1.4rem;
		margin-bottom: var(--spacing-xs);
		transition: color 0.3s;
	}

	.card:hover h3 {
		color: var(--primary);
	}

	p {
		color: var(--text-muted);
		font-size: 0.95rem;
		line-height: 1.6;
		margin-bottom: var(--spacing-md);
		flex-grow: 1;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
	}

	.tag {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--secondary);
		background: rgba(255, 0, 255, 0.1);
		padding: 4px 8px;
		border-radius: 2px;
	}

	/* Corner Accents */
	.corner-accents span {
		position: absolute;
		width: 10px;
		height: 10px;
		border: 2px solid transparent;
		transition: all 0.3s ease;
	}

	.card:hover .corner-accents span {
		border-color: var(--primary);
	}

	.corner-accents span:nth-child(1) {
		top: 0;
		left: 0;
		border-top: 0;
		border-left: 0;
	}
	.corner-accents span:nth-child(2) {
		top: 0;
		right: 0;
		border-top: 0;
		border-right: 0;
	}
	.corner-accents span:nth-child(3) {
		bottom: 0;
		left: 0;
		border-bottom: 0;
		border-left: 0;
	}
	.corner-accents span:nth-child(4) {
		bottom: 0;
		right: 0;
		border-bottom: 0;
		border-right: 0;
	}

	.card:hover .corner-accents span:nth-child(1) {
		border-top: 2px solid var(--primary);
		border-left: 2px solid var(--primary);
	}
	.card:hover .corner-accents span:nth-child(2) {
		border-top: 2px solid var(--primary);
		border-right: 2px solid var(--primary);
	}
	.card:hover .corner-accents span:nth-child(3) {
		border-bottom: 2px solid var(--primary);
		border-left: 2px solid var(--primary);
	}
	.card:hover .corner-accents span:nth-child(4) {
		border-bottom: 2px solid var(--primary);
		border-right: 2px solid var(--primary);
	}
</style>
