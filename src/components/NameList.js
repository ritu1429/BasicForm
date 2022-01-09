import React from 'react'

  function NameList() {
      const Name=['Ritu','Rutvi','Krisha']
    return (
        <div>
            {/* <h2>{Name[0]}</h2>
            <h2>{Name[1]}</h2>
            <h2>{Name[2]}</h2> */}
            {Name.map(Name=><h2>{Name}</h2>)}
        </div>
    )
}
export default NameList