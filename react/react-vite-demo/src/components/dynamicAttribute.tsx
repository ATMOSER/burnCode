export default function DynamicAttribute() {
  const url = 'https://i.imgur.com/7vQD0fPs.jpg'
  const age = 10
  return (
    <>
      {/* 6.使用动态属性 */}
      <img src={ url } alt="是个男的" className="human" />
      {/* <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="是个男的"/> */}
      {/* 7.运行表达式 */}
      <span>{age > 18 ? "成年" : "未成年"}</span>
      {/* 8.编写样式 */}
      <span style={
        { color: 'red' }
      // 只是大括号语法中的对象
      }>red</span>
    </>
  )
}