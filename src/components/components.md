# 组件化

## 组件分类
1、容器组件 VS 展示组件
基本原则:容器组件负责数据获取，展示组件负责根据props显示信息

2、函数组件 VS 类组件
函数类型组件 -适合简单渲染，不涉及生命周期； hook也可以啦（带生命周期）
类组件 可以带完整的生命周期

3、PureComponent
定制了shouldComponentUpdate后的Component(浅比较)
使用时注意，要么传值类型的，如果引用类型的话指针地址不能变。

4、React.memo
React v16.6.0 之后的版本，可以使用 React.memo 让函数式的组件也有PureComponent的功能

5、高阶组件
在React里就有了HOC(Higher-Order Components)的概念 高阶组件也是一个组件，但是他返回另外一个组件，产生新的组件可以对属性进行包装，甚至重写部分生命周期

6、高阶组件可以链式调用
高阶组件可以链式调用

7、高阶组件装饰器写法
ES7装饰器可用于简化高阶组件写法
a、安装 npm install --save-dev babel-plugin-transform-decorators-legacy
b、更改 config-overrides.js 文件
config = injectBabelPlugin(
    ['@babel/plugin-proposal-decorators', { "legacy": true }],
    config,
)

8、Hook组件
Hook是React16.8一个新增项，它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
useState、useEffect(<==> componentDidMount、componentDidUpdate、componentWillUnmount)、useContext、useReducer、useCallback、useMemo、useRef


## 组件通讯
Context
在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。


