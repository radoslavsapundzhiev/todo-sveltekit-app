import { writable } from 'svelte/store';

export const TodoStore = writable([]);

export const showAddForm = writable(false);

export const messageText = writable("");

export const messageStyle = writable("is-primary");

export const showNotification = writable(false);