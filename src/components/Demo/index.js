/* eslint-disable */
import React from 'react'
import { Header, Paragraph, Button, Video } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './demo.css'

const Demo = (props) => {
  return (
    <div className="demo-container">
      <div className="demo-container1">
        <Header field={props.fields.header_1} className="demo-header"></Header>
        <Paragraph field={props.fields.paragraph_4} className="demo-paragraph"></Paragraph>
        <Button field={props.fields.button_0} className="demo-button"></Button>
      </div>
      <Video field={props.fields.video_2} className="demo-video"></Video>
    </div>
  )
}

Demo.defaultProps = {
  'fields.button_0': 'text',
  fields: {},
  'fields.header_1': 'text',
  'fields.video_2': 'src',
  'fields.paragraph_4': 'text',
}

Demo.propTypes = {
  'fields.button_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.header_1': PropTypes.string,
  'fields.video_2': PropTypes.object,
  'fields.paragraph_4': PropTypes.string,
}

export default Demo
