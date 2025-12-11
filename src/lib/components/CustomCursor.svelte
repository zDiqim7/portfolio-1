<script lang="ts">
	import { onMount } from 'svelte';

	let x = $state(0);
	let y = $state(0);
	let trailingX = $state(0);
	let trailingY = $state(0);
	let visible = $state(false);

	// Smooth trail lerp factor
	const ease = 0.15;

	onMount(() => {
		// Only run on desktop/cursor devices
		if (window.matchMedia('(pointer: fine)').matches) {
			visible = true;

			const updatePosition = (e: MouseEvent) => {
				x = e.clientX;
				y = e.clientY;
			};

			window.addEventListener('mousemove', updatePosition);

			const animate = () => {
				trailingX += (x - trailingX) * ease;
				trailingY += (y - trailingY) * ease;
				requestAnimationFrame(animate);
			};

			const frameId = requestAnimationFrame(animate);

			return () => {
				window.removeEventListener('mousemove', updatePosition);
				cancelAnimationFrame(frameId);
			};
		}
	});
</script>

{#if visible}
	<!-- Main Cursor Dot -->
	<div class="cursor-dot" style="transform: translate({x}px, {y}px);"></div>

	<!-- Trailing Ring -->
	<div class="cursor-ring" style="transform: translate({trailingX}px, {trailingY}px);"></div>
{/if}

<style>
	.cursor-dot {
		position: fixed;
		top: -4px;
		left: -4px;
		width: 8px;
		height: 8px;
		background-color: var(--primary);
		border-radius: 50%;
		pointer-events: none;
		z-index: 9999;
		mix-blend-mode: difference;
		will-change: transform;
	}

	.cursor-ring {
		position: fixed;
		top: -20px;
		left: -20px;
		width: 40px;
		height: 40px;
		border: 1px solid var(--primary);
		border-radius: 50%;
		pointer-events: none;
		z-index: 9998;
		opacity: 0.5;
		will-change: transform;
		transition:
			width 0.2s,
			height 0.2s;
	}

	/* Optional: Add active states via global class if needed */
	:global(.hover-active) .cursor-ring {
		width: 60px;
		height: 60px;
		background-color: rgba(0, 243, 255, 0.1);
		border-color: transparent;
	}
</style>
