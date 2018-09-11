import React, {Component} from "react";

import CSSModules from "react-css-modules";
import styles from "@/assets/styles/pickerBar.scss";

@CSSModules(styles, {
    allowMultiple: true
})
export default class PickerBar extends Component {

    confirm = e => {
        e.stopPropagation();
        this.props.confirm();
    };

    cancel = e => {
        this.props.cancel(e);
    };

    render() {
        let { className, title } = this.props;

        if (!title) {
            title = "";
        }
        return (
            <div className={`picker-bar ${className}`} styleName="picker-bar">
                <span styleName="cancel-btn" onClick={e => this.cancel(e)}>取消</span>
                <div styleName="picker-title">{title}</div>
                <span styleName="confirm-btn" onClick={e => this.confirm(e)}>确定</span>
            </div>
        );
    }
}
