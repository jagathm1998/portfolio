import websiteImg1 from '../assets/qkart-ecommerce.png';
import websiteImg2 from '../assets/qtrip-website.png';
import websiteImg3 from '../assets/blog-website.png';
import websiteImg4 from '../assets/to-do-list.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with React Js.',
                link: 'https://github.com/jagathm1998/jagathm1998-ME_QKART_FRONTEND_V2'
            },
            {
                image: websiteImg2,
                description: 'A travel website for a multitude of adventures in different cities. Built with HTML, CSS, Bootstrap and Javascript.',
                link: 'https://github.com/jagathm1998/jagathm1998-ME_QTRIPDYNAMIC'
            },
            {
                image: websiteImg3,
                description: 'Basic Blog Website . Built with Node JS, Express Js and MongoDB.',
                link: 'https://github.com/jagathm1998/NodeJs-Blog'
            },
            {
                image: websiteImg4,
                description: 'Basic To-Do Website. Built with React Js.',
                link: 'https://github.com/jagathm1998/to-do-app'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image} alt='Image not available'/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}