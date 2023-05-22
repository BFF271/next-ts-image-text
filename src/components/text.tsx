import React, { useState, useEffect, useMemo } from 'react'

const textColorOptions = [
  'text-grey-100',
  'text-grey-200',
  'text-grey-300',
  'text-grey-400',
  'text-grey-500',
  'text-grey-600',
  'text-grey-700',
  'text-grey-800',
  'text-grey-900',
]

export default function Text() {
  const [fontSize, setFontSize] = useState<number>(20)
  const [fontSizeAttr, setFontSizeAttr] = useState<string>('text-[20px]')
  const [textColor, setTextColor] = useState<string>('text-white')
  const [boldText, setBoldText] = useState('BOLDED TEXT')
  const [normalText, setNormalText] = useState(
    'Some text of random, normal weight text',
  )
  const [isBold, setIsBold] = useState(true)
  const [boldAttr, setBoldAttr] = useState('font-bold')
  const [isOpenColorDropDown, setIsOpenColorDropDown] = useState(false)

  const handleIsOpenColorDropDown = () => {
    setIsOpenColorDropDown(!isOpenColorDropDown)
  }

  const handleChangeTextColor = (color: string) => {
    setIsOpenColorDropDown(!isOpenColorDropDown)
    setTextColor(`${color}`)
  }

  function minmax(value, min, max) {
    if (!(value[value.length - 1] >= '0' && value[value.length - 1] >= '0'))
      value.slice(value.length - 2, value.length)
    console.log(value)
    if (parseInt(value) < min || isNaN(parseInt(value))) return min
    else if (parseInt(value) > max) return max
    else return value
  }
  useEffect(() => {
    const str = `text-[${fontSize}px]`
    setFontSizeAttr(`${str}`)
    console.log(fontSizeAttr)
  }, [fontSize])
  useEffect(() => {
    if (isBold) setBoldAttr('font-normal')
    else setBoldAttr('font-bold')
  }, [isBold])
  return (
    <div className='pl-10 text-white'>
      <div className='flex mb-5'>
        <button
          className='hover:bg-green-200 border-none outline-none'
          onClick={() => {
            if (fontSize > 0) setFontSize(fontSize - 1)
          }}
        >
          <img src='/minus.svg' alt='Minus Icon' />
        </button>
        {/* Font size input */}
        <input
          type='text'
          value={fontSize}
          pattern='/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/'
          className='w-6 bg-transparent outline-none text-center text-black text-lg'
          onChange={(e) => {
            setFontSize(minmax(e.target.value, 0, 50))
          }}
        />
        {/* <input
          type='text'
          value={fontSize}
          min='0'
          max='50'
          pattern='(?=.*\d)(?=.*\d)'
          className='w-6 bg-transparent outline-none text-center text-black text-lg appearance-none'
          onChange={(e) => setFontSize(parseFloat(e.target.value))}
        /> */}
        {/* Increase font size button */}
        <button
          className='hover:bg-green-200 border-none outline-none'
          onClick={() => {
            if (fontSize < 50) setFontSize(fontSize + 1)
          }}
        >
          <img src='/plus.svg' alt='Plus Icon' />
        </button>
        {/* Toggle bold text */}
        <button
          className='hover:bg-green-200 border-none outline-none mx-3'
          onClick={() => setIsBold(!isBold)}
        >
          <img src='/bold.svg' alt='Bold Icon' />
        </button>
        <div className='h-6'>
          <button
            id='dropdownDefaultButton'
            data-dropdown-toggle='dropdown'
            className="bg-[url('/pencil.svg')] w-6 h-6 hover:bg-green-200 border-none outline-none"
            type='button'
            onClick={handleIsOpenColorDropDown}
          ></button>
          {isOpenColorDropDown && (
            <div
              id='dropdown'
              className='absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700'
            >
              <ul
                className='py-2 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownDefaultButton'
              >
                {textColorOptions.map((color) => (
                  <li
                    key={color}
                    className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${color}`}
                    onClick={() => handleChangeTextColor(color)}
                  >
                    {color}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Bold text */}
      <p
        id='boldText'
        contentEditable
        dangerouslySetInnerHTML={{ __html: boldText }}
        onInput={(e) => setBoldText(e.currentTarget.innerHTML)}
        className={`${fontSizeAttr} ${boldAttr} mb-5 outline-white rounded outline-offset-4 hover:outline-dashed hover:outline-1 hover:outline-offset-0 hover:outline-blue-700`}
      />

      {/* Normal text */}
      <p
        id='normalText'
        contentEditable
        dangerouslySetInnerHTML={{ __html: normalText }}
        onInput={(e) => setNormalText(e.currentTarget.innerHTML)}
        className={`text-[16px] ${textColor} font-normal outline-white rounded outline-offset-4 hover:rounded-none hover:outline-dashed hover:outline-1 hover:outline-offset-0 hover:outline-blue-700`}
      />
    </div>
  )
}
