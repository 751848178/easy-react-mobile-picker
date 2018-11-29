import React, { PureComponent } from "react";


import "../assets/styles/pickerColumn.scss";
import { Swiper } from "swiper/dist/js/swiper.esm";
// import Swiper from "swiper/src/components/core/core-class.js";

import { getCurrZoomPx } from "@/utils/style.util";


export default class PickerColumn extends PureComponent {

    constructor(props) {
        super();
        this.state = {
            // dummy slides data
            slides: props.slides,
            pickerId: `picker-container${new Date().valueOf() + props.colIndex}`,
            activeIndex: 0,
        };
    };

    componentDidMount() {
        let { slideChange, initIndex } = this.props;
        let pickerId = `.${this.state.pickerId}`;
        let self = this;
        this.setState({
            activeIndex: initIndex || 0
        });
        const swiper = new Swiper(pickerId, {
            observer: true,
            direction: "vertical",
            height: getCurrZoomPx(70),
            setWrapperSize: true,
            watchSlidesProgress: true,
            initialSlide: initIndex,
            on: {
                sliderMove: function () {
                    self.setState({
                        activeIndex: this.activeIndex
                    });
                },
                slideChange: function () {
                    // console.log(self.state.slides, self.props.slides);
                    slideChange(self.state.slides[this.activeIndex], this.activeIndex);
                },
            },
        });
    };

    componentWillReceiveProps (props) {
        let { slides } = props;
        this.setState({
            slides
        });
        // if (this.props.pickIndex === 1) console.log(this.state.slides, this.props.slides);
    };

    render() {
        let { pickerId, activeIndex, slides } = this.state;
        let { className, style } = this.props;
        slides = slides || [];
        className = `swiper-container ${pickerId} ${className || ""}`;
        // console.log(slides);
        return (
            <div className={className} styleName="picker-column" style={style}>
                <div className="swiper-wrapper">
                    {
                        slides.map((slide, index) => {
                            let itemStyle = "";
                            switch (index - activeIndex) {
                            case 0:
                                itemStyle = "active";
                                break;
                            case -1:
                                itemStyle = "prev";
                                break;
                            case 1:
                                itemStyle = "next";
                                break;
                            case -2:
                                itemStyle = "prev-plus";
                                break;
                            case 2:
                                itemStyle = "next-plus";
                                break;
                            }
                            return (
                                <div className="swiper-slide" styleName={`picker-item ${itemStyle}`} key={index}>{slide.name}</div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
