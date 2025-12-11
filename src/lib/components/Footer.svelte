<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-content">
		<div class="copyright">
			&copy; {year} DEV.IO <span class="divider">|</span> ALL RIGHTS RESERVED
		</div>

		<div class="socials">
			<a href="https://github.com" target="_blank" rel="noopener noreferrer">GITHUB</a>
			<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</a>
			<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
		</div>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--glass-border);
		padding: var(--spacing-md) 0;
		margin-top: var(--spacing-xl);
		background: var(--bg-secondary);
	}

	.footer-content {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 var(--spacing-sm);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-sm);
	}

	.copyright {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--text-muted);
	}

	.divider {
		color: var(--primary);
		margin: 0 0.5rem;
	}

	.socials {
		display: flex;
		gap: var(--spacing-md);
	}

	.socials a {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--text-muted);
		transition: color var(--transition-fast);
	}

	.socials a:hover {
		color: var(--primary);
	}

	@media (min-width: 768px) {
		.footer-content {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
