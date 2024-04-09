import styles from './ButtonContainer.module.css'
const ButtonContainer = ({onButtonClick}) => {
  const buttonNames = ['AC','M+','M-','C','1','2','3','+','4','5','6','-','7','8','9','*','0','.','=','/']
  return <div className={styles.buttonsContainer}>
    {buttonNames.map(buttonName => (<button key={buttonName} onClick={() => onButtonClick(buttonName)} className={styles.button}>{buttonName}</button>))}
</div>
}

export default ButtonContainer;