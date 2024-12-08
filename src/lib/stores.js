import {writable} from 'svelte/store';
import {presetDiscussions} from '$lib/presetData.js';

export const discussionStore = writable(presetDiscussions);