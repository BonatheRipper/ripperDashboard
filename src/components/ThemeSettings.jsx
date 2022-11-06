import React, {useState} from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../context/contextProvider';


const HeaderColour = [
 
  {
    name: 'black-theme',
    colour:   "white",
    BGcolor: 'black',
  },
  {
    name: 'White-theme',
    colour:   "#1d1d1a",
    BGcolor: 'White',
  },
  {
    name: 'green-theme',
    colour:   "white",
    BGcolor: '#03C9D7',
  },
  {
    name: 'purple-theme',
    colour:   "white",
    BGcolor: '#7352FF',
  },
  {
    name: 'red-theme',
    colour:   "white",
    BGcolor: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    colour:   "white",
    BGcolor: '#1E4DB7',
  },
  {
    BGcolor: '#FB9678',
    colour:   "white",
    name: 'orange-theme',

  },
];
const SideColour = [
  {
    name: 'black-theme',
    colour:   "white",
    BGcolor: 'black',
  },
  {
    name: 'White-theme',
    colour:   "#1d1d1a",
    BGcolor: 'White',
  },
  {
    name: 'green-theme',
    colour:   "white",
    BGcolor: '#03C9D7',
  },
  {
    name: 'purple-theme',
    colour:   "white",
    BGcolor: '#7352FF',
  },
  {
    name: 'red-theme',
    colour:   "white",
    BGcolor: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    colour:   "white",
    BGcolor: '#1E4DB7',
  },
  {
    BGcolor: '#FB9678',
    colour:   "white",
    name: 'orange-theme',

  },
];


const ThemeSettings = () => {
  const { setThemeSettings, HeaderColorPicker,SideBarColorPicker, headColor,SideBarColour,  themeSettings, BgcurrentColor } = useStateContext();
  

// {

//     Dark:dark:bg-[#484B52]
//     dark:text-gray-200 
// }
  return (
    <div className={`   bg-[#00000063]  fixed nav-item top-0 z-10  w-screen right-0 ${themeSettings? "block":" hidden"}`}>
      <div className={`float-right h-screen  text-gray-600 bg-white shadow-2xl ${themeSettings? "w-300 opacity-100":"w-0 opacity-0"}`}>
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className={`text-2xl p-3 rounded-full hover:border-x-2 hover:border-[${BgcurrentColor}] hover:drop-shadow-2xl hover:text-gray-600  hover:bg-gray-100`}
          >
            <MdOutlineCancel />
          </button>

        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl ">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
            //   onChange={setMode}
            //   checked={currentMode === 'Light'}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
            //   onChange={setMode}
              className="cursor-pointer"
            //   checked={currentMode === 'Dark'}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>




        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className='flex mt-5 flex-col flex-between shadow p-4'>
          <small className='px-2'>  Header Color </small>
          <div className="flex gap-3">
            {HeaderColour.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.BGcolor, border: `1px solid ${item.colour }` }}
                    onClick={()=>HeaderColorPicker(item.name, item.colour, item.BGcolor)}
                    // onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`ml-2 text-2xl ${item.name==='White-theme'?'text-black':"text-white"}  ${item.name === headColor.name ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
          </div>
         


          <div className='flex mt-5 flex-col flex-between shadow p-4'>
          <small className='px-2'>  SideBar Color </small>
          <div className="flex gap-3">
            {SideColour.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.BGcolor, border:`1px solid ${item.colour }` }}
                    onClick={()=>SideBarColorPicker(item.name,item.colour, item.BGcolor)}
                    // onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                     className={`ml-2 text-2xl ${item.name==='White-theme'?'text-black':"text-white"}  ${item.name === SideBarColour.name ? 'block' : 'hidden'}`}
                     
                     />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
          </div>

          <div className='flex justify-center p-4 mt-4'>
          <button className={`bg-transparent text-[${BgcurrentColor}] 
           border-1 border-[${BgcurrentColor}] 
           hover:bg-[${BgcurrentColor}]
           font-semibold py-2 px-3 border
           hover:px-6 rounded`}>
                Save
                </button>
          </div>







        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;