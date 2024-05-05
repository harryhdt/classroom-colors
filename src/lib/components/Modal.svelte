<script lang="ts">
	import { fade } from 'svelte/transition';

	type ModalProps = {
		slot?: (closeFunc: typeof close) => any;
	};

	let { slot }: ModalProps = $props();

	const close = (
		event?: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		if (event && event.currentTarget !== event.target) return;
		else history.back();
	};

	const handleOnEsc = (event: KeyboardEvent) => {
		if (event.key === 'Escape') close();
	};

	let show = $state(false);

	$effect(() => {
		show = true;
		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', handleOnEsc);
		return () => {
			show = false;
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleOnEsc);
		};
	});
</script>

{#if show}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		transition:fade={{ duration: 150 }}
		class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:items-start bg-black/50 backdrop-blur-md"
		onclick={(e) => close(e)}
	>
		{#if slot}
			{@render slot(close)}
		{/if}
	</div>
{/if}
