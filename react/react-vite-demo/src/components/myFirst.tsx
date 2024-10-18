// 1*-*1导出: 默认导出
export default function MyFirst() {
  return (
    // 2.不在同一行显示
    <>
      <h1>我的第一个组件</h1>
    </>
  )
}
// 具名导出 
export function MyFirst2() {
  // 3.同一行, 不在同一行的话不加括号, 下一行会被忽略
  return <h1>我的第一个组件</h1>
}