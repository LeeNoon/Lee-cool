
import React from 'react'
import ReactDOM from 'react-dom'

const myh1 = React.createElement('h1',{
    id:'myh1',title:'this is h1'
},'hello')

const myh2 = <div id='mydiv'>这是H2</div>
ReactDOM.render(myh2,document.getElementById('app')) 