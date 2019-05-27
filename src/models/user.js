import {userInfo} from "../services/user";

//change state
// 需要dispatch(action) -> 調用 reducer改變state-> 重新渲染render
export default {
  namespace: 'user',
  state: {
    data: [
      {
        "id": 4,
        "title": "Post 4"
      },
      {
        "id": 5,
        "title": "Post 5"
      },
      {
        "id": 6,
        "title": "Post 6"
      }
    ]},
  //subscriptions 是订阅一个数据源
  //根据条件 dispatch 需要的 action
  //数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/user') {
          dispatch({ type: 'fetchUserInfo' })
        }
      })
    },
  },
  //Effect 是副作用，就是异步操作
  //call - 执行一个函数 connect api
  //put(update) - dispatch 执行一个 action
  //select  - 访问其它 model
  effects: {
    *fetchUserInfo({ payload }, { call, put }) {

        const result = yield call(userInfo)
        const {data} = result


      //把請求的數據保存起來
      //數據更新會帶動頁面重新渲染
          yield put({
            type: 'USER_INFO',
            payload: {
                myuser: data, //網絡返回的要保留的數據
            }
          })

     //  console.log({result})



    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },
    USER_INFO(state, action){
      return {
        ...state, data: action.payload
      }
    }
  },
}
