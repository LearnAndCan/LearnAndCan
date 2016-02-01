<?php
		class RegisterAction extends Action{
			public function index(){
				$this->display();
			}
			public function register(){
				$username = I('username');
				$user = M('user')->where(array('username'=>$username))->find();
				$accid=md5(time() . mt_rand(1,1000000));
				$token = I('pwd','','md5');
				if($user)
					
					$this->error('用户已经存在',U('Admin/Register/index'));

				}
				else{
							
								$add_user = array(
													'username'=>I('username'),
													'password'=>$token,
													'nickname'=>I('nickname'),
													'age' =>I('age'),
													'workplace'=>I('workplace'),
													'emotion' =>I('emotion')
													'accid'  => $accid;

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
		                                    curl -X POST -H "AppKey: 4be5a787838ec45a5e29f0c4345be8fd" 
											-H "Content-Type: application/x-www-form-urlencoded"
											 -d 'accid={$accid}&token={$token}'
											' https://api.netease.im/nimserver/user/create.action'

														$this->success('添加成功',U('Admin/Login/index'));
													}else{
														$this->error('添加失败');
													}
		     
				}
			}
		}
?>

