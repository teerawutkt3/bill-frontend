export default {
  isNotBlank (value) {
    if (Array.isArray(value)) { return value.length !== 0 }
    return value !== undefined && value !== '' && value != null && value !== 'null'
  },
  isBlank (value) {
    return !this.isNotBlank(value)
  },
  formatPrice (value) {
    const val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  },
  isNew (value) {
    return value != null && value !== 0 && value !== undefined
  },
  isNotNew (value) {
    // eslint-disable-next-line no-undef
    return !isNew(value)
  },
  convertFormData (object) {
    const formData = new FormData()
    Object.keys(object).forEach(key => formData.append(key, this.isNotBlank(object[key]) ? object[key] : ''))
    return formData
  },
  isNumber (evt) {
    evt = (evt) || window.event
    const charCode = (evt.which) ? evt.which : evt.keyCode
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
      evt.preventDefault()
    } else {
      return true
    }
  }
}
