<?php
class Semestre
{
	//clé primaire
	private int $numSemestre;

	public function __construct(?int $numsemestre = -1)
	{
		$this->numsemestre = $numsemestre;
	}

	public function getAttributs() : array { return get_object_vars($this);}
	public function getId       () : int   { return $this->numSemestre;    }

	private function setnumSemestre( int $numSemestre )
	{
		$this->numSemestre = $numSemestre;
	}
}
?>