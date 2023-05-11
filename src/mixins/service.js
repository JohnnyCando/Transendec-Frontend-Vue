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
    async callServiceFormDataServices(api) {
      var formData = new FormData()
      console.log(api.data.value.name)
      formData.append('name', api.data.value.name)
      formData.append('description', api.data.value.description)
      formData.append('price', api.data.value.price)
      formData.append('nameImage', api.data.value.nameIamge)
      formData.append('imageBlog1', api.data.value.imageBlog1)
      formData.append('imageBlog2', api.data.value.imageBlog2)
      formData.append(
        'useListDataAndImage2',
        api.data.value.useListDataAndImage2,
      )
      formData.append('listCharacteristics', api.data.value.listCharacteristics)
      formData.append('file[]', api.data.value.file)
      formData.append('file[]', api.data.value.imageBlog1File)
      formData.append('file[]', api.data.value.imageBlog2File)
      const resp = await fetch(process.env.VUE_APP_API + api.url, {
        method: api.method,
        headers: api.headers,
        body: formData,
      })
      return resp.json()
    },
  },
}
