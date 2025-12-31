import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => (
  <BaseNode id={id} label="LLM" inputs={[{ id: 'system' }, { id: 'prompt' }]} outputs={[{ id: 'response' }]}>
    <div style={{ fontSize: '11px' }}>
      This is an LLM node.
      </div>
  </BaseNode>
);