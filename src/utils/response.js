const response = (res, code, values, responseCode) => {
    if (code === 1) {
      return res.status(responseCode).json({
        code: code,
        status: "success",
        data: values,
      })
    } else {
      return res.status(responseCode).json({
        code: code,
        status: "failure",
        data: values,
      })
    }
  }
  
  module.exports = response