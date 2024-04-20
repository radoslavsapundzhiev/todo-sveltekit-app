import { writable } from 'svelte/store';

export const TodoStore = writable([]);

export const showAddForm = writable(false);