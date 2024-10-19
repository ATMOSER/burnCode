export default function ConditionalRendering(
    { age, today, hasMsg }:
    {
      age: number, today: number, hasMsg: string
    })
{
  // 11.1使用变量存储执行条件的结果
  const conValue = age > 18 ?
  (
    <span style={{color: 'green'}}>成年</span>
  ) :
  (
    <span style={{color: 'red'}}>未成年</span>
    ) 
  return (
    <>
      {conValue}
      <br />
      {/* 11.2 直接使用条件表达式 */}
      {
        today === 7 ? 
          (
            <span>放假</span>
          ) :
          (
            <span>上班</span>
          )
      }
      {/* 11.3 使用&简化条件 */}
      {hasMsg && (
        <span>{ hasMsg }</span>
      )}
    </>
  )
}