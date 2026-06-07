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
      background-color: #18181b;
      border: 1px solid #27272a;
      padding: 1.25rem;
      width: 88%;
      max-width: 300px;
      border-radius: 14px;
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
        margin-bottom: 0.35rem;
      }
    }
  }`
/*className='trans mx-2 inline-block h-10 text-gray-700 hover:bg-slate-500 text-center justify-center py-1 dark:text-gray-300 hover:text-gray-200 hover:-translate-y-2 rounded-lg text-2xl*/
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles className=' text-center justify-center  '>
      <div
        className="mobile-menu-icon text-white w-8 absolute z-10 right-3 top-3 text-lg p-1.5 rounded-md bg-zinc-900 border border-zinc-700"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose className='text-gray-300 text-lg w-8' />
        </div>
        <div className="">
          {[
            { to: "home", label: "Home" },
            { to: "experience", label: "Experience" },
            { to: "projects", label: "Projects" },
            { to: "skills", label: "Skills" },
            { to: "about", label: "About" },
            { to: "Contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              id="Link"
              className="cursor-pointer trans mx-1.5 inline-block h-9 text-sm md:text-base px-3 text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg py-1.5"
              smooth={true}
              duration={700}
              to={item.to}
              onClick={() => setShowNav(!showNav)}
              role="button"
              tabIndex={0}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </ul>
    </NavStyles>
  )
}

export default Navbar