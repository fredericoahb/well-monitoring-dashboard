export function formatNumber(value: number, digits = 0) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value)
}

export function formatDateTime(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'
  }).format(new Date(value))
}
