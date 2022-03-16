import { Button } from 'semantic-ui-react'
import CustomButtonProps from 'types/CustomButtonTypes'




const CustomButton = ({title , onClick} :CustomButtonProps ) => {
  return (
    <Button onClick={onClick} primary>{title}</Button>

  )
}

export default CustomButton