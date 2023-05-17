import { Editor } from '@tiptap/react';

export const getFocusedEditor = (editor: Editor) => {
    return editor.chain().focus();
};

export const validateUrl = (url: string) => {
    // undefined면 안되게
    if (!url.trim()) return '';

    let finalUrl;

    try {
        finalUrl = new URL(url);
    } catch (error) {
        finalUrl = new URL('http://' + url);
    }

    return finalUrl.origin;
};
