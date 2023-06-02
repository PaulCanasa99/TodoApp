export interface TodoData {
  id: string
  title: string
  description: string
  date: Date
  priority: 'low' | 'medium' | 'high'
  isCompleted: boolean
}