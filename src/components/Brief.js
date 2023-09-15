import React from 'react'

function Brief({token}) {
    const idCompra=token
    return (
        <div className='flex flex-col border border-black rounded m-4 mt-2rem p-4'>
            <p className='font-bold'> SU PEDIDO ESTÁ SIENDO PROCESADO CON EL CÓDIGO:</p>
            <p className='font-black text-green-700'> {idCompra}</p>
            <p className='font-bold'>gracias por confiar en nosotros...</p>
        </div>
    )
}

export default Brief;