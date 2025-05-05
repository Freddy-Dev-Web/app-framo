import acmeLogo from '../assets/logo-acme.png'
import quantumLogo from '../assets/logo-quantum.png'
import echoLogo from '../assets/logo-echo.png'
import celestialLogo from '../assets/logo-celestial.png'
import pulseLogo from '../assets/logo-pulse.png'
import apexLogo from '../assets/logo-apex.png'
import Image from 'next/image'

export const LogoTicker = () => {
  return (
    <section>
      <div className='px-4 py-8 md:py-12 bg-white'>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <div className='flex gap-14 flex-none'>
          <Image 
          src={acmeLogo} 
          alt="acme logo" 
          className='h-8 w-auto'
          />

          <Image 
          src={quantumLogo} 
          alt="quantum" 
          className='h-8 w-auto'
          />

          <Image 
          src={echoLogo} 
          alt="echo" 
          className='h-8 w-auto'
          />

          <Image 
          src={celestialLogo} 
          alt="celestial" 
          className='h-8 w-auto'
          />

          <Image 
          src={pulseLogo} 
          alt="pulse" 
          className='h-8 w-auto'
          />

          <Image 
          src={apexLogo} 
          alt="apex" 
          className='h-8 w-auto'
          />

        </div>
        </div>
      </div>
    </section>
  );
};
