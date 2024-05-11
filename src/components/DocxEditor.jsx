//вставляет текст по линиям, но не позволяет изменять
// import React from "react";
// import { Editor, EditorState, getDefaultKeyBinding, RichUtils } from "draft-js";
// import "../styles/componentsStyles/DocxEditorStyle.css";
// import mammoth from "mammoth";

// class DocxEditor extends React.Component {
 
//     constructor(props) {
//         super(props);
//         this.state = {
//             editorState: EditorState.createEmpty(),
//             docxContent: null
//         };

//         this.focus = () => this.refs.editor.focus();
       
//         this.onChange = (editorState) => this.setState({ editorState });

//         this.handleKeyCommand = this.handleKeyCommand.bind(this);
//         this.mapKeyToEditorCommand = this.mapKeyToEditorCommand.bind(this);
//         this.toggleBlockType = this.toggleBlockType.bind(this);
//         this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
//         this.handleDocxUpload = this.handleDocxUpload.bind(this);
//         this.alignLeft = this.alignLeft.bind(this);
//         this.alignRight = this.alignRight.bind(this);
//         this.alignCenter = this.alignCenter.bind(this);
//         this.alignJustify = this.alignJustify.bind(this);
//     }

//     handleKeyCommand(command, editorState) {
//         const newState = RichUtils.handleKeyCommand(editorState, command);
//         if (newState) {
//             this.onChange(newState);
//             return true;
//         }
//         return false;
//     }


//     mapKeyToEditorCommand(e) {
//         if (e.keyCode === 9 /* TAB */) {
//             const newEditorState = RichUtils.onTab(
//                 e,
//                 this.state.editorState,
//                 4 /* maxDepth */
//             );
//             if (newEditorState !== this.state.editorState) {
//                 this.onChange(newEditorState);
//             }
//             return;
//         }
//         return getDefaultKeyBinding(e);
//     }

//     toggleBlockType(blockType) {
//         this.onChange(
//             RichUtils.toggleBlockType(this.state.editorState, blockType)
//         );
//     }

//     toggleInlineStyle(inlineStyle) {
//         this.onChange(
//             RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
//         );
//     }

//     handleDocxUpload(event) {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onload = async (e) => {
//             const result = await mammoth.convertToHtml({
//                 arrayBuffer: e.target.result,
//                 styleMap: [
//                     "p[style-name='Heading 1'] => h1", // Пример стиля для заголовка
//                     "p[style-name='Heading 2'] => h2", // Пример стиля для подзаголовка
//                     // Другие стили можно добавить аналогичным образом
//                 ],
//             });
//             const docxContent = result.value || ""; // Обновляем состояние с учетом результата преобразования
//             this.setState({ docxContent });
//         };
//         reader.readAsArrayBuffer(file);
//     }

//     alignLeft() {
//         this.onChange(
//             RichUtils.toggleBlockType(this.state.editorState, "unstyled")
//         );
//     }

//     alignRight() {
//         this.onChange(
//             RichUtils.toggleBlockType(this.state.editorState, "right")
//         );
//     }

//     alignCenter() {
//         this.onChange(
//             RichUtils.toggleBlockType(this.state.editorState, "center")
//         );
//     }

//     alignJustify() {
//         this.onChange(
//             RichUtils.toggleBlockType(this.state.editorState, "justify")
//         );
//     }

//     render() {
//         const { editorState, docxContent } = this.state;

//         return (
//             <div>
//                 <input type="file" onChange={this.handleDocxUpload} />
//                 <div className="RichEditor-root">
//                     <div className="RichEditor-controls">
//                         <div>
//                             <button onClick={() => this.toggleBlockType("header-one")}>H1</button>
//                             <button onClick={() => this.toggleBlockType("header-two")}>H2</button>
//                             {/* Add buttons for other block types */}
//                         </div>
//                         <div>
//                             <button onClick={() => this.toggleInlineStyle("BOLD")}>Bold</button>
//                             <button onClick={() => this.toggleInlineStyle("ITALIC")}>Italic</button>
//                             {/* Add buttons for other inline styles */}
//                         </div>
//                         <div>
//                             <button onClick={this.alignLeft}>Align Left</button>
//                             <button onClick={this.alignCenter}>Align Center</button>
//                             <button onClick={this.alignRight}>Align Right</button>
//                             <button onClick={this.alignJustify}>Justify</button>
//                         </div>
//                     </div>
//                     <div className="RichEditor-editor" onClick={this.focus}>
//                         {docxContent ? (
//                             <div dangerouslySetInnerHTML={{ __html: docxContent }} />
//                         ) : (
//                             <Editor
//                                 editorState={editorState}
//                                 handleKeyCommand={this.handleKeyCommand}
//                                 keyBindingFn={this.mapKeyToEditorCommand}
//                                 onChange={this.onChange}
//                                 placeholder="Tell a story..."
//                                 ref="editor"
//                                 spellCheck={true}
//                             />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default DocxEditor;


