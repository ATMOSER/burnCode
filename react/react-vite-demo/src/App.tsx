import './App.css'
import DynamicAttribute from './components/dynamicAttribute';
import MyFirst from './components/myFirst';/* 默认导入 */
import { MyFirst2 } from './components/myFirst';/* 具名导入 */

function App() {
  return (
    <>{/* 5.react必须有一个根组件, 且可以为空(Fragment), 确保不会添加额外的子节点 */}
      {/* <MyFirst></MyFirst> */}
      {/* 3.使用组件*/}
      {/* <section></section> */}
      {/* 4.普通html开头字母小写 */}
      {/* <MyFirst /> */}
      {/* 组件开头字母大写 */}
      <DynamicAttribute />
    </>
  )
}

export default App
