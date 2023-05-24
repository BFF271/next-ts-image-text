import React, { useState, useEffect } from 'react'

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

const fontSizeOptions = [
  'text-[10px]',
  'text-[11px]',
  'text-[12px]',
  'text-[13px]',
  'text-[14px]',
  'text-[15px]',
  'text-[16px]',
  'text-[17px]',
  'text-[18px]',
  'text-[19px]',
  'text-[20px]',
  'text-[21px]',
  'text-[22px]',
  'text-[23px]',
  'text-[24px]',
  'text-[25px]',
  'text-[26px]',
  'text-[27px]',
  'text-[28px]',
  'text-[29px]',
  'text-[30px]',
]

export default function Text() {
  const [fontSize, setFontSize] = useState(20)
  const [fontSizeAttr, setFontSizeAttr] = useState(fontSizeOptions[10])
  const [textColor, setTextColor] = useState('text-white')
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
    value.match()
    if (parseInt(value) < min || isNaN(parseInt(value))) return min
    else if (parseInt(value) > max) return max
    else return value
  }

  useEffect(() => {
    setFontSizeAttr(`${fontSizeOptions[fontSize - 10]}`)
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
            if (fontSize > 10) setFontSize(fontSize - 1)
          }}
        >
          <img src='/minus.svg' alt='Minus Icon' draggable='false' />
        </button>
        {/* Font size input */}
        <input
          type='text'
          value={fontSize}
          className='w-6 bg-transparent outline-none text-center text-black text-lg'
          onKeyDown={(e) => {
            var ASCIICode = e.key
            if (
              (parseInt(ASCIICode) >= 0 && parseInt(ASCIICode) <= 9) ||
              ASCIICode === 'ArrowLeft' ||
              ASCIICode === 'ArrowRight'
            )
              return true
            return e.preventDefault()
          }}
          onChange={(e) => {
            setFontSize(minmax(e.target.value, 10, 30))
          }}
        />
        {/* Increase font size button */}
        <button
          className='hover:bg-green-200 border-none outline-none'
          onClick={() => {
            if (fontSize < 30) setFontSize(fontSize + 1)
          }}
        >
          <img src='/plus.svg' alt='Plus Icon' draggable='false' />
        </button>
        {/* Toggle bold text */}
        <button
          className='hover:bg-green-200 border-none outline-none mx-3'
          onClick={() => {
            setIsBold(!isBold)
          }}
        >
          <img src='/bold.svg' alt='Bold Icon' draggable='false' />
        </button>
        <div className='h-6'>
          <button
            id='dropdownDefaultButton'
            data-dropdown-toggle='dropdown'
            className="bg-[url('/pencil.svg')] w-6 h-6 hover:bg-green-200 border-none outline-none"
            onClick={handleIsOpenColorDropDown}
          ></button>
          {isOpenColorDropDown && (
            <div
              id='dropdown'
              className='absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32'
            >
              <ul
                className='py-2 text-sm text-gray-700'
                aria-labelledby='dropdownDefaultButton'
              >
                {textColorOptions.map((color) => (
                  <li
                    key={color}
                    className={`block px-4 py-2 hover:bg-gray-100 ${color}`}
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
