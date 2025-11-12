import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
      {text1}{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
        {text2}
      </span>
    </h2>
  )
}

export default Title
