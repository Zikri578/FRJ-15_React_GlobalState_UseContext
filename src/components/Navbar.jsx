import React from 'react'

export default function Navbar(props) {



    return (
        <div class="w-full h-[75px] bg-orange-400">
            <nav class="w-full h-full max-w-6xl mx-auto my-0 flex items-center justify-between py-[20px] px-0">
                <h1 class="text-3xl text-white">Marketplace Online Zidan</h1>

                <p class="text-white font-medium">Total Belanja : {props.total}</p>
            </nav>
        </div>
    )
}
