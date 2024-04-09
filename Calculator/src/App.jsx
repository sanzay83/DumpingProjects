import styles from './App.module.css'
import ButtonContainer from './Component/ButtonContainer'
import Display from './Component/Display'
import {useState} from 'react'


function App() {

  let [calVal, setCalVal] = useState('');
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C' || buttonText === 'AC') {
      setCalVal('');
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === 'M+' || buttonText === 'M-'){
      console.log('These button doesnot do anything');
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }


   return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}/>
      <ButtonContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
