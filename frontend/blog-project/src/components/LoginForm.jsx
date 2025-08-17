import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import login from '../action/loginAction';
import CONST_LOGIN from '../constants/login';
import Button from './Button';

const LoginForm = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEBUG] 로그인 버튼 클릭됨', formData);
    }

    dispatch(login(formData)); // formData를 login 함수에 전달
  };

  return (
    <div>LoginForm
      <input
        type="text"
        name="username"
        placeholder="아이디"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={formData.password}
        onChange={handleChange}
      />
      <Button text={CONST_LOGIN.LOGIN_BUTTON_LABEL} onClickHandler={handleLogin} />
    </div>
  )
}

export default LoginForm