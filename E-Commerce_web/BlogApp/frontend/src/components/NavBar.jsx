import image01  from '../assets/images/11430158.png'

function NavBar() {
    return (
            <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
              <header className="bg-teal-700 text-white sticky top-0 z-10">
                <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                  <h1 className="text-3xl font-medium">
                  <a href="#hero">💼 AOM Project</a>
                  </h1>
                  <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                    &#9776;
                  </button>
                  <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                      <a href="#projects" className="hover:opacity-90">Projects</a>
                      <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
                      <a href="#contact" className="hover:opacity-90">Contact Us</a>


                  </nav>
                </section>

              </header>

              <main className="max-w-4xl mx-auto">
                <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12">
                  <article className="sm:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left slate-900 dark:text-white">
                      We Boldly Go <span className="text-indigo-700 dark:text-indigo-300"> where No Rocket</span> Has Gone Before...
                    </h2>
                    <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                      We're building rockets for the next century today. From the moon to Mars, Jupiter and beyond.
                    </p>
                    <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                      Think AOM Projects.
                      </p>
                    
                  </article>
                  <img className="w-1/2"  src={image01} alt="Rocket" />
                </section>

                <hr className="mx-auto bg-black dark:bg-white w-1/2" />
              </main>

              
            </body>
    );
  }
  
  export default NavBar;