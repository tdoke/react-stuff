import React from 'react'
import FlexView from 'react-flexview/lib'
import './Message.css'

const Message = ({ text }) => (
  <FlexView className="message-container" style={{ width: "100%" }} hAlignContent="center">
    {text}
  </FlexView>
)

export default Message;