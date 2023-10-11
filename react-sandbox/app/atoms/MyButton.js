export default function MyButton({clickHandler, buttonText}){
    return(
      <button onCLick={clickHandler}>{buttonText}</button>
    )
  }
