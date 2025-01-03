export const Contact = () => {
  return (
    <section className='bg-secondary text-text-color px-1/10 py-10 z-10 flex justify-between' id='contact'>
        <div className='w-1/2'>
          <h2 className='text-3xl font-bold'>Contact Me!</h2>
          <p className='text-2xl'>Feel free to reach out to me on any of the following platforms:</p>
        </div>
        <ul className='w-1/3 flex flex-col space-y-4'>
            <li className='contact_url'>
                <img src="/src/assets/contact/emailIcon.png" alt="Email icon" />
                <a href="mailto:joshuafriedland7@gmail.com">joshuafriedland7@gmail.com</a>
            </li>
            <li className='contact_url'>
                <img src="/src/assets/contact/linkedinIcon.png" alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/jefriedl/">linkedin.com/in/jefriedl/</a>
            </li>
            <li className='contact_url'>
                <img src="/src/assets/contact/githubIcon.png" alt="Github icon" />
                <a href="https://github.com/joshtopher">github.com/joshtopher</a>
            </li>
        </ul>

    </section>
  )
};
