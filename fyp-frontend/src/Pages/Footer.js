import React from 'react';
import { useSelector } from 'react-redux';
import ChatBox from '../components/ChatBox';


function Footer(){
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return(
        <footer className="copyright">
       
         {userInfo && !userInfo.isAdmin && <ChatBox  userInfo={userInfo} />}
         <div>
              Copyright © 2021 .All rights reserved by <a className="The-Cakesmith">The Cakesmith</a>.
          </div>{' '}
     </footer>
    )

    }
                
    export default Footer;