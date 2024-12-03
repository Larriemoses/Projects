import image01  from '../assets/images/11430158.png'
import image02  from '../assets/images/2130-removebg-preview.png'
import image03 from '../assets/images/41747-removebg-preview.png'
import image04 from '../assets/images/stock-photo-rocketman-on-bench-mixed-media-1296333661-removebg-preview.png'


function NavBar() {
    return (
            <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white sm:scroll-smooth" >
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
                <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40">
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

                <section id="projects" className="p-6 my-12 scroll-mt-20" >
                  <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    Our Projects
                  </h2>
                  <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                    <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-black py-6 px-2 rounded-3xl shadow-xl">
                      <img src={image02} alt="#rocketman" className="mb-6 w-1/2" />
                      <h3 className="text-3xl text-center text-slate-900 dark:text-white"> 
                        Explorer
                      </h3>
                      <p className="hidden sm:block text-3xl text-center text-slate-500 mt-2 dark:text-slate-400"> 
                        $
                      </p>
                      <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400"> 
                        Affordable Exploration
                      </p>
                    </li>
                    <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-black py-6 px-2 rounded-3xl shadow-xl">
                      <img src={image04} alt="#rocketman" className="mb-6 w-1/2" />
                      <h3 className="text-3xl text-center text-slate-900 dark:text-white"> 
                        Adventurer
                      </h3>
                      <p className="hidden sm:block text-3xl text-center text-slate-500 mt-2 dark:text-slate-400"> 
                        $$
                      </p>
                      <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400"> 
                        Best Selling Rockets!
                      </p>
                    </li>
                    <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-black py-6 px-2 rounded-3xl shadow-xl">
                      <img src={image03} alt="#infinity" className="mb-6 w-1/2" />
                      <h3 className="text-3xl text-center text-slate-900 dark:text-white"> 
                        Infinity
                      </h3>
                      <p className="hidden sm:block text-3xl text-center text-slate-500 mt-2 dark:text-slate-400"> 
                        $$$
                      </p>
                      <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400"> 
                        Luxury Starship
                      </p>
                    </li>
                  </ul>
                </section>
                
                <hr className="mx-auto bg-black dark:bg-white w-1/2" />

                <section id="testimonials" className="p-6 my-12 scroll-mt-20" >
                  <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    Testimonials
                  </h2>
                </section>
                
                <hr className="mx-auto bg-black dark:bg-white w-1/2" />

                <section id="contact" className="p-6 my-12 scroll-mt-20">
                  <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    Contact Us
                  </h2>
                </section>
              </main>

              
            </body>
    );
  }
  
  export default NavBar;