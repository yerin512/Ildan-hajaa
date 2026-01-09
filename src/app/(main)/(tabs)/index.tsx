import { ITemplate, MOCK_TEMPLATES } from '@/mocks/mock';
import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * @SPEC: 메인 타이머 초기 화면 (Designer/Developer 모드)
 * 사용자가 제공한 레퍼런스 이미지와 #88Ab8E (Sage Green) 컬러를 조화롭게 구성합니다.
 */

const MAIN_COLOR = '#88Ab8E';
const BG_DARK = '#1C1C1E';

export default function HomeScreen() {
  const [selectedTemplate, setSelectedTemplate] = useState<ITemplate>(MOCK_TEMPLATES[0]);

  return (
    <SafeAreaView style={styles.container}>
      {/* 배경 장식 (은은한 그라데이션 효과용) */}
      <View style={styles.bg_accent} />

      <View style={styles.main_content}>
        <View style={styles.header}>
          <Text style={styles.header__label}>지금 바로 시작할까요?</Text>
          <Text style={styles.header__title}>{selectedTemplate.title}</Text>
        </View>

        {/* 중앙 시작 버튼 섹션 */}
        <View style={styles.start_section}>
          <TouchableOpacity style={styles.start_button} activeOpacity={0.8}>
            <View style={styles.start_button__glow} />
            <Text style={styles.start_button__text}>
              {selectedTemplate.defaultMinutes}분 시작!
            </Text>
          </TouchableOpacity>
          <Text style={styles.start_section__hint}>원형 게이지를 탭하여 시간을 조절하세요</Text>
        </View>
      </View>

      {/* 하단 템플릿 선택 섹션 */}
      <View style={styles.footer}>
        <Text style={styles.footer__label}>다음에 할 일 미리 보기</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.template_list}
        >
          {MOCK_TEMPLATES.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.template_card,
                selectedTemplate.id === item.id && styles['template_card--active']
              ]}
              onPress={() => setSelectedTemplate(item)}
            >
              <Text style={styles.template_card__emoji}>{item.emoji}</Text>
              <Text style={[
                styles.template_card__text,
                selectedTemplate.id === item.id && styles['template_card__text--active']
              ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_DARK,
  },
  bg_accent: {
    position: 'absolute',
    top: -100,
    alignSelf: 'center',
    width: 300,
    height: 300,
    backgroundColor: MAIN_COLOR,
    opacity: 0.1,
    borderRadius: 150,
    ...Platform.select({
      ios: { shadowColor: MAIN_COLOR, shadowRadius: 100, shadowOpacity: 0.5 },
      android: { elevation: 20 },
    }),
  },
  main_content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  header__label: {
    fontSize: 16,
    color: '#8E8E93',
    marginBottom: 8,
    fontWeight: '500',
  },
  header__title: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  start_section: {
    alignItems: 'center',
  },
  start_button: {
    width: 280,
    height: 80,
    backgroundColor: MAIN_COLOR,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: MAIN_COLOR,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 8,
  },
  start_button__glow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    opacity: 0.1,
  },
  start_button__text: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  start_section__hint: {
    marginTop: 24,
    color: '#636366',
    fontSize: 14,
  },
  footer: {
    paddingVertical: 32,
    backgroundColor: 'rgba(28, 28, 30, 0.8)',
  },
  footer__label: {
    paddingHorizontal: 24,
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 16,
    fontWeight: '600',
  },
  template_list: {
    paddingHorizontal: 16,
    gap: 12,
  },
  template_card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  'template_card--active': {
    backgroundColor: 'rgba(136, 171, 142, 0.15)',
    borderColor: MAIN_COLOR,
  },
  template_card__emoji: {
    fontSize: 20,
    marginRight: 10,
  },
  template_card__text: {
    fontSize: 16,
    color: '#E5E5E7',
    fontWeight: '500',
  },
  'template_card__text--active': {
    color: MAIN_COLOR,
    fontWeight: '700',
  },
});
