import React, { useState } from 'react';
import './styles/styles.css';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-scroll';


const NavStyles = styled.nav`
  .navItems{
    display:grid;
    text-align:center;
    padding-top:4rem;
    padding-bottom:4rem;
    justify-content: center;
    padding-left:2rem;
    padding-right:2rem;


  }
  .mobile-menu-icon {
    cursor: pointer;
    outline: none;
    display: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: rgb(99 102 241);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      #Link {
        display: block;
        margin-bottom: 1rem;
      }
    }



`;
/*className='trans mx-2 inline-block h-10 text-gray-700 hover:bg-slate-500 text-center justify-center py-1 dark:text-gray-300 hover:text-gray-200 hover:-translate-y-2 rounded-lg text-2xl*/
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles className=' text-center justify-center  '>
        <div
            className="mobile-menu-icon text-gray-200 w-8 absolute z-10 right-2 top-2.5 text-lg m-3 p-1 rounded-md bg-indigo-600"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
        >
            <MdMenu />
        </div>
        <ul  className={!showNav ? 'navItems hide-item':'navItems'}>
            <div
            className="closeNavIcon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
            >
            <MdClose className='text-gray-300 text-lg w-8' />
            </div>
            <div className=''>
            <Link id='Link' className='cursor-pointer trans mx-2 inline-block h-10 text-gray-700 hover:bg-slate-500 text-center justify-center py-1 dark:text-gray-300 hover:text-gray-200 hover:-translate-y-2 rounded-lg text-2xl p-3' smooth={true} duration={1000} to='home'
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0} >Home</Link>
            <Link id='Link' className='cursor-pointer trans mx-2 inline-block h-10 text-gray-700 hover:bg-slate-500 text-center justify-center py-1 dark:text-gray-300 hover:text-gray-200 hover:-translate-y-2 rounded-lg text-2xl p-3' smooth={true} duration={1000} to='Skills' 
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
             >Skills</Link>
            <Link id='Link' className='cursor-pointer trans mx-2 inline-block h-10 text-gray-700 hover:bg-slate-500 text-center justify-center py-1 dark:text-gray-300 hover:text-gray-200 hover:-translate-y-2 rounded-lg text-2xl p-3' smooth={true} duration={1000} to='projects' 
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
            >Projects</Link>
            <Link id='Link' className='cursor-pointer trans mx-2 inline-block h-10 text-gray-700 hover:bg-slate-500 text-center justify-center py-1 dark:text-gray-300 hover:text-gray-200 hover:-translate-y-2 rounded-lg text-2xl p-3' smooth={true} duration={1000} to='About'
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
             >About</Link>
            <Link id='Link' className='cursor-pointer trans mx-2 inline-block h-10 text-gray-700 hover:bg-slate-500 text-center justify-center py-1 dark:text-gray-300 hover:text-gray-200 hover:-translate-y-2 rounded-lg text-2xl p-3' smooth={true} duration={1000} to='Contact'
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
             >Contact</Link>
            </div>
        </ul>
    </NavStyles>
  )
}

export default Navbar