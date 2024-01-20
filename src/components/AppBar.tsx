import { FC, useState } from 'react';
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useAutoConnect } from '../contexts/AutoConnectProvider';

export const AppBar: FC = (props) => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="fixed h-[22] w-[22] mr-8">
            <img className='w-[5rem]' src="https://i.postimg.cc/tR6mNrzk/Black-White-Classic-Circular-Y2-K-Fashion-Logo-1.png" alt="logo" />
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden ml-auto px-4 py-2"
          onClick={toggleMenu}
        >
          <svg
            className="w-20 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Responsive Menu */}
        <div className={`md:flex md:items-center ${menuVisible ? 'flex' : 'hidden'}`}>
          <div className="flex flex-col sm:flex-row place-content-center text-[1rem] space-[1rem] sm:space-x-8">
            <Link href="/">
              <a className="mr-8 mt-2 w-[10rem]">TOKEN CREATOR</a>
            </Link>
            <Link href="/update">
              <a className="mr-8 mt-2 w-[10rem]">UPDATE METADATA</a>
            </Link>
            <Link href="/uploader">
              <a className="mr-8 mt-2  w-[10rem]">UPLOAD METADATA</a>
            </Link>
            <Link href="/metadata">
              <a className="mr-8 mt-2 w-[10rem]">TOKEN METADATA</a>
            </Link>
            <WalletMultiButton className="btn btn-ghost mr-8  w-[10rem]" />
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};
