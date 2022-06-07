import React from 'react';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import { SeriesCollectionDirective } from '@syncfusion/ej2-react-charts';
import { SeriesDirective } from '@syncfusion/ej2-react-charts';
import { Inject } from '@syncfusion/ej2-react-charts';
import { Legend } from '@syncfusion/ej2-react-charts';
import { Category } from '@syncfusion/ej2-react-charts';
import { StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries } from '../../data/dummy';
import { stackedPrimaryXAxis } from '../../data/dummy';
import { stackedPrimaryYAxis } from '../../data/dummy';


const Stacked = ({ width, height }) => {
  return (
    <ChartComponent width={width} height={height} id='charts' primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis}
     chartArea={{ border: {width: 0} }} tooltip={{ enable: true }} legendSettings={{ background: 'white' }}>
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
    
  )
}

export default Stacked