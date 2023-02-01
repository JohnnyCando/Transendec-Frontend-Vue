// const callService = async (api) => {
//   let options = {
//     method: api.method,
//     header: api.header,
//   }
//   switch (api.method) {
//     case 'POST':
//       options.body = api.data
//       break
//   }
//   const resp = await fetch(api.url, options)
//   return resp.json()
// }

// export default {
//   callService,
// }

export default {
  methods: {
    async callService(api) {
      let options = {
        method: api.method,
        headers: api.headers,
      }
      switch (api.method) {
        case 'POST':
          options.body = JSON.stringify(api.data)
          break
      }
      const resp = await fetch(process.env.VUE_APP_API + api.url, options)
      return resp.json()
    },
  },
}
