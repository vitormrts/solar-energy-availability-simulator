export interface ButtonProps {
  label?: string
  onClick?: (event: React.FormEvent) => void
  testId?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}
