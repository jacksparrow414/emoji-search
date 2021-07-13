import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

// export default可以将定义的 class 导出,在其他地方通过import使用
export default class App extends PureComponent {
  // 类的构造函数, 什么时候需要构造函数?
  // https://react.docschina.org/docs/state-and-lifecycle.html
  constructor(props) {
    super(props);
    // 在构造函数中设置state的初始值
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };
  // 一个React组件必须定义render()函数
  // 【组件】可以将state作为props向下传递到【子组件】中,
  // 例如这里的将App组件的state的filteredEmoji传递给<EmojiResults>组件中
  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
