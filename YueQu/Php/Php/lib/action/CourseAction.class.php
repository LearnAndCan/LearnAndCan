<?php

class CourseAction extends Action {
    public function index(){

    	$course = M('course')->select();
    	if($course){
    		$this->assign('course',$course)->display();
    	}
		else{
			$this->error('您没有发布任何课程',U('Admin/Index/index'));
		}	
  
    }
    public function delect(){
    	$id=I('id','','intval');
			if(M('course')->where(array('id'=>$id))->delete())
			{
				$this->success('删除成功',U('Admin/Course/index'));
			}
			else
			{
				$this->error('删除失败');
			}
    }
  public function add(){
        
    	  if(!IS_POST) halt('页面不存在');

          session_start();
          $course= array(           
            'username'=>$_SESSION["username"],
            'theme'=>I('theme'),
            'contain'=>I('contain')
            );
          
         if(M("course")->add($course)){
               $this->success('添加成功',U('Admin/Course/index'));
          }
         else{
            $this->error('添加失败',U('Admin/Course/index'));
         }
          
   }
   public function search(){
          
           $condition['theme'] = I('theme');


          $course=M('course')->where($condition)->select();
          print_r($course);
   }


}
?>
