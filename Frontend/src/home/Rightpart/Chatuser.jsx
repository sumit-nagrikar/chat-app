import React from 'react';
import useConversation from '../../statemanage/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';
import { CiMenuFries } from 'react-icons/ci';

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? 'Online' : 'Offline';
  };

  return (
    <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-slate-900 duration-300">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.freepik.com/free-vector/handsome-man-face-cartoon_1308-150481.jpg" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.name}</h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;
