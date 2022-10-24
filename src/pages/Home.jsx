import React from 'react'
import { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import WrapperProduk from '../components/WrapperProduk';
import { ProdukConsumer } from "../store/ProdukProvider"

export default function Home() {

    // state
    const [total, setTotal] = useContext(ProdukConsumer);

    return (
        <div>
            <Navbar total={total} />
            <div class="w-26 max-w-7xl p-5 my-0 mx-auto flex gap-5">
                <SideMenu total={total} />
                <WrapperProduk />

                {/* <h1>Total Belanja : {total} </h1>
                <button class="" onClick={addTotal}> Tambah </button>
            <button class="" onClick={decTotal}> Kurang </button> */}
            </div>
        </div>
    )
}
