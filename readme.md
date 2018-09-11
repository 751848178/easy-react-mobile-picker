# 类似IOS样式的Picker组件

## 安装

    npm install easy-react-mobile-picker -S

## 依赖

    swiper v4.3.5

    使用时需要在html中引入<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/css/swiper.min.css">

## 代码仓库

[easy-react-mobile-picker](https://www.npmjs.com/package/easy-react-mobile-picker "类似IOS样式的Picker组件")

## 使用

    import Picker from "easy-react-mobile-picker";
    
    <Picker visible={visible} cascader slides={areaData} confirm={this.valChange} cancel={e => this.togglePicker(false)} />
    <Picker visible={!visible} slides={date} confirm={this.valChange} cancel={e => this.togglePicker(true)} />
    

## Props
| Property name | Type | Default | Description |
---|:--:|:--:|---
| visible | Boolean | false | 组件是否可见 |
| cascader | Boolean | false | 是否启用多级联动 |
| slides | Array | N/A | Picker组件值数组 |
| confirm | Function | N/A | 确认按钮点击事件 confirm={val => console.log("当前picker的值：", val)} |
| cancel | Function | N/A | 取消按钮点击事件（需要把visible指定的变量修改为false） cancel={e => this.setState({ visible: false })} |
| title | String/ReactComponent | N/A | Picker组件标题（支持react组件） title={<span style={{color: "#004DBB"}}>无联动时间选择</span>} or title={"标题啊"} |
| defaultValue | Array | N/A | 默认值  默认值为数组，分别对应第一列到最后一列需要默认选中的值，默认值对应slide中的vlaue字段的值 defaultValue={[0, 2, 1]} |
| className | String | N/A | 自定义class样式 |

### Props附加描述
    
    /* 数据结构 */
    let slide = {
        "name": "name", // picker组件展示文本
        "value": "value", // picker组件实际值
    };
    
    let slides = [
        [slide, ...],
        [slide, ...],
        ...
    ];
    /* End 数据结构 */


    /* 多级联动数据结构 */
    let slide = {
        "name": "name", // picker组件展示文本
        "value": "value", // picker组件实际值
    };
    
    let slides = {"name": "name", "value": "value", "children": [slide, ...]};
    /* End 多级联动数据结构 */

## demo

    /example/main.js

## 额外

省市区级联数据可以配套使用 [picker-china-area-data](https://www.npmjs.com/package/picker-china-area-data "适用于picker组件的中国省市区级联数据")

    import { areaData } from "picker-china-area-data";

    <Picker visible={true} cascader slides={areaData} confirm={this.valChange} cancel={e => this.togglePicker(false)} />


