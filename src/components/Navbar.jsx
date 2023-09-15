import React, { useState } from "react";
import Create from '../assets/Create.svg';
import zoomOut from '../assets/zoomOut.svg';
import agreement from '../assets/agreement.svg';
import listsuccess from '../assets/listsuccess.svg';
import Alignboth from '../assets/Alignboth.svg';
import img from '../assets/img1.jpg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between">
        <div className="z-30 p-5 sm:w-auto w-full flex justify-between">
             <div className="flex">
                 <div className="mx-2 flex">
                     <img src={agreement}/>
                     <span className="mx-1 text-sm">My Work</span>
                 </div>
                <div className="mx-2 flex">
                     <img src={listsuccess}/>
                     <span className="mx-1 text-sm">Processes</span>
                 </div>
             </div>
          <div className="text-3xl sm:hidden" onClick={() => setOpenMenu(!openMenu)}>
            <img src={Alignboth} name={`${openMenu ? "close" : "menu"}`}/>
          </div>
        </div>

        <div className="flex items-center">
          <ul className="sm:flex hidden items-end gap-8">
            <li>
              <img src={zoomOut} className="py-3 px-3 inline-block"/>
            </li>
          </ul>
          <ul className="sm:flex hidden items-end gap-8">
            <li>
              <img src={Create} className="py-3 px-3 inline-block"/>
            </li>
          </ul>
          <ul className="sm:flex hidden items-end gap-8 mr-4">
            <button onClick={()=>setOpenProfile(!openProfile)} className="flex">
              <img src={img} className="rounded-full w-10 h-10 mx-3 inline-block"/>
              <h6 className="text-xs self-center">Cannon brown</h6>
            </button>
          </ul>
        <ul
          className={`
        sm:hidden bg-white fixed top-0 overflow-y-auto bottom-0 py-16 px-8
        duration-500 ${openMenu ? "right-0" : "right-[-100%]"}
        `}
        >
          {openProfile
          ?<button onClick={()=>setOpenProfile(!openProfile)}>
              <img src={img} className="rounded-full w-10 h-10 inline-block"/>
          </button>
          
            :<li className={'bg-white w-48 right-0'}>
              <button className="flex mb-4 w-48 h-4 sm:w-8 sm:h-6" onClick={()=>setOpenProfile(!openProfile)}>
                <img src={img} className="rounded-full w-6 h-6 mx-2 inline-block"/>
                <div>
                  <h6 className="text-xs">Cannon brown</h6>
                  <h6 className="text-xs">cannon_b@gmail.com</h6>
                </div>
              </button>
              <p className="text-sm mx-2 h-8">
                My profile
              </p>
              <p className="text-sm mx-2 h-8">
                Account Settings
              </p>
              <p className="text-sm mx-2 h-8">
                My profile
              </p>
              <div>
                <p className="text-sm mx-2 h-8">Logout</p>
              </div>
          </li>
        }
            <li>
              <img src={zoomOut} className="py-4 px-3 inline-block"/>
            </li>
            <li>
              <img src={Create} className="py-4 px-3 inline-block"/>
            </li>
        </ul>
        </div>
      </div>
        {!openProfile && 
            <div className={'hidden sm:block bg-white w-48 absolute right-0'}>
              <div className="flex mb-4 w-48 h-4 sm:w-8 sm:h-6">
                <img src={img} className="rounded-full w-6 h-6 mx-2 inline-block"/>
                <div>
                  <h6 className="text-xs">Cannon brown</h6>
                  <h6 className="text-xs">cannon_b@gmail.com</h6>
                </div>
              </div>
              <p className="text-sm mx-2 h-8">
                My profile
              </p>
              <p className="text-sm mx-2 h-8">
                Account Settings
              </p>
              <p className="text-sm mx-2 h-8">
                My profile
              </p>
              <div>
                <p className="text-sm mx-2 h-8">Logout</p>
              </div>
          </div>
        }
    </nav>
  );
};

export default Navbar;
