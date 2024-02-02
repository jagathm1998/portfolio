import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            github: 'https://github.com/jagathm1998',
            facebook: 'https://www.facebook.com/jagath.jagath.9849',
            linkedin: 'https://www.linkedin.com/in/jagath-mj/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>M</span> Jagath 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} alt='Image'/>
    </section>
}