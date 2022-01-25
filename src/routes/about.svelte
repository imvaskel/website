<script>
	var socials = [
		{ url: "https://github.com/imvaskel", name: "GitHub"},
		{ url: "https://twitter.com/imvaskel", name:"Twitter"},
		{ url: "https://discord.com/users/447422100798570496", name: "Discord (Vaskel#6714)"},
		{ url: "mailto:contact@vaskel.gay", name: "Email"}
	]
</script>

<svelte:head>
	<title>About</title>
	<link rel="stylesheet" href="./style.css">
</svelte:head>

<div class="container">
	<h1>About Me</h1>

	<p>
		I'm not too sure what to put here but here we go. Bisexual programmer and gamer from the US. I wouldn't say I'm 
		the best at programming but I manage.
	</p>


	<h2>Social Media</h2>

	<ul>
		{ #each socials as social}
			<li>
				<a href="{social.url}">{social.name}</a>
			</li>
		{/each}
	</ul>

	<h2>Languages</h2>

	<ul>
		<li>Python. I know this language the most and like it the most.</li>
		<li>Kotlin. I know this a decent amount and also like it.</li>
		<li>Java/C#. I know enough of these 2 languages to manage, though they aren't my favorite.</li>
	</ul>
</div>

<style>
	.container {
		padding-left: 2%;
		padding-top: 2%;
		font-size: large;
		display: flex;
		flex-direction: column;
		color: #E91E63;
	}

	p, li {
		color: white;
	}

	h1, h2, p,li {
		padding-bottom: 2%;
	}

	li::before {
		color: #b0003a
	}
</style>