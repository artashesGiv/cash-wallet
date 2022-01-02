import React from 'react'
import './MainLayout.scss'

import {Col, Layout, Menu, Row} from 'antd'
import {BookTwoTone, DollarCircleTwoTone} from '@ant-design/icons'
import {Routes, Route, Navigate} from 'react-router-dom'
import {WalletContainer} from '../Wallet/WalletContainer'
import {NavLink} from 'react-router-dom'
import {CategoriesContainer} from '../Categories/CategoriesContainer'

const {Header, Content, Sider} = Layout

const PATH = {
   MAIN: 'main',
   CATEGORIES: 'categories',
}

export const MainLayout = () => {
   return (
      <Layout>
         <Header>
            <div className={'logo'}/>
            <Menu theme={'dark'} mode={'horizontal'} defaultSelectedKeys={['2']}/>
         </Header>
         <Layout>
            <Sider width={200} className={'site-layout-sidebar'}>
               <Menu
                  mode="inline"
                  defaultSelectedKeys={['main']}
                  defaultOpenKeys={['main']}
                  style={{height: '100%', borderRight: 0}}
               >
                  <Menu.Item key="main" icon={<DollarCircleTwoTone/>}>
                     <NavLink to={PATH.MAIN}>Главная</NavLink>
                  </Menu.Item>
                  <Menu.Item key="category" icon={<BookTwoTone/>}>
                     <NavLink to={PATH.CATEGORIES}>Категории</NavLink>
                  </Menu.Item>
               </Menu>
            </Sider>
            <Layout>
               <Content className={'site-layout-background'}>
                  <Row align={'middle'}>
                     <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 6}} lg={{span: 22, offset: 1}}>
                        <Routes>
                           <Route path={'/'} element={<Navigate replace to={PATH.MAIN}/>}/>
                           <Route path={PATH.MAIN} element={<WalletContainer/>}/>
                           <Route path={PATH.CATEGORIES} element={<CategoriesContainer/>}/>
                        </Routes>
                     </Col>
                  </Row>
               </Content>
            </Layout>
         </Layout>
      </Layout>
   )
}