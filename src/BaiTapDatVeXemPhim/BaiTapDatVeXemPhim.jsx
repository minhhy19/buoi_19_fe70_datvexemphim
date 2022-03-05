import React, { Component } from 'react'
import './BaiTapDatVeXemPhim.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGhe from '../Data/danhSachGhe.json';
import HangGhe from './HangGhe';


export default class BaiTapDatVeXemPhim extends Component {
    renderHangGhe = () => {
        return danhSachGhe.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }

  render() {
    return (
      <div className='bookingMovie' style={{position:"fixed",width:'100%',height:'100%',background:"url('./img/BaiTapDatVe/bgmovie.jpg')",backgroundSize:"100%"}}>
          <div style={{backgroundColor:'rgba(0,0,0,0.6)',position:"fixed",width:"100%",height:"100%"}} >
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8 text-center'>
                        <h1 className='text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                        <div className='mt-3 text-light' style={{fontSize:'25px'}}>Màn hình</div>
                        <div className='d-flex flex-column justify-content-center mt-1'>
                            <div className='screen'></div>
                            {this.renderHangGhe()}
                        </div>
                    </div>
                    <div className='col-4'>
                        <h1 className='text-light mt-2' style={{fontSize:"30px"}}>DANH SÁCH GHẾ BẠN CHỌN</h1>
                        <ThongTinDatGhe />
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
