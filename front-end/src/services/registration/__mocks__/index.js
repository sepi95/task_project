export default {
  register (detail) {
    return new Promise((resolve, reject) => {
      detail.emailAddress === 'jypark@local'
        ? resolve({ result: 'success' })
        : reject(new Error('User already exist'))
    })
  }
}
