// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="cursor-grab min-w-[80px] px-4 py-2 rounded-md border border-purple-500/30 
                 bg-[#1e293b] text-purple-400 text-xs font-bold uppercase tracking-wider
                 flex items-center justify-center transition-all duration-300
                 hover:border-purple-500 hover:bg-purple-500/10 
                 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] 
                 active:cursor-grabbing active:scale-95"
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
    >
      {label}
    </div>
  );
};