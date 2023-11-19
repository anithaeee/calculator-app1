import React from 'react'
import { Button } from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import '../cal-app1/calculator.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import { useState } from 'react';
const Calculator = () => {
  return (
    <div className='container-fluid'>
       <div className='card'>
        <div className='card-text'>
            <h2>Calculator App In React</h2>
        </div>
       </div>
       <div className='text'>
          <div>
            <InputText  style={{backgroundColor:'blue',margin:'10px',borderRadius:'6px'}}></InputText>
          </div>
        </div>
        
        <div className='button'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>0</Button>
          <Button>Clear</Button>
          <Button>Dellete</Button>
          <Button>Ac</Button>
          <Button>+</Button>
          <Button>-</Button>
          <Button>*</Button>
          <Button>/</Button>
          <Button>=</Button>
        </div>
        
    </div>
  )
}

export default Calculator;