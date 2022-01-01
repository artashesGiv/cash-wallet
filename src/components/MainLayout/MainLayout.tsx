import {Col, Layout, Menu, Row} from 'antd'
import {
   UserOutlined,
   LaptopOutlined,
   NotificationOutlined,
   BookTwoTone,
   DollarCircleTwoTone,
} from '@ant-design/icons'
import './MainLayout.scss'
import {Routes, Route, Navigate} from 'react-router-dom'
import {WalletContainer} from '../Wallet/WalletContainer'
import {Categories} from '../Categories/Categories'
import {NavLink} from 'react-router-dom'
import React from 'react'

const {SubMenu} = Menu
const {Header, Content, Sider} = Layout

export const PATH = {
   MAIN: 'main',
   CATEGORIES: 'categories',
}

export const MainLayout = () => {
   return (
      <Layout>
         <Header>
            <div className={'logo'}/>
            <Menu theme={'dark'} mode={'horizontal'} defaultSelectedKeys={['2']}>
               <Menu.Item key="1">nav 1</Menu.Item>
               <Menu.Item key="2">nav 2</Menu.Item>
               <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
         </Header>
         <Layout>
            <Sider width={200} className={'site-layout-sidebar'}>
               <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{height: '100%', borderRight: 0}}
               >
                  <Menu.Item key="main" icon={<DollarCircleTwoTone/>}><NavLink
                     to={PATH.MAIN}>Главная</NavLink></Menu.Item>
                  <Menu.Item key="category" icon={<BookTwoTone/>}><NavLink
                     to={PATH.CATEGORIES}>Категории</NavLink></Menu.Item>
                  <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                     <Menu.Item key="1">option1</Menu.Item>
                     <Menu.Item key="2">option2</Menu.Item>
                     <Menu.Item key="3">option3</Menu.Item>
                     <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
                     <Menu.Item key="5">option5</Menu.Item>
                     <Menu.Item key="6">option6</Menu.Item>
                     <Menu.Item key="7">option7</Menu.Item>
                     <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
                     <Menu.Item key="9">option9</Menu.Item>
                     <Menu.Item key="10">option10</Menu.Item>
                     <Menu.Item key="11">option11</Menu.Item>
                     <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
               </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
               <Content className={'site-layout-background'}>
                  <Row align={'middle'}>
                     <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 6}}>
                        <Routes>
                           <Route path={'/'} element={<Navigate replace to={PATH.MAIN}/>}/>
                           <Route path={PATH.MAIN} element={<WalletContainer/>}/>
                           <Route path={PATH.CATEGORIES} element={<Categories/>}/>
                        </Routes>
                     </Col>
                  </Row>
               </Content>
            </Layout>
         </Layout>
      </Layout>
   )
}