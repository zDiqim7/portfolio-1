<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Button from '$lib/components/Button.svelte';
	import { fade } from 'svelte/transition';

	let formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		formStatus = 'submitting';

		try {
			const formData = new FormData(e.target as HTMLFormElement);
			const data = Object.fromEntries(formData);

			const response = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (response.ok) {
				formStatus = 'success';
			} else {
				console.error('Submission failed');
				formStatus = 'error';
			}
		} catch (err) {
			console.error(err);
			formStatus = 'error';
		}
	}
</script>

<svelte:head>
	<title>CYBER_PORTFOLIO // CONTACT</title>
</svelte:head>

<div class="page-container" in:fade={{ duration: 500 }}>
	<Section title="INITIATE_LINK" subtitle="TRANSMISSION_OPEN">
		<div class="contact-layout">
			<!-- Contact Info -->
			<div class="info-panel">
				<h3>DIRECT_CHANNELS</h3>
				<p>
					Available for freelance contracts, consulting, or full-time engagements. Reach out if you
					want to build something extraordinary.
				</p>

				<div class="channels">
					<div class="channel">
						<span class="label">EMAIL</span>
						<a href="mailto:contact@dev.io" class="value">contact@dev.io</a>
					</div>
					<div class="channel">
						<span class="label">DISCORD</span>
						<span class="value">dev_io#0000</span>
					</div>
					<div class="channel">
						<span class="label">X / TWITTER</span>
						<a href="https://twitter.com" class="value">@dev_io</a>
					</div>
					<div class="channel">
						<span class="label">GITHUB</span>
						<a href="https://github.com" class="value">github.com/dev_io</a>
					</div>
				</div>
			</div>

			<!-- Form -->
			<form class="contact-form" onsubmit={handleSubmit}>
				<div class="form-group">
					<label for="name">IDENTIFIER // NAME</label>
					<input type="text" id="name" name="name" required placeholder="ENTER_NAME" />
				</div>

				<div class="form-group">
					<label for="email">CONTACT_POINT // EMAIL</label>
					<input type="email" id="email" name="email" required placeholder="ENTER_EMAIL" />
				</div>

				<div class="form-group">
					<label for="message">DATA_PACKET // MESSAGE</label>
					<textarea
						id="message"
						name="message"
						rows="6"
						required
						placeholder="ENTER_MESSAGE_DATA..."
					></textarea>
				</div>

				<div class="form-actions">
					{#if formStatus === 'submitting'}
						<Button disabled>TRANSMITTING...</Button>
					{:else if formStatus === 'success'}
						<Button disabled variant="secondary">TRANSMISSION_COMPLETE</Button>
					{:else}
						<Button type="submit">SEND_TRANSMISSION</Button>
					{/if}
				</div>
			</form>
		</div>
	</Section>
</div>

<style>
	.page-container {
		padding-top: var(--spacing-lg);
	}

	.contact-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-xl);
		max-width: 1000px;
		margin: 0 auto;
		align-items: start;
	}

	/* Info Panel */
	.info-panel h3 {
		color: var(--primary);
		margin-bottom: var(--spacing-md);
		letter-spacing: 2px;
	}

	.info-panel p {
		color: var(--text-muted);
		line-height: 1.6;
		margin-bottom: var(--spacing-lg);
	}

	.channel {
		margin-bottom: var(--spacing-md);
	}

	.channel .label {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--secondary);
		margin-bottom: 4px;
	}

	.channel .value {
		color: var(--text-main);
		font-size: 1.1rem;
		text-decoration: none;
		transition: color 0.3s;
	}

	.channel a.value:hover {
		color: var(--primary);
		text-shadow: 0 0 10px rgba(0, 243, 255, 0.4);
	}

	/* Form */
	.contact-form {
		background: var(--bg-secondary);
		padding: var(--spacing-md);
		border: 1px solid var(--glass-border);
		border-radius: 4px;
	}

	.form-group {
		margin-bottom: var(--spacing-md);
	}

	label {
		display: block;
		font-family: var(--font-mono);
		color: var(--text-muted);
		font-size: 0.8rem;
		margin-bottom: 8px;
	}

	input,
	textarea {
		width: 100%;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid var(--glass-border);
		color: var(--text-main);
		padding: 12px;
		font-family: var(--font-main);
		font-size: 1rem;
		transition: all 0.3s;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--primary);
		box-shadow: 0 0 15px rgba(0, 243, 255, 0.1);
	}

	textarea {
		resize: vertical;
	}

	.form-actions {
		margin-top: var(--spacing-md);
	}

	@media (max-width: 768px) {
		.contact-layout {
			grid-template-columns: 1fr;
			gap: var(--spacing-md);
		}
	}
</style>
