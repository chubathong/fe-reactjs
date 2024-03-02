import React, { Component } from 'react';
import { connect } from 'react-redux';
class HomeFooter extends Component {
    render() {
        return (
            <>
                <div className='home-footer'>
                    <p>&copy; Tìm hiểu thêm về Healthy Care <a target='_blank' rel="noreferrer" href='https://healthycare.com.au/'>&#8594; Tại đây &#8592;</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
