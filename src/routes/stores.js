import { writable } from 'svelte/store';

export const TodoStore = writable([
    {
        "id": "03a4",
        "name": "first todo",
        "color": "#e4113b",
        "isDone": false
    },
    {
        "id": "7068",
        "name": "second todo",
        "color": "#dd27d7",
        "isDone": true
    },
    {
        "id": "cea7",
        "name": "third todo",
        "color": "#1aba17",
        "isDone": false
    }
]);

export const showAddForm = writable(false);

export const messageText = writable("");

export const messageStyle = writable("is-primary");

export const showNotification = writable(false);