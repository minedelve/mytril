
<script lang="ts">
    import logo from "$lib/assets/images/minedelve.webp";

    import {byMinedelveLink} from "$lib/store/router"
	import { capitalizeFirstLetter } from "$lib/utils";
</script>

<section>
    <img src={logo} alt="minedelve logo"/>

    <h1>Create by <span>Minedelve</span> Team</h1>
    
    <div>

        {#each $byMinedelveLink as navigation}
			<a href={navigation.path} target={navigation.external ? '_blank' : ''}>
				{capitalizeFirstLetter(navigation.name)}
			</a>
		{/each}
    </div>
</section>


<style lang="postcss">
    section {
        display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		min-height: calc(100vh - var(--nav-height));
		align-items: center;

        img {
            max-width: 100px;
            width: 100%;
        }

        div {
            display: flex;
            gap: 0.5rem;
            a {
				align-items: center;
				border-radius: 8px;
				display: flex;
				font-size: 16px;
				font-weight: 600;
				padding: 0.5rem 1em 0.5rem 1rem;
				transition:
					background-color 0.5s,
					color 0.5s;
				background-color: var(--c-bg-soft);
				color: var(--c-text-2);
				justify-content: center;
				text-decoration: none;
            

				&:hover {
					background-color: var(--c-bg-mute);
				}

				:global(svg) {
					height: 16px;
					width: 16px;
					margin: 0 0.5rem;
				}
			}
        }
    }
</style>