
import React from 'react'

const DataFile = () => {

  const qparam = new URLSearchParams(window.location.search);
  const name = qparam.get('name');
  const regnno = qparam.get('regno');
  return (
    <div>
      <p>This is Data File Page</p>
      <p>Name is : {name}</p>
      <p>Regn no : {regnno}</p>
    </div>
  )
}

export default DataFile
