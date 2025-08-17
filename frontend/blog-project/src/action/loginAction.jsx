import axios from 'axios';
import { setCredentials } from '../auth/authSlice';

const login = (formData) => async (dispatch) => {
  const {username, password} = formData;
  console.log(username, password)
  console.log(dispatch)
  const res = {
    data: ''
  };
  if(process.env.REACT_APP_ENV === 'dev'){
    res.data ={
      accessToken: 'aaaaa',
      user: {
        username: username,
        password: password
      }
    }
  } else if (process.env.REACT_APP_ENV === 'prod'){
    const response = await axios.post('/api/login', { username, password });
    res.data = response.data;
  }
  console.log(`res.data=${res.data.accessToken}`)

  const { accessToken, user } = res.data;

  // Redux 상태 업데이트
  dispatch(setCredentials({ accessToken, user }));

  // 새로고침 대비 localStorage에도 저장
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('user', JSON.stringify(user));
};

export default login