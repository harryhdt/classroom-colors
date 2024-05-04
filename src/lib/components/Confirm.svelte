<script lang="ts">
	import { _elm } from '$lib/app';

	type ConfirmProps = {
		title?: string;
		description?: string;
		cancel?: {
			text?: string;
			class?: string;
			action?: () => any;
		};
		confirm?: {
			text?: string;
			class?: string;
			action?: () => any;
		};
		close?: () => void;
	};
	const { title, description, cancel, confirm, close }: ConfirmProps = $props();
</script>

<div>
	<div class="bg-base-200 border-b border-base-300 px-4 py-2.5 flex items-center justify-between">
		<h3 class="font-medium">
			{title || 'Confirm'}
		</h3>
		<button
			onclick={() => (close ? close() : null)}
			type="button"
			class="btn btn-circle btn-ghost btn-sm"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-5"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
				/></svg
			>
		</button>
	</div>
	<div class="px-4 space-y-2.5 py-2.5">
		<p class="mb-2">
			{description || 'Are you sure ?'}
		</p>
		<div class="flex justify-end gap-x-2">
			<button onclick={cancel?.action || close} class="btn {cancel?.class}"
				>{cancel?.text || 'Cancel'}</button
			>
			<button onclick={confirm?.action} class="btn btn-primary {confirm?.class}"
				>{confirm?.text || 'Confirm'}</button
			>
		</div>
	</div>
</div>
