export default function ListRendering() {
  const list = [
    {
      id: 1,
      name: '歪歪',
    },
    {
      id: 2,
      name: '绿绿',
    }
  ]
  return (
    <>
      <ul>
        {
          list.map(item => {
            return (
              <li key={item.id}>{item.name}</li>
            )
          })
        }
      </ul>
    </>
  )
}