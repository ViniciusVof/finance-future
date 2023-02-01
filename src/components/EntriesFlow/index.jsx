/* eslint-disable react/prop-types */
import * as I from '@ant-design/icons';
import * as A from 'antd';
import dayjs from 'dayjs';

import * as S from './styles';

export function EntriesFlow({ data, setSelectedDate, selectedDate, type }) {
  return (
    <>
      <S.HeaderNavigation>
        <A.Button
          type="secondary"
          icon={<I.LeftOutlined />}
          onClick={() => {
            setSelectedDate(selectedDate.subtract(1, 'month'));
          }}
        />
        <A.Typography.Title level={5}>
          {selectedDate.format('MMMM [de] YYYY')}
        </A.Typography.Title>
        <A.Button
          type="secondary"
          icon={<I.RightOutlined />}
          onClick={() => {
            setSelectedDate(selectedDate.add(1, 'month'));
          }}
        />
      </S.HeaderNavigation>

      <A.List
        itemLayout="horizontal"
        dataSource={data
          .filter(
            item =>
              dayjs(item.entrieDate, 'DD/MM/YYYY').format('MM/YYYY') ===
              dayjs(selectedDate, 'DD/MM/YYYY').format('MM/YYYY')
          )
          .filter(item => item.type === type)}
        renderItem={item => (
          <A.List.Item
            actions={[
              <A.Button
                type="secondary"
                icon={item.realize ? <I.LikeOutlined /> : <I.LikeFilled />}
                // onClick={() => {
                //   setPaid(!paid);
                // }}
              />,
            ]}
          >
            <S.WrapperItemList>
              <S.Indicator type={item.type} />
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.WrapperOtherItems>
                <S.ItemCategory>{item.category}</S.ItemCategory>
                <S.ItemAmount>
                  {item.amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                  <S.ItemAccount>em {item.account}</S.ItemAccount>
                </S.ItemAmount>
              </S.WrapperOtherItems>
            </S.WrapperItemList>
          </A.List.Item>
        )}
      />
    </>
  );
}
