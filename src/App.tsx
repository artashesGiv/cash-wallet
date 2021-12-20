import React from 'react'
import {Wallet} from './components/Wallet/Wallet'
import {Col, Row} from 'antd'

export const App = () => {
   return (
      <Row align={'middle'}>
         <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 6}}>
            <Wallet/>
         </Col>
      </Row>
   )
}
