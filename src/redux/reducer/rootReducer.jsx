import {combineReducers} from 'redux';


import BaiTapDatVeReducer from './BaiTapDatVeReducer';
const rootReducer = combineReducers({ //store tổng của ứng dụng
    BaiTapDatVeReducer//state bài tập đặt vé
})

export default rootReducer;