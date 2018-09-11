import React, {Component} from "react";
import ReactDOM from "react-dom";

import { areaData } from "picker-china-area-data";

import "@/assets/styles/app.scss";

import Picker from "../src/Picker";
// import Picker from "../lib/Picker";

const date = [
    [{"name":"1","value":"1"},{"name":"2","value":"2"},{"name":"3","value":"3"},{"name":"4","value":"4"},{"name":"5","value":"5"},{"name":"6","value":"6"},{"name":"7","value":"7"},{"name":"8","value":"8"},{"name":"9","value":"9"},{"name":"10","value":"10"},{"name":"11","value":"11"},{"name":"12","value":"12"},{"name":"13","value":"13"},{"name":"14","value":"14"},{"name":"15","value":"15"},{"name":"16","value":"16"},{"name":"17","value":"17"},{"name":"18","value":"18"},{"name":"19","value":"19"},{"name":"20","value":"20"},{"name":"21","value":"21"},{"name":"22","value":"22"},{"name":"23","value":"23"},{"name":"24","value":"24"}],
    [{"name":"1","value":"1"},{"name":"2","value":"2"},{"name":"3","value":"3"},{"name":"4","value":"4"},{"name":"5","value":"5"},{"name":"6","value":"6"},{"name":"7","value":"7"},{"name":"8","value":"8"},{"name":"9","value":"9"},{"name":"10","value":"10"},{"name":"11","value":"11"},{"name":"12","value":"12"},{"name":"13","value":"13"},{"name":"14","value":"14"},{"name":"15","value":"15"},{"name":"16","value":"16"},{"name":"17","value":"17"},{"name":"18","value":"18"},{"name":"19","value":"19"},{"name":"20","value":"20"},{"name":"21","value":"21"},{"name":"22","value":"22"},{"name":"23","value":"23"},{"name":"24","value":"24"},{"name":"25","value":"25"},{"name":"26","value":"26"},{"name":"27","value":"27"},{"name":"28","value":"28"},{"name":"29","value":"29"},{"name":"30","value":"30"},{"name":"31","value":"31"},{"name":"32","value":"32"},{"name":"33","value":"33"},{"name":"34","value":"34"},{"name":"35","value":"35"},{"name":"36","value":"36"},{"name":"37","value":"37"},{"name":"38","value":"38"},{"name":"39","value":"39"},{"name":"40","value":"40"},{"name":"41","value":"41"},{"name":"42","value":"42"},{"name":"43","value":"43"},{"name":"44","value":"44"},{"name":"45","value":"45"},{"name":"46","value":"46"},{"name":"47","value":"47"},{"name":"48","value":"48"},{"name":"49","value":"49"},{"name":"50","value":"50"},{"name":"51","value":"51"},{"name":"52","value":"52"},{"name":"53","value":"53"},{"name":"54","value":"54"},{"name":"55","value":"55"},{"name":"56","value":"56"},{"name":"57","value":"57"},{"name":"58","value":"58"},{"name":"59","value":"59"},{"name":"60","value":"60"}],
    [{"name":"1","value":"1"},{"name":"2","value":"2"},{"name":"3","value":"3"},{"name":"4","value":"4"},{"name":"5","value":"5"},{"name":"6","value":"6"},{"name":"7","value":"7"},{"name":"8","value":"8"},{"name":"9","value":"9"},{"name":"10","value":"10"},{"name":"11","value":"11"},{"name":"12","value":"12"},{"name":"13","value":"13"},{"name":"14","value":"14"},{"name":"15","value":"15"},{"name":"16","value":"16"},{"name":"17","value":"17"},{"name":"18","value":"18"},{"name":"19","value":"19"},{"name":"20","value":"20"},{"name":"21","value":"21"},{"name":"22","value":"22"},{"name":"23","value":"23"},{"name":"24","value":"24"},{"name":"25","value":"25"},{"name":"26","value":"26"},{"name":"27","value":"27"},{"name":"28","value":"28"},{"name":"29","value":"29"},{"name":"30","value":"30"},{"name":"31","value":"31"},{"name":"32","value":"32"},{"name":"33","value":"33"},{"name":"34","value":"34"},{"name":"35","value":"35"},{"name":"36","value":"36"},{"name":"37","value":"37"},{"name":"38","value":"38"},{"name":"39","value":"39"},{"name":"40","value":"40"},{"name":"41","value":"41"},{"name":"42","value":"42"},{"name":"43","value":"43"},{"name":"44","value":"44"},{"name":"45","value":"45"},{"name":"46","value":"46"},{"name":"47","value":"47"},{"name":"48","value":"48"},{"name":"49","value":"49"},{"name":"50","value":"50"},{"name":"51","value":"51"},{"name":"52","value":"52"},{"name":"53","value":"53"},{"name":"54","value":"54"},{"name":"55","value":"55"},{"name":"56","value":"56"},{"name":"57","value":"57"},{"name":"58","value":"58"},{"name":"59","value":"59"},{"name":"60","value":"60"}]
]

class App extends Component {

    state = {
        visible: true,
    };

    /**
     * Picker值修后的回调函数
     * @param {Array} val 修改后的值
     */
    valChange = val => {
        console.log(val); // 
    };

    togglePicker = visible => {
        this.setState({
            visible
        });
    };

    render() {
        let { visible } = this.state;

        return (
            [
                <Picker visible={visible} title="省市区三级联动" cascader defaultValue={[0, 0, 1]} slides={areaData} confirm={this.valChange} cancel={e => this.togglePicker(false)} key={1} />,
                <Picker visible={!visible} title={<span style={{color: "#004DBB"}}>无联动时间选择</span>} defaultValue={["21", "23", "20"]} slides={date} confirm={this.valChange} cancel={e => this.togglePicker(true)} key={2} />
            ]
        );
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));