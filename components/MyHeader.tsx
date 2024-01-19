import React from 'react'
import { Avatar } from './Avatar'

export const MyHeader = () => {
  return (
    <nav className="bg-stone-200 h-14 flex items-center justify-between px-6">
    <h1 className="font-bold text-xl">My Brand</h1>
    <Avatar src="path/to/your/avatar.jpg" alt="User Avatar" name="John Doe" role="Web Developer" />
  </nav>
  )
}
