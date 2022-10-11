import React from 'react'

function DemoParagraph(props) {
  console.log('Demo Paragraph Running');
  return (
    <p>
    {props.children}
    </p>
  )
}

export default DemoParagraph