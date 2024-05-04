<script lang="ts">
	import { _elm } from '$lib/app';
	import Input from '$lib/components/Input.svelte';
	import { ClassroomStore } from '$lib/stores/classroom_store';

	type FormProps = { close?: () => void };
	const { close }: FormProps = $props();

	const data = $state($ClassroomStore.form.initialValue || { name: '', color: '#be185d' });
	const error = $state({ name: '', color: '' });

	const onSubmit = (
		event: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) => {
		event.preventDefault();
		//
		if (!data.name) error.name = 'Name required';
		if (!data.color) error.color = 'Came required';
		if (Object.values(error).some((x) => x)) return;
		//
		if ($ClassroomStore.form.method == 'add') $ClassroomStore.add(data);
		else $ClassroomStore.edit($ClassroomStore.form.initialValue?.id || 0, data);
		if (close) close();
	};

	$effect(() => {
		_elm('input[name="name"]').focus();
	});
</script>

<form onsubmit={onSubmit}>
	<div class="bg-base-200 border-b border-base-300 px-4 py-2.5 flex items-center justify-between">
		<h3 class="font-medium">
			{$ClassroomStore.form.method === 'add' ? 'Add' : 'Edit'} classroom
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
		<Input
			label="Name"
			name="name"
			placeholder="Write name..."
			bind:value={data.name}
			error={error.name}
			required
		/>
		<Input
			label="Color"
			name="color"
			placeholder="Write color..."
			type="color"
			class="w-48 p-0 bg-transparent cursor-pointer h-9"
			bind:value={data.color}
			error={error.color}
			required
		/>
		<div class="flex justify-end">
			<button class="btn btn-primary">Submit</button>
		</div>
	</div>
</form>
