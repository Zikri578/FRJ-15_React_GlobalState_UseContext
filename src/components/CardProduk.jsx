import React, { useContext } from 'react'
import { ProdukConsumer } from "../store/ProdukProvider"


export default function CardProduk(props) {

    // global state
    const [total, setTotal] = useContext(ProdukConsumer);

    // menambahkan
    const increment = () => {
        setTotal(total + 1)
    }

    // mengurangi
    const decrement = () => {
        setTotal(total - 1)
        if (total <= 0) {
            setTotal(0)
        }
    }

    return (
        <div class="w-1/4 bg-orange-300 p-5 flex flex-col shadow-2xl">

            <h1 class="justify-center"> {props.nama} </h1>

            <img src={props.img} alt={props.nama} class="w-full h-full object-cover" />

            <h1 class="justify-center"> {props.harga} </h1>

            <div class="w-full flex flex-row gap-3 justify-center">
                <button onClick={decrement} class="w-5"> - </button>
                <h1>{total}</h1>
                <button onClick={increment} class="w-5"> + </button>
            </div>

        </div>
    )
}
