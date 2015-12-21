<?php
		//登陆控制器
		class LoginAction extends Action{
				public function index(){
					$this->display();
				}
				public function verify(){
					import('ORG.Util.Image');
					Image::buildImageVerify(1,1,'png',80,25);
				}
				public function login(){
					if(!IS_POST) halt('页面不存在');
					if(I('code','','md5')!=session('verify')){
						$this->error('验证码错误');
					}
					$username = I('username');
					$user = M('user')->where(array('username'=>$username))->find();
					if(!$user||$user['password'!=$pwd])
					{
						$this->error('账号或者密码错误');
					}
					session('uid',$user['id']);
					session('username',$user['username']);
					$this->redirect('Admin/Index/index');
				}

		}