// и вставлять не позволяет, и скачивать
// import React from "react";
// import { saveAs } from "file-saver";
// import { Document, Packer, Paragraph, TextRun } from "docx";
// import mammoth from "mammoth";
// import { Editor, EditorState, getDefaultKeyBinding, RichUtils } from "draft-js";
// import "../styles/componentsStyles/DocxEditorStyle.css";

// class DocxEditor extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           editorState: EditorState.createEmpty(),
//           docxContent: null
//         };
    
//         this.focus = () => this.refs.editor.focus();
    
//         this.onChange = (editorState) => this.setState({ editorState });
    
//         // Привязываем метод handleDocxUpload к контексту
//         // this.handleDocxUpload = this.handleDocxUpload.bind(this);
        
//         // // Привязываем остальные методы
//         // this.handleKeyCommand = this.handleKeyCommand.bind(this);
//         // this.mapKeyToEditorCommand = this.mapKeyToEditorCommand.bind(this);
//         // this.toggleBlockType = this.toggleBlockType.bind(this);
//         // this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
//         // this.alignLeft = this.alignLeft.bind(this);
//         // this.alignRight = this.alignRight.bind(this);
//         // this.alignCenter = this.alignCenter.bind(this);
//         // this.alignJustify = this.alignJustify.bind(this);
//       }
    
//   handleDocxUpload(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = async (e) => {
//       const result = await mammoth.convertToHtml({
//         arrayBuffer: e.target.result,
//         styleMap: [
//           "p[style-name='Heading 1'] => h1",
//           "p[style-name='Heading 2'] => h2",
//           // Добавьте другие стили, если необходимо
//         ],
//       });
//       const docxContent = result.value || "";
//       this.setState({ docxContent });
//     };
//     reader.readAsArrayBuffer(file);
//   }

//   saveDocument = () => {
//     const { docxContent } = this.state;
//     const doc = new Document({
//       sections: [
//         {
//           children: [
//             new Paragraph({
//               children: [new TextRun(docxContent)],
//             }),
//           ],
//         },
//       ],
//     });

//     Packer.toBlob(doc).then((blob) => {
//       saveAs(blob, "example.docx");
//     });
//   };

//   render() {
//     const { editorState, docxContent } = this.state;

//     return (
//       <div>
//         <input type="file" onChange={this.handleDocxUpload} />
//         <div className="RichEditor-root">
//           <div className="RichEditor-controls">
//           </div>
//           <div className="RichEditor-editor" onClick={this.focus}>
//             {docxContent ? (
//               <div dangerouslySetInnerHTML={{ __html: docxContent }} />
//             ) : (
//               <Editor
//                 editorState={editorState}
//                 onChange={this.onChange}
//                 placeholder="Tell a story..."
//                 ref="editor"
//                 spellCheck={true}
//               />)}
//           </div>
//         </div>
//         <button onClick={this.saveDocument}>Save Document</button>
//       </div>
//     );
//   }
// }

// export default DocxEditor;


// Можно изменять текст 
// import React, { useState } from 'react';
// import { saveAs } from 'file-saver';
// import JSZip from 'jszip';
// import mammoth from 'mammoth';

// function DocxEditor() {
//     const [content, setContent] = useState('');

//     const handleFileChange = async (event) => {
//         const file = event.target.files[0];
//         const arrayBuffer = await file.arrayBuffer();
//         const { value } = await mammoth.extractRawText({ arrayBuffer });
//         setContent(value);
//     };

//     const handleSave = async () => {
//         const updatedContent = document.getElementById('docContent').innerHTML;
//         const { value } = await mammoth.convertToHtml({ value: updatedContent });
//         const blob = new Blob([value], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
//         saveAs(blob, 'edited_document.docx');
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} accept=".docx" />
//             <div id="docContent" contentEditable={true} dangerouslySetInnerHTML={{ __html: content }} />
//             <button onClick={handleSave}>Save</button>
//         </div>
//     );
// }

