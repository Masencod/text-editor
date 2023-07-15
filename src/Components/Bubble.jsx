import {
    BubbleMenu, EditorContent, useEditor,
  } from '@tiptap/react'
  import clsx from 'clsx'
  
  const Bubble = ({editor}) => {
    return (
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className='bg-slate-400 rounded-lg p-5 flex gap-x-1'>
          <span
            onClick={() => {
              editor.chain().focus().toggleBold().run()
            }}
            className={clsx('p-3 cursor-pointer rounded-lg' , {
            'bg-black text-white': editor.isActive('bold'),
            'bg-white text-black': !editor.isActive('bold')
            })}>
            <strong>B</strong>
          </span>
          <span
            onClick={() => {
              editor.chain().focus().toggleItalic().run()
            }}
            className={clsx('p-3 cursor-pointer rounded-lg' , {
            'bg-black text-white': editor.isActive('italic'),
            'bg-white text-black': !editor.isActive('italic')
            })}>
              <em>i</em>
          </span>
          <span
            onClick={() => {
              editor.chain().focus().toggleStrike().run()
            }}
            className={clsx('p-3 cursor-pointer rounded-lg' , {
            'bg-black text-white': editor.isActive('strike'),
            'bg-white text-black': !editor.isActive('strike')
            })}>
            strike
          </span>
        </div>
      </BubbleMenu>

    )
  }

  export default Bubble