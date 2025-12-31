import '../Styles/TextNode.css'
import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || 'input');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)].map(match => match[1]);
    setVariables([...new Set(matches)]);
  }, [currText]);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  return (
    <BaseNode 
      id={id} 
      label="Text" 
      inputs={variables.map(v => ({ id: v }))} 
      outputs={[{ id: 'output' }]}
    >
      <textarea
        ref={textAreaRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        style={{ width: '100%', resize: 'none', overflow: 'hidden' }}
          className="w-full px-2 py-1 rounded border border-slate-300 bg-white text-black text-xs focus:outline-none resize-none"
      />
    </BaseNode>
  );
};