// export default DocxEditor;

//наполовину рабочий варик
// import React, { useState, useEffect } from 'react';
// import { saveAs } from 'file-saver';
// import mammoth from 'mammoth';
// import { Document, Packer, Paragraph, TextRun } from 'docx';

// function DocxEditor() {
//     const [content, setContent] = useState('');
//     const [docxContent, setDocxContent] = useState([]);

//     useEffect(() => {
//         setDocxContent([
//             new Paragraph({
//                 children: [
//                     new TextRun({ text: content }),
//                 ],
//             }),
//         ]);
//     }, [content]);

//     const handleFileChange = async (event) => {
//         const file = event.target.files[0];
//         const text = await readDocxFile(file);
//         setContent(text);
//     };

//     const readDocxFile = (file) => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 const arrayBuffer = event.target.result;
//                 mammoth.extractRawText({ arrayBuffer })
//                     .then((result) => resolve(result.value))
//                     .catch(reject);
//             };
//             reader.onerror = reject;
//             reader.readAsArrayBuffer(file);
//         });
//     };

//     const saveDocument = () => {
//         const doc = new Document({
//             sections: [{ children: docxContent }],
//         });

        // Packer.toBlob(doc).then((blob) => {
        //     saveAs(blob, 'example.docx');
        // });
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} accept=".docx" />
//             <textarea value={content} onChange={(event) => setContent(event.target.value)} />
//             <button onClick={saveDocument}>Save</button>
//         </div>
//     );
// }

// export default DocxEditor;

// import React, { useState, useRef, useEffect } from "react";
// import { Editor, EditorState, RichUtils } from "draft-js";
// import "../styles/componentsStyles/DocxEditorStyle.css";
// import mammoth from "mammoth";
// import { convertFromHTML, ContentState, convertToRaw } from "draft-js";
// import { stateToHTML } from "draft-js-export-html";


// function DocxEditor() {
//     const [editorState, setEditorState] = useState(EditorState.createEmpty());
//     const [docxContent, setDocxContent] = useState(null);
//     const editorRef = useRef(null);

//     const focusEditor = () => editorRef.current.focus();

//     const onChange = (newEditorState) => {
//         setEditorState(newEditorState);
//     };

//     const handleKeyCommand = (command) => {
//         const newState = RichUtils.handleKeyCommand(editorState, command);
//         if (newState) {
//             onChange(newState);
//             return true;
//         }
//         return false;
//     };

//     const handleTab = (e) => {
//         const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
//         if (newEditorState !== editorState) {
//             onChange(newEditorState);
//         }
//     };

//     const handleDocxUpload = (event) => {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onload = async (e) => {
//             const result = await mammoth.convertToHtml({
//                 arrayBuffer: e.target.result,
//                 styleMap: [
//                     "p[style-name='Heading 1'] => h1",
//                     "p[style-name='Heading 2'] => h2",
//                 ],
//             });
//             const content = result.value || "";
//             const formattedContent = applyStyles(content); // Применяем стили к контенту
//             setDocxContent(formattedContent);
//         };
//         reader.readAsArrayBuffer(file);
//     };

//     const applyStyles = (content) => {
//         const wrapper = document.createElement("div");
//         wrapper.innerHTML = content;

//         // Пример: применяем класс "paragraph-style" к каждому абзацу
//         const paragraphs = wrapper.querySelectorAll("p");
//         paragraphs.forEach((paragraph) => {
//             paragraph.classList.add("paragraph-style");
//         });

//         return wrapper.innerHTML;
//     };
    
//     function toggleBlockType(blockType) {
//        onChange(
//             RichUtils.toggleBlockType(this.state.editorState, blockType)
//         );
//     }

//     function toggleInlineStyle(inlineStyle) {
//        onChange(
//             RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
//         );
//     }

//     useEffect(() => {
//         if (docxContent) {
//             const blocksFromHTML = convertFromHTML(docxContent);
//             const contentState = ContentState.createFromBlockArray(
//                 blocksFromHTML.contentBlocks,
//                 blocksFromHTML.entityMap
//             );
//             setEditorState(EditorState.createWithContent(contentState));
//         }
//     }, [docxContent]);

