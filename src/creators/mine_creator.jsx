import consts from '../constants.jsx';
import store from '../store.jsx';
import { push } from "react-router-redux";
import cookie from "react-cookie";

//---------mock code---------------------
(function () {
  cookie.save('userInfo', {
    userId: 1,
    headUrl: 'defaultImg.png',
    name: 'sunz',
    friendCount: 0,
    token: '@bhsxx898ssdgg'
  }, { path: '/' })
})();

export function loadUserInfo() {
  let data = cookie.load('userInfo');
  if (!data || !data.userId) {
    return;
  }
  cookie.remove('userInfo', { path: '/' });
  cookie.save('token', {
    userId: data.userId,
    token: data.token
  }, { path: '/', httpOnly: true, maxAge: 3 * 24 * 3600 });
  console.log("token saved ............. !")
  return {
    type: consts.MINE_DATA,
    data
  }
}

export function redirectAuth() {
  //--------TODO: implement it------------
}