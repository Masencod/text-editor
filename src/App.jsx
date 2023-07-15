import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import Tiptap from './Components/TipTap'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-5 h-full items-center flex justify-center'>
      <RecoilRoot>
        <div className="b">
          <Tiptap />
        </div>
      </RecoilRoot>
    </div>
  )
}

export default App
