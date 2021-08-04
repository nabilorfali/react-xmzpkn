/* eslint-disable */
import React from 'react'
import { Header, Image, Paragraph, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './fsdf.css'

const Fsdf = (props) => {
  return (
    <div className="fsdf-container">
      <div className="fsdf-container1">
        <div className="fsdf-container2">
          <Header field={props.fields.header_6} className="fsdf-header"></Header>
          <Image field={props.fields.image_2} className="fsdf-image"></Image>
        </div>
        <Image field={props.fields.image_3} className="fsdf-image1"></Image>
      </div>
      <div className="fsdf-container3">
        <Paragraph field={props.fields.paragraph_4} className="fsdf-paragraph"></Paragraph>
        <Paragraph field={props.fields.paragraph_5} className="fsdf-paragraph1"></Paragraph>
      </div>
      <div className="fsdf-container4">
        <Button field={props.fields.button_0} className="fsdf-button"></Button>
        <Button field={props.fields.button_1} className="fsdf-button1"></Button>
      </div>
    </div>
  )
}

Fsdf.defaultProps = {
  'fields.button_0': 'text',
  fields: {},
  'fields.button_1': 'text',
  'fields.image_2': 'src',
  'fields.image_3': 'src',
  'fields.paragraph_4': 'text',
  'fields.paragraph_5': 'text',
  'fields.header_6': 'text',
}

Fsdf.propTypes = {
  'fields.button_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.button_1': PropTypes.string,
  'fields.image_2': PropTypes.object,
  'fields.image_3': PropTypes.object,
  'fields.paragraph_4': PropTypes.string,
  'fields.paragraph_5': PropTypes.string,
  'fields.header_6': PropTypes.string,
}

export default Fsdf
