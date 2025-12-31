import { DraggableNode } from './DraggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="p-5 bg-[#0f172a] border-b border-slate-800 shadow-xl z-10">
      <div className="flex flex-wrap gap-4 justify-center">
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='note' label='Note' />
        <DraggableNode type='logic' label='Logic' />
        <DraggableNode type='database' label='Database' />
        <DraggableNode type='auth' label='Auth' />
        <DraggableNode type='slack' label='Slack' />
      </div>
    </div>
  );
};