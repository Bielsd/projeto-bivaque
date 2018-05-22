import React, { Component } from 'react';
// CSS
import './Modal.css';

class Modal extends Component {

    render(){
        let modalCSS = 'modal-style';

        if(this.props.ativo){
            modalCSS += ' ativo';
        }

        return(
            <div>
                <div className="caixa">
                    <div onClick={this.showModal} className={modalCSS}>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;