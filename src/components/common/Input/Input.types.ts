export type Status = 'success' | 'error' | undefined

export type GetStatus = () => Status

export interface FieldStyleProps {
  $status?: Status
  $disabled?: boolean
  $selected?: boolean
}

export interface FeedbackLabelProps {
  $status?: Status
}

export interface InputProps {
  disabled?: boolean
  error?: string
  infoText?: string
  label?: string
  name?: string
  onChange?: (value: string) => void
  onClick?: () => void
  placeholder?: string
  success?: string
  testId?: string
  value?: string
}
