<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import Sortable from 'sortablejs';

	let {
		items = $bindable(),
		itemElm,
		onSort,
		...props
	}: {
		items: any[];
		itemElm: () => any;
		onSort: (items: any[]) => any;
	} & HTMLAttributes<HTMLDivElement> = $props();

	let elm: HTMLDivElement;
	let sortable: Sortable;
	$effect(() => {
		sortable = Sortable.create(elm, {
			animation: 300,
			handle: '.handle'
		});
	});
</script>

<div bind:this={elm} {...props}>
	{@render itemElm()}
</div>

<style>
	:global(.sortable-ghost) {
		animation: goyang 0.75s linear infinite;
		outline: 3px solid theme('colors.yellow.500');
		outline-offset: 2px;
	}
</style>
