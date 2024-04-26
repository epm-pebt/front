import { forwardRef } from 'react';
// eslint-disable-next-line react/display-name
const SvgrMock = forwardRef((props, ref) => <span {...props} ref={ref} />);

export const ReactComponent = SvgrMock;
export default SvgrMock;
