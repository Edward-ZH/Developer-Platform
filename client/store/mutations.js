import * as type from './types';
// 同步操作放这里
export default {
  [type.SET_DEV_MODULE](state, [key, val]) {
    state.devModule[key] = val;
  },
  [type.SET_TEMP_MODULE](state, [key, val]) {
    state.tempModule[key] = val;
  },
  [type.SET_PULIC_MODULE](state, [key, val]) {
    state.pulicModule[key] = val;
  },
  [type.SET_USER_MODULE](state, map) {
    state.userModule[map.key] = map.value;
  },
  [type.CHANGE_TEMPLATE](state, val) {
    const productID = state.tempModule.tempID.split('&')[0];
    const seriesID = state.tempModule.tempID.split('&')[1];
    const template = state.tempModule.templates.filter(item => item.productID === productID)
      .find(item => item.seriesID === seriesID);
    template.funcDefine = val.funcDefine;
    val.editTime && (template.editTime = val.editTime);
    val.editUser && (template.editUser = val.editUser);
  },
  // 设置是否授权
  [type.SET_AUTHENTICATED](state, isAuthenticated) {
    if(isAuthenticated) state.userModule.isAuthenticated = isAuthenticated;
    else state.userModule.isAuthenticated = false;
  },
  // 设置用户
  [type.SET_USER](state, user) {
    if(user) state.userModule.user = user;
    else state.userModule.user = {};
  }
};
