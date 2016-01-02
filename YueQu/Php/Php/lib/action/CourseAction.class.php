<?php

class CourseAction extends Action {
    public function index(){

    	$course = M('course')->select();
		$this->assign('course',$course)->display();
  
    }

}
?>
