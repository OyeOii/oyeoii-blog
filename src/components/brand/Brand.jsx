import React from 'react';
import './brand.css';
import { Thailand, Spain, Malta, Japan, Korea, World } from './imports';

const Brand = () => {
  return (
    <div className = 'oyeoii__brand section__padding'>
      <div className = "column1">
        <img src = { Thailand } alt = "Thailand" />
      </div>

      <div className = "column2">
        <img src = { Spain } alt = "Spain" />
      </div>

      <div className = "column3">
        <img src = { Malta } alt = "Malta" />
      </div>

      <div className = "column4">
        <img src = { Japan } alt = "Japan" />
      </div>

      <div className = "column5">
        <img src = { Korea } alt = "Korea" />
      </div>

      <div className = "column6">
        <img src = { World } alt = "World" />
      </div>
    </div>
  )
}

export default Brand