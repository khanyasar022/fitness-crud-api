const validate = (schema, values) => {
    const data = schema.validate(values)
    if (data.error) return data.error
    else return data.value
  }
  
  module.exports = validate