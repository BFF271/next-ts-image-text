import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function Image() {
  const [createObjectURL, setCreateObjectURL] = useState(null)
  const [backImgName, setBackImgName] = useState(``)

  const handleSetBackImg = (url: string) => {
    setBackImgName(url)
    console.log(backImgName)
  }

  return (
    <div
      id='imageBoard'
      className={`bg-no-repeat items-center mx-auto w-[472px] h-[384px]`}
      style={{ backgroundImage: `url(${backImgName})` }}
    >
      <div className='bg-opacity-0 p-4 w-full h-full hover:bg-opacity-30 transition-all duration-1000 group relative bg-gray-300  place-items-center'>
        <input
          type='file'
          name='myImage'
          accept='image/*'
          className='absolute invisible group-hover:visible object-center bg-blue-500 text-white opacity-0 w-10 h-10 mt-36 ml-48'
          onChange={async (event) => {
            if (event.target.files && event.target.files[0]) {
              const i = event.target.files[0]

              setCreateObjectURL(URL.createObjectURL(i))
              const body = new FormData()
              body.append('file', i)
              const response = await fetch('/api/uploadImage', {
                method: 'POST',
                body,
              })
              console.log(response)
              const json = await response.json()
              console.log(json)
              if (json.width < 472 || json.height < 384)
                alert('It is improper resolution.')
              else handleSetBackImg(json.url)
            }
          }}
        />
        <ArrowUpTrayIcon className='w-10 h-10 invisible group-hover:visible mt-36 ml-48' />
      </div>
    </div>
  )
}
