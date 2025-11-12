import React from 'react'

const About = () => {
  return (
    <div className="my-10 space-y-8">
      {/* Hero Section */}
      <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 shadow-md p-10 md:p-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-xl text-gray-600">
          Welcome to my portfolio and guitar tabs collection.
        </p>
      </div>

      {/* Main Content */}
      <div className="rounded-2xl bg-white border border-violet-200 shadow-md p-10 md:p-16 space-y-6">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Who I Am</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm a passionate musician and developer dedicated to sharing high-quality guitar tabs and music resources with the community.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">What I Do</span>
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-violet-500 text-xl mt-1">✓</span>
              <p className="text-gray-600 text-lg">Transcribe and share quality guitar tabs</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-violet-500 text-xl mt-1">✓</span>
              <p className="text-gray-600 text-lg">Build modern web applications</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-violet-500 text-xl mt-1">✓</span>
              <p className="text-gray-600 text-lg">Create resources for musicians</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">My Mission</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To make learning guitar more accessible by providing accurate, easy-to-read tabs for everyone.
          </p>
        </section>
      </div>

      {/* Stats or Interest Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white border border-violet-200 p-8 text-center hover:border-violet-400 transition-colors">
          <p className="text-4xl font-bold text-violet-500 mb-2">3+</p>
          <p className="text-gray-600">Quality Tabs</p>
        </div>
        <div className="rounded-xl bg-white border border-violet-200 p-8 text-center hover:border-violet-400 transition-colors">
          <p className="text-4xl font-bold text-violet-500 mb-2">100%</p>
          <p className="text-gray-600">Accuracy</p>
        </div>
        <div className="rounded-xl bg-white border border-violet-200 p-8 text-center hover:border-violet-400 transition-colors">
          <p className="text-4xl font-bold text-violet-500 mb-2">∞</p>
          <p className="text-gray-600">Passion</p>
        </div>
      </div>
    </div>
  )
}

export default About