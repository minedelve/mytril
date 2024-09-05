<blockquote>
	<p><slot /></p>
</blockquote>

<style lang="postcss">
	blockquote {
		margin: 1.6rem 0 2.4rem;
		color: var(--c-text-);
		border: 1px solid var(--c-primary);
		border-radius: 0.4rem;
		padding: 1rem;
		& :before {
			content: 'note';
			text-transform: uppercase;
			color: var(--c-primary);
			margin-bottom: 0.5rem;
			font-size: 0.85rem;
			font-weight: 600;
			display: block;
		}
		& p:last-child {
			margin: 0;
		}
	}
</style>
