import React from 'react'
import {PieChart} from '@opd/g2plot-react'
import {operationItemType} from '../../../../store/Wallet/walletReducer'

type MainPieChartPropsType = {
   story: operationItemType[]
   categories: string[]
   total: number
}

const MainPieChartMemo = ({story, categories, total}: MainPieChartPropsType) => {

   const data = []

   for (let i = 0; i < categories.length; i++) {
      const category = {
         category: categories[i],
         percent: 0,
      }
      for (let j = 0; j < story.length; j++) {
         if (categories[i] === story[j].category) {
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
         tooltip={{formatter: (datum) => ({name: datum.category, value: datum.percent + '%'})}}
      />
   )
}

export const MainPieChart = React.memo(MainPieChartMemo)