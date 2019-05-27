import React, { Component, Fragment } from 'react'
import { connect } from 'dva'

class User extends Component{
  // componentWillMount() {
  //  // this.props.fetchUserInfo
  //   const {dispatch} = this.props
  //   dispatch({
  //     type: 'user/fetchUserInfo',
  //     payload: {
  //
  //     },
  //   })
  //   //console.log(this.props)
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

  render(){
   const {user} = this.props
   const {data} = user
    const {myuser} = data
  // console.log(this.props.user)
  // console.log(this.props.user.data.myuser)
    //const {myuser} = this.props.user.data

    console.log(myuser)

    return(
      <Fragment>
        <h3>User</h3>
        <div>User Component Working </div>
        {/*{*/}
         {/*myuser.map( (item,i) => {*/}
            {/*return (*/}
              {/*<Fragment key={i}>*/}
                {/*{item.title}*/}
              {/*</Fragment>*/}
            {/*)*/}
          {/*})*/}
        {/*}*/}

        {/*<div>{this.props.user.data.myuser.map((item,i) => <div  key={i}><div>{item.title}</div></div>)}</div>*/}
        {/*<button>Check</button>*/}
      </Fragment>
    )
  }
}


// const mapStateToProps = (state) => ({
//   test: state.data
// })
export default connect(({user}) => ({user}))(User)
