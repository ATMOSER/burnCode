export default function PassData2(param: {name: string, age: string}) {
  const { name, age } = param
  return (
    <>
      <ul>
        <li>name:{ name }</li>
        <li>age:{ age }</li>
      </ul>
    </>
  )
}