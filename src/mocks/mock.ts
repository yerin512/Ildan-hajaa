export interface ITemplate {
  id: string;
  title: string;
  emoji: string;
  defaultMinutes: number;
}

export const MOCK_TEMPLATES: ITemplate[] = [
  { id: '1', title: '외출 준비', emoji: '👟', defaultMinutes: 30 },
  { id: '2', title: '독서', emoji: '📚', defaultMinutes: 25 },
  { id: '3', title: '운동', emoji: '💪', defaultMinutes: 40 },
  { id: '4', title: '책상 정리', emoji: '🧹', defaultMinutes: 10 },
];
