import React from 'react'
import Image from 'next/image'


const ToggleThemeSwitch = () => {
  return (
    <div className="rounded flex p-4 w-4/5 mx-6 space-x-6 justify-center items-center bg-lightGrey dark:bg-veryDarkGrey" >
    <Image src="/assets/icon-light-theme.svg" alt="Sun" height={18} width={18} />
    <label htmlFor="default-toggle" className="w-16 inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
        <div className="w-10 h-5 bg-mainPurpleHover rounded-full peer peer-checked:after:translate-x-5 dark:bg-mainPurpleHover  peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-mainPurple"></div>
    </label>
    <Image src="/assets/icon-dark-theme.svg" alt="Moon" height={15} width={15} />
</div>
  )
}

export default ToggleThemeSwitch

// onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} checked={theme === "dark"}