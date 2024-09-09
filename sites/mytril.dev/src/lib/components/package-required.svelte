<script lang="ts">
    import Icon from '@iconify/svelte';
</script>

<a href="https://www.npmjs.com/package/mytril-tools" target="_blank">
    <div>
        <Icon icon="material-symbols:warning-outline" />
        Mytril tools is required for use this functionality 
    </div>
</a>


<style>
    div {
        border: 1px solid var(--c-amber-5);
        display: flex;
        align-items: center;
        border-radius: 8px;
        padding: 6px 12px;
    }

    div > :global(svg) {
        font-size: 24px;
        margin-right: 9px;
        color: var(--c-amber-5);
    }

    a {
        text-decoration: none;
        color: var(--c-amber-5);
    }

    a:hover,
    a:hover :global(svg) {
        color: var(--c-amber-4);
    }

    a:hover div {
        border-color: var(--c-amber-4);
    }
</style>