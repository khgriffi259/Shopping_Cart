export const formatCurrency = (num) => (
    `$${Number(num.toFixed(2)).toLocaleString()} `
)