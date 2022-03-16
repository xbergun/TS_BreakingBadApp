export default interface CustomButtonProps {
    title: string
    onClick? : (e:any) => void
    e? : React.ChangeEvent<HTMLInputElement> 
    preventDefault?(): void
  }
  