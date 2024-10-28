import { useState } from "react";
let nextId = 0
export default function StateHookChangeArr() {
  const [name, setName] = useState('')
  const [myList, setMyList] = useState([])
  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        console.log('====================================');
        console.log(nextId);
        console.log('====================================');
        {/* 20.修改数组对象 */}
        {/* 21.添加元素 */}
        setMyList(
          [...myList, { id: nextId++, name: name }]
        )
      }}>添加</button>
      <div>
        <ul>
          {
            myList.map(item => (
              <li key={item.id}>
                { item.name }
                <button onClick={() => {
                  // 22.删除元素
                  setMyList(myList.filter(a => a.id !== item.id))
                }}>删除--{item.id}</button>
              </li>
          ))}
        </ul>
      </div>
    </>
  )
}
