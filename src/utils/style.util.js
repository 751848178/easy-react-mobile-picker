
const basePx = 75; // parseFloat(document.querySelector("html").style.getPropertyValue("font-size"));
const scalePx = parseFloat(document.querySelector("html").style.getPropertyValue("font-size"));

/**
 * 获取开发像素值对应的rem值
 * @param {number} px 像素值
 */
const px2rem = (px) => {
    if (typeof px !== "number") {
        px = 0;
    }
    return (px / basePx).toFixed(3) + "rem";
};

/**
 * 获取开发像素值在当前手机缩放对应的像素值
 * @param {number} px 像素值
 */
const getCurrZoomPx = (px) => {
    if (typeof px !== "number") {
        px = 0;
    }
    return (scalePx / 75 * px).toFixed(3);
};

export {
    px2rem,
    getCurrZoomPx,
};

export default {
    px2rem,
    getCurrZoomPx,
};
