const Home = () => {
  return (
    <>
    
      {/* Hero Content */}
      <div className="relative w-full min-h-screen overflow-hidden -mt-20 pt-20 z-10">
        {/* Waves background covering only hero section */}
        <div 
          className="absolute top-20 left-0 right-0 bottom-0 w-full opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none z-20 rounded-3xl"
          style={{
            backgroundImage: 'url(/waves.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        ></div>        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 relative z-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="max-w-2xl">
            <div className="flex justify-start mb-8">
              <img 
                src="/CIS.svg" 
                alt="Profile" 
                className="h-16 w-16 rounded-full bg-gray-50 ring-1 ring-gray-200 shadow-sm"
              />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-left">
              Cardinal Intelligence Solutions
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
              We are a cutting-edge technology company specializing in data & AI-driven solutions to transform businesses and enhance user experiences.
            </p>

            <div className="mt-6 flex justify-start">
              <button>
                <a href="/contact"
                   className="inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                  Contact Us
                </a>
              </button>
            </div>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-6">
              <a href="#" className="group -m-1 p-1" aria-label="Follow on X">
                <svg className="h-6 w-6 fill-gray-500 transition group-hover:fill-gray-600" viewBox="0 0 24 24">
                  <path d="M13.3174 10.7764L19.1457 4H17.9386L12.7048 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.20711L10.7279 13.7878L14.994 20H19.6559L13.3171 10.7764H13.3174ZM11.4226 12.9671L10.8028 12.0886L5.68508 5.03974H8.0302L11.9085 10.728L12.5283 11.6065L17.9392 19.0271H15.5941L11.4226 12.9674V12.9671Z" />
                </svg>
              </a>
              <a href="#" className="group -m-1 p-1" aria-label="Follow on Instagram">
                <svg className="h-6 w-6 fill-gray-500 transition group-hover:fill-gray-600" viewBox="0 0 24 24">
                  <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.418a4.412 4.412 0 0 0 1.595-1.038c.5-.501.808-1.003 1.038-1.595.222-.572.374-1.226.418-2.184.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.418-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.671.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.318.27.795.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.318.123-.795.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31a2.79 2.79 0 0 1-1.035-.673 2.79 2.79 0 0 1-.673-1.036c-.123-.318-.27-.795-.31-1.671C4.631 14.688 4.622 14.403 4.622 12s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.671.163-.421.358-.72.673-1.035A2.79 2.79 0 0 1 6.692 5.98c.318-.123.795-.27 1.671-.31C9.312 5.631 9.597 5.622 12 5.622ZM12 15.808a3.808 3.808 0 1 1 0-7.616 3.808 3.808 0 0 1 0 7.616ZM12 14.184A2.184 2.184 0 1 0 12 7.816a2.184 2.184 0 0 0 0 6.368ZM17.846 6.908a.89.89 0 1 1-1.78 0 .89.89 0 0 1 1.78 0Z"/>
                </svg>
              </a>
              <a href="#" className="group -m-1 p-1" aria-label="Follow on GitHub">
                <svg className="h-6 w-6 fill-gray-500 transition group-hover:fill-gray-600" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z" />
                </svg>
              </a>
              <a href="#" className="group -m-1 p-1" aria-label="Follow on LinkedIn">
                <svg className="h-6 w-6 fill-gray-500 transition group-hover:fill-gray-600" viewBox="0 0 24 24">
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Overlapping Rectangles */}
          <div className="relative flex justify-center items-center h-96 lg:h-[500px]">
            {/* Background rectangle with gradient */}
            <div className="absolute w-80 h-80 rounded-3xl bg-gradient-to-br from-red-100 via-purple-50 to-pink-100 transform rotate-6 shadow-xl"></div>
            
            {/* Front rectangle with image */}
            <div className="relative w-80 h-80 rounded-3xl bg-white shadow-2xl transform -rotate-0 overflow-hidden flex items-center justify-center">
              <img 
                src="/data-analytics.jpg" 
                alt="Data Analytics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Section - separate from hero */}
      <div className="mx-auto max-w-2xl">

        {/* Main Content Grid */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-3">
            {/* Articles Section */}
            <div className="lg:col-span-2 lg:mr-8">
              <div className="space-y-">
                {/* Article 1 */}
                <article className="group relative">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80"
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime="2022-09-05" className="text-gray-500">September 5, 2022</time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#" className="group-hover:text-gray-600 transition-colors">
                          <span className="absolute inset-0"></span>
                          Crafting a design system for a multiplanetary future
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center">
                      <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">Read article</span>
                      <svg className="ml-1 h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>

                {/* Article 2 */}
                <article className="group relative">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2434&q=80"
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime="2022-09-02" className="text-gray-500">September 2, 2022</time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#" className="group-hover:text-gray-600 transition-colors">
                          <span className="absolute inset-0"></span>
                          Introducing Animaginary: High performance web animations
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        When you're building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center">
                      <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">Read article</span>
                      <svg className="ml-1 h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>

                {/* Article 3 */}
                <article className="group relative">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2425&q=80"
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime="2022-07-14" className="text-gray-500">July 14, 2022</time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#" className="group-hover:text-gray-600 transition-colors">
                          <span className="absolute inset-0"></span>
                          Rewriting the cosmOS kernel in Rust
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it's been a while since I've seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center">
                      <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">Read article</span>
                      <svg className="ml-1 h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10 lg:pl-8">
              {/* Newsletter Section */}
              <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="flex text-sm font-semibold text-gray-900">
                  <svg className="h-6 w-6 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-3">Stay up to date</span>
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Get notified when I publish something new, and unsubscribe at any time.
                </p>
                <div className="mt-6 flex">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="min-w-0 flex-auto appearance-none rounded-md border border-gray-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  <button
                    type="submit"
                    className="ml-4 flex-none rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                  >
                    Join
                  </button>
                </div>
              </div>

              {/* Work Section */}
              <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="flex text-sm font-semibold text-gray-900">
                  <svg className="h-6 w-6 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                  </svg>
                  <span className="ml-3">Work</span>
                </h2>
                <ol className="mt-6 space-y-4">
                  <li className="flex gap-4">
                    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5">
                      <img src="/CIS.svg" alt="" className="h-7 w-7 rounded-full" />
                    </div>
                    <div className="flex-auto">
                      <p className="text-xs font-semibold text-gray-900">Planetaria</p>
                      <p className="mt-1 text-xs text-gray-600">CEO</p>
                      <p className="mt-1 text-xs text-gray-400">2019 — Present</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5">
                      <img src="/CIS.svg" alt="" className="h-7 w-7 rounded-full" />
                    </div>
                    <div className="flex-auto">
                      <p className="text-xs font-semibold text-gray-900">Airbnb</p>
                      <p className="mt-1 text-xs text-gray-600">Product Designer</p>
                      <p className="mt-1 text-xs text-gray-400">2014 — 2019</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5">
                      <img src="/CIS.svg" alt="" className="h-7 w-7 rounded-full" />
                    </div>
                    <div className="flex-auto">
                      <p className="text-xs font-semibold text-gray-900">Facebook</p>
                      <p className="mt-1 text-xs text-gray-600">iOS Software Engineer</p>
                      <p className="mt-1 text-xs text-gray-400">2011 — 2014</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5">
                      <img src="/CIS.svg" alt="" className="h-7 w-7 rounded-full" />
                    </div>
                    <div className="flex-auto">
                      <p className="text-xs font-semibold text-gray-900">Starbucks</p>
                      <p className="mt-1 text-xs text-gray-600">Shift Supervisor</p>
                      <p className="mt-1 text-xs text-gray-400">2008 — 2011</p>
                    </div>
                  </li>
                </ol>
                <button className="group mt-6 w-full rounded-md bg-gray-50 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
                  Download CV
                  <svg className="ml-1 inline h-4 w-4 stroke-current opacity-75 group-hover:opacity-100" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-2xl">
        {/* Main Content Grid */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-3">
            {/* Content sections would go here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;