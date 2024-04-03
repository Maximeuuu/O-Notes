<?php

class FPE {
	private $idfpe;
	private $avismaster;
	private $avisecoleinge;
	private $commentaire;
	private $codenip;

	public function __construct($idfpe=-1, $avismaster="", $avisecoleinge="", $commentaire="", $codenip=-1) {
		$this->idfpe = $idfpe;
		$this->avismaster = $avismaster;
		$this->avisecoleinge = $avisecoleinge;
		$this->commentaire = $commentaire;
		$this->codenip = $codenip;
	}


	public function getAttributs() : array
	{
		return get_object_vars($this);
	}

	public function getIdFPE() {
		return $this->idfpe;
	}

	public function setIdFPE($idfpe) {
		$this->idfpe = $idfpe;
	}

	public function getAvisMaster() {
		return $this->avismaster;
	}

	public function setAvisMaster($avismaster) {
		$this->avismaster = $avismaster;
	}

	public function getAvisEcoleInge() {
		return $this->avisecoleinge;
	}

	public function setAvisEcoleInge($avisecoleinge) {
		$this->avisecoleinge = $avisecoleinge;
	}

	public function getCommentaire() {
		return $this->commentaire;
	}

	public function setCommentaire($commentaire) {
		$this->commentaire = $commentaire;
	}

	public function getCodeNIP() {
		return $this->codenip;
	}

	public function setCodeNIP($codenip) {
		$this->codenip = $codenip;
	}
}

?>
