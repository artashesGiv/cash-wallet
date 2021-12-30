import React from 'react'
import {Col, Row} from 'antd'
import {WalletContainer} from './components/Wallet/WalletContainer'

export const App = () => {
   return (
      <Row align={'middle'}>
         <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 6}}>
            <WalletContainer/>
         </Col>
      </Row>
   )
}