//     const convertToDocx = () => {
//         const contentState = editorState.getCurrentContent();
//         const rawContentState = convertToRaw(contentState);
//         const html = stateToHTML(contentState);
//         console.log("HTML:", html);

//         // Далее вы можете использовать полученный HTML для сохранения в DOCX или другом формате
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleDocxUpload} />
//             <div className="RichEditor-root">
//                 <div className="RichEditor-controls">
//                     <div>
//                         <button onClick={() => toggleBlockType("header-one")}>H1</button>
//                         <button onClick={() => toggleBlockType("header-two")}>H2</button>
//                     </div>
//                     <div>
//                         <button onClick={() => toggleInlineStyle("BOLD")}>Bold</button>
//                         <button onClick={() => toggleInlineStyle("ITALIC")}>Italic</button>
//                     </div>
//                 </div>
//                 <div className="RichEditor-editor" onClick={focusEditor}>
//                     {docxContent ? (
//                         <div dangerouslySetInnerHTML={{ __html: docxContent }} />
//                     ) : (
//                         <Editor
//                             editorState={editorState}
//                             handleKeyCommand={handleKeyCommand}
//                             onChange={onChange}
//                             placeholder="Tell a story..."
//                             ref={editorRef}
//                             spellCheck={true}
//                             onKeyDown={(e) => {
//                                 if (e.keyCode === 9 /* TAB */) {
//                                     e.preventDefault();
//                                     handleTab(e);
//                                 }
//                             }}
//                         />
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DocxEditor;

// import React, { useState, useEffect } from 'react';
// import { saveAs } from 'file-saver';
// import mammoth from 'mammoth';
// import { Document, Packer, Paragraph, TextRun } from 'docx';

// function DocxEditor() {
//     const [content, setContent] = useState('');
//     const [docxContent, setDocxContent] = useState([]);
//     const [selectedAlignment, setSelectedAlignment] = useState('left'); // По умолчанию выравнивание по левому краю

//     useEffect(() => {
//         setDocxContent([
//             new Paragraph({
//                 children: [
//                     new TextRun({ text: content }),
//                 ],
//             }),
//         ]);
//     }, [content]);

//     const handleFileChange = async (event) => {
//         const file = event.target.files[0];
//         const text = await readDocxFile(file);
//         setContent(text);
//     };

//     const readDocxFile = (file) => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 const arrayBuffer = event.target.result;
//                 mammoth.extractRawText({ arrayBuffer })
//                     .then((result) => resolve(result.value))
//                     .catch(reject);
//             };
//             reader.onerror = reject;
//             reader.readAsArrayBuffer(file);
//         });
//     };

//     const saveDocument = () => {
//         const doc = new Document({
//             sections: [{ children: docxContent }],
//         });

//         Packer.toBlob(doc).then((blob) => {
//             saveAs(blob, 'example.docx');
//         });
//     };

//     const formatDocument = () => {
//         const paragraphs = content.split("\n");

//         // Создайте массив объектов Paragraph для хранения отформатированных абзацев
//         const formattedParagraphs = [];
    
//         // Пройдитесь по каждому абзацу и создайте объекты Paragraph с соответствующим выравниванием
//         paragraphs.forEach((paragraph) => {
//             let alignment = "left"; // По умолчанию выравнивание по левому краю
    
//             // Измените alignment в соответствии с выбранным пользователем выравниванием
//             switch (selectedAlignment) {
//                 case "left":
//                     alignment = "left";
//                     break;
//                 case "right":
//                     alignment = "right";
//                     break;
//                 case "center":
//                     alignment = "center";
//                     break;
//                 case "justify":
//                     alignment = "justify";
//                     break;
//                 default:
//                     alignment = "left"; // По умолчанию выравнивание по левому краю
//             }
    
//             // Создайте объект Paragraph с соответствующим выравниванием
//             const formattedParagraph = new Paragraph({
//                 alignment: alignment,
//                 children: [
//                     new TextRun({ text: paragraph }),
//                 ],
//             });
    
//             // Добавьте отформатированный абзац в массив formattedParagraphs
//             formattedParagraphs.push(formattedParagraph);
//         });
    
