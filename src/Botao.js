import React from 'react';
import './App.css';

const Botao = (props) => (
  
  <button type="button" class="btn btn-dark" onClick={props.onClick}>{props.label}</button>

);

export default Botao;