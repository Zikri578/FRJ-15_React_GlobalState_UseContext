import React from 'react'
import CardProduk from './CardProduk'

export default function WrapperProduk() {
    return (
        <div class="flex-1 min-h-[900px] bg-white flex flex-col p-5 gap-3">
            <h1 class="mb-5">Produk</h1>
            <hr />

            <div class="w-full flex flex-wrap gap-5">
                <CardProduk nama={"Baju Kemeja"} harga={"Rp. 75.000"} img={"https://media.istockphoto.com/photos/javanese-asian-man-smiling-happy-when-holding-his-mobile-phone-and-picture-id1361826904?b=1&k=20&m=1361826904&s=612x612&w=0&h=BylhCw6tCI-tqGznxiGqzqj6ptkQayMpVd5RgodUMPY="} />
            </div>
        </div>
    )
}
