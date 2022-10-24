import React, { createContext, useState } from 'react'

export const ProdukConsumer = createContext();

export default function ProdukProvider(props) {

    // state
    const [total, setTotal] = useState(0);

    return (
        <ProdukConsumer.Provider value={[total, setTotal]}>
            {props.children}
        </ProdukConsumer.Provider>
    )
}
