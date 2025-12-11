<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let progress = $state(0);

	function updateProgress() {
		const scrollTop = window.scrollY;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		if (height > 0) {
			progress = (scrollTop / height) * 100;
		} else {
			progress = 0;
		}
	}

	onMount(() => {
		window.addEventListener('scroll', updateProgress);
		updateProgress();

		return () => {
			window.removeEventListener('scroll', updateProgress);
		};
	});
</script>

<div class="progress-container">
	<div class="progress-bar" style="width: {progress}%"></div>
</div>

<style>
	.progress-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 3px;
		z-index: 1000;
		pointer-events: none;
		background: transparent;
	}

	.progress-bar {
		height: 100%;
		background: var(--primary);
		box-shadow: 0 0 10px var(--primary);
		transition: width 0.1s linear;
	}
</style>
