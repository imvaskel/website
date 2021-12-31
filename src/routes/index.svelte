<svelte:head>
	<title>Vaskel</title>
	<link rel='icon' type='image/png' href='/images/avatar_circle.png'>
	<link rel="stylesheet" href="./style.css">
</svelte:head>

<div class="container">
	<img src="images/avatar_circle.png" alt="avatar">
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
	}

	div.container h2 {
		text-align: center;
	}

</style>