import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import { useSelector , useDispatch} from 'react-redux'
import { RootState } from 'store/store'
import { toggleDarkMode } from 'store/Theme/ThemeSlicer'
const Toggle = () => {
    const { isDarkMode } = useSelector((state:RootState) => state.darkMode)
    const dispatch = useDispatch()
  return (
    <div>
        <Checkbox toggle  onChange={() => {
            dispatch(toggleDarkMode())
        }} />
       
    </div>
  )
}

export default Toggle

