import React from 'react'

function AccordianSvg({ activeLayer }: any) {
  return (
    <svg width="633" height="518" viewBox="0 0 633 518" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="633" height="518" rx="8" fill="#151313" />
      <path d="M538 72V400.5" stroke="white" strokeOpacity="0.31" strokeDasharray="2 2" />
      <path d="M93 92V420.5" stroke="white" strokeOpacity="0.31" strokeDasharray="2 2" />
      <path d="M300.5 369L607.5 410L332 479L25 438L300.5 369Z" fill={activeLayer === 6 ? '#f25930' : '#232121'} />
      <path d="M27.6559 437.85L300.529 369.508L604.844 410.15L331.971 478.492L27.6559 437.85Z" stroke="#151313" strokeOpacity="0.1" />
      <path d="M300.5 314L607.5 355L332 424L25 383L300.5 314Z" fill={activeLayer === 5 ? '#f25930' : '#3D3D3D'} />
      <path d="M27.6559 382.85L300.529 314.508L604.844 355.15L331.971 423.492L27.6559 382.85Z" stroke="#151313" strokeOpacity="0.1" />
      <path d="M300.5 259L607.5 300L332 369L25 328L300.5 259Z" fill={activeLayer === 4 ? '#f25930' : '#5B5B5B'} />
      <path d="M27.6559 327.85L300.529 259.508L604.844 300.15L331.971 368.492L27.6559 327.85Z" stroke="#151313" strokeOpacity="0.1" />
      <path d="M300.5 204L607.5 245L332 314L25 273L300.5 204Z" fill={activeLayer === 3 ? '#f25930' : '#7B7B7B'} />
      <path d="M27.6559 272.85L300.529 204.508L604.844 245.15L331.971 313.492L27.6559 272.85Z" stroke="#151313" strokeOpacity="0.1" />
      <path d="M300.5 149L607.5 190L332 259L25 218L300.5 149Z" fill={activeLayer === 2 ? '#f25930' : '#7B7B7B'} />
      <path d="M27.6559 217.85L300.529 149.508L604.844 190.15L331.971 258.492L27.6559 217.85Z" stroke="#151313" strokeOpacity="0.1" />
      <path d="M300.5 94L607.5 135L332 204L25 163L300.5 94Z" fill={activeLayer === 1 ? '#f25930' : '#A0A0A0'} />
      <path d="M27.6559 162.85L300.529 94.5083L604.844 135.15L331.971 203.492L27.6559 162.85Z" stroke="#151313" strokeOpacity="0.1" />
      <path d="M300.5 39L607.5 80L332 149L25 108L300.5 39Z" fill={activeLayer === 0 ? '#f25930' : '#EEEEEE'} />
      <path d="M27.6559 107.85L300.529 39.5083L604.844 80.1497L331.971 148.492L27.6559 107.85Z" stroke="#151313" strokeOpacity="0.1" />
      <path d="M26 108L26 437" stroke="white" strokeOpacity="0.24" />
      <path d="M332 150V478.5" stroke="white" strokeOpacity="0.24" />
      <path d="M606 82V410.5" stroke="white" strokeOpacity="0.24" />
    </svg>
  )
}

export default AccordianSvg
