'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function createStore(getValueFunc) {
  if (typeof getValueFunc !== 'function' && process.env.NODE_ENV !== 'production') console.error('getValueFunc is a function');
  var StoreContext = /*#__PURE__*/React.createContext(getValueFunc());

  // 单例且store value只在初始化值赋值一次 可以直接用
  var useStore = function useStore() {
    return React.useContext(StoreContext);
  };

  // 一个模块内如果有多实例store存在 或者store value不只在初始化赋值时改变 那根组件需要引入StoreProvider
  var StoreProvider = function StoreProvider(props) {
    return /*#__PURE__*/React__default["default"].createElement(StoreContext.Provider, {
      value: props.hasOwnProperty('value') ? props.value : getValueFunc()
    }, props.children);
  };
  return {
    useStore: useStore,
    Provider: StoreProvider
  };
}

module.exports = createStore;
