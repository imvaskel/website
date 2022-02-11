<svelte:head>
	<title>Vaskel</title>
	<link rel="stylesheet" href="./style.css">
</svelte:head>

<div class="container">
	<img src="https://cdn.discordapp.com/avatars/447422100798570496/a_b29d8af83f1012f195e03404d211966d.png?size=1024" alt="avatar">
	<h2>Welcome.</h2>
	<p>
		Hi! I'm Vaskel. There isn't much interesting here but if you really wanna know some stuff about me then you can head
		<a href="/about">here.</a>
	</p>
</div>

<style>
	div.container {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	div.container img {
		height: 312px;
		width: 312px;
		display: block; 
		border-radius: 50%;
	}

	div.container h2 {
		text-align: center;
	}

</style>