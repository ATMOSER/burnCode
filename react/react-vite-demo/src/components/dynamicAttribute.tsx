export default function DynamicAttribute() {
  const url = 'https://i.imgur.com/7vQD0fPs.jpg'
  return (
    <>
      {/* 使用动态属性 */}
      <img src={ url } alt="是个男的" className="human" />
      {/* <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="是个男的"/> */}
    </>
  )
}