import { createElement } from 'preact';
export const Heading = ({ children, headingStyle, headingType, }) => {
    return createElement(headingType, {
        className: headingStyle,
    }, children);
};
