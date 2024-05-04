import { pushState } from '$app/navigation';
import { page } from '$app/stores';
import { get } from 'svelte/store';
import { writable } from 'svelte/store';

export type ClassroomType = {
	id: number;
	name: string;
	color: string;
	position: number;
};

export type ClassroomFormType = {
	method: 'add' | 'edit';
	initialValue?: ClassroomType;
};

export const ClassroomStore = writable({
	data: <ClassroomType[] | undefined | null>JSON.parse(localStorage.classrooms || '[]'),
	add(classroom: Omit<ClassroomType, 'id' | 'position'>) {
		ClassroomStore.update((store) => {
			const value = {
				id: new Date().getTime(),
				position: (store.data?.length || 0) + 1,
				...classroom
			};
			const updatedStore = {
				...store,
				data: store.data ? [...store.data, value] : [value]
			};
			store.save();
			return updatedStore;
		});
	},
	edit(id: ClassroomType['id'], classroom: Omit<ClassroomType, 'id' | 'position'>) {
		ClassroomStore.update((store) => {
			const updatedStore = {
				...store,
				data: store.data?.map((x) => {
					if (x.id === id) {
						x = {
							...x,
							...classroom
						};
					}
					return x;
				})
			};
			store.save();
			return updatedStore;
		});
	},
	remove(classroom: ClassroomType) {
		ClassroomStore.update((store) => {
			const updatedStore = {
				...store,
				data: store.data?.filter((x) => x.id !== classroom.id)
			};
			store.save();
			return updatedStore;
		});
	},
	save() {
		ClassroomStore.subscribe((store) => {
			store.data = store.data?.map((x, i) => ({ ...x, position: i + 1 }));
			localStorage.setItem('classrooms', JSON.stringify(store.data || []));
		});
	},
	//
	form: <ClassroomFormType>{ method: 'add', initialValue: undefined },
	openForm(method: 'add' | 'edit' = 'add', initialValue?: ClassroomType) {
		ClassroomStore.update((store) => {
			const updatedStore = {
				...store,
				form: {
					method,
					initialValue
				}
			};
			pushState('', { ...get(page).state, showClassroomForm: true });
			return updatedStore;
		});
	}
});
