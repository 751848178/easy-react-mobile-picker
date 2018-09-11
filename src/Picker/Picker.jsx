import React, {Component} from "react";

import PickerView from "./PickerView";
import CascaderPicker from "./CascaderPicker";
import PickerBar from "./PickerBar";

import CSSModules from "react-css-modules";
import styles from "@/assets/styles/picker.scss";

@CSSModules(styles, {
    allowMultiple: true
})
export default class Picker extends Component {

    state = {
        value: [],
    };

    // picker修改事件
    onChange = value => this.setState({ value });

    confirm = e => {
        this.props.confirm(this.state.value);
    };

    cancel = e => {
        e.stopPropagation();
        this.props.cancel();
    };

    render() {
        let { className, title, slides, visible, defaultValue, cascader } = this.props;

        let pickerView = "";

        // 判断是否是级联选择器
        if(cascader) {
            pickerView = <CascaderPicker slides={slides} defaultValue={defaultValue} onChange={this.onChange}/>;
        } else {
            pickerView = <PickerView slides={slides} defaultValue={defaultValue} onChange={this.onChange}/>;
        }
        return (
            <div className={className} styleName={`picker ${visible ? "" : "hide"}`}>
                <div styleName="mask" onClick={e => this.cancel(e)}/>
                <PickerBar title={title} confirm={this.confirm} cancel={e => this.cancel(e)} />
                { pickerView }
            </div>
        );
    }
}