//         // Установите отформатированные абзацы в состояние docxContent
//         setDocxContent(formattedParagraphs);
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} accept=".docx" />
//             <div
//                 style={{
//                     border: '1px solid black',
//                     padding: '10px',
//                     minHeight: '100px',
//                     width: '500px',
//                     textAlign: selectedAlignment,
//                     fontFamily: 'Arial', // Пример шрифта
//                     fontSize: '14px', // Пример размера текста
//                     fontStyle: 'italic', // Пример стиля текста
//                     fontWeight: 'bold', // Пример стиля текста
//                 }}
//                 contentEditable={true}
//                 dangerouslySetInnerHTML={{ __html: content }}
//             ></div>
//             <button onClick={() => setSelectedAlignment('left')}>Left Align</button>
//             <button onClick={() => setSelectedAlignment('center')}>Center Align</button>
//             <button onClick={() => setSelectedAlignment('right')}>Right Align</button>
//             <button onClick={() => setSelectedAlignment('justify')}>Justify Align</button>
//             <button onClick={formatDocument}>Format</button>
//             <button onClick={saveDocument}>Save</button>
//         </div>
//     );
// }

// export default DocxEditor;







//сохраняет текст 
// import React, { useState } from 'react';
// import { saveAs } from 'file-saver';
// import { Document, Packer, Paragraph, TextRun } from 'docx';

