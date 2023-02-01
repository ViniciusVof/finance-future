import { useState } from 'react';

import * as A from 'antd';
import dayjs from 'dayjs';
import data from 'mock/entries.json';

import * as Components from 'components';

// import * as S from './styles';

export function Incomes() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  return (
    <Components.Layout titleSEO="Receitas">
      <A.Card>
        <Components.EntriesFlow
          data={data}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          type="incomes"
        />
      </A.Card>
    </Components.Layout>
  );
}
