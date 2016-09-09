import Component from 'ember-component';

export default Component.extend({
  colors: [
    {
      name:'gray-dd'
    },
    {
      name:'gray-d'
    },
    {
      name:'gray'
    },
    {
      name:'gray-l',
    },
    {
      name:'gray-ll',
      invertColors: true
    },
    {
      name:'red'
    },
    {
      name:'t',
      description: 'transparent'
    },
  ],  
  widths: [
    {
      name: '2px',
      class: 2
    },
    {
      name: '3px',
      class: 3
    },
    {
      name: '4px',
      class: 4
    }
  ]
});