import { FC } from 'react';
import { Editor } from '@tiptap/react';
import DropdownOptions from '@/components/common/DropdownOptions';
import { AiFillCaretDown } from 'react-icons/ai';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { BsBraces, BsCode, BsImageFill, BsLink45Deg, BsListOl, BsListUl, BsTypeBold, BsTypeItalic, BsTypeStrikethrough, BsTypeUnderline, BsYoutube } from 'react-icons/bs';
import { getFocusedEditor } from '../EditorUtils';
import Button from './Button';

interface Props {
    editor: Editor | null;
}

const ToolBar: FC<Props> = ({ editor }): JSX.Element | null => {
    if (!editor) return null;

    const options = [
        { label: "Paragraph", onClick: () => getFocusedEditor(editor).setParagraph().run() },
        { label: "Heading 1", onClick: () => getFocusedEditor(editor).toggleHeading({ level: 1 }).run() },
        { label: "Heading 2", onClick: () => getFocusedEditor(editor).toggleHeading({ level: 2 }).run() },
        { label: "Heading 3", onClick: () => getFocusedEditor(editor).toggleHeading({ level: 3 }).run() },
    ]

    const getLabel = (): string => {
        if (editor.isActive("heading", { level: 1 })) return "Heading 1";
        if (editor.isActive("heading", { level: 1 })) return "Heading 2";
        if (editor.isActive("heading", { level: 1 })) return "Heading 3";

        return "Paragraph";
    }

    const Head = () => {
        return (
            <div className="flex items-center space-x-2 text-primary-dark dark:text-primary">
                <p>{getLabel()}</p>
                <AiFillCaretDown />
            </div>
        )
    }
    return (
        <div className='flex items-center'>
            <DropdownOptions
                options={options}
                head={<Head />}
            />
            <div className="h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8" />
            <div className="flex items-center space-x-3">
                <Button>
                    <BsTypeBold />
                </Button>
                <Button>
                    <BsTypeItalic />
                </Button>
                <Button>
                    <BsTypeUnderline />
                </Button>
                <Button>
                    <BsTypeStrikethrough />
                </Button>
            </div>
            <div className="h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8" />
            <div className="flex items-center space-x-3">
                <Button>
                    <RiDoubleQuotesL />
                </Button>
                <Button>
                    <BsCode />
                </Button>
                <Button>
                    <BsBraces />
                </Button>
                <Button>
                    <BsLink45Deg />
                </Button>
                <Button>
                    <BsListOl />
                </Button>
                <Button>
                    <BsListUl />
                </Button>
            </div>
            <div className="h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8" />
            <div className="flex items-center space-x-3">
                <Button>
                    <BsYoutube />
                </Button>
                <Button>
                    <BsImageFill />
                </Button>
            </div>
        </div>
    )
};

export default ToolBar;