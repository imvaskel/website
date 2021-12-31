<svelte:head>
	<title>Vaskel</title>
	<link rel='icon' type='image/png' href='/images/avatar_circle.png'>
	<link rel="stylesheet" href="./style.css">
</svelte:head>

<div class="container">
	<header>
		<img src="images/avatar_circle.png" alt="avatar">
		<h2>Hi, I'm Vaskel</h2>
		<p>
			There isn't much interesting here, but you can find my social media <a href="/socials">here</a> or my about me
			<a href="/about">here.</a>
		</p>
	</header>
</div>

<style>
	div.container {
		height: 100%;
		width: 100%;
		display: grid;
		align-items: center;
		justify-content: center;
	}

	div.container img {
		height: 312px;
		width: 312px;
		align-self: center;
	}

	div.container h2 {
		text-align: center;
	}

</style>