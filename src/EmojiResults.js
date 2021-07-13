import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

export default class EmojiResults extends PureComponent {
  // propTypes是对数据类型进行校验,官方文档
  // https://react.docschina.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    emojiData: PropTypes.array
  };

  // 生命周期函数
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  // 在这里使用当前组件的props的emojiData中去接收App组件的数据
  // 同时将拿到的数据继续传递给【子组件】EmojiResultRow
  render() {
    return (
      <div className="component-emoji-results">
        // 
        {this.props.emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
    );
  }
}
