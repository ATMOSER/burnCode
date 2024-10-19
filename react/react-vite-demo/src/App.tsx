import './App.css'
import ConditionalRendering from './components/conditionalRendering';
import DynamicAttribute from './components/dynamicAttribute';
import MyFirst from './components/myFirst';/* 默认导入 */
import { MyFirst2 } from './components/myFirst';/* 具名导入 */
import PassData from './components/passData';
import PassData2 from './components/passData2';

function App() {
  const params = {name: 'xcx', age: "22"}
  return (
    <>{/* 5.react必须有一个根组件, 且可以为空(Fragment), 确保不会添加额外的子节点 */}
      {/* <MyFirst></MyFirst> */}
      {/* 3.使用组件*/}
      {/* <section></section> */}
      {/* 4.普通html开头字母小写 */}
      {/* <MyFirst /> */}
      {/* 组件开头字母大写 */}
      {/* <DynamicAttribute /> */}
      {/*  9.传递数据 -- 注意不能直接修改props传递的数据*/}
      {/* <PassData para/> */}
      {/* <PassData receive={'数据'} /> */}
      {/* 10.展开语法中传递数据 */}
      {/* <PassData2 {...params}></PassData2> */}
      {/* 11. 条件渲染*/}
      <ConditionalRendering age={10} today={7} hasMsg={ 'yes' } />
    </>
  )
}

export default App
