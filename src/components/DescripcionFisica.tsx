import React from 'react'

import TextField from '@mui/material/TextField';

const DescripcionFisica = () => {
  return (
    <div className='px-2 m-4 overflow-hidden md:flex md:flex-col'>
      <div className='my-4 w-full sm:flex sm:items-center gap-5'>
        <div className='my-2 w-full'>
          <TextField id="standard-basic" label="olfato" variant="standard" className='px-2 py-1 w-11/12 tall:w-full' multiline rows={3} />
        </div>
        <div className='my-2 w-full'>
          <TextField id="standard-basic" label="tacto" variant="standard" className='px-2 py-1 w-11/12 tall:w-full' multiline rows={3} />
        </div>
      </div>
      <div className='my-4 w-full sm:flex sm:items-center gap-5'>
        <div className='my-2 w-full'>
          <TextField id="standard-basic" label="vista" variant="standard" className='px-2 py-1 w-11/12 tall:w-full' multiline rows={3} />
        </div>
        <div className='my-2 w-full'>
          <TextField id="standard-basic" label="oido" variant="standard" className='px-2 py-1 w-11/12 tall:w-full' multiline rows={3} />
        </div>
      </div>
      <div className='my-4 w-full sm:flex sm:items-center justify-center'>
          <TextField id="standard-basic" label="piel" variant="standard" className='px-2 py-1 w-11/12 tall:w-1/2' multiline rows={3} />
      </div>
      

    </div>
  )
}

export default DescripcionFisica