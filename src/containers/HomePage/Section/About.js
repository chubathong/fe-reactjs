import React, { Component } from 'react';
import { connect } from 'react-redux';
class About extends Component {
    render() {
        return (
            <>
                <div className='section-share section-about'>
                    <div className='section-about-header'>
                        Truyền thông nói về Healthy Care
                    </div>
                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe width="100%" height="400px"
                                src="https://www.youtube.com/embed/6acS2vOxmRI?si=o-l4xpPnPqM5LUNn"
                                title="MANCHESTER UNITED - TOTTENHAM | RONALDO - HATTRICK KINH ĐIỂN TẠI OLD TRAFFORD | NGOẠI HẠNG ANH 21/22"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className='content-right'>
                            <p>Healthy Care được thành lập vào năm 2006 và hiện là một trong những thương hiệu chăm sóc sức khỏe tự nhiên hàng đầu của Úc với cơ sở sản xuất hiện đại nằm giữa hai Công viên Quốc gia độc đáo nhất của Úc trên những bãi biển mang tính biểu tượng phía Bắc.</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
