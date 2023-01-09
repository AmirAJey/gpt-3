import {useState} from "react"

type UseToggle = (initValue: boolean) => [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>]

const useToggle: UseToggle = (initValue) => {
  const [value, setValue] = useState<boolean>(initValue)  

  const toggle = () => setValue(prev => !prev)


  return [value, toggle, setValue]
}

export default useToggle