// const DocxEditor = () => {
//   const [docxContent, setDocxContent] = useState([]);
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const createDocument = () => {
//     // Создание содержимого документа
//     const content = [
//       new Paragraph({
//         children: [
//           new TextRun({ text: inputText, bold: true }),
//         ],
//       }),
//     ];
//     setDocxContent(content);
//   };

//   const saveDocument = () => {
//     const doc = new Document({
//       sections: [{ children: docxContent }],
//     });

//     Packer.toBlob(doc).then((blob) => {
//       saveAs(blob, 'example.docx');
//     });
//   };

//   return (
//     <div>
//       <textarea value={inputText} onChange={handleInputChange} />
//       <button onClick={createDocument}>Create Document</button>
//       <button onClick={saveDocument}>Save Document</button>
//     </div>
//   );
// };

// export default DocxEditor;


//Есть кнопки для сохранения документа, но сохраняет плохо, плохо из html в docx конвертируется и не позволяет изменять
// import React from "react";
// import { saveAs } from "file-saver";
// import { Document, Packer, Paragraph, TextRun } from "docx";
// import mammoth from "mammoth";
// import { Editor, EditorState, getDefaultKeyBinding, RichUtils } from "draft-js";
// import "../styles/componentsStyles/DocxEditorStyle.css";

// class DocxEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty(),
//       docxContent: null
//     };

//     this.focus = () => this.refs.editor.focus();

//     this.onChange = (editorState) => this.setState({ editorState });

//     // Привязываем методы к контексту
//     this.handleDocxUpload = this.handleDocxUpload.bind(this);
//     this.saveDocument = this.saveDocument.bind(this);
//     this.insertDocxContent = this.insertDocxContent.bind(this);
//     this.clearDocxContent = this.clearDocxContent.bind(this);
//   }

//   handleDocxUpload(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = async (e) => {
//       const result = await mammoth.convertToHtml({
//         arrayBuffer: e.target.result,
//         styleMap: [
//           "p[style-name='Heading 1'] => h1",
//           "p[style-name='Heading 2'] => h2",
//           // Добавьте другие стили, если необходимо
//         ],
//       });
//       const docxContent = result.value || "";
//       this.setState({ docxContent });
//     };
//     reader.readAsArrayBuffer(file);
//   }

//   saveDocument() {
//     const { docxContent } = this.state;
//     if (docxContent) {
//       const doc = new Document({
//         sections: [
//           {
//             children: [
//               new Paragraph({
//                 children: [new TextRun(docxContent)],
//               }),
//             ],
//           },
//         ],
//       });

//       Packer.toBlob(doc).then((blob) => {
//         saveAs(blob, "example.docx");
//       });
//     }
//   }

//   insertDocxContent() {
//     const { editorState, docxContent } = this.state;
//     if (docxContent) {
//       const contentState = editorState.getCurrentContent();
//       const contentStateWithDocx = contentState.createWithText(docxContent);
//       const newEditorState = EditorState.push(
//         editorState,
//         contentStateWithDocx,
//         "insert-characters"
//       );
//       this.setState({ editorState: newEditorState });
//     }
//   }

//   clearDocxContent() {
//     this.setState({ docxContent: null });
//   }

//   render() {
//     const { editorState, docxContent } = this.state;

//     return (
//       <div>
//         <input type="file" onChange={this.handleDocxUpload} />
//         <div className="RichEditor-root">
//           <div className="RichEditor-controls">
//             {/* Кнопки управления редактором */}
//             <button onClick={this.insertDocxContent}>Insert Docx Content</button>
//             <button onClick={this.saveDocument}>Save Document</button>
//             <button onClick={this.clearDocxContent}>Clear Docx Content</button>
//           </div>
//           <div className="RichEditor-editor" onClick={this.focus}>
//             {docxContent ? (
//               <div dangerouslySetInnerHTML={{ __html: docxContent }} />
//             ) : (
//               <Editor
//                 editorState={editorState}
//                 onChange={this.onChange}
//                 placeholder="Tell a story..."
//                 ref="editor"
//                 spellCheck={true}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default DocxEditor;


//Есть кнопки для сохранения документа, но сохраняет плохо, плохо из html в docx конвертируется и не позволяет изменять
// import React from "react";
// import { saveAs } from "file-saver";
// import { Document, Packer, Paragraph, TextRun } from "docx";
// import mammoth from "mammoth";
// import { Editor, EditorState, getDefaultKeyBinding, RichUtils } from "draft-js";
// import "../styles/componentsStyles/DocxEditorStyle.css";

// class DocxEditor extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           editorState: EditorState.createEmpty(),
//           docxContent: null
//         };
    
//         this.editorRef = React.createRef(); // Создаем ссылку на редактор
    
//         // Привязываем методы к контексту
//         this.handleDocxUpload = this.handleDocxUpload.bind(this);
//         this.saveDocument = this.saveDocument.bind(this);
//         this.insertDocxContent = this.insertDocxContent.bind(this);
//         this.clearDocxContent = this.clearDocxContent.bind(this);
//       }
    
//       onChange(editorState) {
//         this.setState({ editorState });
//       }

//   handleDocxUpload(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = async (e) => {
//       const result = await mammoth.convertToHtml({
//         arrayBuffer: e.target.result,
//         styleMap: [
//           "p[style-name='Heading 1'] => h1",
//           "p[style-name='Heading 2'] => h2",
//           // Добавьте другие стили, если необходимо
//         ],
//       });
//       const docxContent = result.value || "";
//       this.setState({ docxContent });
//     };
//     reader.readAsArrayBuffer(file);
//   }

//   saveDocument() {
//     const { docxContent } = this.state;
//     if (docxContent) {
//       const doc = new Document({
//         sections: [
//           {
//             children: [
//               new Paragraph({
//                 children: [new TextRun(docxContent)],
//               }),
//             ],
//           },
//         ],
//       });

//       Packer.toBlob(doc).then((blob) => {
//         saveAs(blob, "example.docx");
//       });
//     }
//   }

//   insertDocxContent() {
//     const { editorState, docxContent } = this.state;
//     if (docxContent) {
//       const contentState = editorState.getCurrentContent();
//       const contentStateWithDocx = contentState.createWithText(docxContent);
//       const newEditorState = EditorState.push(
//         editorState,
//         contentStateWithDocx,
//         "insert-characters"
//       );
//       this.setState({ editorState: newEditorState });
//     }
//   }

//   clearDocxContent() {
//     this.setState({ docxContent: null });
//   }

//   render() {
//     const { editorState, docxContent } = this.state;

//     return (
//       <div>
//         <input type="file" onChange={this.handleDocxUpload} />
//         <div className="RichEditor-root">
//           <div className="RichEditor-controls">
//             {/* Кнопки управления редактором */}
//             <button onClick={this.insertDocxContent}>Insert Docx Content</button>
//             <button onClick={this.saveDocument}>Save Document</button>
//             <button onClick={this.clearDocxContent}>Clear Docx Content</button>
//           </div>
//           <div className="RichEditor-editor" onClick={() => this.editorRef.current && this.editorRef.current.focus()}>
//             {docxContent ? (
//               <div dangerouslySetInnerHTML={{ __html: docxContent }} />
//             ) : (
//               <Editor
//                 editorState={editorState}
//                 onChange={this.onChange}
//                 placeholder="Tell a story..."
//                 ref={this.editorRef} 
//                 spellCheck={true}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default DocxEditor;





