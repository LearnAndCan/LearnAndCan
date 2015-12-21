<?php
		class RegisterAction extends Action{
			public function index(){
				$this->display();
			}
			public function register(){
				$username = I('username');
				$user = M('user')->where(array('username'=>$username))->find();
				if($user){
					
					$this->error('用户已经存在',U('Admin/Register/index'));

				}
				else{
							
								$add_user = array(
													'username'=>I('username'),
													'password'=>I('pwd','','md5'),
													'nickname'=>I('nickname'),
													'age' =>I('age'),
													'workplace'=>I('workplace'),
													'emotion' =>I('emotion')
													);
												$role_user = array();
												
													if($uid = M('user')->add($add_user)){
														foreach ($_POST['role_id'] as $v){
															$role_user[] = array(
																'role_id' => $v,
																'user_id' => $uid
															);
														}
														M('role_user')->addAll($role_user);
														$this->success('添加成功',U('Admin/Login/index'));
													}else{
														$this->error('添加失败');
													}
		     
				}
			}
		}
?>
