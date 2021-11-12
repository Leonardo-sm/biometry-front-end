import { createStandaloneToast } from '@chakra-ui/react'
const request = window.require('request')
const electron = window.require('electron').remote
const electronFs = window.require('original-fs')
const electronPath = window.require('path')

const appPath = electron.app.getAppPath()

const BASE_URL = 'http://localhost:3333'

async function downloadImage(url: string) {
  const toast = createStandaloneToast()

  const imagesPath = electronPath.resolve(
    appPath,
    'tmp/images',
    'fingerprint.tif'
  )

  const writer = electronFs.createWriteStream(imagesPath)

  const req = await request({ method: 'GET', uri: `${BASE_URL}${url}` })
  req.pipe(writer)
  req.on('end', () => {
    if (req.response.statusCode !== 200) {
      toast({
        title: 'Falha no download',
        description: 'Erro ao tentar baxar a imagem',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  })

  return imagesPath
}

export default downloadImage
