import React from 'react'
import {PieChart} from '@opd/g2plot-react'
import {operationItemType} from '../../../../store/Wallet/walletReducer'
import {category} from '../../../../store/Categories/categoriesReducer'

type MainPieChartPropsType = {
   story: operationItemType[]
   categories: category[]
   total: number
}

const MainPieChartMemo = ({story, categories, total}: MainPieChartPropsType) => {

   const data = []

   for (let i = 0; i < categories.length; i++) {
      const category = {
         category: categories[i].name,
         percent: 0,
      }
      for (let j = 0; j < story.length; j++) {
         if (categories[i].name === story[j].category.name) {
            category.percent += Math.round(-story[j].change * 100 / total)
         }
      }
      data.push(category)
   }

   return (
      <PieChart
         renderer={'svg'}
         angleField={'percent'}
         colorField={'category'}
         color={({category}: any) => categories.filter(c => category === c.name)[0].color}
         data={data}
         height={300}
         innerRadius={0.65}
         statistic={{title: false, content: {content: String(total), style: {color: '#ff4d4f', fontSize: '25px'}}}}
         legend={false}
         label={{
            type: 'inner',
            offset: '-50%',
            content: '{value}%',
            style: {
               textAlign: 'center',
               fontSize: 14,
            },
         }}
         tooltip={{formatter: (datum: any) => ({name: datum.category, value: datum.percent + '%'})}}
      />
   )
}

export const MainPieChart = React.memo(MainPieChartMemo)