export default function Example() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-10 sm:py-10 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-300 opacity-20 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-1">
          <figcaption className="mt-0">
            <img
              className="rounded-full mx-auto w-40 h-40 sm:w-60 sm:h-60 xl:w-70 xl:h-70 animate-slideInBottom"
              src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/oic2.jpg?alt=media&token=1c115c0e-7cfd-46dc-80d9-57b5d674ce50"
              alt="Rahmatullah Zadran"
            />
            <div className="mt-1 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold animate-slideInBottom text-white">Rahmatullah Zadran</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-white animate-slideInBottom font-medium">FrontEnd Developer/Software Developer</div>
            </div>
          </figcaption>
          <blockquote className="text-start text-xl animate-slideInBottom font-semibold leading-8 py-10 text-white sm:text-2xl sm:leading-9">
            <p>
              I am Rahmatullah Zadran, a Front-End Developer with a background in telecommunications engineering.
              I create seamless user experiences using HTML, CSS, JavaScript, TailwindCSS, Bootstrap, and React.
              Skilled in Python, Node.js, and Firebase, I build robust full-stack applications.
              My analytical skills and attention to detail ensure responsive, user-friendly solutions.
              Committed to continuous learning and innovation, I strive to deliver impactful digital experiences.
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  )
}
