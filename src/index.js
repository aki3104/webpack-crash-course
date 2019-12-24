'use strict'
import _ from 'lodash'
// import{ Nijo, NAME } from './utilities'
import{ NAME as NAME_OF_HUM } from './utilities'
import * as utilities from './utilities'
import ttLion from './utilities'

function component(){
  const element = document.createElement('div')
  const array = ['Hello', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}
document.body.appendChild(component());

console.log(utilities.Nijo(5));
console.log(NAME_OF_HUM)
console.log(ttLion.say())