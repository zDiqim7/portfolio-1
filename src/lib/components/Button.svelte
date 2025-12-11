<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let href: string = '';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
	export let disabled = false;

	const dispatch = createEventDispatcher();
</script>

{#if href}
	<a {href} class="btn variant-{variant}" class:disabled>
		<span class="content"><slot /></span>
		<span class="glitch"></span>
	</a>
{:else}
	<button {type} {disabled} class="btn variant-{variant}" on:click>
		<span class="content"><slot /></span>
		<span class="glitch"></span>
	</button>
{/if}

<style>
	.btn {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 24px;
		font-family: var(--font-mono);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 0.9rem;
		color: var(--bg-color);
		background: var(--primary);
		border: none;
		cursor: pointer;
		overflow: hidden;
		transition: all 0.3s ease;
		text-decoration: none;
		clip-path: polygon(
			10px 0,
			100% 0,
			100% calc(100% - 10px),
			calc(100% - 10px) 100%,
			0 100%,
			0 10px
		);
	}

	/* Variants */
	.variant-secondary {
		background: var(--secondary);
	}

	.variant-outline {
		background: transparent;
		color: var(--primary);
		box-shadow: inset 0 0 0 2px var(--primary);
	}

	.variant-outline:hover {
		background: rgba(0, 243, 255, 0.1);
		text-shadow: 0 0 8px var(--primary);
		box-shadow:
			inset 0 0 0 2px var(--primary),
			0 0 20px var(--primary);
	}

	/* Glitch Effect on Hover */
	.btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 0 20px rgba(0, 243, 255, 0.5);
	}

	.variant-secondary:hover {
		box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
	}

	.btn:active {
		transform: translateY(1px);
	}

	.disabled {
		opacity: 0.5;
		pointer-events: none;
		filter: grayscale(1);
	}
</style>
