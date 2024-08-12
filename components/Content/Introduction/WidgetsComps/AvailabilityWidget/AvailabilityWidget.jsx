import React from 'react'
import { ActiveSign, ActiveText, ActiveTextBold, ActiveTextContainer, ActiveTextNote, AvailableContainer } from './AvailabilityWidget.styled'

const AvailabilityWidget = () => {
  return (
    <AvailableContainer>

      <ActiveSign></ActiveSign>
     

     <ActiveTextContainer>
     <ActiveText>
     {"Available"}
      </ActiveText>
      <ActiveTextNote>
      {"Ready for new challenges!"}
      </ActiveTextNote>
     </ActiveTextContainer>
    </AvailableContainer>
  )
}

export default AvailabilityWidget