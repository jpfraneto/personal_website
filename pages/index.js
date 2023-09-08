import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Righteous } from 'next/font/google';

const righteous = Righteous({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div className='w-screen h-screen relative'>
      <Image className='z-10' src='/medita.jpeg' fill />
    </div>
  );
}
