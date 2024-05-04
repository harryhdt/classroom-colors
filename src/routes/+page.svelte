<script lang="ts">
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import { currentTheme, generateColorFromBg, toggleTheme } from '$lib/app';
	import Confirm from '$lib/components/Confirm.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Sortable from '$lib/components/Sortable.svelte';
	import Form from '$lib/partitions/classroom/Form.svelte';
	import { ClassroomStore, type ClassroomType } from '$lib/stores/classroom_store';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	let selectedClassroom = $state<ClassroomType | undefined>(undefined);
</script>

<div class="flex items-center gap-x-2 py-2.5 px-4 border-b bg-base-200 border-base-300/50">
	<h1 class="mr-2 text-xl font-medium">Classrooms</h1>
	<button class="btn btn-primary" onclick={() => $ClassroomStore.openForm()}>Add</button>
	<button class="ml-auto btn btn-circle" onclick={toggleTheme}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="size-6"
			width="1em"
			height="1em"
			viewBox="0 0 20 20"
			><path fill="currentColor" d="M10 3a7 7 0 1 1 0 14zm0-1a8 8 0 1 0 0 16a8 8 0 0 0 0-16" /></svg
		>
	</button>
</div>
{#if $ClassroomStore.data === undefined}
	<p class="px-4 py-3 text-sm">Loading...</p>
{:else if $ClassroomStore.data === null}
	<p class="px-4 py-3 text-sm text-error">Error!</p>
{:else if $ClassroomStore.data.length}
	<Sortable
		bind:items={$ClassroomStore.data}
		onSort={() => $ClassroomStore.save()}
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 px-4 py-3 gap-2.5"
	>
		{#snippet itemElm(dragDisabled, flipDurationMs, enabledDrag, disabledDrag, handleKeyDown)}
			{#each $ClassroomStore.data || [] as classroom (classroom.id)}
				<div animate:flip={{ duration: flipDurationMs }} class="relative overflow-hidden">
					<div
						class="px-4 py-3 rounded-t"
						style="background: color-mix( in oklab, {classroom.color} {$currentTheme ===
						'easyLookDark'
							? 75
							: 100}%, black); color: {generateColorFromBg(classroom.color)}"
					>
						<h3 class="text-lg font-medium">
							{classroom.name}
						</h3>
					</div>
					<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="flex items-center px-4 py-2.5 border border-t-0 border-base-300 rounded-b bg-base-200/50"
					>
						<button
							tabindex={dragDisabled ? 0 : -1}
							aria-label="drag-handle"
							class="handle hover:text-base-content/75 text-base-content/50"
							style={dragDisabled ? 'cursor: grab' : 'cursor: grabbing'}
							onmouseenter={enabledDrag}
							onmouseleave={disabledDrag}
							ontouchstart={enabledDrag}
							onkeydown={handleKeyDown}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="size-5"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
								><path
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M18 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
								/></svg
							>
						</button>
						<div class="flex items-center justify-end ml-auto gap-x-2">
							<button
								onclick={() => $ClassroomStore.openForm('edit', classroom)}
								class="btn btn-sm btn-square btn-ghost text-base-content/60"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="size-5"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
									/></svg
								>
							</button>
							<button
								onclick={() => {
									selectedClassroom = classroom;
									pushState('', { ...$page.state, showConfirmDeleteClassroom: true });
								}}
								class="btn btn-sm btn-square btn-ghost text-base-content/60"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="size-5"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
									/></svg
								></button
							>
						</div>
					</div>
				</div>
			{/each}
		{/snippet}
	</Sortable>
{:else}
	<p class="px-4 py-3 text-sm text-error">Empty classroom</p>
{/if}

<Modal show={$page.state.showClassroomForm}>
	{#snippet slot(close)}
		<div
			transition:fly|global={{ y: 16, duration: 100 }}
			class="w-full max-w-lg overflow-hidden rounded-lg bg-base-100"
		>
			<Form {close} />
		</div>
	{/snippet}
</Modal>

<Modal show={$page.state.showConfirmDeleteClassroom}>
	{#snippet slot(close)}
		<div
			transition:fly|global={{ y: 16, duration: 100 }}
			class="w-full max-w-lg overflow-hidden rounded-lg bg-base-100"
		>
			<Confirm
				{close}
				description="Are you sure, you want delete room {selectedClassroom?.name} ?"
				confirm={{
					class: 'btn-error',
					action() {
						if (selectedClassroom) {
							$ClassroomStore.remove(selectedClassroom);
							selectedClassroom = undefined;
							close();
						}
					}
				}}
			/>
		</div>
	{/snippet}
</Modal>
