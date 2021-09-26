module.exports = handlers => ({
  method: 'GET',
  path: '//pizza-luvrs-ct-unique-string.s3.amazonaws.com/{param*}',
  handler: {
    directory: {
      path: 'assets'
    }
  },
  options: {
    auth: false
  }
})
