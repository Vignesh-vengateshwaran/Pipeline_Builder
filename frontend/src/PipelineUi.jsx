import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { shallow } from 'zustand/shallow';
import { useStore } from './store';
import { InputNode } from './nodes/InputNode';
import { LLMNode } from './nodes/LLMNode';
import { OutputNode } from './nodes/OutputNode';
import { TextNode } from './nodes/TextNode';
import { NoteNode, LogicNode, DatabaseNode, AuthNode, SlackNode } from './nodes/NewNodes';

import 'reactflow/dist/style.css';
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  note: NoteNode,
  logic: LogicNode,
  database: DatabaseNode,
  auth: AuthNode,
  slack: SlackNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            if (typeof type === 'undefined' || !type) return;
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: { id: nodeID, nodeType: `${type}` },
            };
      
            addNode(newNode);
          }
        },
        [reactFlowInstance, addNode, getNodeID]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <div ref={reactFlowWrapper} className="w-full h-full bg-[#020617]">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                snapGrid={[20, 20]}
                connectionLineType='smoothstep'
                connectionLineStyle={{ stroke: '#7c3aed', strokeWidth: 2 }}
                defaultEdgeOptions={{
                    style: { stroke: '#7c3aed', strokeWidth: 2 },
                    animated: true,
                }}
            >
                <Background color="#334155" gap={25} variant="dots" />
                <Controls 
                    className="bg-slate-900 border-slate-700 fill-purple-500 stroke-purple-500 
                               [&>button]:border-slate-700 [&>button]:bg-slate-900 
                               [&>button]:hover:bg-slate-800 [&>button]:transition-colors" 
                />
                <MiniMap
                    className="bg-[#0f172a] border border-slate-700 rounded-lg shadow-2xl"
                    nodeColor="#7c3aed"
                    maskColor="rgba(0, 0, 0, 0.7)"
                    style={{
                        backgroundColor: '#0f172a',
                    }}
                />
            </ReactFlow>
        </div>
    );
};