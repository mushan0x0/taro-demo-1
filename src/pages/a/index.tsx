import { View,ShareElement } from '@tarojs/components'
import { useCallback } from 'react'
import Taro from '@tarojs/taro'
import styles from './index.module.less'

const PageA: React.FC = () => {
  const handleFrame = useCallback((data: { progress: number }) => {
    console.info('@@@ A 页 onFrame 触发 progress: ', data.progress)
  }, [])

  const jump = useCallback(() => {
    Taro.navigateTo({
      url: '/pages/b/index'
    })
  }, [])

  return (
    <View className={styles.container}>
      <View>当前为页面 a</View>
      <View>push 阶段：飞跃物为黄色块 (a 页 share-element）</View>
      <View>pop 阶段：飞跃物为蓝色块 (b 页 share-element）</View>
      <ShareElement
        className={styles.boxWrp}
        mapkey='box'
        transitionOnGesture
        // @ts-ignore
        onFrameWorklet={handleFrame} // Taro 不生效
        shuttleOnPop='from'
      >
        <View className={styles.box} onClick={jump}>
          tap me
        </View>
      </ShareElement>
    </View>
  )
}

export default PageA
