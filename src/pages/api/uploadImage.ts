import { IncomingForm } from 'formidable'
import sizeOf from 'image-size'

var mv = require('mv')
const sharp = require('sharp')

const HOST_URL =
  process.env.NEXTAUTH_URL + (process.env.NEXTAUTH_URL.endsWith(`/`) ? `` : `/`)

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      if (!files.file.mimetype.startsWith('image/'))
        return reject(new Error('Not an Image.'))
      var oldPath = files.file.filepath
      var newPath = `./public/uploads/${files.file.originalFilename}`
      const oldDimensions = sizeOf(oldPath)
      if (oldDimensions.width >= 472 && oldDimensions.height >= 384)
        sharp(oldPath)
          .resize(472, 384)
          .toFile(newPath, (err, info) => {
            const newDimensions = sizeOf(newPath)
            res.status(200).json({
              url: `/uploads/${files.file.originalFilename}`,
              type: files.file.mimetype,
              height: newDimensions.height + '',
              width: newDimensions.width + '',
            })
          })
      else
        mv(oldPath, newPath, function (err) {
          const newDimensions = sizeOf(newPath)
          res.status(200).json({
            url: `/uploads/${files.file.originalFilename}`,
            type: files.file.mimetype,
            height: newDimensions.height + '',
            width: newDimensions.width + '',
          })
        })
    })
  })
}
