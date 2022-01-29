import React, {useState} from 'react'
import s from './Categories.module.scss'
import {CategoryInput} from './CategoryInput/CategoryInput'
import {CategoriesPropsType} from './CategoriesContainer'
import {PlusOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import {EditableSpan} from '../UI/EditableSpan/EditableSpan'
import {EditableColor} from '../UI/EditableColor/EditableColor'

export const Categories = ({addCategory, changeCategoryName, changeCategoryColor, state}: CategoriesPropsType) => {

   const [isModalVisible, setIsModalVisible] = useState(false)
   const [add, setAdd] = useState(false)

   const showModalExpenses = () => {
      setAdd(false)
      setIsModalVisible(true)
   }

   const showModalIncome = () => {
      setAdd(true)
      setIsModalVisible(true)
   }

   const addCategoryHandler = (categoryName: string, color: string) => {
      addCategory(categoryName, add, color)
   }

   const editingCategory = (id: number, name: string, add: boolean) => {
      changeCategoryName(id, name, add)
   }

   const editingColor = (id: number, color: string, add: boolean) => {
      changeCategoryColor(id, color, add)
   }

   return (
      <div className={s.wrapper}>

         <div className={s.income}>
            <h2 style={{fontWeight: 'bold'}}>Доходы</h2>
            {state.categoryIncome
               .map(c =>
                  <div className={s.categoryItem} key={c.name}>
                     <EditableSpan id={c.id} title={c.name} setNewTitle={editingCategory} add={true} color={c.color}/>
                     <EditableColor id={c.id} setNewColor={editingColor} name={c.name} add={true} color={c.color}/>
                  </div>,
               )}
            <Button onClick={showModalIncome} icon={<PlusOutlined/>} type={'primary'}/>
         </div>

         <CategoryInput
            visible={isModalVisible}
            setVisible={setIsModalVisible}
            addCategory={addCategoryHandler}
         />

         <div className={s.expenses}>
            <h2 style={{fontWeight: 'bold'}}>Расходы</h2>
            {state.categoryExpenses
               .map(c =>
                  <div className={s.categoryItem} key={c.name}>
                     <EditableSpan id={c.id} title={c.name} setNewTitle={editingCategory} add={false} color={c.color}/>
                     <EditableColor id={c.id} setNewColor={editingColor} name={c.name} add={false} color={c.color}/>
                  </div>,
               )}
            <Button onClick={showModalExpenses} icon={<PlusOutlined/>} type={'primary'}/>
         </div>

      </div>
   )
}
