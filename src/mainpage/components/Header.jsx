import React from 'react'
import { ShopIcon } from '../../icons/Icons'

function Header() {
    return (
        <>
            <nav class="bg-gray-800">
                <div class="flex h-16 justify-center items-center ">
                    <button>
                    <ShopIcon/>
                    </button>
                </div>



            </nav>
        </>
    )
}

export default Header