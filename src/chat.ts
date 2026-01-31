// types.ts

export type ChatStatus = 
  | 'idle' 
  | 'typing' 
  | 'streaming_text' 
  | 'streaming_audio' 
  | 'tool_execution' 
  | 'error';

export type ParticipantRole = 'user' | 'assistant' | 'system';

export interface Participant {
  id: string;
  role: ParticipantRole;
  name: string;
  avatarUrl?: string;
}

export interface AudioMetadata {
  voiceId: string;
  durationMs?: number;
  mimeType: string;
  chunkIndex: number;
  isFinal: boolean;
}

export interface ToolCallPayload {
  toolName: string;
  toolId: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  args?: Record<string, any>;
}

export interface ChatMessage {
  id: string;
  participantId: string;
  content: string;
  timestamp: Date;
  status: 'sending' | 'sent' | 'delivered' | 'read' | 'failed';
  
  // Context Awareness
  toolCall?: ToolCallPayload;
  
  // Accessibility
  ariaLiveRegion?: 'polite' | 'assertive' | 'off';
  accessibilityLabel?: string; // e.g., "Dr. AI is typing..."
}

export interface StreamSettings {
  latencyOptimization: 0 | 1 | 2 | 3 | 4; // ElevenLabs scale
  stability: number;
  similarityBoost: number;
  modelId: 'eleven_flash_v2_5' | 'eleven_turbo_v2';
}

export interface ChatState {
  status: ChatStatus;
  messages: ChatMessage[];
  activeTool: ToolCallPayload | null;
  isAudioPlaying: boolean;
  error: Error | null;
}