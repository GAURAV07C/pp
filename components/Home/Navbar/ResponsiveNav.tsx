"use client";

import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHadler = () => setShowNav(false);
  return (
    <div>
        <Nav openNav={showNavHandler} />
        <MobileNav showNav={showNav}  closeNav={closeNavHadler}/>
        </div>
  )
}

export default ResponsiveNav
