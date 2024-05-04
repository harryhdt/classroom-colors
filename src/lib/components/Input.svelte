<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type InputProps = {
		value?: string;
		label?: string;
		error?: string;
		helper?: string;
	} & HTMLInputAttributes;
	let { label, value = $bindable(), error, helper, ...props }: InputProps = $props();
</script>

<label for={props.name} class="block">
	{#if label}
		<div class="label">
			<p class="label-text">
				<span>
					{label}
				</span>
				{#if props.required}
					<span class="text-error">*</span>
				{/if}
			</p>
		</div>
	{/if}
	<input class="input input-bordered {props.class}" type="text" {...props} bind:value />
	{#if error}
		<p class="text-sm text-error">{error}</p>
	{/if}
	{#if helper}
		<p class="text-sm">{helper}</p>
	{/if}
</label>
