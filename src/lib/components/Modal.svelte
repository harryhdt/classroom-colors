<script lang="ts">
	import { fade } from 'svelte/transition';

	type ModalProps = {
		show: boolean;
		slot?: (closeFunc: typeof close) => any;
	};

	let { show, slot }: ModalProps = $props();

	const close = (
		event?: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		if (event && event.currentTarget !== event.target) return;
		history.back();
	};

	const handleOnEsc = (event: KeyboardEvent) => {
		if (event.key === 'Escape') close();
	};

	$effect(() => {
		window.addEventListener('keydown', handleOnEsc);
		return () => {
			window.removeEventListener('keydown', handleOnEsc);
		};
	});
</script>

{#if show}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		transition:fade={{ duration: 150 }}
		class="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/25 backdrop-blur-sm"
		onclick={(e) => close(e)}
	>
		{#if slot}
			{@render slot(close)}
		{/if}
	</div>
{/if}
