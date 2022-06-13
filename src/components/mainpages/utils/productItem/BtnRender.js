import React, {useContext} from 'react'

function BtnRender({product, deleteProduct}) {

    return (
        <div className="row_btn">
                    <button style={{backgroundColor:'#445445',padding:'5px 40px',color:'#FAFAFA'}}>
                        View
                    </button>
        </div>
    )
}

export default BtnRender
