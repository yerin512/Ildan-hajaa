/**
 * @SPEC: 데이터 구조 정의 (Planner 모드)
 * 이 파일은 Planner가 정의한 데이터 규약이며, Developer는 이를 기반으로 실제 API를 구현합니다.
 */

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
}

export const MOCK_TODOS: ITodo[] = [
  {
    id: '1',
    title: '아침 약 복용하기',
    completed: false,
    priority: 'high',
    dueDate: '2026-01-10',
  },
  {
    id: '2',
    title: '집중이 필요한 업무 1시간 하기',
    completed: true,
    priority: 'medium',
    dueDate: '2026-01-10',
  },
  {
    id: '3',
    title: '명상 10분',
    completed: false,
    priority: 'low',
    dueDate: '2026-01-10',
  },
];
