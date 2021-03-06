import React, {PureComponent} from "react";

import PickerColumn from "./PickerColumn";

import "../assets/styles/pickerView.scss";

export default class PickerView extends PureComponent {

    state = {
        // dummy slides data
        slidesVals: [],
        convertSlides: [],
        indexs: [],
    };

    componentDidMount() {
        this.slidesConvert(this.props.slides);
    };

    /**
     * slides处理函数，把[{name:"name", value: "value"}]转换为多维数组
     */
    slidesHandle = (slides) => {
        if ((slides || []).length < 1) {
            return {
                slides: [],
                values: [],
                changed: false,
            };
        }
        return {
            slides,
            values: slides.map(slide => slide.value),
        };
    };

    // 转换slides
    slidesConvert = (slides) => {
        let { slides: convertSlides, values: slidesVals } = this.slidesHandle(slides);
        this.setState({ convertSlides });
        this.slideValChange(slidesVals);
        this.setDefaultSelected(slidesVals, convertSlides);
    };

    // 获取slide修改事件
    getSlideChange = index => slide => this.slideChange(slide, index);

    // slide修改事件
    slideChange = (slide, index) => {
        let { convertSlides, slidesVals } = this.state;
        slidesVals[index] = slide.value; // 修改当前列的值
        this.slideValChange(slidesVals);
        return convertSlides;
    };

    // slide值修改事件
    slideValChange = (slidesVals) => {
        this.setState({
            slidesVals,
        });
        this.props.onChange(slidesVals);
    };

    // 设置默认值并且返回对应的下标
    setDefaultSelected = (values, convertSlides) => {
        let { defaultValue } = this.props;
        if (!defaultValue || (convertSlides || []).length === 0) return;
        let indexs = defaultValue.map((val, index) => {
            if (!val) {
                return 0;
            }
            values[index] = val;
            let currIndex = convertSlides[index].findIndex(slide => slide.value === val); // 获取值对应的下标
            currIndex = currIndex === -1 ? 0 : currIndex;
            return currIndex;
        });
        this.setState({
            slidesVals: values,
            indexs
        });
    };

    render() {
        let { className } = this.props;
        let { convertSlides, indexs } = this.state;

        let scale = 100 / convertSlides.length + "%";

        return (
            <div className={className} styleName="picker-view">
                {
                    convertSlides.map((slide, index) => <PickerColumn slides={slide} initIndex={indexs[index]} style={{width: scale}} colIndex={index} slideChange={this.getSlideChange(index)} key={`pickerColumn_${index}`} />)
                }
            </div>
        );
    }
}
