<!DOCTYPE html>
<html>
	<head>
		<title>O'Notes</title>
	</head>
	<body>
		<form action="../controleur/ControleurImportation.php" method="post" enctype="multipart/form-data">
			<div>
				<label for="moyennes">Fichier moyennes</label>
				<input type="file" id="moyennes" name="moyennes" accept=".xlsx, excel" />
			</div>
			<div>
				<label for="jury">Fichier jury</label>
				<input type="file" id="jury" name="jury" accept=".xlsx, excel" />
			</div>
			
			<br>
			<label for="semestre">Semestre</label>
			<input type="text" id="semestre" name="semestre" />
			<label for="promotion">Promotion</label>
			<input type="text" id="promotion" name="promotion" />
			<input type="submit">
		</form>
	</body>
</html>