<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { fade, fly } from 'svelte/transition';

	const experience = [
		{
			year: '2024 - PRESENT',
			role: 'SENIOR FULL STACK ENGINEER',
			company: 'Plana Corps',
			desc: 'Leading the development of next-gen web interfaces using SvelteKit and WebGL.'
		},
		{
			year: '2021 - 2023',
			role: 'WEB3 DEVELOPER',
			company: 'Bybit Indonesia',
			desc: 'Building a Decentralized Application (DApp) for the Ethereum blockchain using Solidity and Web3.js.'
		},
		{
			year: '2019 - 2021',
			role: 'FULL STACK DEVELOPER',
			company: 'Startup Inc',
			desc: 'Built scalable microservices and interactive dashboards for data visualization.'
		}
	];

	const skillCategories = [
		{ title: 'LANGUAGES', items: ['TypeScript', 'JavaScript', 'Rust', 'Python', 'HTML/CSS'] },
		{ title: 'FRAMEWORKS', items: ['SvelteKit', 'React', 'Next.js', 'Tailwind', 'Node.js'] },
		{ title: 'TOOLS', items: ['Git', 'Docker', 'AWS', 'Figma', 'Blender'] }
	];
</script>

<svelte:head>
	<title>MY_PORTFOLIO // ABOUT</title>
</svelte:head>

<div class="page-container" in:fade={{ duration: 500 }}>
	<Section title="ABOUT_ME" subtitle="THE_HUMAN_BEHIND_THE_CODE">
		<div class="bio">
			<p>
				Hi, I'm <span class="highlight">Muhammad Diqi Maulana</span>. Curently working as a Senior
				Frontend Engineer at Plana Corps. I build web apps that feel immersive and handle high
				performance without breaking a sweat. For me, it’s not about complex philosophy; it’s about
				writing clean code and creating a seamless experience for the user.
			</p>
		</div>
	</Section>

	<Section title="EXPERIENCE_LOG" subtitle="CHRONOLOGICAL_DATA">
		<div class="timeline">
			{#each experience as item, i}
				<div
					class="timeline-item"
					in:fly={{ x: i % 2 === 0 ? -50 : 50, duration: 800, delay: i * 200 }}
				>
					<div class="year">{item.year}</div>
					<div class="content">
						<h3>{item.role}</h3>
						<h4>{item.company}</h4>
						<p>{item.desc}</p>
					</div>
				</div>
			{/each}
			<div class="timeline-line"></div>
		</div>
	</Section>

	<Section title="SKILL_MATRIX" subtitle="TECHNICAL_CAPABILITIES">
		<div class="skills-grid">
			{#each skillCategories as category, i}
				<div class="skill-card" in:fly={{ y: 50, duration: 800, delay: i * 200 }}>
					<h3>{category.title}</h3>
					<div class="list">
						{#each category.items as skill}
							<span class="skill-tag">{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</Section>
</div>

<style>
	.page-container {
		padding-top: var(--spacing-lg);
	}

	.bio {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		font-size: 1.2rem;
		line-height: 1.8;
		color: var(--text-muted);
	}

	.highlight {
		color: var(--primary);
		font-weight: 700;
	}

	/* Timeline */
	.timeline {
		position: relative;
		max-width: 800px;
		margin: 0 auto;
		padding: var(--spacing-md) 0;
	}

	.timeline-line {
		position: absolute;
		top: 0;
		left: 50%;
		width: 2px;
		height: 100%;
		background: var(--glass-border);
		transform: translateX(-50%);
		z-index: 0;
	}

	.timeline-item {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: var(--spacing-lg);
		position: relative;
		z-index: 1;
	}

	.timeline-item:nth-child(even) {
		flex-direction: row-reverse;
	}

	.year {
		width: 150px;
		text-align: center;
		font-family: var(--font-mono);
		color: var(--secondary);
		font-weight: 700;
	}

	.content {
		width: 45%;
		background: var(--bg-secondary);
		padding: var(--spacing-md);
		border: 1px solid var(--glass-border);
		border-radius: 4px;
		transition: all 0.3s;
	}

	.content:hover {
		border-color: var(--primary);
		transform: scale(1.02);
	}

	.content h3 {
		color: var(--text-main);
		font-size: 1.1rem;
		margin-bottom: 4px;
	}

	.content h4 {
		color: var(--text-muted);
		font-size: 0.9rem;
		margin-bottom: var(--spacing-sm);
		font-family: var(--font-mono);
	}

	.content p {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.5;
	}

	/* Skills Grid */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-md);
		max-width: 1000px;
		margin: 0 auto;
	}

	.skill-card {
		background: var(--bg-secondary);
		padding: var(--spacing-md);
		border: 1px solid var(--glass-border);
		text-align: center;
	}

	.skill-card h3 {
		color: var(--primary);
		margin-bottom: var(--spacing-md);
		font-size: 1.2rem;
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
	}

	.skill-tag {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--text-main);
		background: rgba(255, 255, 255, 0.05);
		padding: 4px 8px;
		border-radius: 2px;
	}

	@media (max-width: 768px) {
		.timeline-line {
			left: 20px;
		}
		.timeline-item {
			flex-direction: column;
			align-items: flex-start;
			margin-left: 50px;
		}
		.timeline-item:nth-child(even) {
			flex-direction: column;
			align-items: flex-start;
		}
		.year {
			width: auto;
			margin-bottom: 8px;
			text-align: left;
		}
		.content {
			width: 100%;
		}
	}
</style>
