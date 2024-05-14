export default function Example() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-300 opacity-20 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-1" >
        <figcaption className="mt-0">
            <img
              className=" rounded-full mx-auto h-50 w-50 animate-slideInBottom"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-1 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold animate-slideInBottom text-white">Rahmatullah Zadran</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-white animate-slideInBottom font-medium">FrontEnd Developer/Software Developer</div>
            </div>
          </figcaption>
          <blockquote className="text-center text-xl animate-slideInBottom font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              I am the biggest man there is. I can fly and cry
            </p>
          </blockquote>

         
        </figure>
      </div>
    </section>
  )
}
