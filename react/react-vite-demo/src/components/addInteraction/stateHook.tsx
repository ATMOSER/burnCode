import { useState } from "react"
import { useImmer } from "use-immer";

export default function StateHook() {
  // 使用x接收初始值, setX用于改变x
  const [x, setX] = useState('xcx')
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [info, setInfo] = useState({
    hobby: 'jump',
    name: 'xcx',
    age: 22
  })
  const [infos, setInfo2] = useImmer({
    hobby: 'jump',
    name: 'xcx',
    age: 22
  })
  return (
    <>
      <div onClick={() => setX(() => x + 1)}>{x}</div>
      {/* 补充:  */}
      <div onClick={() => {
        // 只生效一次
        setX(x + 1)
        setX(x + 1)
        // 根据上一个队列中的值渲染下一个值
        setX(x => x + 1)
        setX(x => x + 1)
      }}>+11
        {/* 17.更新对象 */}
        <div onPointerMove={e => {
          setPosition({
            x: e.clientX,
            y: e.clientY
          })
        }}
          style={{
            height: '200px',
            widows: '200px',
            backgroundColor: 'blue'
          }}
        >
          <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }} />
        </div>
        {/* 18.使用剩余运算符修改数据 */}
        <div>姓名:{ info.name }</div>
        <div>年龄: { info.age }</div>
        <button onClick={() => setInfo({
          ...info,
          age: 21,
        })}>changeMyAge</button>
        {/* 19.使用immer修改对象 */}
        <div>姓名2:{ infos.name }</div>
        <div>年龄2: {infos.age}</div>
        <button onClick={() => setInfo2(infos => {
          infos.name = 'atmoser'
        })}>change my name</button>
      </div>
    </>
  )
}