import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <section id="Contact" className="pt-8 pb-6">
      <div className="border-t border-zinc-800 pt-8 text-center text-zinc-400">
        <div className="text-xl font-semibold tracking-tight text-white mb-1">Vivek Jha</div>
        <a
          href="mailto:vivekjha3080@gmail.com"
          className="hover:text-indigo-400 transition text-sm"
        >
          vivekjha3080@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-5">
          <a
            href="https://github.com/duckling69"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/0xjuniordev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="X"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-jha-17000918b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:vivekjha3080@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-8 text-[10px] tracking-widest text-zinc-600">
          © {new Date().getFullYear()} Vivek Jha — Built for ambitious web3 teams.
        </div>
      </div>
    </section>
  );
}

export default Footer;