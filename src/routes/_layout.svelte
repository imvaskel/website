<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from "svelte";
	import { slide }  from "svelte/transition";

	let loaded = false
	onMount(() => {
		loaded = true
	})

	export let segment;
</script>

<Nav {segment}/>

{#if loaded}
<main in:slide="{{ y: 200, duration: 2000 }}">
	<slot></slot>
</main>
{/if}