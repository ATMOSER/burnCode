export default function ResponseEvent({ msg }: { msg: string }) {
  console.log('====================================');
  console.log(msg);
  console.log('====================================');
  function upAction() {
    alert('经济基础受下层建筑影响')
  }
  function downAction() {
    alert('下层建筑受经济基础支配')
  }
  function renderFunction() {
    alert('渲染时触发')
  }
  return (
    <>
      {/* 16.补充 */}
      {/* <div onClick={renderFunction()}>渲染时触发而不是点击</div> */}
      {/* 12.添加事件处理函数 */}
      <button onClick={() => alert(msg)}>今天天气</button>
      {/* 13.事件传播 */}
      <div onClick={() => upAction()}>
        上层建筑
        <button onClick={(e) => {
          // 14.阻止事件冒泡
          e.stopPropagation()
          // 15.阻止默认事件
          e.preventDefault()
          downAction()
        }}>基础设施</button>
      </div>
    </>
  )
}