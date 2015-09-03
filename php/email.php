<html>

<head>
	<title>Kyle Corbelli | Software Developer</title>
	<link rel="stylesheet" href="http://bootswatch.com/cosmo/bootstrap.min.css">
	<link rel="stylesheet" href="../css/email.css">
</head>
<body>
	
	<div class="col-sm-3 hide-xs"></div>
	<div class="col-sm-6 text-center" id="emailConf">
		<h2>Your message has been sent!</h2>
		<a href="http://www.kylecorbelli.com/">
		<button class="btn" id="emailOkay">
			Okay
		</button>
		</a>
	</div>
	<div class="col-sm-3 hide-xs"></div>

	<?php

		$emailFrom = $_POST["emailFrom"];
		$subjectLine = $_POST["subjectLine"];
		$messageInput = $_POST["messageInput"];

		date_default_timezone_set('America/Los_Angeles');
	    $date = date('Y-m-d h:i:sa');

	    $to = "kyle.corbelli@gmail.com";
	    $headers = "Content-Type: text/html";
	    $message = "<h2>" . $emailFrom . " wrote:</h2>";
	    $message .= "<div>" . $messageInput . "</div>";

	    mail($to, $subjectLine, $message, $headers);

	?>

</body>


</html>