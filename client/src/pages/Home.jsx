import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <section>
        <Outlet/>
      </section>
    </div>
  )
}
