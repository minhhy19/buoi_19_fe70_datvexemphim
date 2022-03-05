import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType";

const stateDefault = {
    danhSachGheDangDat: [
        
    ]
}

const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) { // Khi ng dùng click mà có trong mảng thì remove đi
                danhSachGheDangDatUpdate.splice(index, 1);
            } else { // Khi người dùng click mà chưa có trong mảng thì push vào mảng
                danhSachGheDangDatUpdate = [...danhSachGheDangDatUpdate, action.ghe];
            }
            // Cập nhật và render lại state
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) { // Khi ng dùng click mà có trong mảng thì remove đi
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            // Cập nhật và render lại state
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        default: return {...state}
    }
}

export default BaiTapDatVeReducer;