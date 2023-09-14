import React from 'react'

function DetailPayment({token}) {
    const idCompra=token
    return (
        <div className='flex flex-col border border-black rounded m-4 mt-2rem p-4'>
            <h2 className='flex justify-center font-bold'> FELICITACIONES </h2>
            <p> SU PEDIDO ESTÁ SIENDO PROCESADO CON EL CÓDIGO:</p>
            <p><b> {idCompra} </b></p>
            <p>gracias por confiar en nosotros...</p>
        </div>
    )
}

export default DetailPayment;