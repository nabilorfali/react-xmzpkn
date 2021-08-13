/* eslint-disable */
import React from 'react'
import { Header, Paragraph, Image, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './test12.css'

const Test12 = (props) => {
  return (
    <div className="test12-container">
      <Header field={props.fields.header_6} className="test12-header"></Header>
      <Paragraph field={props.fields.paragraph_7} className="test12-paragraph"></Paragraph>
      <div className="test12-container1">
        <div className="test12-container2">
          <Image field={props.fields.image_3} className="test12-image"></Image>
          <Paragraph field={props.fields.paragraph_10} className="test12-paragraph1"></Paragraph>
          <Button field={props.fields.button_0} className="test12-button"></Button>
        </div>
        <div className="test12-container3">
          <Image field={props.fields.image_4} className="test12-image1"></Image>
          <Paragraph field={props.fields.paragraph_8} className="test12-paragraph2"></Paragraph>
          <Button field={props.fields.button_2} className="test12-button1"></Button>
        </div>
        <div className="test12-container4">
          <Image field={props.fields.image_1} className="test12-image2"></Image>
          <Paragraph field={props.fields.paragraph_9} className="test12-paragraph3"></Paragraph>
          <Button field={props.fields.button_5} className="test12-button2"></Button>
        </div>
      </div>
    </div>
  )
}

Test12.defaultProps = {
  'fields.button_0': 'text',
  fields: {},
  'fields.image_1': 'src',
  'fields.button_2': 'text',
  'fields.image_3': 'src',
  'fields.image_4': 'src',
  'fields.button_5': 'text',
  'fields.header_6': 'text',
  'fields.paragraph_7': 'text',
  'fields.paragraph_8': 'text',
  'fields.paragraph_9': 'text',
  'fields.paragraph_10': 'text',
  'fields.container_1628889299436': 'href',
}

Test12.propTypes = {
  'fields.button_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.button_2': PropTypes.string,
  'fields.image_3': PropTypes.object,
  'fields.image_4': PropTypes.object,
  'fields.button_5': PropTypes.string,
  'fields.header_6': PropTypes.string,
  'fields.paragraph_7': PropTypes.string,
  'fields.paragraph_8': PropTypes.string,
  'fields.paragraph_9': PropTypes.string,
  'fields.paragraph_10': PropTypes.string,
  'fields.container_1628889299436': PropTypes.object,
}

export default Test12
