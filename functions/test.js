exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'jhpark',
      age: 31,
      email: 'wogud772@gmail.com'
    })
  }
}
