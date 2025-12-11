<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Section from '$lib/components/Section.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const skills = ['SvelteKit', 'TypeScript', 'Node.js', 'Cyber-Security', 'Rust', 'WebGL'];
</script>

<svelte:head>
	<title>Diqi's Portfolio // HOME</title>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		{#if mounted}
			<h1 in:fly={{ y: 50, duration: 800, delay: 200 }}>
				<span class="glitch-text" data-text="BUILDING">BUILDING</span>
				<br />
				THE <span class="highlight">FUTURE</span>
			</h1>

			<p in:fly={{ y: 30, duration: 800, delay: 500 }} class="tagline">
				FULL_STACK_DEVELOPER // CREATIVE_CODER // SYSTEM_ARCHITECT
			</p>

			<div class="cta-group" in:fly={{ y: 20, duration: 800, delay: 800 }}>
				<Button href="/projects">VIEW_PROJECTS</Button>
				<Button href="/contact" variant="outline">CONTACT_ME</Button>
			</div>
		{/if}
	</div>

	<div class="grid-overlay"></div>
</section>

<!-- Introduction / Short About -->
<Section id="intro" title="WHO_AM_I">
	<div class="intro-container">
		<p>
			I am a digital artisan crafting high-performance, accessible, and aesthetically pleasing web
			experiences. My work bridges the gap between brutalist design and refined interactivity.
		</p>

		<div class="skills-ticker">
			{#each skills as skill}
				<span class="skill-item">{skill}</span>
			{/each}
		</div>
	</div>
</Section>

<style>
	/* Hero Styles */
	.hero {
		height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	.hero-content {
		text-align: center;
		z-index: 2;
	}

	h1 {
		font-size: 5rem;
		font-weight: 800;
		line-height: 1;
		margin-bottom: var(--spacing-md);
		letter-spacing: -2px;
	}

	.highlight {
		color: var(--primary);
		text-shadow: 0 0 20px rgba(0, 243, 255, 0.5);
	}

	.tagline {
		font-family: var(--font-mono);
		color: var(--text-muted);
		font-size: 1rem;
		letter-spacing: 2px;
		margin-bottom: var(--spacing-lg);
	}

	.cta-group {
		display: flex;
		gap: var(--spacing-md);
		justify-content: center;
	}

	/* Glitch Effect */
	.glitch-text {
		position: relative;
	}

	.glitch-text::before,
	.glitch-text::after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.glitch-text::before {
		left: 2px;
		text-shadow: -1px 0 var(--secondary);
		clip: rect(44px, 450px, 56px, 0);
		animation: glitch-anim 5s infinite linear alternate-reverse;
	}

	.glitch-text::after {
		left: -2px;
		text-shadow: -1px 0 var(--primary);
		clip: rect(44px, 450px, 56px, 0);
		animation: glitch-anim2 5s infinite linear alternate-reverse;
	}

	@keyframes glitch-anim {
		0% {
			clip: rect(13px, 9999px, 81px, 0);
		}
		5% {
			clip: rect(74px, 9999px, 86px, 0);
		}
		10% {
			clip: rect(32px, 9999px, 12px, 0);
		}
		15% {
			clip: rect(61px, 9999px, 1px, 0);
		}
		20% {
			clip: rect(98px, 9999px, 66px, 0);
		}
		100% {
			clip: rect(4px, 9999px, 19px, 0);
		}
	}

	@keyframes glitch-anim2 {
		0% {
			clip: rect(56px, 9999px, 2px, 0);
		}
		5% {
			clip: rect(12px, 9999px, 59px, 0);
		}
		10% {
			clip: rect(89px, 9999px, 96px, 0);
		}
		15% {
			clip: rect(2px, 9999px, 34px, 0);
		}
		20% {
			clip: rect(45px, 9999px, 11px, 0);
		}
		100% {
			clip: rect(38px, 9999px, 49px, 0);
		}
	}

	/* Background Grid */
	.grid-overlay {
		position: absolute;
		inset: -50%;
		width: 200%;
		height: 200%;
		background-image:
			linear-gradient(var(--glass-border) 1px, transparent 1px),
			linear-gradient(90deg, var(--glass-border) 1px, transparent 1px);
		background-size: 50px 50px;
		transform: perspective(500px) rotateX(60deg);
		opacity: 0.2;
		z-index: 1;
		animation: grid-move 20s linear infinite;
	}

	@keyframes grid-move {
		0% {
			transform: perspective(500px) rotateX(60deg) translateY(0);
		}
		100% {
			transform: perspective(500px) rotateX(60deg) translateY(50px);
		}
	}

	/* Intro Section */
	.intro-container {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.intro-container p {
		font-size: 1.2rem;
		line-height: 1.8;
		color: var(--text-muted);
		margin-bottom: var(--spacing-lg);
	}

	.skills-ticker {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--spacing-sm);
	}

	.skill-item {
		font-family: var(--font-mono);
		font-size: 0.9rem;
		padding: 8px 16px;
		border: 1px solid var(--glass-border);
		color: var(--primary);
		border-radius: 20px;
		background: rgba(0, 243, 255, 0.05);
		transition: all 0.3s;
	}

	.skill-item:hover {
		background: var(--primary);
		color: var(--bg-color);
		box-shadow: 0 0 15px var(--primary);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 3rem;
		}
		.cta-group {
			flex-direction: column;
		}
	}
</style>
