import { ITodo, MOCK_TODOS } from '@/mocks/mock';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * @SPEC: 앱 초기 프로토타입 (Planner 모드)
 * BEM 명명 규칙을 스타일링에 적용합니다.
 */

export default function PrototypeScreen() {
  const renderItem = ({ item }: { item: ITodo }) => (
    <View style={styles.todo_item}>
      <View style={styles.todo_item__content}>
        <Text style={[
          styles.todo_item__title,
          item.completed && styles['todo_item__title--completed']
        ]}>
          {item.title}
        </Text>
        <Text style={styles.todo_item__badge}>
          {item.priority.toUpperCase()}
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.todo_item__checkbox,
          item.completed && styles['todo_item__checkbox--checked']
        ]}
      >
        {/* 체크박스 UI */}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header__title}>ADHD Planner</Text>
        <Text style={styles.header__subtitle}>오늘의 집중 미션</Text>
      </View>

      <FlatList
        data={MOCK_TODOS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.todo_list}
      />

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fab__icon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  header__title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
  },
  header__subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  todo_list: {
    padding: 16,
  },
  todo_item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  todo_item__content: {
    flex: 1,
  },
  todo_item__title: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  'todo_item__title--completed': {
    textDecorationLine: 'line-through',
    color: '#AAAAAA',
  },
  todo_item__badge: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 4,
  },
  todo_item__checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginLeft: 12,
  },
  'todo_item__checkbox--checked': {
    backgroundColor: '#007AFF',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 40,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fab__icon: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
