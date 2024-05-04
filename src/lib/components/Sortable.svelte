<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { dndzone, SOURCES, TRIGGERS } from 'svelte-dnd-action';

	let {
		items = $bindable(),
		itemElm,
		onSort,
		...props
	}: {
		items: any[];
		itemElm: (
			dragDisabled: boolean,
			flipDurationMs: number,
			enabledDrag: any,
			disabledDrag: any,
			handleKeyDown: any
		) => any;
		onSort: (items: any[]) => any;
	} & HTMLAttributes<HTMLDivElement> = $props();

	const flipDurationMs = 200;
	let dragDisabled = $state(true);

	// @ts-ignore
	function handleConsider(e) {
		const {
			items: newItems,
			info: { source, trigger }
		} = e.detail;
		items = newItems;
		// Ensure dragging is stopped on drag finish via keyboard
		if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
			dragDisabled = true;
		}
	}

	// @ts-ignore
	function handleFinalize(e) {
		const {
			items: newItems,
			info: { source }
		} = e.detail;
		items = newItems;
		onSort(newItems);
		// Ensure dragging is stopped on drag finish via pointer (mouse, touch)
		if (source === SOURCES.POINTER) {
			dragDisabled = true;
		}
	}

	function enabledDrag(
		e: (MouseEvent | TouchEvent) & {
			currentTarget: EventTarget & HTMLElement;
		}
	) {
		// preventing default to prevent lag on touch devices (because of the browser checking for screen scrolling)
		e.preventDefault();
		dragDisabled = false;
	}

	function disabledDrag(
		e: (MouseEvent | TouchEvent) & {
			currentTarget: EventTarget & HTMLElement;
		}
	) {
		// preventing default to prevent lag on touch devices (because of the browser checking for screen scrolling)
		e.preventDefault();
		dragDisabled = true;
	}

	function handleKeyDown(
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLElement;
		}
	) {
		if ((e.key === 'Enter' || e.key === ' ') && dragDisabled) dragDisabled = false;
	}
</script>

<div
	use:dndzone={{ items, dragDisabled, flipDurationMs }}
	onconsider={handleConsider}
	onfinalize={handleFinalize}
	{...props}
>
	{@render itemElm(dragDisabled, flipDurationMs, enabledDrag, disabledDrag, handleKeyDown)}
</div>
