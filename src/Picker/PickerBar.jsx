import React, {PureComponent} from "react";

import "../assets/styles/pickerBar.scss";

export default class PickerBar extends PureComponent {

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
