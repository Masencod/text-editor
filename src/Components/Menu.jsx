import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import clsx from 'clsx'


const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-wrap gap-2'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-500',{
            'bg-black text-white': editor.isActive('bold'),
            'bg-white text-black': !editor.isActive('bold')
        })}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-500',{
            'bg-black text-white': editor.isActive('italic'),
            'bg-white text-black': !editor.isActive('italic')
        })}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-500',{
            'bg-black text-white': editor.isActive('strike'),
            'bg-white text-black': !editor.isActive('strike')
        })}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-500 bg-white text-black')}
        >
        code
      </button>
      <button 
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-500 bg-white text-black',{
            'bg-black text-white': editor.isActive('bold'),
            'bg-white text-black': !editor.isActive('bold')
        })}
        onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out bg-white text-black hover:bg-gray-500')}
        onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-500',{
            'bg-black text-white': editor.isActive('paragraph'),
            'bg-white text-black': !editor.isActive('paragraph')
        })}
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-500',{
            'bg-black text-white': editor.isActive('bulletlist'),
            'bg-white text-black': !editor.isActive('bulletlist')
        })}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-500',{
            'bg-black text-white': editor.isActive('orderlist'),
            'bg-white text-black': !editor.isActive('orderlist')
        })}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-500',{
            'bg-black text-white': editor.isActive('codeBlock'),
            'bg-white text-black': !editor.isActive('codeBlock')
        })}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
        className={clsx('p-2 rounded-xl transition-all duration-200 bg-white text-black ease-in-out hover:bg-gray-500')}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={clsx('p-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-500',{
            'bg-black text-white': editor.isActive('textStyle', { color: '#958DF1' }),
            'bg-white text-black': !editor.isActive('textStyle', { color: '#958DF1' })
        })}
      >
        purple
      </button>
    </div>
  )
}
export default MenuBar