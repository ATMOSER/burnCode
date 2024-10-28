import { useState } from "react";
let nextId = 0
export default function StateHookChangeArr() {
  const [name, setName] = useState('')
  const [myList, setMyList] = useState([])

  function handleIncreament(index: number) {
    // @ts-ignore
    setMyList(myList.map((c, i ) =>
        i === index ? { id: c.id, name: c.name, counter: c.counter + 1}
          : { id: c.id, name: c.name, counter: c.counter}
    ))
  }
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
            {/* 20.修改数组对象 */
            }
            {/* 21.添加元素 */
            }
            setMyList(
                [...myList, {id: nextId++, name: name, counter: 0}]
            )
          }}>添加
          </button>
          {/* 23.数组转换 */}
          <button onClick={() => {
            setMyList(myList.map(i => ({id: i.id, name: i.name + '我在你后面'})))
          }}>转换
          </button>
          <div>
            <ul>
              {
                myList.map(item => (
                    <li key={item.id}>
                      {item.counter}
                      <button onClick={() => {
                        // 22.删除元素
                        setMyList(myList.filter(a => a.id !== item.id))
                      }}>删除--{item.id}</button>
                      {/*    23.替换数组元素 */}
                      <button onClick={()=> {
                        handleIncreament(item.id)
                      }}>+1</button>
                    </li>
                ))
              }
            </ul>
          </div>
        </>
    )
}
