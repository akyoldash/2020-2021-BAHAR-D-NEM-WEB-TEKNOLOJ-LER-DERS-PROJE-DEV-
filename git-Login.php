<!DOCTYPE html>
<html>

<head>

	<meta charset="utf-8">

	<!-- Responsive -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<!-- Ikon Kutuphanesi -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

	<!-- Font -->
	<link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap" rel="stylesheet">
	
	<!-- Css -->
	<link rel="stylesheet" href="style.css">

	<!--------------------------------->
	<title>Web Teknoloji Projesi</title>

</head>

<body>


	<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div class="container">
        <a href="anasayfa.html" class="navbar-brand text-white">
          Mazhar'ın Sayfası
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenu"
        >
          <span class="navbar-toggler-icon"></span>
          <i class="fas fa-bars"></i>
        </button>

        <div id="navbarMenu" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="anasayfa.html" class="nav-link active text-white">
                Anasayfa
              </a>
            </li>

            <li class="nav-item">
              <a href="ozgecmis.html" class="nav-link active text-white">
                Özgeçmiş
              </a>
            </li>

			<li class="nav-item">
              <a href="ilgi_alanlarim.html" class="nav-link active text-white">
                İlgi Alanlarım
              </a>
            </li>

            <li class="nav-item">
              <a href="istanbul.html" class="nav-link active text-white">
                Şehrim
              </a>
            </li>

            <li class="nav-item">
              <a href="mirasimiz.html" class="nav-link active text-white">
                Mirasımız
              </a>
            </li>

            <li class="nav-item">
              <a href="iletisim.html" class="nav-link active text-white">
                İletişim
              </a>
            </li>

            <li class="nav-item">
              <a href="login.php" class="nav-link active text-white">
                <i class="fas fa-sign-in-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

	<header>

		<div class="bg-info text-light jumbotron balikcilar-jumbotron">

			<div class="container">

				<div class="col-md-6 px-0">
					<h1 class="display-4 font-italic">
						Login
					</h1>
				</div>

			</div>

		</div>

	</header>
	
	<main>

		<div class="container">
			
			<?php

				include("kullanicilar.php");


				if (($_POST["email"] == $user) and ($_POST["password"] == $pass))
				{
					$_SESSION["login"] = "true";
					$_SESSION["user"] = $user;
					$_SESSION["pass"] = $pass;
			
					echo("Siteye başarılı bir şekilde giriş yaptınız. ");			
				}
			
				else 
				{
					echo("Kullancı Adı veya Şifre Yanlış.<br>");
					echo ("Lütfen tekrar deneyiniz");
					header("Refresh: 1; url=login.php");
				}
		?>
			
		</div>

	</main>


	<footer class="py-5 bg-info text-white text-center">
		Web-Teknolojileri-Projesi © Mazhar Akyoldaş 2021
	</footer>

	<!-- BOOTSTRAP -->
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>


	

</body>

</html>