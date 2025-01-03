
export const Navbar = () => {
  return (
    <section className='section'>
        <nav className='flex flex-row justify-between items-center '>
            <h1 className='font-semibold text-3xl'>Portfolio</h1>
            <ul className='flex flex-row space-x-2 right-0 gap-16 text-lg font-semibold'>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </section>
    
  )
};
