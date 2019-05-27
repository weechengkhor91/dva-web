import React, { Component, Fragment } from 'react'
import { connect } from 'dva'

class User extends Component {
  // componentWillMount() {
  //  // this.props.fetchUserInfo
  //   const {dispatch} = this.props
  //   dispatch({
  //     type: 'user/fetchUserInfo',
  //     payload: {
  //
  //     },
  //   })
  //如果model层effects有传入callback传参，并将response回调的话，这里就可以拿到callbak
  // callback(res){
  //   console.log(res)
  // }
  // }

  // handleChange = () => {
  //   const {dispatch} = this.props
  //   dispatch({
  //     type: 'user/fetchUserInfo',
  //     payload: {
  //
  //     },
  //   })
  // }

  render() {
    const { user } = this.props
     const { data } = user
    const { myuser } = data
    // console.log(this.props.user)
    // console.log(this.props.user.data.myuser)
    //const {myuser} = this.props.user.data

    //console.log(user)

    return (
      <Fragment>
        <h3>User</h3>
        <div>User Component Working </div>
        {myuser !== undefined &&
        myuser.map((item, i) => {
            return (
              <Fragment key={i}>
                <div>{item.title}</div>
              </Fragment>
            )
          })}

        {/*<div>{this.props.user.data.myuser.map((item,i) => <div  key={i}><div>{item.title}</div></div>)}</div>*/}
        {/*<button>Check</button>*/}
      </Fragment>
    )
  }
}

// const mapStateToProps = (state) => ({
//   test: state.data
// })
export default connect(({ user }) => ({ user }))(User)
