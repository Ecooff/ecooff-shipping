const dateParse = (date) => {
    return date.split('T')[0].split('-')[2] + '-' + date.split('T')[0].split('-')[1] + '-' + date.split('T')[0].split('-')[0];
}

const capitalize = (text) => {
    if (typeof text !== 'string') return ''
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

export {
    dateParse,
    capitalize
 };