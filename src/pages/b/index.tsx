import { View, ShareElement } from '@tarojs/components'
import { useCallback } from 'react'
import Taro from '@tarojs/taro'
import styles from './index.module.less'

const PageB: React.FC = () => {
  const handleFrame = useCallback((data: { progress: number }) => {
    console.info('@@@ B 页 onFrame 触发 progress: ', data.progress)
  }, [])

  const jump = useCallback(() => {
    Taro.navigateBack()
  }, [])

  return (
    <View className={styles.container}>
      <View>当前为页面 b</View>
      <View>push 阶段：飞跃物为黄色块 (a 页 share-element）</View>
      <View>pop 阶段：飞跃物为蓝色块 (b 页 share-element）</View>
      <ShareElement
        className={styles.boxWrp}
        mapkey='box'
        transitionOnGesture
        // @ts-ignore
        onFrameWorklet={handleFrame} // Taro 不生效
        shuttleOnPush='from'
      >
        <View className={styles.box} onClick={jump}>
          tap me
        </View>
      </ShareElement>
    </View>
  )
}

export default PageB
