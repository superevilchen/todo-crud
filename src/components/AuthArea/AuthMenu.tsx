import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserModel } from '../../models/UserModel';
import store from '../../redux/Store'

function AuthMenu() {

    const [user, setUser] = useState(store.getState().authState.user);

    useEffect(() => {

        return store.subscribe(() => {
            setUser(store.getState().authState?.user || new UserModel('', '', ''))
        })
    },[])

  return (
      <div>
          {user?.token ?
        
              <>
                  <span>{user.email}</span>
                  <Link to='/logout'>logout</Link>
              </>

              :

              <>
                  <span>hello guest</span>
                  <Link to="/login">login</Link>
                  <Link to="/register">register</Link>
              </>
        
        }
    </div>
  )
}

export default AuthMenu