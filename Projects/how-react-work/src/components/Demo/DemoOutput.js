import React, { memo } from 'react'
import DemoParagraph from './DemoParagraph';

function DemoOutput(props) {
  console.log('DemoOutput Running');
  return (
    <DemoParagraph>{props.show ? 'This is new' : ''}</DemoParagraph>
  )
}
// Memo Tell React Foe This Component Which It Gets As A Argument ,
// React should Look At The props Which This Component Gets 
// And Check The New Value For All Those props And Compare It To The Previous Value Those props Got
// And Only If The Value Of A props Changed , The Component Should Be Re-executed And Re-evaluated.
// And The Value Of A props Not Changed Component Eexecuted Will Skipped.
export default memo(DemoOutput)

// React go to the component and compare props values with previous props values 
// React do two things
// 1 - needs to store the previous props values
// 2 - needs to make that comparison

// also all of this has it's own performance cost.
